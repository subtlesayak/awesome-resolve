export function cleanUpdateUrl(href, base) {
  const url=new URL(href,base);
  if(url.protocol!=='https:')return null;
  for(const key of [...url.searchParams.keys()])if(/^utm_/i.test(key)||/^(fbclid|gclid|ext-referrer|screen_view_count)$/i.test(key))url.searchParams.delete(key);
  url.hash='';
  return url.href;
}

export async function readTextResponse(response, maxBytes=6000000) {
  const contentType=response.headers.get('content-type')||'';
  if(!/^(text\/(html|plain)|application\/(json|[^;]+\+json|xhtml\+xml))/i.test(contentType)){
    await response.body?.cancel();
    return {raw:'',content_type:contentType,extraction_status:'unsupported_content',truncated:false};
  }
  const charset=contentType.match(/charset=["']?([^;\s"']+)/i)?.[1]||'utf-8';
  let decoder;
  try{decoder=new TextDecoder(charset);}catch{
    await response.body?.cancel();return {raw:'',content_type:contentType,extraction_status:'unsupported_encoding',truncated:false};
  }
  const reader=response.body?.getReader();let raw='',size=0,truncated=false;
  if(reader)for(;;){
    const {done,value}=await reader.read();if(done)break;
    const available=maxBytes-size;
    raw+=decoder.decode(value.subarray(0,available),{stream:true});size+=value.length;
    if(size>maxBytes){truncated=true;await reader.cancel();break;}
  }
  raw+=decoder.decode();
  return {raw,content_type:contentType,extraction_status:truncated?'truncated_content':'text_extracted',truncated};
}

export function needsRenderedPage(url,raw) {
  const u=new URL(url);
  return (u.hostname==='www.blackmagicdesign.com' && /^\/support(?:\/|$)/i.test(u.pathname)) || /\{\{\s*(?:xlate|familyMapObject)|<app-root\b/i.test(raw);
}
