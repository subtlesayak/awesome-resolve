import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {groupUpdates} from '../site/updates.mjs';
test('release groups retain every provider change under its own catalogue version',()=>{
 const read=p=>JSON.parse(fs.readFileSync(new URL(p,import.meta.url),'utf8'));
 const releases=read('../data/catalogue-releases.json').releases,updates=read('../data/provider-updates.json').entries;
 const groups=groupUpdates(releases,updates);
 assert.ok(groups.findIndex(r=>r.version==='v1.1')<groups.findIndex(r=>r.version==='v1.0'));
 assert.equal(groups.flatMap(r=>r.updates).length,updates.length);
 for(const group of groups)assert.ok(group.updates.every(h=>h.release===group.version));
 assert.equal(groups.find(r=>r.version==='v1.15').updates.length,4);
 assert.deepEqual(groups.find(r=>r.version==='v1.15').updates.slice(0,2).map(h=>h.name),['Fusion Studio','DaVinci Resolve / Studio']);
 assert.equal(groups.find(r=>r.version==='v1.14').updates.length,5);
 for(const page of ['index','updates','about']){const html=fs.readFileSync(new URL('../site/'+page+'.html',import.meta.url),'utf8');assert.match(html,/href="updates.html"/);assert.match(html,/href="about.html"/);assert.equal((html.match(/aria-current="page"/g)||[]).length,1);}
});

test('release Markdown keeps original product links clickable inside bold text',async()=>{
 const {inlineTokens}=await import('../site/updates.mjs');
 const url='https://www.motioncamapp.com/tools';
 assert.deepEqual(inlineTokens('**[MotionCam Tools]('+url+') — 2.0 beta.**'),[{type:'strong',children:[{type:'link',url,children:[{type:'text',text:'MotionCam Tools'}]},{type:'text',text:' — 2.0 beta.'}]}]);
 assert.deepEqual(inlineTokens('[**Tool**]('+url+')'),[{type:'link',url,children:[{type:'strong',children:[{type:'text',text:'Tool'}]}]}]);
 assert.deepEqual(inlineTokens('<script>alert(1)</script>'),[{type:'text',text:'<script>alert(1)</script>'}]);
});
