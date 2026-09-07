export const TASKS = { captions:'Captions & dialogue', color:'Color & film looks', fusion:'Fusion & animation', workflow:'Workflow & automation', media:'Media & delivery', audio:'Audio', development:'Development', learning:'Learning & references', hardware:'Hardware', linux:'Linux setup' };
export const LEVELS = { documented:'Source documented', creator:'Creator confirmed', tested:'Community tested', unknown:'Not established' };
export const DEFAULTS = { q:'', task:'', platform:'', edition:'', resolve:'', access:'', processing:'', pricing:'', architecture:'', evidence:'', official:'', sort:'name', mode:'all' };
export function compareVersions(a,b) { const x=String(a).split('.').map(Number), y=String(b).split('.').map(Number); for(let i=0;i<Math.max(x.length,y.length);i++){const d=(x[i]||0)-(y[i]||0);if(d)return Math.sign(d);}return 0; }
export function matchesVersion(entry,version,edition) { return entry.requirements.resolve.some(r=>(!r.edition||!edition||r.edition===edition)&&(!r.min||compareVersions(version,r.min)>=0)&&(!r.max||compareVersions(version,r.max)<=0)); }
export function filterEntries(entries,state) {
 const words=(state.q||'').toLowerCase().trim().split(/\s+/).filter(Boolean);
 return entries.filter(e=>{
  if(state.official==='hide'&&e.official)return false;
  if(!words.every(w=>`${e.name} ${e.creator} ${e.description} ${e.tasks.map(t=>TASKS[t]).join(' ')} ${e.category}`.toLowerCase().includes(w)))return false;
  if(state.mode==='tested'&&!e.recommended)return false;
  if(state.task&&!e.tasks.includes(state.task))return false;
  if(state.platform&&!e.platforms.includes(state.platform))return false;
  if(state.edition&&!e.requirements.editions.includes(state.edition))return false;
  if(state.resolve&&!matchesVersion(e,state.resolve,state.edition))return false;
  if(state.architecture&&!e.requirements.architectures.includes(state.architecture))return false;
  if(state.processing&&e.requirements.processing!==state.processing)return false;
  if(state.pricing&&e.requirements.pricing!==state.pricing)return false;
  if(state.access&&e.accessGroup!==state.access)return false;
  if(state.evidence==='documented'&&!e.evidence.some(x=>x.level==='documented'))return false;
  if(state.evidence==='creator'&&!e.evidence.some(x=>x.level==='creator'))return false;
  if(state.evidence==='tested'&&!e.evidence.some(x=>x.level==='tested'))return false;
  if(state.evidence==='unknown'&&!e.unknownFields.length)return false;
  return true;
 });
}
export function sortEntries(entries,key='name') {
 const cmp=(a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}),time=x=>Number.isFinite(Date.parse(x))?Date.parse(x):0;
 return [...entries].sort((a,b)=>Number(b.official)-Number(a.official)||(key==='updated'?time(b.releaseDate)-time(a.releaseDate):key==='activity'?time(b.activityDate)-time(a.activityDate):key==='stars'?(b.stars??-1)-(a.stars??-1):key==='creator'?cmp(a.creator,b.creator):key==='type'?cmp(a.category,b.category):0)||cmp(a.name,b.name)||cmp(a.id,b.id));
}
export function relativeDate(value,now=new Date()) {if(!value||!Number.isFinite(Date.parse(value)))return 'Unknown';const days=Math.max(0,Math.floor((+now-Date.parse(value))/86400000));if(!days)return 'Today';const [n,unit]=days<7?[days,'day']:days<30?[Math.floor(days/7),'week']:days<365?[Math.floor(days/30),'month']:[Math.floor(days/365),'year'];return `${n} ${unit}${n===1?'':'s'} back`;}
export function versionText(v) {if(v.kind==='not-applicable')return 'Not applicable';if(!v.version)return 'Version unknown';if(v.kind==='commit')return 'Revision '+v.version.slice(0,12);return v.version+(v.kind==='prerelease'?' (prerelease)':'');}
export function stateFromUrl(search) {const p=new URLSearchParams(search);const s={...DEFAULTS};for(const k of Object.keys(s))if(p.has(k))s[k]=p.get(k).slice(0,250);return {state:s};}
export function stateToUrl(state) {const p=new URLSearchParams();for(const [k,v]of Object.entries(state))if(k in DEFAULTS&&v!==DEFAULTS[k]&&v)p.set(k,v);return p.toString();}
