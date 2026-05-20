'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { Messages } from '@/lib/i18n/messages';
import { withLocale, type AppPath } from '@/lib/i18n/paths';

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
  href: (path: AppPath) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      messages,
      href: (path: AppPath) => withLocale(locale, path),
    }),
    [locale, messages]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
