'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../admin.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) throw new Error('Invalid password');
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Invalid password');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.adminLoginWrap}>
      <div className={`${styles.adminCard} ${styles.adminLoginCard}`}>
        <h1 className={styles.adminTitle}>Basalt Admin</h1>
        <p className={styles.adminHint} style={{ marginBottom: 16 }}>
          Sign in to manage blogs and events.
        </p>
        <form className={styles.adminForm} onSubmit={(e) => void handleSubmit(e)}>
          <div className={styles.adminField}>
            <label className={styles.adminLabel}>Password</label>
            <input
              type="password"
              className={styles.adminInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error ? <p className={styles.adminError}>{error}</p> : null}
          <button type="submit" className={styles.adminBtn} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
