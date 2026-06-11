'use client';

import styles from '../admin.module.css';

type AdminPageHeaderProps = {
  title: string;
  action?: React.ReactNode;
};

export default function AdminPageHeader({ title, action }: AdminPageHeaderProps) {
  return (
    <div className={styles.adminHeader}>
      <h1 className={styles.adminTitle}>{title}</h1>
      {action}
    </div>
  );
}
