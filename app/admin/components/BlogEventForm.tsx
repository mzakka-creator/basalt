'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BlogEventRecord } from '@/lib/cms/types';
import MediaUploadField from './MediaUploadField';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type BlogEventFormProps = {
  initial?: BlogEventRecord;
};

const emptyEvent: Omit<BlogEventRecord, 'id'> = {
  slug: '',
  date: new Date().toISOString().slice(0, 10),
  tabLabelAr: '',
  tabLabelEn: '',
  titleAr: '',
  titleEn: '',
  descAr: '',
  descEn: '',
  cover: '',
  images: [],
  video: '',
};

export default function BlogEventForm({ initial }: BlogEventFormProps) {
  const router = useRouter();
  const { messages: f } = useAdminI18n();
  const [form, setForm] = useState({
    ...emptyEvent,
    ...initial,
    imagesText: (initial?.images ?? []).join('\n'),
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      slug: form.slug || undefined,
      date: form.date,
      tabLabelAr: form.tabLabelAr,
      tabLabelEn: form.tabLabelEn,
      titleAr: form.titleAr,
      titleEn: form.titleEn,
      descAr: form.descAr,
      descEn: form.descEn,
      cover: form.cover,
      images: form.imagesText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
      video: form.video || undefined,
    };

    try {
      const res = await fetch(initial ? `/api/admin/blog-events/${initial.id}` : '/api/admin/blog-events', {
        method: initial ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || f.form.saveFailed);
      router.push('/admin/events');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : f.form.saveFailed);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className={styles.adminForm} onSubmit={(e) => void handleSubmit(e)}>
      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.tabLabelEn}</label>
          <input className={styles.adminInput} value={form.tabLabelEn} onChange={(e) => setForm({ ...form, tabLabelEn: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.tabLabelAr}</label>
          <input className={styles.adminInput} value={form.tabLabelAr} onChange={(e) => setForm({ ...form, tabLabelAr: e.target.value })} required dir="rtl" />
        </div>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.date}</label>
          <input type="date" className={styles.adminInput} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.linkedSlug}</label>
          <input className={styles.adminInput} value={form.slug ?? ''} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        </div>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.titleEn}</label>
          <input className={styles.adminInput} value={form.titleEn} onChange={(e) => setForm({ ...form, titleEn: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.titleAr}</label>
          <input className={styles.adminInput} value={form.titleAr} onChange={(e) => setForm({ ...form, titleAr: e.target.value })} required dir="rtl" />
        </div>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.descEn}</label>
          <textarea className={styles.adminTextarea} value={form.descEn} onChange={(e) => setForm({ ...form, descEn: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.descAr}</label>
          <textarea className={styles.adminTextarea} value={form.descAr} onChange={(e) => setForm({ ...form, descAr: e.target.value })} required dir="rtl" />
        </div>
      </div>

      <MediaUploadField label={f.form.coverImage} value={form.cover} onChange={(cover) => setForm({ ...form, cover })} />
      <div className={styles.adminField}>
        <label className={styles.adminLabel}>{f.form.galleryUrls}</label>
        <textarea className={styles.adminTextarea} value={form.imagesText} onChange={(e) => setForm({ ...form, imagesText: e.target.value })} />
        <span className={styles.adminHint}>{f.form.galleryHint}</span>
      </div>
      <MediaUploadField label={f.form.videoUrl} value={form.video ?? ''} onChange={(video) => setForm({ ...form, video })} accept="video/*" />

      {error ? <p className={styles.adminError}>{error}</p> : null}

      <div className={styles.adminActions}>
        <button type="submit" className={styles.adminBtn} disabled={saving}>
          {saving ? f.form.saving : initial ? f.form.updateEvent : f.form.createEvent}
        </button>
        <button type="button" className={styles.adminBtnSecondary} onClick={() => router.push('/admin/events')}>
          {f.form.cancel}
        </button>
      </div>
    </form>
  );
}
