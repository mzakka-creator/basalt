'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import type { BlogPostRecord } from '@/lib/cms/types';
import BlogPostForm from '../../../components/BlogPostForm';
import AdminPageHeader from '../../../components/AdminPageHeader';
import { useAdminI18n } from '../../../components/AdminI18nProvider';
import styles from '../../../admin.module.css';

type PageProps = { params: Promise<{ id: string }> };

export default function AdminEditBlogPage({ params }: PageProps) {
  const { messages: m } = useAdminI18n();
  const [post, setPost] = useState<BlogPostRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void params.then(async ({ id }) => {
      const res = await fetch(`/api/admin/blog-posts/${id}`);
      if (!res.ok) {
        setPost(null);
      } else {
        setPost((await res.json()) as BlogPostRecord);
      }
      setLoading(false);
    });
  }, [params]);

  if (loading) return null;
  if (!post) notFound();

  return (
    <>
      <AdminPageHeader title={m.blogs.editBlog} />
      <div className={styles.adminCard}>
        <BlogPostForm initial={post} />
      </div>
    </>
  );
}
