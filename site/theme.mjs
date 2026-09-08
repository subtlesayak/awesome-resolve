// Apply the saved preference before paint; System follows OS changes.
(() => {
  const key = 'resolve-theme';
  const system = matchMedia('(prefers-color-scheme: dark)');
  let choice = 'system';
  try { choice = localStorage.getItem(key) || 'system'; } catch {}
  if (!['system', 'light', 'dark'].includes(choice)) choice = 'system';
  const apply = () => {
    document.documentElement.dataset.theme = choice === 'system' ? (system.matches ? 'dark' : 'light') : choice;
  };
  apply();
  system.addEventListener('change', apply);
  addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    choice = ['light', 'dark'].includes(event.newValue) ? event.newValue : 'system';
    apply();
    const control = document.querySelector('#theme');
    if (control) control.value = choice;
  });
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('#theme');
    control.value = choice;
    control.addEventListener('change', () => {
      choice = control.value;
      apply();
      try { localStorage.setItem(key, choice); } catch {}
    });
  });
})();
