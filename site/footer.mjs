// Use a fixed public counter key. Never send filter URLs or preview locations.
export function counterUrl(location) {
  if (location.protocol !== 'https:' || location.hostname !== 'subtlesayak.github.io'
    || !location.pathname.startsWith('/subtle-resolve-list/')) return null;
  return 'https://hits.sh/subtlesayak.github.io/subtle-resolve-list.svg?label=Visits&color=a64b00&labelColor=262626';
}

if (typeof document !== 'undefined') {
  const container = document.getElementById('visit-counter');
  const url = counterUrl(window.location);
  if (container && url) {
    const link = document.createElement('a');
    link.href = 'https://hits.sh/subtlesayak.github.io/subtle-resolve-list/';
    link.rel = 'noreferrer';
    link.title = 'Approximate page views since September 8, 2026; not unique visitors';
    const badge = document.createElement('img');
    badge.alt = 'Visits counter: open page-view statistics';
    badge.referrerPolicy = 'no-referrer';
    badge.height = 20;
    let retried = false;
    badge.addEventListener('load', () => { link.replaceChildren(badge); });
    badge.addEventListener('error', () => {
      link.textContent = 'View visit statistics ↗';
      if (!retried) {
        retried = true;
        // Bypass a cached failed image once, without changing the counter key.
        setTimeout(() => { badge.src = url + '&retry=1'; }, 1200);
      }
    });
    link.textContent = 'View visit statistics ↗';
    container.replaceChildren(link);
    badge.src = url;
  }
}
