import fs from 'node:fs';
const file=new URL('../data/versions.json',import.meta.url);
let cachedStamp=null,cached=new Map();
export function versionFor(url){
 if(!fs.existsSync(file))return null;
 const stamp=fs.statSync(file).mtimeMs;
 if(stamp!==cachedStamp){cached=new Map(JSON.parse(fs.readFileSync(file,'utf8')).entries.map(e=>[e.url,e]));cachedStamp=stamp;}
 return cached.get(url)||null;
}
export function versionLabel(url){
 const e=versionFor(url);
 if(!e?.version)return '🏷️ Version not established';
 const name=e.kind==='commit'?`Revision ${e.version.slice(0,12)} (no published release)`:e.version+(e.kind==='prerelease'?' (prerelease)':e.kind==='package-version'?' (package)':'');
 return `🏷️ [${name.replace(/[\[\]|<>]/g,'').replace(/[\r\n]/g,' ')}](${e.source})`;
}
