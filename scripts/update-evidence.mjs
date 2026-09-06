// Only explicit product metadata is eligible. Policy/page dates are not releases.
export function gumroadVersion(raw) {
  const value = raw.match(/data-page="([^"]+)"/)?.[1];
  if (!value) return null;
  try {
    const page = JSON.parse(value.replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&'));
    const product = page.props?.product;
    if (!product) return null;
    const field = product.attributes?.find(a => /^(plugin version|latest version|version)$/i.test(String(a.name || '').trim()));
    return { name: product.name, version: field?.value || null };
  } catch { return null; }
}

export function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
  const parsed = new Date(value + 'T00:00:00Z');
  return Number.isFinite(+parsed) && parsed.toISOString().slice(0, 10) === value;
}
