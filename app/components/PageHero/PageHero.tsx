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
  tagline?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  banner?: ReactNode;
  backgroundImage?: StaticImageData | string;
  brighten?: boolean;
  blur?: boolean;
  contentPosition?: 'center' | 'bottom';
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
  brighten = false,
  blur = false,
  contentPosition = 'center',
}: PageHeroProps) {
  const isBottom = contentPosition === 'bottom';

  return (
    <section className={`${styles.hero} ${isBottom ? styles.heroBottomAlign : ''}`}>
      <div
        className={`${styles.heroBackground} ${brighten ? styles.heroBrighten : ''} ${blur ? styles.heroBlur : ''}`}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className={styles.heroPhoto}
          priority
          sizes="100vw"
        />
        {brighten ? <div className={styles.heroLightWash} aria-hidden /> : null}
        <div className={styles.heroParticles}>
          {particles.map((p, i) => (
            <div key={i} className={styles.particle} style={p} />
          ))}
        </div>
      </div>

      <div className={styles.heroForeground}>
        <div className={`${styles.heroContent} ${isBottom ? styles.heroContentBottom : ''}`}>
          {tagline ? (
            <div className={styles.heroTagline}>
              <span className={styles.taglineDot} />
              {tagline}
            </div>
          ) : null}
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
