'use client';

import Link from 'next/link';
import type { BlogPostRecord } from '@/lib/cms/types';
import type { BlogCategory } from '@/lib/cms/types';
import DeleteButton from './DeleteButton';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type AdminBlogsClientProps = {
  posts: BlogPostRecord[];
};

export default function AdminBlogsClient({ posts }: AdminBlogsClientProps) {
  const { messages: m } = useAdminI18n();

  const categoryLabel: Record<BlogCategory, string> = {
    news: m.blogs.categoryNews,
    industry: m.blogs.categoryIndustry,
    tech: m.blogs.categoryTech,
  };

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>{m.blogs.title}</h1>
        <Link href="/admin/blogs/new" className={styles.adminBtn}>
          {m.blogs.addBlog}
        </Link>
      </div>

      <div className={styles.adminCard}>
        <table className={styles.adminTable}>
          <thead>
            <tr>
              <th>{m.blogs.colTitle}</th>
              <th>{m.blogs.colSlug}</th>
              <th>{m.blogs.colCategory}</th>
              <th>{m.blogs.colDate}</th>
              <th>{m.blogs.colActions}</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.titleAr || post.titleEn}</td>
                <td>{post.slug}</td>
                <td>{categoryLabel[post.category]}</td>
                <td>{post.date}</td>
                <td>
                  <div className={styles.adminActions}>
                    <Link href={`/admin/blogs/${post.id}`} className={styles.adminBtnSecondary}>
                      {m.blogs.edit}
                    </Link>
                    <DeleteButton endpoint={`/api/admin/blog-posts/${post.id}`} />
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
