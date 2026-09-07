import {DEFAULTS,UNFILTERED,TASKS,LEVELS,filterEntries,sortEntries,relativeDate,versionText,stateFromUrl,stateToUrl,facetCounts,adaptTaskSelection,recoveryOptions} from './model.mjs?v=6';
const $=s=>document.querySelector(s), make=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const link=(text,url)=>{const a=make('a',text);try{if(new URL(url,location.href).protocol==='https:')a.href=url;}catch{}return a;};
let data,state={...DEFAULTS},limit=30,lastFocus=null;
const reqText=(e,k)=>{const r=e.requirements;if(k==='editions')return r.editions.join(' / ')||'Not established';if(k==='resolve')return r.resolve.map(v=>(v.edition?v.edition+' ':'')+(v.min===v.max?v.min:(v.min||'Any')+(v.max?'–'+v.max:'+'))).join('; ')||'Not established';if(k==='architectures')return r.architectures.join(' / ')||'Not established';return ({local:'Local workflow documented',cloud:'Cloud service',hybrid:'Local and online features',free:'Free',mixed:'Mixed options','one-time':'One-time license',subscription:'Subscription',unknown:'Not established'})[r[k]]||r[k]||'Not established';};
function notify(message){$('#notice').textContent=message;clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#notice').textContent='',4500);}
function syncUrl(){const q=stateToUrl(state);history.replaceState(null,'',location.pathname+(q?'?'+q:'')+location.hash);}
function setState(patch){
  let next={...state,...patch}, cleared=[];
  if(Object.keys(patch).length===1 && patch.task && patch.task!==state.task) {
    const adapted=adaptTaskSelection(data.entries,next);next=adapted.state;cleared=adapted.cleared;
  }
  state=next;limit=30;syncUrl();render();
  if(cleared.length)notify('Task changed. Cleared filters with no matching resources: '+cleared.map(k=>filterNames[k]).join(', ')+'.');
}
function openDialog(title){lastFocus=document.activeElement;$('#dialog-title').textContent=title;$('#dialog-body').replaceChildren();$('#detail-dialog').showModal();$('#dialog-close').focus();}
function facts(e){const dl=make('dl',undefined,'facts');const fields=[['Creator',e.creator],['Platforms',e.reference?'Reference; see resource requirements':e.platforms.join(' · ')||'Not established'],['Platform caveats',e.platformNotes],['Resolve edition',reqText(e,'editions')],['Resolve version range',reqText(e,'resolve')],['Architecture',reqText(e,'architectures')],['GPU',reqText(e,'gpu')],['Access',e.access],['Payment model',reqText(e,'pricing')],['Processing',reqText(e,'processing')],['Account',reqText(e,'account')],['Dependencies',reqText(e,'dependencies')],['Installation',reqText(e,'installation')],['Tool version',versionText(e.version)],['Product release / update',e.releaseDate?relativeDate(e.releaseDate)+' · '+e.releaseDate:'Not established'],['Repository activity',e.activityDate?relativeDate(e.activityDate)+' · '+e.activityDate:'Not applicable'],['GitHub stars',e.stars===null?'Not applicable':String(e.stars)],['Testing','No catalogue testing recorded']];for(const [k,v]of fields){dl.append(make('dt',k),make('dd',v));}if(e.recommendation){dl.lastChild.textContent=e.recommendation.tested_setup;}return dl;}
function evidenceList(e){const ul=make('ul',undefined,'evidence-list');for(const x of e.evidence){const li=make('li');li.append(make('strong',LEVELS[x.level]+' — '+x.field),make('br'),link('Source',x.source),document.createTextNode(' · checked '+x.checked_at.slice(0,10)),make('br'),document.createTextNode(x.note||''));ul.append(li);}if(!e.evidence.length)ul.append(make('li','No field-level evidence established.'));return ul;}
function details(e){openDialog(e.name);const b=$('#dialog-body');b.append(make('p',e.description),link('Open original resource ↗',e.url),facts(e),make('h3','Evidence and limitations'),evidenceList(e));if(e.unknownFields.length)b.append(make('p','Still unknown: '+e.unknownFields.join(', ')+'.','muted'));b.append(make('h3','Version history'));if(e.history.length)for(const h of e.history){const p=make('p',h.from+' → '+h.to+' · '+h.summary+' ');p.append(link('Source',h.source));b.append(p);}else b.append(make('p','No before-and-after version change has been recorded yet. The current observation is shown above.'));const issue=new URL('https://github.com/subtlesayak/awesome-resolve/issues/new');issue.searchParams.set('template','creator-confirmation.yml');issue.searchParams.set('title','Confirm or correct: '+e.name);b.append(link('Confirm or correct this listing ↗',issue.href));}
function row(e){const article=make('article',undefined,'resource'),main=make('div'),h=make('h3');h.append(link(e.name,e.url));main.append(h,make('p',e.creator,'creator'),make('p',e.description,'description'));const meta=make('div',undefined,'metadata');meta.append(make('p',e.reference?'📖 Reference':e.platforms.join(' · ')||'Platforms not established'),make('p',e.access),make('p',versionText(e.version),'version'));const highest=e.evidence.some(x=>x.level==='tested')?'tested':e.evidence.some(x=>x.level==='creator')?'creator':e.evidence.length?'documented':'unknown';const ev=make('p',LEVELS[highest],'evidence-label');ev.title='Applies to the fields in Details; not blanket compatibility approval.';meta.append(ev);if(state.edition)meta.append(make('p',e.requirements.editions.length?(state.edition==='Studio'&&!e.requirements.editions.includes('Studio')?'Studio: inferred from Free compatibility; not separately verified':'Resolve edition: '+e.requirements.editions.join(' / ')):'Assumed compatible: edition not verified','edition-status'));if(state.sort==='stars')meta.append(make('p',e.stars===null?'Stars not applicable':'⭐ '+e.stars));if(state.sort==='updated')meta.append(make('p','Release: '+relativeDate(e.releaseDate)));if(state.sort==='activity')meta.append(make('p','Repo activity: '+relativeDate(e.activityDate)));const actions=make('div',undefined,'row-actions');const button=make('button','Details','outline');button.setAttribute('aria-label','Details for '+e.name+' by '+e.creator);button.addEventListener('click',()=>details(e));actions.append(button);article.append(main,meta,actions);return article;}

const filterNames = {platform:'Operating system',edition:'Resolve edition',resolve:'Resolve version',access:'Access',processing:'Processing',evidence:'Evidence',pricing:'Payment model',architecture:'Processor architecture',q:'Search',official:'Official BMD resources',task:'Task'};
const originalOptions = new Map();

function updateFilterOptions() {
  const omitted = [];
  const taskScope = {...UNFILTERED, task:state.task, official:state.official};
  for(const select of $('#filters').querySelectorAll('select')) {
    if(!originalOptions.has(select.name)) originalOptions.set(select.name,[...select.options].map(o=>({value:o.value,label:o.textContent})));
    const options = originalOptions.get(select.name);
    const scope = select.name==='task' ? {...UNFILTERED,official:state.official} : state;
    const counts = facetCounts(data.entries,scope,select.name,options.map(o=>o.value));
    const taskCounts = facetCounts(data.entries,taskScope,select.name,options.map(o=>o.value));
    let relevant = !state.task || select.name==='task' || options.some(o=>o.value && o.value!=='unknown' && taskCounts[o.value]>0);
    if(select.name==='edition') relevant=true;
    select.parentElement.hidden = !relevant && !state[select.name];
    if(!relevant) omitted.push(filterNames[select.name]);
    for(let i=0;i<options.length;i++) {
      const {value,label} = options[i], option = select.options[i];
      option.value = value;
      option.textContent = label+' ('+counts[value]+')';
      option.hidden = !!state.task && select.name!=='task' && !!value && taskCounts[value]===0 && value!==state[select.name];
      option.disabled = !!value && counts[value]===0 && value!==state[select.name];
    }
  }
  const extra = $('.more-filters');
  extra.hidden = [...extra.querySelectorAll('label')].every(label=>label.hidden);
  $('#task-filter-note').hidden = !omitted.length;
  $('#task-filter-note').textContent = 'Not enough documented requirements for this task to offer: '+omitted.join(', ')+'.';
}

function resultAction(label, patch) {
  const button=make('button',label,'outline');
  button.type='button';
  button.addEventListener('click',()=>{setState(patch);$('#results').focus();});
  return button;
}

function renderVersionNote() {
  const note=$('#version-note');
  note.replaceChildren();
  note.hidden=true;
  if(!state.resolve) return;
  const broader=filterEntries(data.entries,{...state,resolve:''});
  const unknown=broader.filter(e=>!e.requirements.resolve.length).length;
  if(!unknown) return;
  note.hidden=false;
  note.append(make('p',unknown+' other resource'+(unknown===1?' has':'s have')+' no documented Resolve version range and '+(unknown===1?'is':'are')+' excluded. Removing this filter also includes tools documented for other versions; check Details before use.'));
  note.append(resultAction('Remove version filter ('+broader.length+' resources)',{resolve:''}));
}

function renderRecovery(empty) {
  const options=recoveryOptions(data.entries,state).filter(option=>option.key!=='resolve'||$('#version-note').hidden);
  if(!options.length) return;
  const actions=make('div',undefined,'recovery-actions');
  for(const option of options) {
    const label=option.key==='taskOnly'?'Keep task, clear other filters':option.key==='clear'?'Clear filters':option.key==='edition'?'Switch to Resolve Studio':'Remove '+filterNames[option.key]+' filter';
    actions.append(resultAction(label+' ('+option.count+' resource'+(option.count===1?'':'s')+')',option.patch));
  }
  empty.append(actions);
}

function renderFilterSummary() {
  const group = $('#active-filters');
  group.replaceChildren();
  const active = [...$('#filters').elements].filter(el => el.name && state[el.name] && !(el.name==='edition'&&state.edition==='Free'));
  $('#filter-label').textContent = 'Filters and setup' + (active.length ? ' · ' + active.length + ' active' : '');
  group.hidden = !active.length;
  for (const el of active) {
    const label = el.type === 'checkbox' ? filterNames[el.name] : el.parentElement.firstChild.textContent.trim();
    const value = el.type === 'checkbox' ? (el.name==='official'?'Hide':'Include') : originalOptions.get(el.name)?.find(o=>o.value===state[el.name])?.label || state[el.name];
    const button = make('button', label + ': ' + value + ' ×', 'filter-chip');
    button.type = 'button';
    button.setAttribute('aria-label', 'Remove ' + label + ' filter: ' + value);
    button.addEventListener('click', () => {
      const index = active.indexOf(el);
      setState({[el.name]: el.name==='edition'?'Free':''});
      const remaining = group.querySelectorAll('button');
      (remaining[Math.min(index, remaining.length - 1)] || $('#search')).focus();
    });
    group.append(button);
  }
}

function render(){if(!data)return;$('#search').value=state.q;for(const el of $('#filters').elements)if(el.name){if(el.type==='checkbox')el.checked=state[el.name]===el.value;else el.value=state[el.name]||'';}$('#sort').value=state.sort;updateFilterOptions();renderFilterSummary();renderVersionNote();$('#all-mode').setAttribute('aria-pressed',state.mode==='all');$('#tested-mode').setAttribute('aria-pressed',state.mode==='tested');const found=sortEntries(filterEntries(data.entries,state),state.sort);$('#count').textContent=found.length+' resource'+(found.length===1?'':'s')+(found.length!==data.entries.length?' · '+data.entries.length+' total':'');$('#mode-note').hidden=state.mode!=='tested';$('#mode-note').textContent='Starting points require a reviewed test report with an exact setup and limitations. Source documentation alone is not enough.';const results=$('#results');results.replaceChildren();if(!found.length){const empty=make('div',undefined,'empty');empty.append(make('h3',state.mode==='tested'?'No reviewed starting points yet.':'No documented matches for this setup.'),make('p',state.mode==='tested'?'Help build this collection by sharing a reproducible workflow and its limitations.':'A missing match may mean the requirements are unknown. Try removing a filter, or open the complete catalogue to inspect the source.'),link(state.mode==='tested'?'Share a tested workflow ↗':'Browse the full catalogue ↗',state.mode==='tested'?'https://github.com/subtlesayak/awesome-resolve/issues/new?template=testing.yml':data.catalogue));renderRecovery(empty);results.append(empty);}let group=null;for(const e of found.slice(0,limit)){const next=e.official?'Official resources':'Community tools';if(group!==next){results.append(make('h2',next,'group-title'));group=next;}results.append(row(e));}$('#more').hidden=found.length<=limit;$('#more').textContent='Show more resources ('+Math.max(0,found.length-limit)+' remaining)';}
function renderUpdates(){for(const h of data.updates){const block=make('article',undefined,'update');block.append(make('strong',h.name+' · '+h.from+' → '+h.to),make('p',h.summary));const p=make('p',undefined,'muted');p.append(document.createTextNode('Recorded in '+h.release+' on '+h.catalogue_date+' · Upstream date: '+(h.upstream_date?.slice(0,10)||'not established')+' · '),link('Upstream source',h.source));block.append(p);$('#update-list').append(block);}for(const r of data.releases){const li=make('li');li.append(link(r.version+' · '+r.date,r.url));$('#release-list').append(li);}}
async function init(){const controls=[...document.querySelectorAll('#search, .modes button, #filters select, #filters input, #clear, #share, #sort')];controls.forEach(el=>el.disabled=true);try{const r=await fetch('catalogue.json?v=2',{cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);data=await r.json();$('.brand').textContent=data.title;document.title=data.title+' — Find tools for your setup';for(const [v,t]of Object.entries(TASKS)){$('#filters [name=task]').append(new Option(t,v));}const restored=stateFromUrl(location.search);state=restored.state;for(const el of [...$('#filters').elements,$('#sort')])if(el.tagName==='SELECT'){const key=el.name||'sort';if(![...el.options].some(o=>o.value===state[key]))state[key]=DEFAULTS[key];}if(!['all','tested'].includes(state.mode))state.mode='all';$('#filter-toggle').addEventListener('click',()=>{const closed=$('#filter-controls').dataset.collapsed==='true';$('#filter-controls').dataset.collapsed=String(!closed);$('#filter-toggle').setAttribute('aria-expanded',String(closed));});$('#search').addEventListener('input',e=>setState({q:e.target.value}));$('#filters').addEventListener('submit',e=>e.preventDefault());$('#filters').addEventListener('change',e=>{if(e.target.name)setState({[e.target.name]:e.target.type==='checkbox'?(e.target.checked?e.target.value:''):e.target.value});});$('#sort').addEventListener('change',e=>setState({sort:e.target.value}));$('#clear').addEventListener('click',()=>{setState({...DEFAULTS,sort:state.sort});notify('Filters cleared.');});$('#all-mode').addEventListener('click',()=>setState({mode:'all'}));$('#tested-mode').addEventListener('click',()=>setState({mode:'tested'}));$('#more').addEventListener('click',()=>{limit+=30;render();});$('#share').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);notify('View link copied.');}catch{notify('Copy the address from your browser to share this view.');}});$('#dialog-close').addEventListener('click',()=>$('#detail-dialog').close());$('#detail-dialog').addEventListener('close',()=>lastFocus?.focus());window.addEventListener('popstate',()=>{const restored=stateFromUrl(location.search);state=restored.state;limit=30;render();});controls.forEach(el=>el.disabled=false);renderUpdates();render();}catch(error){$('#count').textContent='The catalogue could not load.';$('#results').append(make('p','Reload the page, or use the complete GitHub catalogue. This site needs an HTTP server rather than opening index.html directly.'),link('Open catalogue ↗','https://github.com/subtlesayak/awesome-resolve'));console.error(error);}}
init();
