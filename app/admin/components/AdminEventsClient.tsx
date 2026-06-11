'use client';

import Link from 'next/link';
import type { BlogEventRecord } from '@/lib/cms/types';
import DeleteButton from './DeleteButton';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type AdminEventsClientProps = {
  events: BlogEventRecord[];
};

export default function AdminEventsClient({ events }: AdminEventsClientProps) {
  const { messages: m, locale } = useAdminI18n();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>{m.events.title}</h1>
        <Link href="/admin/events/new" className={styles.adminBtn}>
          {m.events.addEvent}
        </Link>
      </div>

      <div className={styles.adminCard}>
        <table className={styles.adminTable}>
          <thead>
            <tr>
              <th>{m.events.colTitle}</th>
              <th>{m.events.colTab}</th>
              <th>{m.events.colDate}</th>
              <th>{m.events.colMedia}</th>
              <th>{m.events.colActions}</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{locale === 'ar' ? event.titleAr : event.titleEn}</td>
                <td>{locale === 'ar' ? event.tabLabelAr : event.tabLabelEn}</td>
                <td>{event.date}</td>
                <td>
                  {event.images.length} {m.events.images}
                  {event.video ? ` · ${m.events.video}` : ''}
                </td>
                <td>
                  <div className={styles.adminActions}>
                    <Link href={`/admin/events/${event.id}`} className={styles.adminBtnSecondary}>
                      {m.events.edit}
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
