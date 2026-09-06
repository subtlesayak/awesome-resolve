// Preserve editorial content outside an explicitly bounded generated region.
export function replaceGeneratedSection(text, start, end, generated) {
  const begin=text.indexOf(start);
  if(begin<0)return text.trimEnd()+'\n\n'+start+'\n'+generated.trim()+'\n'+end+'\n';
  const finish=text.indexOf(end,begin+start.length);
  if(finish<0)throw new Error('Generated section has no end marker; refusing to overwrite trailing content.');
  return text.slice(0,begin)+start+'\n'+generated.trim()+'\n'+end+text.slice(finish+end.length);
}
