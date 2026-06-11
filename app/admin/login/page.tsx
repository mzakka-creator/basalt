'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLocaleSwitcher from '../components/AdminLocaleSwitcher';
import { useAdminI18n } from '../components/AdminI18nProvider';
import styles from '../admin.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const { messages: m } = useAdminI18n();
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
      setError(m.login.invalidPassword);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.adminLoginWrap}>
      <div className={styles.adminLoginTopBar}>
        <AdminLocaleSwitcher />
      </div>
      <div className={`${styles.adminCard} ${styles.adminLoginCard}`}>
        <h1 className={styles.adminTitle}>{m.login.title}</h1>
        <p className={styles.adminLoginSubtitle}>{m.login.subtitle}</p>
        <form className={`${styles.adminForm} ${styles.adminLoginForm}`} onSubmit={(e) => void handleSubmit(e)}>
          <div className={styles.adminField}>
            <label className={styles.adminLabel}>{m.login.password}</label>
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
            {loading ? m.login.signingIn : m.login.signIn}
          </button>
        </form>
      </div>
    </div>
  );
}
