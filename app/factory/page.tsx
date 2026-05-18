'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect } from 'react';
import {
  IconAnchor,
  IconCheck,
  IconConstruction,
  IconDroplets,
  IconFactory,
  IconFlame,
  IconGear,
  IconLocation,
  IconMountain,
  IconRefreshCw,
  IconWasteReduction,
  IconRoute,
  IconWind,
  IconZap,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import styles from './factory.module.css';

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

const processSteps: { step: string; title: string; desc: string; Icon: SvgIcon }[] = [
  {
    step: '01',
    title: 'Raw Basalt Extraction',
    desc: 'High-purity basalt rock is sourced from certified quarries across the Arabian Shield — one of the world\'s richest basalt reserves.',
    Icon: IconMountain,
  },
  {
    step: '02',
    title: 'Crushing & Sorting',
    desc: 'Rock is crushed to precise sizes using jaw and cone crushers, then sorted by grade through vibrating screens and AI-assisted quality control.',
    Icon: IconGear,
  },
  {
    step: '03',
    title: 'Melting & Fiberization',
    desc: 'Sorted basalt is melted at 1,400–1,500°C in electric furnaces. The molten rock is drawn through platinum-rhodium bushings to form continuous fibers.',
    Icon: IconFlame,
  },
  {
    step: '04',
    title: 'Fiber Processing',
    desc: 'Continuous fibers are wound, chopped, or woven into various forms — rovings, mats, meshes — depending on the target product.',
    Icon: IconRefreshCw,
  },
  {
    step: '05',
    title: 'Product Manufacturing',
    desc: 'Fibers are combined with resins, formed into bars, panels, or meshes using pultrusion, compression molding, or wet lay-up processes.',
    Icon: IconFactory,
  },
  {
    step: '06',
    title: 'Quality Testing & Dispatch',
    desc: 'Every batch undergoes tensile, thermal, and chemical resistance testing against international standards before certification and dispatch.',
    Icon: IconCheck,
  },
];

const equipment = [
  { name: 'Electric Melting Furnace', spec: '2 × 500 kW capacity' },
  { name: 'Fiberization Bushing Lines', spec: '400 filament platinum-rhodium' },
  { name: 'Pultrusion Lines', spec: '3 × automated BFRP bar lines' },
  { name: 'Aggregate Crushing Plant', spec: '150 TPH jaw + cone crusher system' },
  { name: 'Quality Lab', spec: 'ISO 17025 accredited testing facility' },
  { name: 'Environmental Control', spec: 'Closed-loop emission filtration' },
];

const envStandards: { Icon: SvgIcon; label: string; desc: string }[] = [
  { Icon: IconDroplets, label: 'Zero liquid discharge', desc: 'Full water recycling system within the factory' },
  { Icon: IconWind, label: 'Air quality', desc: 'NCEC-compliant filtration on all production exhausts' },
  { Icon: IconWasteReduction, label: 'Waste reduction', desc: '95%+ material utilization — near-zero production waste' },
  { Icon: IconZap, label: 'Energy efficiency', desc: 'Renewable energy target: 40% solar-powered by 2030' },
];

const locationPoints: { Icon: SvgIcon; text: string }[] = [
  { Icon: IconLocation, text: 'Saudi Arabia — exact site TBD' },
  { Icon: IconMountain, text: 'Arabian Shield basalt reserves nearby' },
  { Icon: IconRoute, text: 'Direct highway access to major cities' },
  { Icon: IconAnchor, text: 'Export access via Red Sea / Arabian Gulf ports' },
];

export default function FactoryPage() {
  useScrollAnimation();

  return (
    <>
      <PageHero
        tagline="Factory & Technique"
        title={
          <>
            Where Earth<br />
            <span className={pageHeroStyles.heroHeadlineAccent}>Becomes Architecture</span>
          </>
        }
        subtitle="A state-of-the-art facility designed to transform raw volcanic basalt into premium construction materials at industrial scale."
      />

      <section className={`${styles.locationSection} section`}>
        <div className="container">
          <div className={styles.locationGrid}>
            <div className={`${styles.locationText} animate-on-scroll`}>
              <span className="sectionLabel">Location</span>
              <h2 className="sectionTitle">Situated in the Heart of Saudi Arabia</h2>
              <p className={styles.bodyText}>
                Our factory is strategically located within the Kingdom of Saudi Arabia,
                positioned for optimal access to the Arabian Shield&rsquo;s rich basalt deposits
                and proximity to major construction markets across the GCC.
              </p>
              <div className={styles.locationPoints}>
                {locationPoints.map((pt) => {
                  const PtIcon = pt.Icon;
                  return (
                    <div key={pt.text} className={styles.locationPoint}>
                      <span className={styles.locationIcon}>
                        <PtIcon className={iconStyles.svgIcon} aria-hidden />
                      </span>
                      <span>{pt.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.locationMap} animate-on-scroll`}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapGrid} />
                <div className={styles.mapLabel}>
                  <span className={styles.mapDot} />
                  <span>Kingdom of Saudi Arabia</span>
                </div>
                <div className={styles.mapSubLabel}>Factory Location — TBD 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.processSection} section`}>
        <div className="container">
          <div className={`${styles.processSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">Production Process</span>
            <h2 className="sectionTitle">From Rock to Product</h2>
            <p className={styles.processSectionDesc}>
              A six-stage precision manufacturing process — from raw stone extraction to certified product dispatch.
            </p>
          </div>

          <div className={styles.processFlow}>
            {processSteps.map((step, index) => {
              const StepIcon = step.Icon;
              return (
                <div key={step.step} className={`${styles.processStep} animate-on-scroll`}>
                  <div className={styles.stepConnector}>
                    <div className={styles.stepNumber}>{step.step}</div>
                    {index < processSteps.length - 1 && (
                      <div className={styles.stepLine} />
                    )}
                  </div>
                  <div className={styles.stepCard}>
                    <div className={styles.stepIcon}>
                      <StepIcon className={iconStyles.svgIconMd} aria-hidden />
                    </div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.equipSection} section`}>
        <div className="container">
          <div className={styles.equipGrid}>
            <div className="animate-on-scroll">
              <span className="sectionLabel">Technology</span>
              <h2 className="sectionTitle">Equipment & Technology</h2>
              <p className={`${styles.bodyText} ${styles.equipIntro}`}>
                Our facility will be equipped with industry-leading European and Asian machinery,
                combining proven technology with cutting-edge automation.
              </p>
              <div className={styles.equipList}>
                {equipment.map((e) => (
                  <div key={e.name} className={styles.equipItem}>
                    <div className={styles.equipName}>{e.name}</div>
                    <div className={styles.equipSpec}>{e.spec}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.capacityBox} animate-on-scroll`}>
              <div className={styles.capacityLabel}>
                <span className="sectionLabel">Production Scale</span>
              </div>
              <h3 className={styles.capacityTitle}>Planned Annual Capacity</h3>
              <div className={styles.capacityStats}>
                <div className={styles.capStat}>
                  <div className={styles.capValue}>50,000+</div>
                  <div className={styles.capUnit}>Tonnes/year</div>
                  <div className={styles.capLabel}>Crushed Aggregates</div>
                </div>
                <div className={styles.capDivider} />
                <div className={styles.capStat}>
                  <div className={styles.capValue}>500</div>
                  <div className={styles.capUnit}>Tonnes/year</div>
                  <div className={styles.capLabel}>Basalt Fiber Products</div>
                </div>
                <div className={styles.capDivider} />
                <div className={styles.capStat}>
                  <div className={styles.capValue}>200+</div>
                  <div className={styles.capUnit}>Employees</div>
                  <div className={styles.capLabel}>At Full Operation</div>
                </div>
              </div>
              <div className={styles.capacityNote}>
                Target capacity subject to Phase 2 expansion (2030–2032)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.envSection} section`}>
        <div className="container">
          <div className={`${styles.envSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">Environmental Standards</span>
            <h2 className="sectionTitle">Built Green from Day One</h2>
            <p className={styles.bodyText} style={{ maxWidth: '560px' }}>
              Environmental responsibility is designed into every aspect of our factory —
              from site selection to production processes and waste management.
            </p>
          </div>
          <div className={styles.envGrid}>
            {envStandards.map(({ Icon: EnvIcon, label, desc }) => (
              <div key={label} className={`${styles.envCard} animate-on-scroll`}>
                <div className={styles.envIcon}>
                  <EnvIcon className={iconStyles.svgIconLg} aria-hidden />
                </div>
                <h4 className={styles.envLabel}>{label}</h4>
                <p className={styles.envDesc}>{desc}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.visionBanner} animate-on-scroll`}>
            <div className={styles.visionBannerContent}>
              <span className={styles.visionBannerLabel}>Saudi Green Initiative</span>
              <p className={styles.visionBannerText}>
                Basalt is proud to align with Saudi Arabia&rsquo;s net-zero targets and the National Environmental Strategy.
                Our manufacturing process produces 60% fewer CO₂ emissions than equivalent steel production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
