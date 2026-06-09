import type { Locale } from './config';

/** Path without locale prefix, e.g. "/" or "/about" */
export type AppPath = '/' | '/about' | '/products' | '/factory' | '/investments' | '/contact' | '/blog';

export function withLocale(locale: Locale, path: AppPath): string {
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

/** Strip leading /en or /ar from pathname */
export function stripLocaleFromPathname(pathname: string): AppPath {
  const without = pathname.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';
  if (without === '/') return '/';
  const normalized = without.startsWith('/') ? without : `/${without}`;
  if (
    normalized === '/about' ||
    normalized === '/products' ||
    normalized === '/factory' ||
    normalized === '/investments' ||
    normalized === '/contact' ||
    normalized === '/blog' ||
    normalized.startsWith('/blog/')
  ) {
    return (normalized.startsWith('/blog/') ? '/blog' : normalized) as AppPath;
  }
  return '/';
}

export function swapLocaleInPathname(pathname: string, nextLocale: Locale): string {
  const path = stripLocaleFromPathname(pathname);
  return withLocale(nextLocale, path);
}
