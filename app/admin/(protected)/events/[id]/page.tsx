import { notFound } from 'next/navigation';
import { getBlogEventById } from '@/lib/cms/store';
import BlogEventForm from '../../../components/BlogEventForm';
import styles from '../../../admin.module.css';

type PageProps = { params: Promise<{ id: string }> };

export default async function AdminEditEventPage({ params }: PageProps) {
  const { id } = await params;
  const event = await getBlogEventById(id);
  if (!event) notFound();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Edit event</h1>
      </div>
      <div className={styles.adminCard}>
        <BlogEventForm initial={event} />
      </div>
    </>
  );
}
