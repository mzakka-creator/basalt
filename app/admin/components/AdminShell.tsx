'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AdminLocaleSwitcher from './AdminLocaleSwitcher';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { messages: m } = useAdminI18n();

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const links = [
    { href: '/admin', label: m.nav.dashboard },
    { href: '/admin/blogs', label: m.nav.blogs },
    { href: '/admin/events', label: m.nav.events },
  ];

  return (
    <div className={styles.adminShell}>
      <aside className={styles.adminSidebar}>
        <div className={styles.adminSidebarHead}>
          <div className={styles.adminBrand}>{m.brand}</div>
          <AdminLocaleSwitcher />
        </div>
        <nav className={styles.adminNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.adminNavLink} ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? styles.adminNavLinkActive
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={styles.adminBtnSecondary}
          onClick={logout}
          style={{ marginTop: 24, width: '100%' }}
        >
          {m.nav.logout}
        </button>
      </aside>
      <main className={styles.adminMain}>{children}</main>
    </div>
  );
}
