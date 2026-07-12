import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import { defaultLocale, localeDir } from "@/lib/i18n/config";
import logo from "@/assets/logo/logo.png";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basalt",
  description: "Basalt — construction materials",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: logo.src, type: "image/png" },
    ],
    apple: [{ url: logo.src, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} dir={localeDir(defaultLocale)} className={`${cairo.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
