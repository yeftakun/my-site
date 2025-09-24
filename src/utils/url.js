export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const stripped = path.replace(/^\/+/, '');
  if (!stripped) {
    return normalizedBase;
  }
  return `${normalizedBase}${stripped}`;
}