'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

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
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={styles.counterItem}>
      <div className={styles.counterValue}>
        {count}{suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

const teaserCards = [
  {
    href: '/about',
    icon: '◈',
    title: 'Who Are We',
    desc: 'Discover our vision, mission, and the 3-year roadmap to becoming Saudi Arabia\'s premier basalt manufacturer.',
    accent: 'Our Story →',
  },
  {
    href: '/products',
    icon: '⬡',
    title: 'Our Products',
    desc: 'From BFRP bars to insulation panels — cutting-edge basalt construction materials engineered for modern infrastructure.',
    accent: 'View Products →',
  },
  {
    href: '/factory',
    icon: '⚙',
    title: 'The Factory',
    desc: 'Explore our planned facility, production process, and the advanced technology that sets us apart.',
    accent: 'See Factory →',
  },
  {
    href: '/investments',
    icon: '◎',
    title: 'Investments',
    desc: 'Partner with a Vision 2030-aligned opportunity. Explore strategic, distribution, and financial partnership tiers.',
    accent: 'Invest Now →',
  },
];

type Particle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
  width: string;
  height: string;
  opacity: number;
};

export default function HomePage() {
  useScrollAnimation();
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
    <>
      {/* HERO */}
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

        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>
            <span className={styles.taglineDot} />
            Saudi Arabia — Est. 2028
          </div>
          <h1 className={styles.heroHeadline}>
            Building Tomorrow,<br />
            <span className={styles.heroHeadlineAccent}>From the Earth&rsquo;s Core</span>
          </h1>
          <p className={styles.heroSubheadline}>
            Saudi Arabia&rsquo;s upcoming premium basalt construction materials manufacturer
          </p>
          <div className={styles.heroCtas}>
            <Link href="/products" className={styles.ctaPrimary}>
              Explore Products
              <span className={styles.ctaArrow}>→</span>
            </Link>
            <Link href="/investments" className={styles.ctaOutline}>
              Investment Opportunities
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
          <div className={styles.heroScroll}>
            <div className={styles.scrollLine} />
            <span>Scroll to discover</span>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className={styles.counters}>
        <div className={styles.countersInner}>
          <AnimatedCounter target={3} suffix=" Yrs" label="Years to Full Launch" />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={100} suffix="%" label="Saudi Owned & Operated" />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={5} suffix="+" label="Core Product Lines" />
          <div className={styles.counterDivider} />
          <AnimatedCounter target={2030} label="Vision 2030 Aligned" />
        </div>
      </section>

      {/* INTRO */}
      <section className={`${styles.intro} section`}>
        <div className="container">
          <div className={`${styles.introHeader} animate-on-scroll`}>
            <span className="sectionLabel">About Basalt</span>
            <h2 className="sectionTitle">
              The Material That Built Civilizations,<br />
              <span className={styles.accentText}>Reimagined for Tomorrow</span>
            </h2>
            <p className={styles.introText}>
              Basalt rock — formed from volcanic magma — is one of the earth&rsquo;s most durable natural materials.
              We are building Saudi Arabia&rsquo;s first dedicated basalt construction materials factory,
              transforming this ancient stone into next-generation construction solutions: heat-resistant,
              eco-friendly, and stronger than steel in specific applications.
            </p>
          </div>

          <div className={styles.introFeatures}>
            {[
              { icon: '🌡', stat: '700°C', label: 'Heat resistance threshold' },
              { icon: '⚖', stat: '3×', label: 'Stronger than fiberglass' },
              { icon: '♻', stat: '100%', label: 'Natural, non-toxic material' },
              { icon: '🇸🇦', stat: '2028', label: 'Factory opening, Saudi Arabia' },
            ].map((f) => (
              <div key={f.label} className={`${styles.featureItem} animate-on-scroll`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureStat}>{f.stat}</div>
                <div className={styles.featureLabel}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER CARDS */}
      <section className={`${styles.teasers} section`}>
        <div className="container">
          <div className={`animate-on-scroll`} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="sectionLabel">Explore Basalt</span>
            <h2 className="sectionTitle" style={{ textAlign: 'center' }}>Everything You Need to Know</h2>
          </div>
          <div className={styles.teaserGrid}>
            {teaserCards.map((card) => (
              <Link key={card.href} href={card.href} className={`${styles.teaserCard} animate-on-scroll`}>
                <div className={styles.teaserCardInner}>
                  <div className={styles.teaserIcon}>{card.icon}</div>
                  <h3 className={styles.teaserTitle}>{card.title}</h3>
                  <p className={styles.teaserDesc}>{card.desc}</p>
                  <span className={styles.teaserCta}>{card.accent}</span>
                </div>
                <div className={styles.teaserHoverBg} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerTexture} />
        <div className={`${styles.ctaBannerContent} animate-on-scroll`}>
          <span className="sectionLabel">Partner With Us</span>
          <h2 className={styles.ctaBannerTitle}>
            Be Part of Saudi Arabia&rsquo;s<br />Construction Revolution
          </h2>
          <p className={styles.ctaBannerText}>
            Secure your position as a strategic partner before our factory opens in 2028.
            Investment opportunities are limited and selective.
          </p>
          <Link href="/investments" className={styles.ctaPrimary} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Explore Investment Tiers
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
