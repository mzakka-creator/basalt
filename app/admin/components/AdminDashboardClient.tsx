'use client';

import Link from 'next/link';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type AdminDashboardClientProps = {
  postCount: number;
  eventCount: number;
};

export default function AdminDashboardClient({ postCount, eventCount }: AdminDashboardClientProps) {
  const { messages: m } = useAdminI18n();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>{m.dashboard.title}</h1>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminCard}>
          <h2 className={styles.adminTitle} style={{ fontSize: '1.1rem', marginBottom: 8 }}>
            {m.dashboard.blogs}
          </h2>
          <p className={styles.adminHint}>
            {postCount} {m.dashboard.articles}
          </p>
          <div className={styles.adminActions} style={{ marginTop: 16 }}>
            <Link href="/admin/blogs" className={styles.adminBtnSecondary}>
              {m.dashboard.manageBlogs}
            </Link>
            <Link href="/admin/blogs/new" className={styles.adminBtn}>
              {m.dashboard.addBlog}
            </Link>
          </div>
        </div>

        <div className={styles.adminCard}>
          <h2 className={styles.adminTitle} style={{ fontSize: '1.1rem', marginBottom: 8 }}>
            {m.dashboard.events}
          </h2>
          <p className={styles.adminHint}>
            {eventCount} {m.dashboard.eventsCount}
          </p>
          <div className={styles.adminActions} style={{ marginTop: 16 }}>
            <Link href="/admin/events" className={styles.adminBtnSecondary}>
              {m.dashboard.manageEvents}
            </Link>
            <Link href="/admin/events/new" className={styles.adminBtn}>
              {m.dashboard.addEvent}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
