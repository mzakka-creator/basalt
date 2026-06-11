'use client';

import BlogPostForm from '../../../components/BlogPostForm';
import AdminPageHeader from '../../../components/AdminPageHeader';
import { useAdminI18n } from '../../../components/AdminI18nProvider';
import styles from '../../../admin.module.css';

export default function AdminNewBlogPage() {
  const { messages: m } = useAdminI18n();

  return (
    <>
      <AdminPageHeader title={m.blogs.addBlog} />
      <div className={styles.adminCard}>
        <BlogPostForm />
      </div>
    </>
  );
}
