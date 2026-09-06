import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseCsv,parseExternalResources} from './build-catalogue.mjs';
import {versionLabel} from './versions.mjs';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const versions=JSON.parse(read('data/versions.json')).entries;
test('every catalogue entry has one version state and an upstream source',()=>{
 const all=[...parseCsv(read('data/repositories.csv')),...parseExternalResources(read('data/external-tools.md'))];
 assert.deepEqual(versions.map(e=>e.url).sort(),all.map(e=>e.url).sort());
 assert.equal(new Set(versions.map(e=>e.url)).size,versions.length);
 for(const e of versions){
  assert.ok(['stable-release','prerelease','commit','vendor-version','package-version','unverified'].includes(e.kind));
  assert.equal(new URL(e.source).protocol,'https:');assert.ok(Number.isFinite(Date.parse(e.checked_at)));
  if(e.kind==='unverified'){assert.equal(e.version,null);assert.match(versionLabel(e.url),/not established/);}
  else assert.ok(e.version);
  if(e.kind==='commit'){assert.match(e.version,/^[a-f0-9]{40}$/);assert.match(versionLabel(e.url),/Revision .*no published release/);}
  if(e.kind==='prerelease')assert.match(versionLabel(e.url),/prerelease/);
 }
});
test('every public README entry displays version evidence or explicit uncertainty',()=>{
 const readme=read('README.md');
 for(const e of versions){const row=readme.split('\n').find(l=>l.startsWith('| [')&&l.includes(']('+e.url+')'));assert.ok(row?.includes(versionLabel(e.url)),e.name);}
});
