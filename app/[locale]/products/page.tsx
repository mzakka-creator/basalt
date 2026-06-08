'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  IconArrowLeft,
  IconArrowRight,
  IconCoins,
  IconHexagon,
  IconLandmark,
  IconLeaf,
  IconScale,
  IconShield,
  IconThermometer,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import heroImage from '@/assets/images/heroes/hero-products.png';
import { useI18n } from '@/lib/i18n/i18n-context';
import type { Messages } from '@/lib/i18n/messages';
import { productImages } from '@/lib/products/product-images';
import styles from './products.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type CategoryFilter = keyof Messages['products']['categories'];

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

const advantageIcons: SvgIcon[] = [IconShield, IconThermometer, IconScale, IconLeaf, IconCoins, IconLandmark];

const categoryOrder: CategoryFilter[] = ['all', 'reinforcement', 'fibers'];

export default function ProductsPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const p = messages.products;
  const c = messages.common;

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [flipped, setFlipped] = useState<number | null>(null);

  const filtered =
    activeCategory === 'all'
      ? p.items
      : p.items.filter((item) => item.categoryKey === activeCategory);

  const handleCategoryChange = (cat: CategoryFilter) => {
    setFlipped(null);
    setActiveCategory(cat);
  };

  return (
    <>
      <PageHero
        tagline={p.heroTag}
        title={
          <>
            <span className={pageHeroStyles.heroHeadlineLead}>{p.heroTitleLine1}</span>
            <br />
            <span className={pageHeroStyles.heroHeadlineAccent}>{p.heroTitleAccent}</span>
          </>
        }
        subtitle={p.heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>{p.filterLabel}</span>
          <div className={styles.filterTabs}>
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterTab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {p.categories[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={styles.productGrid}>
            {filtered.map((product, index) => (
              <div
                key={product.id}
                className={`${styles.productCard} ${flipped === product.id ? styles.flipped : ''}`}
                style={{ animationDelay: `${index * 0.07}s` }}
                onClick={() => setFlipped(flipped === product.id ? null : product.id)}
              >
                <div className={styles.comingSoonOverlay}>
                  <div className={styles.comingSoonBadge}>
                    <span className={styles.csBadgePulse} />
                    {c.coming2028}
                  </div>
                </div>

                <div className={styles.cardFront}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={productImages[product.id]}
                      alt={product.name}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardCategory}>{p.categories[product.categoryKey]}</div>
                    <h3 className={styles.cardName}>{product.name}</h3>
                    <p className={styles.cardDesc}>{product.desc}</p>
                    <div className={styles.cardHighlight}>
                      <IconHexagon className={`${iconStyles.svgIconSm} ${styles.highlightIcon}`} aria-hidden />
                      {product.highlight}
                    </div>
                    <button type="button" className={styles.learnMoreBtn}>
                      {c.viewSpecs}
                      <span className={styles.learnArrow}>
                        <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                      </span>
                    </button>
                  </div>
                </div>

                <div className={styles.cardBack}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={productImages[product.id]}
                      alt=""
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      aria-hidden
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardCategory}>{p.categories[product.categoryKey]}</div>
                    <h3 className={styles.cardName}>{product.name}</h3>
                    <div className={styles.specsList}>
                      <p className={styles.specsTitle}>{c.technicalSpecs}</p>
                      {product.specs.map((spec) => (
                        <div key={spec} className={styles.specItem}>
                          <span className={styles.specDot}>
                            <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                          </span>
                          {spec}
                        </div>
                      ))}
                    </div>
                    <button type="button" className={styles.backBtn}>
                      <IconArrowLeft className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                      {c.back}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`${styles.whySectionHead} animate-on-scroll`}>
            <span className="sectionLabel">{p.advantagesLabel}</span>
            <h2 className="sectionTitle">{p.advantagesTitle}</h2>
          </div>
          <div className={styles.advantageGrid}>
            {p.advantages.map(({ title, desc }, i) => {
              const AdvIcon = advantageIcons[i];
              return (
                <div key={title} className={`${styles.advantageItem} animate-on-scroll`}>
                  <div className={styles.advIcon}>
                    <AdvIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h4 className={styles.advTitle}>{title}</h4>
                  <p className={styles.advDesc}>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
