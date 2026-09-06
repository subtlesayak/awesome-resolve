import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {replaceGeneratedSection} from './generated-section.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=execFileSync('git',['ls-files'],{cwd:root,encoding:'utf8'}).trim().split(/\r?\n/);
test('all tracked Markdown file links resolve',()=>{
 for(const file of files.filter(f=>f.endsWith('.md'))){
  const text=fs.readFileSync(path.join(root,file),'utf8');
  for(const [,raw] of text.matchAll(/\]\(([^)]+)\)/g)){
   if(/^[a-z]+:|^#/i.test(raw))continue;
   const target=decodeURIComponent(raw.split('#')[0]);
   assert.ok(fs.existsSync(path.resolve(root,path.dirname(file),target)),`${file}: ${raw}`);
  }
 }
});
test('bounded regeneration preserves following notes and fails safely',()=>{
 const text='intro\nSTART\nold\nEND\nUser notes\n';
 assert.equal(replaceGeneratedSection(text,'START','END','new'),'intro\nSTART\nnew\nEND\nUser notes\n');
 assert.throws(()=>replaceGeneratedSection('intro\nSTART\nnotes','START','END','new'),/refusing/);
});
test('local Markdown section links point to existing anchors',()=>{
 const anchors=file=>{
  const text=fs.readFileSync(file,'utf8'),ids=new Set(),seen=new Map();
  for(const [,id] of text.matchAll(/\bid="([^"]+)"/g))ids.add(id);
  for(const [,heading] of text.matchAll(/^#{1,6}\s+(.+)$/gm)){
   const slug=heading.trim().toLowerCase().replace(/<[^>]+>/g,'').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[^\p{L}\p{N}_ -]/gu,'').replaceAll(' ','-');
   const n=seen.get(slug)||0;ids.add(slug+(n?'-'+n:''));seen.set(slug,n+1);
  }return ids;
 };
 for(const file of files.filter(f=>f.endsWith('.md'))){
  const absolute=path.join(root,file),text=fs.readFileSync(absolute,'utf8');
  for(const [,raw]of text.matchAll(/\]\(([^)]+)\)/g)){
   if(/^[a-z]+:/i.test(raw)||!raw.includes('#'))continue;
   const [target,fragment]=raw.split('#');if(!fragment)continue;
   const dest=target?path.resolve(path.dirname(absolute),decodeURIComponent(target)):absolute;
   if(!dest.endsWith('.md'))continue;
   assert.ok(anchors(dest).has(decodeURIComponent(fragment)),`${file}: ${raw}`);
  }
 }
});
test('private scratch is ignored and absent from tracked files',()=>{
 assert.ok(!files.some(f=>/^\.(research|release-notes)\//.test(f)));
 const ignored=execFileSync('git',['check-ignore','.research/example.json','.release-notes/example.md'],{cwd:root,encoding:'utf8'});
 assert.ok(ignored.includes('.research/example.json')&&ignored.includes('.release-notes/example.md'));
});
test('reports remain local and public pages do not link to them',()=>{
 const isReport=f=>f==='PROJECT-AUDIT.md'||/^data\/.*-report\.md$/.test(f)||f==='data/update-audit.md';
 assert.ok(!files.some(isReport));
 for(const file of files.filter(f=>f.endsWith('.md'))){
  for(const [,raw]of fs.readFileSync(path.join(root,file),'utf8').matchAll(/\]\(([^)]+)\)/g)){
   if(/^[a-z]+:/i.test(raw))continue;
   const target=path.relative(root,path.resolve(root,path.dirname(file),raw.split('#')[0])).replaceAll('\\','/');
   assert.ok(!isReport(target),`${file} links to a local report`);
  }
 }
});
