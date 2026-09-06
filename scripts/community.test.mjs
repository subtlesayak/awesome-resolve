import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildCommunityReport} from './build-community-report.mjs';
import {validDate} from './update-evidence.mjs';
const root=new URL('../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const c=JSON.parse(read('data/community-discoveries.json')),r=JSON.parse(read('data/reactor-inventory.json'));
test('community additions are unique and traceable to primary sources',()=>{
 const old=JSON.parse(read('data/update-audit.json')).external.map(e=>e.url);
 assert.equal(c.additions.length,c.added_count);assert.equal(c.total_count,c.baseline_count+c.added_count);
 assert.equal(new Set([...old,...c.additions.map(e=>e.url)]).size,c.total_count);
 const directory=read('data/external-tools.md');
 for(const e of c.additions){assert.ok(e.sources.includes(e.url));assert.ok(directory.includes(e.description));assert.ok(directory.includes('#### 👤 '+e.creator));assert.ok(e.access&&e.platforms&&e.evidence_mode);if(e.updated)assert.ok(validDate(e.updated));
  if(e.package_id){const p=r.packages.find(p=>p.id===e.package_id);assert.ok(p);assert.equal(p.status,200);assert.equal(p.url,e.url);assert.equal(p.manifest_date,e.updated);assert.equal(p.version,e.version);}
 }
});
test('inventory keeps every folder distinct and does not imply compatibility',()=>{
 assert.equal(r.packages.length,r.folder_count);assert.equal(new Set(r.packages.map(e=>e.id)).size,r.folder_count);
 assert.equal(r.packages.filter(e=>e.status===200).length,r.retrieved_count);
 for(const e of r.packages){assert.equal(new URL(e.url).hostname,'gitlab.com');assert.ok(read('data/reactor-inventory.md').includes(e.id));}
 for(const file of ['data/community-discoveries.json','data/reactor-inventory.json'])assert.doesNotMatch(read(file),/[A-Z]:\\|file:\/\/|C:\/Users|D:\/Projects|refund_policy/);
});
test('community reports regenerate without duplicating entries and use valid local links',()=>{
 buildCommunityReport(); // Local reports need not exist in a fresh checkout.
 const files=['data/external-tools.md','data/community-discovery-report.md','data/reactor-inventory.md'];
 const before=files.map(read);buildCommunityReport();assert.deepEqual(files.map(read),before);
 for(const file of files)for(const m of read(file).matchAll(/\]\(([^)]+)\)/g)){const target=m[1].split('#')[0];if(!target||/^https?:/.test(target))continue;assert.ok(fs.existsSync(new URL(target,new URL(file,root))));}
});
