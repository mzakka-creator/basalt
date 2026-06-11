'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type DeleteButtonProps = {
  endpoint: string;
};

export default function DeleteButton({ endpoint }: DeleteButtonProps) {
  const router = useRouter();
  const { messages: m } = useAdminI18n();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm(m.common.deleteConfirm)) return;
    setLoading(true);
    try {
      const res = await fetch(endpoint, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      router.refresh();
    } catch {
      window.alert(m.common.deleteFailed);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" className={styles.adminBtnDanger} onClick={() => void handleDelete()} disabled={loading}>
      {loading ? m.common.deleting : m.common.delete}
    </button>
  );
}
