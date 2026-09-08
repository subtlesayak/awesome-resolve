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
 assert.equal(groups.find(r=>r.version==='v1.14').updates.length,5);
 for(const page of ['index','updates','about']){const html=fs.readFileSync(new URL('../site/'+page+'.html',import.meta.url),'utf8');assert.match(html,/href="updates.html"/);assert.match(html,/href="about.html"/);assert.equal((html.match(/aria-current="page"/g)||[]).length,1);}
});
