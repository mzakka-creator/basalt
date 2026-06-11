import Link from 'next/link';
import { getBlogEvents } from '@/lib/cms/store';
import DeleteButton from '../../components/DeleteButton';
import styles from '../../admin.module.css';

export default async function AdminEventsPage() {
  const events = await getBlogEvents();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Events</h1>
        <Link href="/admin/events/new" className={styles.adminBtn}>
          Add event
        </Link>
      </div>

      <div className={styles.adminCard}>
        <table className={styles.adminTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Tab</th>
              <th>Date</th>
              <th>Media</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.titleEn}</td>
                <td>{event.tabLabelEn}</td>
                <td>{event.date}</td>
                <td>
                  {event.images.length} images
                  {event.video ? ' · video' : ''}
                </td>
                <td>
                  <div className={styles.adminActions}>
                    <Link href={`/admin/events/${event.id}`} className={styles.adminBtnSecondary}>
                      Edit
                    </Link>
                    <DeleteButton endpoint={`/api/admin/blog-events/${event.id}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
