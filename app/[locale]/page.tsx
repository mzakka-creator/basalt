'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import {
  IconAbout,
  IconArrowRight,
  IconFactory,
  IconInvestments,
  IconLeaf,
  IconLocation,
  IconProducts,
  IconStrength,
  IconThermometer,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import HeroHeadline from '@/app/components/PageHero/HeroHeadline';
import PageHero from '@/app/components/PageHero/PageHero';
import PartnerMarquee from '@/app/components/PartnerMarquee/PartnerMarquee';
import SuccessPartnerGrid from '@/app/components/SuccessPartnerGrid/SuccessPartnerGrid';
import { homePartners } from '@/lib/home-partners';
import { successPartners } from '@/lib/success-partners';
import { useI18n } from '@/lib/i18n/i18n-context';
import heroAbout from '@/assets/images/heroes/hero-about.png';
import heroProducts from '@/assets/images/heroes/hero-products.png';
import heroFactory from '@/assets/images/heroes/hero-factory.png';
import heroInvestments from '@/assets/images/heroes/hero-investments.png';
import styles from './page.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function AnimatedCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={styles.counterItem}>
      <div className={styles.counterValue}>
        {count}
        {suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

const teaserIcons: { path: '/about' | '/products' | '/factory' | '/investments'; Icon: SvgIcon }[] = [
  { path: '/about', Icon: IconAbout },
  { path: '/products', Icon: IconProducts },
  { path: '/factory', Icon: IconFactory },
  { path: '/investments', Icon: IconInvestments },
];

const teaserImages: Record<'/about' | '/products' | '/factory' | '/investments', StaticImageData> = {
  '/about': heroAbout,
  '/products': heroProducts,
  '/factory': heroFactory,
  '/investments': heroInvestments,
};

const featureIcons: SvgIcon[] = [IconThermometer, IconStrength, IconLeaf, IconLocation];

export default function HomePage() {
  useScrollAnimation();
  const { messages, href } = useI18n();
  const h = messages.home;

  return (
    <>
      <PageHero
        title={<HeroHeadline line1={h.titleLine1} line2={h.titleAccent} />}
        subtitle={h.subtitle}
      >
        <div className={styles.heroCtas}>
          <Link href={href('/products')} className={styles.ctaPrimary}>
            {h.ctaProducts}
            <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm} ${styles.ctaArrow}`} aria-hidden />
          </Link>
          <Link href={href('/investments')} className={styles.ctaOutline}>
            {h.ctaInvest}
            <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm} ${styles.ctaArrow}`} aria-hidden />
          </Link>
        </div>
      </PageHero>

      <section className={styles.counters}>
        <div className={styles.countersInner}>
          <AnimatedCounter target={3} suffix={h.counterSuffixYrs} label={h.counters.years} />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={100} suffix={h.counterSuffixPct} label={h.counters.saudi} />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={5} suffix={h.counterSuffixPlus} label={h.counters.lines} />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={2030} label={h.counters.vision} />
        </div>
      </section>

      <section className={`${styles.intro} section`}>
        <div className="container">
          <div className={`${styles.introHeader} animate-on-scroll`}>
            <span className="sectionLabel">{h.introLabel}</span>
            <h2 className="sectionTitle">
              {h.introTitleLine1}
              <br />
              <span className={styles.accentText}>{h.introTitleAccent}</span>
            </h2>
            <p className={styles.introText}>{h.introBody}</p>
          </div>

          <div className={styles.introFeatures}>
            {h.features.map((f, i) => {
              const FeatureIcon = featureIcons[i];
              return (
                <div key={f.label} className={`${styles.featureItem} animate-on-scroll`}>
                  <div className={styles.featureIconWrap}>
                    <FeatureIcon className={iconStyles.svgIcon} aria-hidden />
                  </div>
                  <div className={styles.featureStat}>{f.stat}</div>
                  <div className={styles.featureLabel}>{f.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.partners} section`}>
        <div className="container">
          <div className={`${styles.partnersHead} animate-on-scroll`}>
            <span className="sectionLabel">{h.partnersLabel}</span>
            <h2 className="sectionTitle">{h.partnersTitle}</h2>
            <p className={styles.partnersDesc}>{h.partnersDesc}</p>
          </div>
          <div className={`${styles.partnersMarquee} animate-on-scroll`}>
            <PartnerMarquee partners={homePartners} />
          </div>
        </div>
      </section>

      <section className={`${styles.successPartners} section`}>
        <div className="container">
          <div className={`${styles.successPartnersHead} animate-on-scroll`}>
            <span className="sectionLabel">{h.successPartnersLabel}</span>
            <h2 className="sectionTitle">{h.successPartnersTitle}</h2>
            <p className={styles.successPartnersDesc}>{h.successPartnersDesc}</p>
          </div>
          <div className="animate-on-scroll">
            <SuccessPartnerGrid partners={successPartners} />
          </div>
        </div>
      </section>

      <section className={`${styles.teasers} section`}>
        <div className="container">
          <div className={`${styles.teasersHead} animate-on-scroll`}>
            <span className="sectionLabel">{h.teasersLabel}</span>
            <h2 className="sectionTitle">{h.teasersTitle}</h2>
          </div>
          <div className={styles.teaserGrid}>
            {h.teasers.map((card, i) => {
              const teaserPath = teaserIcons[i].path;
              const TeaserIcon = teaserIcons[i].Icon;
              return (
                <Link key={teaserPath} href={href(teaserPath)} className={`${styles.teaserCard} animate-on-scroll`}>
                  <Image src={teaserImages[teaserPath]} alt="" fill className={styles.teaserImage} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className={styles.teaserOverlay} />
                  <div className={styles.teaserCardInner}>
                    <div className={styles.teaserIconWrap} aria-hidden>
                      <TeaserIcon className={iconStyles.svgIcon} />
                    </div>
                    <h3 className={styles.teaserTitle}>{card.title}</h3>
                    <p className={styles.teaserDesc}>{card.desc}</p>
                    <span className={styles.teaserCta}>
                      {card.accent}
                      <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm} ${styles.teaserCtaArrow}`} aria-hidden />
                    </span>
                  </div>
                  <div className={styles.teaserHoverBg} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`${styles.ctaBannerContent} animate-on-scroll`}>
          <span className="sectionLabel">{h.ctaBannerLabel}</span>
          <h2 className={styles.ctaBannerTitle}>
            {h.ctaBannerTitleLine1}
            <br />
            {h.ctaBannerTitleLine2}
          </h2>
          <p className={styles.ctaBannerText}>{h.ctaBannerBody}</p>
          <Link href={href('/investments')} className={`${styles.ctaPrimary} ${styles.ctaBannerLink}`}>
            {h.ctaBannerButton}
            <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm} ${styles.ctaArrow}`} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
