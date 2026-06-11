'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, localeDir, type Locale } from '@/lib/i18n/config';
import { adminMessages, type AdminMessages } from '@/lib/i18n/admin-messages';

const COOKIE_NAME = 'basalt_admin_locale';

type AdminI18nContextValue = {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  messages: AdminMessages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const AdminI18nContext = createContext<AdminI18nContextValue | null>(null);

function readLocaleCookie(): Locale {
  if (typeof document === 'undefined') return defaultLocale;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  const value = match?.[1];
  return value === 'en' || value === 'ar' ? value : defaultLocale;
}

function writeLocaleCookie(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function AdminI18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(readLocaleCookie());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLocaleCookie(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      dir: localeDir(locale),
      messages: adminMessages[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <AdminI18nContext.Provider value={value}>
      <div dir={value.dir} lang={locale}>
        {children}
      </div>
    </AdminI18nContext.Provider>
  );
}

export function useAdminI18n() {
  const ctx = useContext(AdminI18nContext);
  if (!ctx) throw new Error('useAdminI18n must be used within AdminI18nProvider');
  return ctx;
}
