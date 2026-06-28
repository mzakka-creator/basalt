'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useRef } from 'react';
import {
  IconAnchor,
  IconCheck,
  IconDroplets,
  IconFactory,
  IconFlame,
  IconGear,
  IconLocation,
  IconMountain,
  IconRefreshCw,
  IconRoute,
  IconWasteReduction,
  IconWind,
  IconZap,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import HeroHeadline from '@/app/components/PageHero/HeroHeadline';
import PageHero from '@/app/components/PageHero/PageHero';
import heroImage from '@/assets/images/heroes/hero-factory.png';
import { getFactoryVideoSrc } from '@/lib/factory-video';
import { useI18n } from '@/lib/i18n/i18n-context';
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

const stepIcons: SvgIcon[] = [IconMountain, IconGear, IconFlame, IconRefreshCw, IconFactory, IconCheck];

const locationIcons: SvgIcon[] = [IconLocation, IconMountain, IconRoute, IconAnchor];

const envIcons: SvgIcon[] = [IconDroplets, IconWind, IconWasteReduction, IconZap];

function FactoryVideo({ title }: { title: string }) {
  const lastTimeRef = useRef(0);

  return (
    <video
      className={styles.videoPlayer}
      src={getFactoryVideoSrc()}
      title={title}
      aria-label={title}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      tabIndex={-1}
      controlsList="nodownload nofullscreen noremoteplayback"
      onContextMenu={(event) => event.preventDefault()}
      onTimeUpdate={(event) => {
        lastTimeRef.current = event.currentTarget.currentTime;
      }}
      onSeeking={(event) => {
        event.currentTarget.currentTime = lastTimeRef.current;
      }}
      onPause={(event) => {
        void event.currentTarget.play();
      }}
    />
  );
}

export default function FactoryPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const f = messages.factory;

  return (
    <>
      <PageHero
        tagline={f.heroTag}
        title={<HeroHeadline line1={f.heroTitleLine1} line2={f.heroTitleAccent} />}
        subtitle={f.heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className={`${styles.videoSection} section`}>
        <div className="container">
          <div className={styles.videoBlock}>
            <h2 className={`sectionTitle ${styles.videoTitle}`}>{f.videoTitle}</h2>
            <div className={styles.videoWrap}>
              <FactoryVideo title={f.videoTitle} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.locationSection} section`}>
        <div className="container">
          <div className={styles.locationGrid}>
            <div className={`${styles.locationText} animate-on-scroll`}>
              <span className="sectionLabel">{f.locationLabel}</span>
              <h2 className="sectionTitle">{f.locationTitle}</h2>
              <p className={styles.bodyText}>{f.locationBody}</p>
              <div className={styles.locationPoints}>
                {f.locationPoints.map((text, i) => {
                  const PtIcon = locationIcons[i];
                  return (
                    <div key={text} className={styles.locationPoint}>
                      <span className={styles.locationIcon}>
                        <PtIcon className={iconStyles.svgIcon} aria-hidden />
                      </span>
                      <span>{text}</span>
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
                  <span>{f.mapCountry}</span>
                </div>
                <div className={styles.mapSubLabel}>{f.mapSub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.processSection} section`}>
        <div className="container">
          <div className={`${styles.processSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">{f.processLabel}</span>
            <h2 className="sectionTitle">{f.processTitle}</h2>
            <p className={styles.processSectionDesc}>{f.processDesc}</p>
          </div>

          <div className={styles.processFlow}>
            {f.steps.map((step, index) => {
              const StepIcon = stepIcons[index];
              return (
                <div key={step.step} className={`${styles.processStep} animate-on-scroll`}>
                  <div className={styles.stepConnector}>
                    <div className={styles.stepNumber}>{step.step}</div>
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
              <span className="sectionLabel">{f.techLabel}</span>
              <h2 className="sectionTitle">{f.techTitle}</h2>
              <p className={`${styles.bodyText} ${styles.equipIntro}`}>{f.techIntro}</p>
              <div className={styles.equipList}>
                {f.equipment.map((e) => (
                  <div key={e.name} className={styles.equipItem}>
                    <div className={styles.equipName}>{e.name}</div>
                    <div className={styles.equipSpec}>{e.spec}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.capacityBox} animate-on-scroll`}>
              <div className={styles.capacityLabel}>
                <span className="sectionLabel">{f.scaleLabel}</span>
              </div>
              <h3 className={styles.capacityTitle}>{f.capacityTitle}</h3>
              <div className={styles.capacityStats}>
                <div className={styles.capStat}>
                  <div className={styles.capValue}>{f.capCrushedVal}</div>
                  <div className={styles.capUnit}>{f.capCrushedUnit}</div>
                  <div className={styles.capLabel}>{f.capCrushedLabel}</div>
                </div>
                <div className={styles.capDivider} />
                <div className={styles.capStat}>
                  <div className={styles.capValue}>{f.capFiberVal}</div>
                  <div className={styles.capUnit}>{f.capFiberUnit}</div>
                  <div className={styles.capLabel}>{f.capFiberLabel}</div>
                </div>
                <div className={styles.capDivider} />
                <div className={styles.capStat}>
                  <div className={styles.capValue}>{f.capEmpVal}</div>
                  <div className={styles.capUnit}>{f.capEmpUnit}</div>
                  <div className={styles.capLabel}>{f.capEmpLabel}</div>
                </div>
              </div>
              <div className={styles.capacityNote}>{f.capacityNote}</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.envSection} section`}>
        <div className="container">
          <div className={`${styles.envSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">{f.envLabel}</span>
            <h2 className="sectionTitle">{f.envTitle}</h2>
            <p className={styles.bodyText} style={{ maxWidth: '560px' }}>
              {f.envIntro}
            </p>
          </div>
          <div className={styles.envGrid}>
            {f.envCards.map(({ label, desc }, i) => {
              const EnvIcon = envIcons[i];
              return (
                <div key={label} className={`${styles.envCard} animate-on-scroll`}>
                  <div className={styles.envIcon}>
                    <EnvIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h4 className={styles.envLabel}>{label}</h4>
                  <p className={styles.envDesc}>{desc}</p>
                </div>
              );
            })}
          </div>
          <div className={`${styles.visionBanner} animate-on-scroll`}>
            <div className={styles.visionBannerContent}>
              <span className={styles.visionBannerLabel}>{f.greenLabel}</span>
              <p className={styles.visionBannerText}>{f.greenBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
