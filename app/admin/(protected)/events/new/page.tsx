'use client';

import BlogEventForm from '../../../components/BlogEventForm';
import AdminPageHeader from '../../../components/AdminPageHeader';
import { useAdminI18n } from '../../../components/AdminI18nProvider';
import styles from '../../../admin.module.css';

export default function AdminNewEventPage() {
  const { messages: m } = useAdminI18n();

  return (
    <>
      <AdminPageHeader title={m.events.addEvent} />
      <div className={styles.adminCard}>
        <BlogEventForm />
      </div>
    </>
  );
}
