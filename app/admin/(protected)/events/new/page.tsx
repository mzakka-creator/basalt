import BlogEventForm from '../../../components/BlogEventForm';
import styles from '../../../admin.module.css';

export default function AdminNewEventPage() {
  return (
    <>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Add event</h1>
      </div>
      <div className={styles.adminCard}>
        <BlogEventForm />
      </div>
    </>
  );
}
