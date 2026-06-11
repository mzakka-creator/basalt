import BlogPostForm from '../../../components/BlogPostForm';
import styles from '../../../admin.module.css';

export default function AdminNewBlogPage() {
  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Add blog</h1>
      </div>
      <div className={styles.adminCard}>
        <BlogPostForm />
      </div>
    </>
  );
}
