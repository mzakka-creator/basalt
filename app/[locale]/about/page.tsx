'use client';

import type { ComponentType, SVGProps } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useEffect } from 'react';
import {
  IconAward,
  IconLandmark,
  IconSparkles,
  IconStrength,
  IconTarget,
  IconThermometer,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import HeroHeadline from '@/app/components/PageHero/HeroHeadline';
import PageHero from '@/app/components/PageHero/PageHero';
import heroImage from '@/assets/images/heroes/hero-about.png';
import whoWeAreImage from '@/assets/images/sectors/sector-industry.jpeg';
import productBfrp from '@/assets/images/products/product-1-bfrp.jpeg';
import productMesh from '@/assets/images/products/product-4-rebar-mesh.jpeg';
import productPanel from '@/assets/images/products/product-3-insulation.jpeg';
import productPipes from '@/assets/images/products/product-7-pipes.jpeg';
import productContainers from '@/assets/images/products/product-5-custom.jpeg';
import { useI18n } from '@/lib/i18n/i18n-context';
import styles from './about.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const NAME_PARTICLES = new Set(['bin', 'ibn', 'بن', 'ابن']);

function getLeaderInitials(name: string) {
  const parts = name.split(/\s+/).filter((part) => part.length > 0 && !NAME_PARTICLES.has(part.toLowerCase()));
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2);
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
}

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const strengthIcons: SvgIcon[] = [IconLandmark, IconStrength, IconThermometer, IconAward];
const productImages: StaticImageData[] = [
  productBfrp,
  productMesh,
  productPanel,
  productPipes,
  productContainers,
];

export default function AboutPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const a = messages.about;

  return (
    <div className={styles.aboutRoot}>
      <PageHero
        tagline={a.heroTag}
        title={<HeroHeadline line1={a.heroTitleLine1} line2={a.heroTitleAccent} />}
        subtitle={a.heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className={`${styles.strengthsSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} ${styles.sectionIntroCenter} animate-on-scroll`}>
            <span className="sectionLabel">{a.strengthsLabel}</span>
            <h2 className="sectionTitle">{a.strengthsTitle}</h2>
          </div>
          <div className={styles.strengthsGrid}>
            {a.strengths.map((text, i) => {
              const StrengthIcon = strengthIcons[i];
              return (
                <div key={text} className={`${styles.strengthCard} animate-on-scroll`}>
                  <span className={styles.strengthIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.strengthOrb}>
                    <StrengthIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.strengthTitle}>{text}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.whoWeAreSection} section`}>
        <div className="container">
          <div className={styles.whoWeAreLayout}>
            <div className={styles.whoWeAreContent}>
              <div className={`${styles.sectionIntro} animate-on-scroll`}>
                <span className="sectionLabel">{a.whoWeAreLabel}</span>
                <h2 className="sectionTitle">{a.whoWeAreTitle}</h2>
              </div>
              <div className={`${styles.whoWeAreBody} animate-on-scroll`}>
                {a.whoWeAreParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.whoWeAreText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className={`${styles.whoWeAreVisual} animate-on-scroll`}>
              <Image
                src={whoWeAreImage}
                alt=""
                fill
                className={styles.whoWeAreImage}
                sizes="(max-width: 900px) 100vw, 45vw"
                aria-hidden
              />
              <div className={styles.whoWeAreGlow} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.visionSection} section`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={`${styles.vmCard} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconSparkles className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>{a.visionTitle}</h2>
              <div className={styles.vmBody}>
                {a.visionParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.vmText}>
                    {paragraph}
                  </p>
                ))}
                <p className={styles.vmClosing}>{a.visionClosing}</p>
              </div>
            </div>
            <div className={`${styles.vmCard} ${styles.vmCardAccent} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconTarget className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>{a.missionTitle}</h2>
              <div className={styles.vmBody}>
                {a.missionParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={styles.vmText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.leadershipSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} ${styles.sectionIntroCenter} animate-on-scroll`}>
            <span className="sectionLabel">{a.leadershipLabel}</span>
            <h2 className="sectionTitle">{a.leadershipTitle}</h2>
          </div>
          <div className={styles.leadershipGrid}>
            {a.leadership.map((leader) => (
              <article key={leader.name} className={`${styles.leadershipCard} animate-on-scroll`}>
                <div className={styles.leadershipLayout}>
                  <div className={styles.leadershipPortrait} aria-hidden>
                    <span className={styles.leadershipInitials}>{getLeaderInitials(leader.name)}</span>
                  </div>
                  <div className={styles.leadershipContent}>
                    <h3 className={styles.leadershipTitle}>{leader.title}</h3>
                    <div className={styles.leadershipBody}>
                      {leader.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)} className={styles.leadershipText}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <footer className={styles.leadershipSignature}>
                      <span className={styles.leadershipRole}>{leader.role}</span>
                      <span className={styles.leadershipName}>{leader.name}</span>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} animate-on-scroll`}>
            <span className="sectionLabel">{a.productsLabel}</span>
            <h2 className="sectionTitle">{a.productsTitle}</h2>
            <p className={styles.sectionDesc}>{a.productsDesc}</p>
          </div>
          <div className={styles.productGrid}>
            {a.products.map((product, i) => (
              <div key={product.title} className={`${styles.productCard} animate-on-scroll`}>
                <div className={styles.productImageWrap}>
                  <Image
                    src={productImages[i]}
                    alt={product.title}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={styles.productIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.productBody}>
                  <h4 className={styles.productTitle}>{product.title}</h4>
                  <p className={styles.productDesc}>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
