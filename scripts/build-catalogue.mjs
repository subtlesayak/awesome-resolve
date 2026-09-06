import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function parseCsv(text) {
  const rows = []; let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (c === ',' && !quoted) { row.push(cell); cell = ''; }
    else if (c === '\n' && !quoted) { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (quoted) throw new Error('Unclosed CSV quote');
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const headers = rows.shift();
  return rows.filter(r => r.length > 1).map(r => {
    if (r.length !== headers.length) throw new Error('Invalid CSV row');
    return Object.fromEntries(headers.map((h, i) => [h, r[i]]));
  });
}

export const categories = [
  ['🎨', 'Color / DCTL', 'Color grading, DCTLs, film looks, and color science'],
  ['✨', 'Fusion / VFX', 'Fusion, motion graphics, visual effects, and package management'],
  ['💬', 'Captions / Editing', 'Subtitles, transcription, dialogue cleanup, and automatic editing'],
  ['🤖', 'AI / MCP', 'AI assistants, MCP servers, and ComfyUI integrations'],
  ['🛠️', 'Workflow / Scripts', 'Productivity scripts, workflow bridges, and integrations'],
  ['🎞️', 'Encoding / Servers', 'Encoding, codecs, proxy generation, rendering, and project servers'],
  ['🐧', 'Linux', 'Linux installation, compatibility, and troubleshooting'],
  ['📚', 'Development', 'Developer libraries and scripting references'],
  ['🎛️', 'Hardware / MIDI', 'Hardware, control surfaces, MIDI, and Speed Editor tools'],
  ['🧭', 'Directories', 'Directories covering free and commercial products'],
];
const categoryFor = e => categories.find(c => c[2] === e.category);
const compare = (a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0;
const byName = (a, b) => compare(a.repository.split('/')[1], b.repository.split('/')[1]) || compare(a.repository, b.repository);
export function accessGroup(entry) {
  return entry.access.startsWith('Mixed') || entry.access.startsWith('Free/paid') ? 'Mixed' : entry.access.startsWith('Free') ? 'Free' : 'Public';
}
export const sorts = {
  'latest-updated': ['🕒 Latest updated', 'Latest repository push first', (a, b) => compare(b.last_pushed_at || '', a.last_pushed_at || '') || byName(a, b)],
  name: ['🔤 Name', 'Project name A–Z; owner breaks ties', byName],
  type: ['🏷️ Type', 'Category A–Z, then project name A–Z', (a, b) => compare(categoryFor(a)[1], categoryFor(b)[1]) || byName(a, b)],
  stars: ['⭐ Stars', 'Most stars first', (a, b) => Number(b.stars) - Number(a.stars) || byName(a, b)],
  access: ['💰 Access', 'Free, Mixed, Public; then project name A–Z', (a, b) => compare(accessGroup(a), accessGroup(b)) || byName(a, b)],
};
export function sorted(entries, key) { return [...entries].sort(sorts[key][2]); }
export function creatorGroups(entries) {
  const owners = new Map();
  for (const entry of entries) {
    const owner = entry.repository.split('/')[0];
    const key = owner.toLowerCase();
    if (!owners.has(key)) owners.set(key, { owner, entries: [] });
    owners.get(key).entries.push(entry);
  }
  const groups = [...owners.values()].filter(g => g.entries.length > 1)
    .sort((a, b) => compare(a.owner, b.owner))
    .map(g => ({ ...g, entries: sorted(g.entries, 'name') }));
  const singles = [...owners.values()].filter(g => g.entries.length === 1).flatMap(g => g.entries);
  if (singles.length) groups.push({ owner: null, entries: sorted(singles, 'name') });
  return groups;
}
export function relativeDate(timestamp, checkedAt) {
  if (!timestamp) return 'Unavailable';
  const days = Math.floor((Date.parse(checkedAt) - Date.parse(timestamp)) / 86400000);
  if (!Number.isFinite(days) || days < 0) return 'Unavailable';
  if (days === 0) return 'Today';
  const [value, unit] = days < 7 ? [days, 'day'] : days < 30 ? [Math.floor(days / 7), 'week'] : days < 365 ? [Math.floor(days / 30), 'month'] : [Math.floor(days / 365), 'year'];
  return `${value} ${unit}${value === 1 ? '' : 's'} back`;
}
const escape = text => text.replaceAll('|', '\\|').replaceAll('\n', ' ');
export const platformIcons = { Windows: '🪟', macOS: '🍎', Linux: '🐧', iPadOS: '📱', Reference: '📖', Unverified: '❔' };
export function platformLabel(e) {
  const platforms = (e.platforms || 'Unverified').split(';');
  if (platforms.some(p => !platformIcons[p])) throw new Error(`Invalid platform for ${e.repository}`);
  const label = platforms.map(p => `${platformIcons[p]} ${p}`).join(' · ');
  const linked = e.platform_source ? `[${label}](${e.platform_source})` : label;
  return linked + (e.platform_notes ? `<br><sub>${escape(e.platform_notes)}</sub>` : '');
}
function accessLabel(e, prefix) {
  const group = accessGroup(e);
  const qualifier = e.access === group ? '' : ` ${escape(e.access)}`;
  return `![${group}](${prefix}assets/badges/${group.toLowerCase()}.svg)${qualifier}`;
}
export function repositoryLabel(repository) {
  const [owner, name] = repository.split('/');
  const wrap = text => text.replace(/([_-])/g, '$1&#8203;').replace(/([A-Za-z0-9.]{12})(?=[A-Za-z0-9.])/g, '$1&#8203;');
  return { name: wrap(name), owner: wrap(owner) };
}
function row(e, prefix, includeType = false) {
  const c = categoryFor(e);
  const label = repositoryLabel(e.repository);
  const type = includeType ? `<br><sub>${c[0]} ${c[1]}</sub>` : '';
  const details = `${escape(e.description)}${type}`;
  const updated = relativeDate(e.last_pushed_at, e.metadata_checked_at).replace(/ back$/, ' ago').replaceAll(' ', '&nbsp;');
  return `| [${label.name}](${e.url})<br><sub>${label.owner}</sub> | ${details} | ${accessLabel(e, prefix)} | ${platformLabel(e)} | ${e.stars} | <sub>${updated}</sub> |`;
}
function table(entries, prefix, includeType = false) {
  return [
    '| Repository | Details | Access | Platforms | Stars | Updated |',
    '| :--- | :--- | :--- | :--- | ---: | :--- |',
    ...entries.map(e => row(e, prefix, includeType)),
  ].join('\n');
}
function navigation(prefix) {
  return Object.entries(sorts).map(([key, [label]]) => `[${label}](${prefix}${key}.md)`).join(' · ');
}

export function build() {
  const entries = parseCsv(fs.readFileSync(path.join(root, 'data/repositories.csv'), 'utf8'));
  if (new Set(entries.map(e => e.url)).size !== entries.length) throw new Error('Duplicate repository');
  for (const e of entries) {
    if (!categoryFor(e) || !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(e.url) || !/^\d+$/.test(e.stars)) throw new Error('Invalid entry');
  }
  const readmePath = path.join(root, 'README.md');
  const old = fs.readFileSync(readmePath, 'utf8');
  const start = old.indexOf('## Contents');
  const end = old.indexOf('## Compatibility notes');
  if (start < 0 || end < start) throw new Error('README section markers missing');
  let intro = old.slice(0, start).replace(/^# Awesome Resolve/m, '# 🎬 Awesome Resolve');
  // Rebuilding only replaces the generated section; editorial notes stay intact.
  const content = [
    '## Contents', '',
    '### ↕️ Sort the catalogue', '', navigation('views/'), '',
    'Each category starts with an all-repositories list sorted A–Z by repository name. Creator subheadings follow for owners with multiple repositories, ordered A–Z by GitHub owner; their tools also sort A–Z. These repeat entries from the complete list for browsing by creator. Choose a view above for a catalogue-wide sort. **Type** means the catalogue category.', '',
    '### 🏷️ Labels', '',
    '![Free](assets/badges/free.svg) Explicit free availability or open-source license · ![Public](assets/badges/public.svg) Public files; licensing not fully audited · ![Mixed](assets/badges/mixed.svg) Free and paid offerings.', '',
    'Access qualifiers and compatibility details remain in each entry. Stars and relative ages use the metadata-check timestamp recorded in the CSV.', '',
    '<a id="platforms-supported"></a>', '', '### 💻 Platforms supported', '',
    '| Platform | Meaning |', '| --- | --- |',
    '| 🪟 Windows | Windows support or installation documented upstream. |',
    '| 🍎 macOS | Mac support or installation documented upstream; check Intel/Apple Silicon notes. |',
    '| 🐧 Linux | Linux support or installation documented upstream; distribution and GPU requirements vary. |',
    '| 📱 iPadOS | An iPad workflow is explicitly documented; Resolve version restrictions may apply. |',
    '| 📖 Reference | Documentation or a directory, not a desktop-platform compatibility claim. |',
    '| ❔ Unverified | Platform support has not been established from the reviewed documentation. |', '',
    'Click an entry\'s platform labels for its upstream source. Labels reflect documented support or installation instructions, not our own installation tests. Omitted platforms are unverified, not necessarily unsupported. Untested, partial, hardware, and server-host limitations are shown beside the labels. Platform review dates and sources are recorded separately in the CSV; refreshing stars does not recheck platform support.', '',
    '### 🗂️ Browse by category', '',
    ...categories.map(([emoji, , title], i) => `- [${emoji} ${title}](#category-${i + 1}) (${entries.filter(e => e.category === title).length})`),
    '- [⚠️ Compatibility notes](#compatibility-notes)', '- [🤝 Contributing](#contributing)', '',
    ...categories.flatMap(([emoji, , title], i) => {
      const members = entries.filter(e => e.category === title);
      const groups = creatorGroups(members).filter(g => g.owner);
      return [`<a id="category-${i + 1}"></a>`, '', `## ${emoji} ${title}`, '', `${members.length} repositories.`, '',
        '### All repositories', '', table(sorted(members, 'name'), ''), '',
        ...groups.flatMap(g => [
          `### 👤 [${g.owner}](https://github.com/${g.owner})`, '',
          table(g.entries, ''), '',
        ])];
    }),
  ].join('\n');
  fs.writeFileSync(readmePath, intro + content + '\n' + old.slice(end));
  fs.mkdirSync(path.join(root, 'views'), { recursive: true });
  for (const [key, [label, description]] of Object.entries(sorts)) {
    fs.writeFileSync(path.join(root, 'views', key + '.md'), [
      `# ${label}`, '', '[🎬 Catalogue home](../README.md) · [📥 CSV download](../data/repositories.csv)', '',
      navigation(''), '', `**${entries.length} repositories · ${description}.**`, '',
      `GitHub metadata checked: **${entries[0].metadata_checked_at}**. Relative ages are as of this snapshot. Updated = latest repository push, not release date; exact UTC timestamps are in the CSV. Type = category. Access and compatibility reflect the [access label definitions](../README.md#access-labels).`, '',
      table(sorted(entries, key), '../', true), '',
    ].join('\n'));
  }
  console.log(`Built README and ${Object.keys(sorts).length} sorted views for ${entries.length} repositories.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) build();
