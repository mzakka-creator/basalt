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
import { useI18n } from '@/lib/i18n/i18n-context';
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

const valueIcons: SvgIcon[] = [IconSparkles, IconLeaf, IconAward, IconLandmark];
const rockIcons: SvgIcon[] = [IconThermometer, IconStrength, IconFlask, IconFeather, IconLeaf, IconRuler];

export default function AboutPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const a = messages.about;
  const c = messages.common;

  return (
    <div className={styles.aboutRoot}>
      <PageHero
        tagline={a.heroTag}
        title={
          <>
            {a.heroTitleLine1}
            <br />
            <span className={pageHeroStyles.heroHeadlineAccent}>{a.heroTitleAccent}</span>
          </>
        }
        subtitle={a.heroSubtitle}
      />

      <section className={`${styles.visionSection} section`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={`${styles.vmCard} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconSparkles className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>{a.visionTitle}</h2>
              <p className={styles.vmText}>{a.visionText}</p>
            </div>
            <div className={`${styles.vmCard} ${styles.vmCardAccent} animate-on-scroll`}>
              <div className={styles.vmIcon}>
                <IconTarget className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h2 className={styles.vmTitle}>{a.missionTitle}</h2>
              <p className={styles.vmText}>{a.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.timelineSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} animate-on-scroll`}>
            <span className="sectionLabel">{a.roadmapLabel}</span>
            <h2 className="sectionTitle">{a.roadmapTitle}</h2>
            <p className={styles.sectionDesc}>{a.roadmapDesc}</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {a.timeline.map((item, i) => (
              <div
                key={item.year}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight} animate-on-scroll`}
              >
                <div
                  className={`${styles.timelineCard} ${item.status === 'current' ? styles.cardCurrent : item.status === 'target' ? styles.cardTarget : ''}`}
                >
                  <div className={styles.timelinePhase}>{item.phase}</div>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                  {item.status === 'current' && (
                    <div className={styles.timelineBadge}>
                      <span className={styles.badgePulse} />
                      {c.inProgress}
                    </div>
                  )}
                  {item.status === 'target' && (
                    <div className={`${styles.timelineBadge} ${styles.badgeTarget}`}>
                      <IconTarget className={iconStyles.svgIconSm} aria-hidden />
                      <span>{c.launchTarget}</span>
                    </div>
                  )}
                </div>
                <div className={styles.timelineNode}>
                  <div
                    className={`${styles.timelineDot} ${item.status === 'current' ? styles.dotCurrent : item.status === 'target' ? styles.dotTarget : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} ${styles.sectionIntroCenter} animate-on-scroll`}>
            <span className="sectionLabel">{a.valuesLabel}</span>
            <h2 className="sectionTitle">{a.valuesTitle}</h2>
          </div>
          <div className={styles.valuesGrid}>
            {a.values.map((v, i) => {
              const ValueIcon = valueIcons[i];
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
            <span className="sectionLabel">{a.materialLabel}</span>
            <h2 className="sectionTitle">{a.materialTitle}</h2>
            <p className={styles.sectionDesc}>{a.materialDesc}</p>
          </div>
          <div className={styles.propertyGrid}>
            {a.rockProps.map((p, i) => {
              const PropertyIcon = rockIcons[i];
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
            <span className="sectionLabel">{a.teamLabel}</span>
            <h2 className="sectionTitle">{a.teamTitle}</h2>
          </div>
          <div className={styles.teamGrid}>
            {a.teamRoles.map((role) => (
              <div key={role} className={`${styles.teamCard} animate-on-scroll`}>
                <div className={styles.teamAvatar}>
                  <IconUserCircle className={iconStyles.svgIconXl} aria-hidden />
                </div>
                <div className={styles.teamName}>{c.comingSoon}</div>
                <div className={styles.teamRole}>{role}</div>
              </div>
            ))}
          </div>
          <p className={styles.teamNote}>{a.teamNote}</p>
        </div>
      </section>
    </div>
  );
}
