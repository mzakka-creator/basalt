'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n/i18n-context';
import { swapLocaleInPathname, stripLocaleFromPathname, type AppPath } from '@/lib/i18n/paths';
import styles from './Navbar.module.css';

const navPaths: AppPath[] = ['/', '/about', '/products', '/factory', '/investments', '/contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { messages, href, locale } = useI18n();
  const { nav } = messages;

  const navLabels: Record<AppPath, string> = {
    '/': nav.home,
    '/about': nav.about,
    '/products': nav.products,
    '/factory': nav.factory,
    '/investments': nav.investments,
    '/contact': nav.contact,
  };

  const current = stripLocaleFromPathname(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`rock-surface ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="rock-surface-highlight" aria-hidden />
        <div className={styles.inner}>
          <Link href={href('/')} className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Basalt"
              width={140}
              height={52}
              className={styles.logoImg}
              priority
              style={{ width: 'auto', height: '44px' }}
            />
          </Link>

          <ul className={styles.navLinks}>
            {navPaths.map((path) => (
              <li key={path}>
                <Link
                  href={href(path)}
                  className={`${styles.navLink} ${current === path ? styles.active : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {navLabels[path]}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            <div className={styles.langSwitch} aria-label="Language">
              <Link
                href={swapLocaleInPathname(pathname, 'en')}
                className={`${styles.langLink} ${locale === 'en' ? styles.langActive : ''}`}
                scroll={false}
              >
                {nav.langEn}
              </Link>
              <span className={styles.langSep} aria-hidden>
                |
              </span>
              <Link
                href={swapLocaleInPathname(pathname, 'ar')}
                className={`${styles.langLink} ${locale === 'ar' ? styles.langActive : ''}`}
                scroll={false}
              >
                {nav.langAr}
              </Link>
            </div>
            <button
              type="button"
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={nav.menuToggle}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
      <div className={`rock-surface ${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className="rock-surface-highlight" aria-hidden />
        <div className={styles.drawerLogo}>
          <Image
            src="/logo.png"
            alt="Basalt"
            width={120}
            height={44}
            className={styles.logoImg}
            style={{ width: 'auto', height: '40px' }}
          />
        </div>
        <ul className={styles.drawerLinks}>
          {navPaths.map((path) => (
            <li key={path}>
              <Link
                href={href(path)}
                className={`${styles.drawerLink} ${current === path ? styles.drawerActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {navLabels[path]}
              </Link>
            </li>
          ))}
          <li className={styles.drawerLangLead}>
            <Link
              href={swapLocaleInPathname(pathname, 'en')}
              className={`${styles.drawerLink} ${locale === 'en' ? styles.drawerActive : ''}`}
              onClick={() => setMenuOpen(false)}
              scroll={false}
              lang="en"
            >
              {nav.langEn}
            </Link>
          </li>
          <li>
            <Link
              href={swapLocaleInPathname(pathname, 'ar')}
              className={`${styles.drawerLink} ${locale === 'ar' ? styles.drawerActive : ''}`}
              onClick={() => setMenuOpen(false)}
              scroll={false}
              lang="ar"
            >
              {nav.langAr}
            </Link>
          </li>
        </ul>
        <div className={styles.drawerFooter}>
          <p className={styles.drawerBadge}>{messages.common.opening2028}</p>
        </div>
      </div>
    </>
  );
}
