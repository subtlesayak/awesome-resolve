import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanUpdateUrl,readTextResponse,needsRenderedPage} from './page-evidence.mjs';
test('changelog discovery retains functional queries and strips trackers',()=>{
 assert.equal(cleanUpdateUrl('/viewtopic.php?t=123&f=21&utm_source=email#p1','https://forum.blackmagicdesign.com'),'https://forum.blackmagicdesign.com/viewtopic.php?t=123&f=21');
 assert.equal(cleanUpdateUrl('javascript:alert(1)','https://example.com'),null);
});
test('stream decoding preserves split UTF-8 and reports truncation',async()=>{
 const stream=new ReadableStream({start(c){c.enqueue(new Uint8Array([0xc3]));c.enqueue(new Uint8Array([0xa9]));c.close();}});
 assert.equal((await readTextResponse(new Response(stream,{headers:{'content-type':'text/html; charset=utf-8'}}))).raw,'é');
 const result=await readTextResponse(new Response('abcdef',{headers:{'content-type':'text/plain'}}),3);
 assert.equal(result.raw,'abc');assert.equal(result.truncated,true);assert.equal(result.extraction_status,'truncated_content');
});
test('PDF and dynamic sources are not mistaken for extracted release evidence',async()=>{
 const result=await readTextResponse(new Response('%PDF-1.4 binary',{headers:{'content-type':'application/pdf'}}));
 assert.equal(result.extraction_status,'unsupported_content');assert.equal(result.raw,'');
 assert.equal(needsRenderedPage('https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion','Support Center'),true);
 assert.equal(needsRenderedPage('https://example.com/changelog','Version 1.2 released'),false);
});
