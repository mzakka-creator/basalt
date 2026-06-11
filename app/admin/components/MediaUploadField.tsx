'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../admin.module.css';

type MediaUploadFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  accept?: string;
  hint?: string;
};

export default function MediaUploadField({
  label,
  value,
  onChange,
  accept = 'image/*',
  hint,
}: MediaUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleUpload(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error || 'Upload failed');
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  const isImage = value && !value.endsWith('.mp4');

  return (
    <div className={styles.adminField}>
      <label className={styles.adminLabel}>{label}</label>
      <input
        className={styles.adminInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="/blog/uploads/example.jpg"
      />
      <input
        type="file"
        accept={accept}
        onChange={(e) => void handleUpload(e.target.files?.[0] ?? null)}
      />
      {hint ? <span className={styles.adminHint}>{hint}</span> : null}
      {uploading ? <span className={styles.adminHint}>Uploading...</span> : null}
      {error ? <span className={styles.adminError}>{error}</span> : null}
      {isImage ? (
        <div className={styles.adminPreview} style={{ position: 'relative' }}>
          <Image src={value} alt="" fill style={{ objectFit: 'cover' }} />
        </div>
      ) : null}
    </div>
  );
}
