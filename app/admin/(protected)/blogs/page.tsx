import Link from 'next/link';
import { getBlogPosts } from '@/lib/cms/store';
import DeleteButton from '../../components/DeleteButton';
import styles from '../../admin.module.css';

export default async function AdminBlogsPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Blogs</h1>
        <Link href="/admin/blogs/new" className={styles.adminBtn}>
          Add blog
        </Link>
      </div>

      <div className={styles.adminCard}>
        <table className={styles.adminTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.titleEn}</td>
                <td>{post.slug}</td>
                <td>{post.category}</td>
                <td>{post.date}</td>
                <td>
                  <div className={styles.adminActions}>
                    <Link href={`/admin/blogs/${post.id}`} className={styles.adminBtnSecondary}>
                      Edit
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
