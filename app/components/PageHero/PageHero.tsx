import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';
import heroImage from '@/assets/images/heroes/hero-home.png';
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
  backgroundImage?: StaticImageData | string;
};

const particles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  animationDelay: `${(i * 0.43) % 8}s`,
  animationDuration: `${6 + (i % 7) * 0.8}s`,
  width: `${2 + (i % 4) * 0.7}px`,
  height: `${2 + (i % 4) * 0.7}px`,
  opacity: 0.3 + (i % 5) * 0.08,
}));

export default function PageHero({
  tagline,
  title,
  subtitle,
  children,
  banner,
  backgroundImage = heroImage,
}: PageHeroProps) {
  return (
    <section className={`rock-surface ${styles.hero} ${styles.heroWithPhoto}`}>
      <div className="rock-surface-highlight" aria-hidden />
      <div className={styles.heroBackground}>
        <Image
          src={backgroundImage}
          alt=""
          fill
          className={styles.heroPhoto}
          priority
          sizes="100vw"
        />
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
