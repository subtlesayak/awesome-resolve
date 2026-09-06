import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseCsv,parseExternalResources} from './build-catalogue.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.resolve(root,p),'utf8'));
const index=process.argv.indexOf('--github');
if(index<0||!process.argv[index+1])throw Error('Supply --github with reviewed output from check-updates.mjs --github');
const fetched=read(process.argv[index+1]);
const repos=parseCsv(fs.readFileSync(path.join(root,'data/repositories.csv'),'utf8'));
const external=parseExternalResources(fs.readFileSync(path.join(root,'data/external-tools.md'),'utf8'));
const audit=read('data/update-audit.json'),community=read('data/community-discoveries.json');
const entries=repos.map(e=>{
 const item=fetched.find(x=>x.repository===e.repository);
 if(!item?.data)throw Error('Missing metadata: '+e.repository);
 const d=item.data,release=d.latestRelease||d.releases?.nodes?.[0],commit=d.defaultBranchRef?.target;
 return {name:e.repository,url:e.url,kind:release?(release.isPrerelease?'prerelease':'stable-release'):commit?'commit':'unverified',version:release?.tagName||commit?.oid||null,source:release?.url||commit?.url||e.url,date:release?.publishedAt||commit?.committedDate||null,checked_at:item.checked_at};
});
for(const e of external){
 const old=audit.external.find(x=>x.url===e.url),recent=community.additions.find(x=>x.url===e.url);
 const v=recent?.version||old?.version||null;
 entries.push({name:e.name,url:e.url,kind:v?(recent?.package_id?'package-version':'vendor-version'):'unverified',version:v,source:recent?.sources[0]||old?.update_source||e.url,date:recent?.updated||old?.date||null,date_kind:recent?.date_kind||old?.date_kind||null,checked_at:recent?.checked_at||old?.checked_at||null});
}
for(const override of read('data/version-overrides.json').entries){
 const i=entries.findIndex(e=>e.url===override.url);if(i<0)throw Error('Version override is not in the catalogue');
 entries[i]={...entries[i],...override};
}
fs.writeFileSync(path.join(root,'data/versions.json'),JSON.stringify({schema_version:1,entries},null,2)+'\n');
console.log(`Recorded ${entries.length} version states.`);
