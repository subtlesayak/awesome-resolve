import test from 'node:test';
import assert from 'node:assert/strict';
import {counterUrl} from '../site/footer.mjs';

test('visit counter only runs on production and never includes search or filters', () => {
  const home = counterUrl(new URL('https://subtlesayak.github.io/subtle-resolve-list/'));
  assert.ok(home);
  for (const page of ['?q=private-search&platform=macOS', 'updates.html', 'about.html#contact']) {
    assert.equal(counterUrl(new URL('https://subtlesayak.github.io/subtle-resolve-list/' + page)), home);
  }
  for (const location of ['http://127.0.0.1:4175/', 'http://localhost:4173/', 'https://example.com/subtle-resolve-list/', 'https://subtlesayak.github.io/', 'https://subtlesayak.github.io/subtle-resolve-list-other/']) {
    assert.equal(counterUrl(new URL(location)), null);
  }
});
