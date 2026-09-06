// Pure transformations shared by regeneration and offline evidence validation.
export function githubVersion(name, url, item) {
  if (!item?.data) throw Error('Missing metadata: ' + name);
  const d=item.data, release=d.latestRelease || d.releases?.nodes?.[0], commit=d.defaultBranchRef?.target;
  return {name,url,kind:release?(release.isPrerelease?'prerelease':'stable-release'):commit?'commit':'unverified',version:release?.tagName||commit?.oid||null,source:release?.url||commit?.url||url,date:release?.publishedAt||commit?.committedDate||null,checked_at:item.checked_at};
}

export function externalVersions(external, audit, community, overrides) {
  const entries=external.map(e=>{
    const old=audit.external.find(x=>x.url===e.url),recent=community.additions.find(x=>x.url===e.url);
    const v=recent?.version||old?.version||null;
    return {name:e.name,url:e.url,kind:v?(recent?.package_id?'package-version':'vendor-version'):'unverified',version:v,source:recent?.sources[0]||old?.update_source||e.url,date:recent?.updated||old?.date||null,date_kind:recent?.date_kind||old?.date_kind||null,checked_at:recent?.checked_at||old?.checked_at||null};
  });
  for(const override of overrides.entries){
    const i=entries.findIndex(e=>e.url===override.url);
    if(i<0)throw Error('Version override is not in the external catalogue');
    entries[i]={...entries[i],...override};
  }
  for(const e of entries){
    const legacy=e.date_kind?.match(/^(Windows|macOS|Linux) (\S+) devlog$/);
    if(legacy){e.date_kind='devlog';e.date_platform=legacy[1];e.date_version=legacy[2];}
  }
  return entries;
}
