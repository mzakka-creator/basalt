'use client';

import { useEffect, useState, type ReactNode } from 'react';
import styles from './PageHero.module.css';

type Particle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
  width: string;
  height: string;
  opacity: number;
};

export type PageHeroProps = {
  tagline: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  banner?: ReactNode;
};

export default function PageHero({ tagline, title, subtitle, children, banner }: PageHeroProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`,
        opacity: 0.3 + Math.random() * 0.4,
      }))
    );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient} />
        <div className={styles.heroTexture} />
        <div className={styles.heroParticles}>
          {particles.map((p, i) => (
            <div key={i} className={styles.particle} style={p} />
          ))}
        </div>
      </div>

      <div className={styles.heroForeground}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>
            <span className={styles.taglineDot} />
            {tagline}
          </div>
          <h1 className={styles.heroHeadline}>{title}</h1>
          {subtitle != null && subtitle !== '' && (
            <p className={styles.heroSubheadline}>{subtitle}</p>
          )}
          {children}
        </div>
        {banner ? <div className={styles.heroBanner}>{banner}</div> : null}
      </div>
    </section>
  );
}
