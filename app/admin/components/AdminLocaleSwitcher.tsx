'use client';

import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

export default function AdminLocaleSwitcher() {
  const { messages, toggleLocale } = useAdminI18n();

  return (
    <button type="button" className={styles.adminLocaleBtn} onClick={toggleLocale}>
      {messages.langSwitch}
    </button>
  );
}
