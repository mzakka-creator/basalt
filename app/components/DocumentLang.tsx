'use client';

import { useParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { defaultLocale, isLocale, localeDir, type Locale } from '@/lib/i18n/config';

export default function DocumentLang() {
  const params = useParams();
  const raw = params?.locale;
  const locale: Locale =
    typeof raw === 'string' && isLocale(raw) ? raw : defaultLocale;

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDir(locale);
  }, [locale]);

  return null;
}
