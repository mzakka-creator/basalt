'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BlogCategory, BlogPostRecord } from '@/lib/cms/types';
import MediaUploadField from './MediaUploadField';
import { useAdminI18n } from './AdminI18nProvider';
import styles from '../admin.module.css';

type BlogPostFormProps = {
  initial?: BlogPostRecord;
};

const emptyPost: Omit<BlogPostRecord, 'id'> = {
  slug: '',
  category: 'news',
  date: new Date().toISOString().slice(0, 10),
  readMin: 5,
  featured: false,
  image: '',
  gallery: [],
  video: '',
  titleEn: '',
  excerptEn: '',
  bodyEn: [],
  titleAr: '',
  excerptAr: '',
  bodyAr: [],
};

function paragraphsToText(paragraphs: string[]) {
  return paragraphs.join('\n\n');
}

function textToParagraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function BlogPostForm({ initial }: BlogPostFormProps) {
  const router = useRouter();
  const { messages: f } = useAdminI18n();
  const [form, setForm] = useState({
    ...emptyPost,
    ...initial,
    galleryText: paragraphsToText(initial?.gallery ?? []),
    bodyEnText: paragraphsToText(initial?.bodyEn ?? []),
    bodyArText: paragraphsToText(initial?.bodyAr ?? []),
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      slug: form.slug,
      category: form.category as BlogCategory,
      date: form.date,
      readMin: Number(form.readMin),
      featured: form.featured,
      image: form.image,
      gallery: form.galleryText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
      video: form.video || undefined,
      titleEn: form.titleEn,
      excerptEn: form.excerptEn,
      bodyEn: textToParagraphs(form.bodyEnText),
      titleAr: form.titleAr,
      excerptAr: form.excerptAr,
      bodyAr: textToParagraphs(form.bodyArText),
    };

    try {
      const res = await fetch(initial ? `/api/admin/blog-posts/${initial.id}` : '/api/admin/blog-posts', {
        method: initial ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || f.form.saveFailed);
      router.push('/admin/blogs');
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
          <label className={styles.adminLabel}>{f.form.slug}</label>
          <input className={styles.adminInput} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.date}</label>
          <input type="date" className={styles.adminInput} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        </div>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.category}</label>
          <select className={styles.adminSelect} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as BlogCategory })}>
            <option value="news">{f.blogs.categoryNews}</option>
            <option value="industry">{f.blogs.categoryIndustry}</option>
            <option value="tech">{f.blogs.categoryTech}</option>
          </select>
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.readMin}</label>
          <input type="number" min={1} className={styles.adminInput} value={form.readMin} onChange={(e) => setForm({ ...form, readMin: Number(e.target.value) })} />
        </div>
      </div>

      <label className={styles.adminField}>
        <span className={styles.adminLabel}>{f.form.featured}</span>
        <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
      </label>

      <MediaUploadField label={f.form.coverImage} value={form.image} onChange={(image) => setForm({ ...form, image })} />
      <div className={styles.adminField}>
        <label className={styles.adminLabel}>{f.form.galleryUrls}</label>
        <textarea className={styles.adminTextarea} value={form.galleryText} onChange={(e) => setForm({ ...form, galleryText: e.target.value })} />
        <span className={styles.adminHint}>{f.form.galleryHint}</span>
      </div>
      <MediaUploadField label={f.form.videoUrl} value={form.video ?? ''} onChange={(video) => setForm({ ...form, video })} accept="video/*" />

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
          <label className={styles.adminLabel}>{f.form.excerptEn}</label>
          <textarea className={styles.adminTextarea} value={form.excerptEn} onChange={(e) => setForm({ ...form, excerptEn: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.excerptAr}</label>
          <textarea className={styles.adminTextarea} value={form.excerptAr} onChange={(e) => setForm({ ...form, excerptAr: e.target.value })} required dir="rtl" />
        </div>
      </div>

      <div className={styles.adminGrid2}>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.bodyEn}</label>
          <textarea className={styles.adminTextarea} style={{ minHeight: 220 }} value={form.bodyEnText} onChange={(e) => setForm({ ...form, bodyEnText: e.target.value })} required />
        </div>
        <div className={styles.adminField}>
          <label className={styles.adminLabel}>{f.form.bodyAr}</label>
          <textarea className={styles.adminTextarea} style={{ minHeight: 220 }} value={form.bodyArText} onChange={(e) => setForm({ ...form, bodyArText: e.target.value })} required dir="rtl" />
        </div>
      </div>

      {error ? <p className={styles.adminError}>{error}</p> : null}

      <div className={styles.adminActions}>
        <button type="submit" className={styles.adminBtn} disabled={saving}>
          {saving ? f.form.saving : initial ? f.form.updateBlog : f.form.createBlog}
        </button>
        <button type="button" className={styles.adminBtnSecondary} onClick={() => router.push('/admin/blogs')}>
          {f.form.cancel}
        </button>
      </div>
    </form>
  );
}
