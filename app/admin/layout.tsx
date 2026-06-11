import '../globals.css';
import styles from './admin.module.css';

export const metadata = {
  title: 'Basalt Admin',
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.adminRoot}>{children}</div>;
}
