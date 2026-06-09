import type { ReactNode } from 'react';
import styles from './PageHero.module.css';

type Props = {
  line1: ReactNode;
  line2?: ReactNode;
};

export default function HeroHeadline({ line1, line2 }: Props) {
  if (line2 == null || line2 === '') {
    return <span className={styles.heroHeadlineAccent}>{line1}</span>;
  }

  return (
    <span className={styles.heroHeadlineTitle}>
      <span className={styles.heroHeadlineAccent}>{line1}</span>
      <span className={styles.heroHeadlineLead}>{line2}</span>
    </span>
  );
}
