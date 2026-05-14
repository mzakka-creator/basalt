'use client';

import { useEffect } from 'react';
import styles from './about.module.css';

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

const values = [
  {
    icon: '◈',
    title: 'Innovation',
    desc: 'Applying the latest basalt fiber technologies and continuous R&D to stay ahead of global construction trends.',
  },
  {
    icon: '♻',
    title: 'Sustainability',
    desc: 'Basalt is 100% natural. Our processes are designed to minimize carbon footprint and maximize material longevity.',
  },
  {
    icon: '⬡',
    title: 'Quality',
    desc: 'Every product leaving our factory meets or exceeds international standards — zero compromise on performance.',
  },
  {
    icon: '🇸🇦',
    title: 'Saudi Pride',
    desc: 'Built in Saudi Arabia, for Saudi Arabia. Proudly supporting Vision 2030 and the growth of domestic industry.',
  },
];

const rockProperties = [
  { icon: '🌡', title: 'Heat Resistance', stat: 'Up to 700°C', desc: 'Superior performance in high-temperature environments compared to steel or fiberglass.' },
  { icon: '💪', title: 'Tensile Strength', stat: '4,840 MPa', desc: 'Basalt fiber offers exceptional tensile strength, surpassing fiberglass by up to 30%.' },
  { icon: '⚡', title: 'Chemical Resistance', stat: 'pH 1–14', desc: 'Naturally resistant to acids, alkalis, and corrosive environments — ideal for infrastructure.' },
  { icon: '🏋', title: 'Lightweight', stat: '2.7 g/cm³', desc: 'Lower density than steel, reducing structural load while maintaining superior strength.' },
  { icon: '♻', title: 'Eco-Friendly', stat: '0 Toxic', desc: 'No binders, no toxic emissions during production. Fully natural volcanic rock origin.' },
  { icon: '📐', title: 'Dimensional Stability', stat: '±0.01%', desc: 'Exceptional resistance to thermal expansion and contraction over its lifespan.' },
];

export default function AboutPage() {
  useScrollAnimation();

  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <span className="sectionLabel">Who Are We</span>
          <h1 className={styles.pageTitle}>Built on Vision,<br />Forged from the Earth</h1>
          <p className={styles.pageSubtitle}>
            A future-forward Saudi company transforming volcanic basalt rock into the building blocks of tomorrow&rsquo;s infrastructure.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={`${styles.visionSection} section`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={`${styles.vmCard} animate-on-scroll`}>
              <div className={styles.vmIcon}>◈</div>
              <h2 className={styles.vmTitle}>Our Vision</h2>
              <p className={styles.vmText}>
                To become the Middle East&rsquo;s leading producer of basalt construction materials —
                setting the benchmark for quality, innovation, and sustainability in the region&rsquo;s
                rapidly growing construction sector.
              </p>
            </div>
            <div className={`${styles.vmCard} ${styles.vmCardAccent} animate-on-scroll`}>
              <div className={styles.vmIcon}>⬡</div>
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

      {/* TIMELINE */}
      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <div className="animate-on-scroll" style={{ marginBottom: '64px' }}>
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
                      🎯 Launch Target
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

      {/* VALUES */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="sectionLabel">Core Values</span>
            <h2 className="sectionTitle" style={{ textAlign: 'center' }}>What We Stand For</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`${styles.valueCard} animate-on-scroll`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BASALT */}
      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className="animate-on-scroll" style={{ marginBottom: '56px' }}>
            <span className="sectionLabel">The Material</span>
            <h2 className="sectionTitle">Why Basalt?</h2>
            <p className={styles.sectionDesc}>
              Formed 65+ million years ago from volcanic magma, basalt rock possesses extraordinary properties
              that make it ideal for modern construction.
            </p>
          </div>
          <div className={styles.propertyGrid}>
            {rockProperties.map((p) => (
              <div key={p.title} className={`${styles.propertyCard} animate-on-scroll`}>
                <div className={styles.propIcon}>{p.icon}</div>
                <div className={styles.propStat}>{p.stat}</div>
                <h4 className={styles.propTitle}>{p.title}</h4>
                <p className={styles.propDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PLACEHOLDER */}
      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <div className="animate-on-scroll" style={{ marginBottom: '48px' }}>
            <span className="sectionLabel">Leadership</span>
            <h2 className="sectionTitle">The Team Behind Basalt</h2>
          </div>
          <div className={styles.teamGrid}>
            {['Chief Executive Officer', 'Chief Technology Officer', 'VP of Operations', 'Head of Investments'].map((role) => (
              <div key={role} className={`${styles.teamCard} animate-on-scroll`}>
                <div className={styles.teamAvatar}>
                  <div className={styles.avatarIcon}>◎</div>
                </div>
                <div className={styles.teamName}>Coming Soon</div>
                <div className={styles.teamRole}>{role}</div>
              </div>
            ))}
          </div>
          <p className={styles.teamNote}>Leadership team announcements coming in 2026</p>
        </div>
      </section>
    </>
  );
}
