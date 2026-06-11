'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from '../admin.module.css';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/blogs', label: 'Blogs' },
    { href: '/admin/events', label: 'Events' },
  ];

  return (
    <div className={styles.adminShell}>
        <aside className={styles.adminSidebar}>
          <div className={styles.adminBrand}>Basalt Admin</div>
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
          <button type="button" className={styles.adminBtnSecondary} onClick={logout} style={{ marginTop: 24, width: '100%' }}>
            Logout
          </button>
        </aside>
        <main className={styles.adminMain}>{children}</main>
    </div>
  );
}
