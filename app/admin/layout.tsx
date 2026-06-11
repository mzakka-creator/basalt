import '../globals.css';
import { AdminI18nProvider } from './components/AdminI18nProvider';
import styles from './admin.module.css';

export const metadata = {
  title: 'Basalt Admin',
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminI18nProvider>
      <div className={styles.adminRoot}>{children}</div>
    </AdminI18nProvider>
  );
}
