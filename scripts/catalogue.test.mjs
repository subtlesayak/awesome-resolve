import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCsv, sorted, relativeDate, sorts, build, accessGroup, platformLabel, platformIcons, categories, creatorGroups } from './build-catalogue.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entries = parseCsv(fs.readFileSync(path.join(root, 'data/repositories.csv'), 'utf8'));
const discovery = JSON.parse(fs.readFileSync(path.join(root, 'data/web-discoveries.json'), 'utf8'));

test('relative dates handle singular, plural, missing and future timestamps', () => {
  const now = '2026-09-06T12:00:00Z';
  const ago = days => new Date(Date.parse(now) - days * 86400000).toISOString();
  for (const [days, label] of [[0, 'Today'], [1, '1 day back'], [6, '6 days back'], [7, '1 week back'], [21, '3 weeks back'], [30, '1 month back'], [90, '3 months back'], [365, '1 year back'], [730, '2 years back']]) assert.equal(relativeDate(ago(days), now), label);
  assert.equal(relativeDate('', now), 'Unavailable');
  assert.equal(relativeDate(ago(-1), now), 'Unavailable');
});
test('sorts use exact dates, numeric stars, project names and categories', () => {
  const base = entries[0];
  const fixture = [
    {...base, repository: 'a/Zebra', stars: '9', last_pushed_at: '2026-09-01T00:00:00Z'},
    {...base, repository: 'z/Alpha', stars: '100', last_pushed_at: '2026-09-06T00:00:00Z'},
    {...base, repository: 'a/Alpha', stars: '10', last_pushed_at: '2026-08-30T00:00:00Z'},
  ];
  assert.deepEqual(sorted(fixture, 'name').map(e => e.repository), ['a/Alpha', 'z/Alpha', 'a/Zebra']);
  assert.deepEqual(sorted(fixture, 'stars').map(e => e.stars), ['100', '10', '9']);
  assert.deepEqual(sorted(fixture, 'latest-updated').map(e => e.repository), ['z/Alpha', 'a/Zebra', 'a/Alpha']);
  assert.equal(accessGroup({access:'Free/paid product directory'}), 'Mixed');
});
test('CSV quotes and commas round-trip correctly', () => {
  assert.deepEqual(parseCsv('"name","description"\n"a","A comma, and ""quote"""\n'), [{name:'a', description:'A comma, and "quote"'}]);
});
test('platform labels retain evidence and caveats without guessing support', () => {
  assert.equal(platformLabel({}), '❔ Unverified');
  assert.throws(() => platformLabel({platforms:'All'}), /Invalid platform/);
  for (const entry of entries) {
    if (entry.last_pushed_at) assert.match(entry.last_pushed_at, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/);
    assert.ok(entry.platforms.split(';').every(p => platformIcons[p]));
    assert.ok(entry.platform_source.startsWith(entry.url));
    assert.match(entry.platform_checked_at, /^\d{4}-\d{2}-\d{2}$/);
    const output = platformLabel(entry);
    for (const platform of entry.platforms.split(';')) assert.ok(output.includes(platformIcons[platform]));
    if (entry.platform_notes) assert.ok(output.includes(entry.platform_notes));
  }
  assert.match(platformLabel(entries.find(e => e.repository === 'Nusscookie/clautter')), /untested/);
  assert.match(platformLabel(entries.find(e => e.repository === 'elliotmatson/Docker-Davinci-Resolve-Project-Server')), /server hosts/);
});
test('generated views preserve all entries, sort order and valid local links', () => {
  assert.equal(entries.length, discovery.total_count);
  assert.equal(new Set(entries.map(e => e.url.toLowerCase())).size, entries.length);
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const defaultUrls = [...readme.matchAll(/^\| \[[^\]]+\]\((https:\/\/github.com\/[^/)]+\/[^/)]+)\)/gm)].map(m => m[1]);
  assert.deepEqual(defaultUrls, categories.flatMap(([, , category]) => creatorGroups(entries.filter(e => e.category === category)).flatMap(g => g.entries.map(e => e.url))));
  assert.match(readme, /### 👤 \[postflows\]\(https:\/\/github.com\/postflows\)/);
  const fixture = ['Beta/z', 'Solo/a', 'alpha/b', 'Beta/a', 'ALPHA/a'].map(repository => ({...entries[0], repository}));
  assert.deepEqual(creatorGroups(fixture).map(g => [g.owner, g.entries.map(e => e.repository)]), [
    ['alpha', ['ALPHA/a', 'alpha/b']], ['Beta', ['Beta/a', 'Beta/z']], [null, ['Solo/a']],
  ]);
  for (const key of Object.keys(sorts)) {
    const file = path.join(root, 'views', key + '.md');
    const text = fs.readFileSync(file, 'utf8');
    const urls = [...text.matchAll(/^\| \[[^\]]+\]\((https:\/\/github.com\/[^)]+)\)/gm)].map(m => m[1]);
    assert.deepEqual(urls, sorted(entries, key).map(e => e.url));
  }
  for (const file of ['README.md', 'CHANGELOG.md', 'data/web-discovery-report.md', 'data/wiki-discovery-report.md', 'data/external-tools.md', ...Object.keys(sorts).map(k => `views/${k}.md`)]) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    for (const [, link] of text.matchAll(/\]\(([^)]+)\)/g)) {
      if (/^https?:/.test(link)) continue;
      const [target, anchor] = link.split('#');
      const destination = path.resolve(root, path.dirname(file), target || path.basename(file));
      assert.ok(fs.existsSync(destination), `${file}: broken link ${link}`);
      if (anchor) {
        const content = fs.readFileSync(destination, 'utf8');
        assert.ok(content.includes(`id="${anchor}"`) || content.split('\n').some(l => l.startsWith('#') && l.trim().replace(/^#+\s+/, '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s/g, '-') === anchor), `Missing anchor ${anchor}`);
      }
    }
  }
});

test('web additions have matching catalogue records and traceable upstream evidence', () => {
  assert.equal(discovery.baseline_count + discovery.added_count, discovery.total_count);
  assert.equal(discovery.additions.length, discovery.added_count);
  const additions = new Set(discovery.additions.map(e => e.repository.toLowerCase()));
  assert.equal(additions.size, discovery.added_count);
  for (const added of discovery.additions) {
    const entry = entries.find(e => e.repository === added.repository);
    assert.ok(entry, `Missing addition ${added.repository}`);
    for (const key of ['category', 'url', 'description', 'access', 'platforms', 'platform_notes', 'platform_source', 'platform_checked_at', 'research_snapshot']) assert.equal(entry[key], added[key]);
    assert.ok(added.discovery_sources.length > 0);
    for (const source of [...added.discovery_sources, added.evidence_source]) assert.equal(new URL(source).protocol, 'https:');
    assert.equal(added.evidence_source, entry.platform_source);
  }
  for (const held of discovery.held_candidates) assert.ok(!additions.has(held.repository.toLowerCase()));
  assert.match(entries.find(e => e.repository === 'IgorRidanovic/DaVinciResolve-ExportProjects').description, /DELETE the source projects/);
  assert.match(entries.find(e => e.repository === 'in03/patchwork').description, /unfinished/);
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.ok(readme.includes(`**${entries.length} public GitHub repositories**`));
});
test('regeneration is deterministic and preserves CSV', () => {
  const files = ['README.md', 'data/repositories.csv', ...Object.keys(sorts).map(k => `views/${k}.md`)];
  const before = files.map(f => fs.readFileSync(path.join(root, f), 'utf8'));
  build();
  assert.deepEqual(files.map(f => fs.readFileSync(path.join(root, f), 'utf8')), before);
});
