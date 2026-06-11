'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import type { BlogEventRecord } from '@/lib/cms/types';
import BlogEventForm from '../../../components/BlogEventForm';
import AdminPageHeader from '../../../components/AdminPageHeader';
import { useAdminI18n } from '../../../components/AdminI18nProvider';
import styles from '../../../admin.module.css';

type PageProps = { params: Promise<{ id: string }> };

export default function AdminEditEventPage({ params }: PageProps) {
  const { messages: m } = useAdminI18n();
  const [event, setEvent] = useState<BlogEventRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void params.then(async ({ id }) => {
      const res = await fetch(`/api/admin/blog-events/${id}`);
      if (!res.ok) {
        setEvent(null);
      } else {
        setEvent((await res.json()) as BlogEventRecord);
      }
      setLoading(false);
    });
  }, [params]);

  if (loading) return null;
  if (!event) notFound();

  return (
    <>
      <AdminPageHeader title={m.events.editEvent} />
      <div className={styles.adminCard}>
        <BlogEventForm initial={event} />
      </div>
    </>
  );
}
