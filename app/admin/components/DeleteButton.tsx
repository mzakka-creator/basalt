'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../admin.module.css';

type DeleteButtonProps = {
  endpoint: string;
  label?: string;
};

export default function DeleteButton({ endpoint, label = 'Delete' }: DeleteButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    setLoading(true);
    try {
      const res = await fetch(endpoint, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      router.refresh();
    } catch {
      window.alert('Delete failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" className={styles.adminBtnDanger} onClick={() => void handleDelete()} disabled={loading}>
      {loading ? 'Deleting...' : label}
    </button>
  );
}
