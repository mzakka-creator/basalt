import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import DocumentLang from "@/app/components/DocumentLang";
import { I18nProvider } from "@/lib/i18n/i18n-context";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { en, ar } from "@/lib/i18n/messages";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const meta = locale === "ar" ? ar.meta : en.meta;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const messages = locale === "ar" ? ar : en;

  return (
    <I18nProvider locale={locale} messages={messages}>
      <DocumentLang />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  );
}
