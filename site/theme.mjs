// Apply the saved preference before paint; System follows OS changes.
(() => {
  const key = 'resolve-theme';
  const system = matchMedia('(prefers-color-scheme: dark)');
  const choices = ['system', 'light', 'dark'];
  const label = value => value[0].toUpperCase() + value.slice(1);
  let choice = 'system';
  try { choice = localStorage.getItem(key) || 'system'; } catch {}
  if (!['system', 'light', 'dark'].includes(choice)) choice = 'system';
  const apply = () => {
    document.documentElement.dataset.theme = choice === 'system' ? (system.matches ? 'dark' : 'light') : choice;
    const control = document.querySelector('#theme');
    if (control) {
      const next = choices[(choices.indexOf(choice) + 1) % choices.length];
      control.textContent = 'Theme: ' + label(choice);
      control.setAttribute('aria-label', 'Theme: ' + label(choice) + '. Switch to ' + label(next));
      control.title = 'Switch to ' + label(next) + ' theme';
    }
  };
  apply();
  system.addEventListener('change', apply);
  addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    choice = ['light', 'dark'].includes(event.newValue) ? event.newValue : 'system';
    apply();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('#theme');
    apply();
    control.addEventListener('click', () => {
      choice = choices[(choices.indexOf(choice) + 1) % choices.length];
      apply();
      try { localStorage.setItem(key, choice); } catch {}
    });
  });
})();
