import Link from 'next/link';
import { getBlogEvents, getBlogPosts } from '@/lib/cms/store';
import styles from '../admin.module.css';

export default async function AdminDashboardPage() {
  const [posts, events] = await Promise.all([getBlogPosts(), getBlogEvents()]);

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Dashboard</h1>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminCard}>
          <h2 className={styles.adminTitle} style={{ fontSize: '1.1rem', marginBottom: 8 }}>
            Blogs
          </h2>
          <p className={styles.adminHint}>{posts.length} articles</p>
          <div className={styles.adminActions} style={{ marginTop: 16 }}>
            <Link href="/admin/blogs" className={styles.adminBtnSecondary}>
              Manage blogs
            </Link>
            <Link href="/admin/blogs/new" className={styles.adminBtn}>
              Add blog
            </Link>
          </div>
        </div>

        <div className={styles.adminCard}>
          <h2 className={styles.adminTitle} style={{ fontSize: '1.1rem', marginBottom: 8 }}>
            Events
          </h2>
          <p className={styles.adminHint}>{events.length} events</p>
          <div className={styles.adminActions} style={{ marginTop: 16 }}>
            <Link href="/admin/events" className={styles.adminBtnSecondary}>
              Manage events
            </Link>
            <Link href="/admin/events/new" className={styles.adminBtn}>
              Add event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
