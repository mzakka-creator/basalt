import { notFound } from 'next/navigation';
import { getBlogPostById } from '@/lib/cms/store';
import BlogPostForm from '../../../components/BlogPostForm';
import styles from '../../../admin.module.css';

type PageProps = { params: Promise<{ id: string }> };

export default async function AdminEditBlogPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Edit blog</h1>
      </div>
      <div className={styles.adminCard}>
        <BlogPostForm initial={post} />
      </div>
    </>
  );
}
