'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect } from 'react';
import {
  IconAward,
  IconFeather,
  IconFlask,
  IconLandmark,
  IconLeaf,
  IconRuler,
  IconSparkles,
  IconStrength,
  IconTarget,
  IconThermometer,
  IconUserCircle,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import styles from './about.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

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

const timeline = [
  {
    year: '2025',
    phase: 'Phase 1',
    title: 'Foundation & Planning',
    desc: 'Company registration, feasibility studies, site selection across Saudi Arabia, and initial investor onboarding.',
    status: 'current',
  },
  {
    year: '2026',
    phase: 'Phase 2',
    title: 'Infrastructure & Partnerships',
    desc: 'Land acquisition, machinery procurement agreements, technology licensing, and strategic partnership deals.',
    status: 'upcoming',
  },
  {
    year: '2027',
    phase: 'Phase 3',
    title: 'Construction & Installation',
    desc: 'Factory construction, equipment installation, team recruitment, and pre-production trials begin.',
    status: 'upcoming',
  },
  {
    year: '2028',
    phase: 'Launch',
    title: 'Grand Opening',
    desc: 'Full-scale production commences. Saudi Arabia\'s first dedicated basalt materials factory is officially open.',
    status: 'target',
  },
];

const values: { Icon: SvgIcon; title: string; desc: string }[] = [
  {
    Icon: IconSparkles,
    title: 'Innovation',
    desc: 'Applying the latest basalt fiber technologies and continuous R&D to stay ahead of global construction trends.',
  },
  {
    Icon: IconLeaf,
    title: 'Sustainability',
    desc: 'Basalt is 100% natural. Our processes are designed to minimize carbon footprint and maximize material longevity.',
  },
  {
    Icon: IconAward,
    title: 'Quality',
    desc: 'Every product leaving our factory meets or exceeds international standards — zero compromise on performance.',
  },
  {
    Icon: IconLandmark,
    title: 'Saudi Pride',
    desc: 'Built in Saudi Arabia, for Saudi Arabia. Proudly supporting Vision 2030 and the growth of domestic industry.',
  },
];

const rockProperties: { Icon: SvgIcon; title: string; stat: string; desc: string }[] = [
  { Icon: IconThermometer, title: 'Heat Resistance', stat: 'Up to 700°C', desc: 'Superior performance in high-temperature environments compared to steel or fiberglass.' },
  { Icon: IconStrength, title: 'Tensile Strength', stat: '4,840 MPa', desc: 'Basalt fiber offers exceptional tensile strength, surpassing fiberglass by up to 30%.' },
  { Icon: IconFlask, title: 'Chemical Resistance', stat: 'pH 1–14', desc: 'Naturally resistant to acids, alkalis, and corrosive environments — ideal for infrastructure.' },
  { Icon: IconFeather, title: 'Lightweight', stat: '2.7 g/cm³', desc: 'Lower density than steel, reducing structural load while maintaining superior strength.' },
  { Icon: IconLeaf, title: 'Eco-Friendly', stat: '0 Toxic', desc: 'No binders, no toxic emissions during production. Fully natural volcanic rock origin.' },
  { Icon: IconRuler, title: 'Dimensional Stability', stat: '±0.01%', desc: 'Exceptional resistance to thermal expansion and contraction over its lifespan.' },
];

export default function AboutPage() {
  useScrollAnimation();

  return (
    <div className={styles.aboutRoot}>
      <PageHero
        tagline="Who Are We"
        title={
          <>
            Built on Vision,<br />
            <span className={pageHeroStyles.heroHeadlineAccent}>Forged from the Earth</span>
          </>
        }
        subtitle="A future-forward Saudi company transforming volcanic basalt rock into the building blocks of tomorrow&rsquo;s infrastructure."
      />

      <section className={`${styles.visionSection} section`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={`${styles.vmCard} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconSparkles className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>Our Vision</h2>
              <p className={styles.vmText}>
                To become the Middle East&rsquo;s leading producer of basalt construction materials —
                setting the benchmark for quality, innovation, and sustainability in the region&rsquo;s
                rapidly growing construction sector.
              </p>
            </div>
            <div className={`${styles.vmCard} ${styles.vmCardAccent} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconTarget className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>Our Mission</h2>
              <p className={styles.vmText}>
                To harness Saudi Arabia&rsquo;s abundant basalt rock reserves and transform them into
                premium construction materials that reduce reliance on imports, strengthen national
                infrastructure, and support Vision 2030&rsquo;s industrial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} animate-on-scroll`}>
            <span className="sectionLabel">Roadmap</span>
            <h2 className="sectionTitle">3-Year Journey to Launch</h2>
            <p className={styles.sectionDesc}>
              A structured, milestone-driven approach to building Saudi Arabia&rsquo;s first basalt materials factory.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {timeline.map((item, i) => (
              <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight} animate-on-scroll`}>
                <div className={`${styles.timelineCard} ${item.status === 'current' ? styles.cardCurrent : item.status === 'target' ? styles.cardTarget : ''}`}>
                  <div className={styles.timelinePhase}>{item.phase}</div>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                  {item.status === 'current' && (
                    <div className={styles.timelineBadge}>
                      <span className={styles.badgePulse} />
                      In Progress
                    </div>
                  )}
                  {item.status === 'target' && (
                    <div className={`${styles.timelineBadge} ${styles.badgeTarget}`}>
                      <IconTarget className={iconStyles.svgIconSm} aria-hidden />
                      <span>Launch Target</span>
                    </div>
                  )}
                </div>
                <div className={styles.timelineNode}>
                  <div className={`${styles.timelineDot} ${item.status === 'current' ? styles.dotCurrent : item.status === 'target' ? styles.dotTarget : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} ${styles.sectionIntroCenter} animate-on-scroll`}>
            <span className="sectionLabel">Core Values</span>
            <h2 className="sectionTitle">What We Stand For</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => {
              const ValueIcon = v.Icon;
              return (
                <div key={v.title} className={`${styles.valueCard} animate-on-scroll`}>
                  <div className={styles.valueIcon}>
                    <ValueIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} animate-on-scroll`}>
            <span className="sectionLabel">The Material</span>
            <h2 className="sectionTitle">Why Basalt?</h2>
            <p className={styles.sectionDesc}>
              Formed 65+ million years ago from volcanic magma, basalt rock possesses extraordinary properties
              that make it ideal for modern construction.
            </p>
          </div>
          <div className={styles.propertyGrid}>
            {rockProperties.map((p) => {
              const PropertyIcon = p.Icon;
              return (
                <div key={p.title} className={`${styles.propertyCard} animate-on-scroll`}>
                  <div className={styles.propIcon}>
                    <PropertyIcon className={iconStyles.svgIconMd} aria-hidden />
                  </div>
                  <div className={styles.propStat}>{p.stat}</div>
                  <h4 className={styles.propTitle}>{p.title}</h4>
                  <p className={styles.propDesc}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntroTight} animate-on-scroll`}>
            <span className="sectionLabel">Leadership</span>
            <h2 className="sectionTitle">The Team Behind Basalt</h2>
          </div>
          <div className={styles.teamGrid}>
            {['Chief Executive Officer', 'Chief Technology Officer', 'VP of Operations', 'Head of Investments'].map((role) => (
              <div key={role} className={`${styles.teamCard} animate-on-scroll`}>
                <div className={styles.teamAvatar}>
                  <IconUserCircle className={iconStyles.svgIconXl} aria-hidden />
                </div>
                <div className={styles.teamName}>Coming Soon</div>
                <div className={styles.teamRole}>{role}</div>
              </div>
            ))}
          </div>
          <p className={styles.teamNote}>Leadership team announcements coming in 2026</p>
        </div>
      </section>
    </div>
  );
}
