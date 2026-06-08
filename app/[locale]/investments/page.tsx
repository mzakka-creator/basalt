'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useState } from 'react';
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconDownload,
  IconFileText,
  IconHexagon,
  IconLandmark,
  IconLeaf,
  IconLock,
  IconScale,
  IconTarget,
  IconTrendingUp,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import heroImage from '@/assets/images/heroes/hero-investments.png';
import { useI18n } from '@/lib/i18n/i18n-context';
import type { Messages } from '@/lib/i18n/messages';
import styles from './investments.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type TierId = Messages['investments']['tiers'][number]['id'];

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
  partnerType: TierId;
};

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

const benefitIcons: SvgIcon[] = [
  IconTarget,
  IconLandmark,
  IconTrendingUp,
  IconLeaf,
  IconScale,
  IconHexagon,
];

export default function InvestmentsPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const inv = messages.investments;

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    message: '',
    partnerType: 'strategic',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = inv.errors.name;
    if (!form.company.trim()) e.company = inv.errors.company;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = inv.errors.email;
    if (!form.message.trim()) e.message = inv.errors.message;
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <PageHero
        tagline={inv.heroTag}
        title={
          <>
            <span className={pageHeroStyles.heroHeadlineLead}>{inv.heroTitleLine1}</span>
            <br />
            <span className={pageHeroStyles.heroHeadlineAccent}>{inv.heroTitleAccent}</span>
          </>
        }
        subtitle={inv.heroSubtitle}
        backgroundImage={heroImage}
        brighten
      >
        <div className={styles.heroStats}>
          {inv.marketStats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <div className={styles.heroStatValue}>{s.value}</div>
              <div className={styles.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className={`${styles.tiersSection} section`}>
        <div className="container">
          <div className={`${styles.tiersSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">{inv.tiersLabel}</span>
            <h2 className="sectionTitle">{inv.tiersTitle}</h2>
            <p className={styles.sectionDesc}>{inv.tiersDesc}</p>
          </div>
          <div className={styles.tiersGrid}>
            {inv.tiers.map((tier) => (
              <div
                key={tier.id}
                className={`${styles.tierCard} ${tier.id === 'strategic' ? styles.tierFeatured : ''} animate-on-scroll`}
              >
                {tier.badge ? <div className={styles.tierBadge}>{tier.badge}</div> : null}
                <div className={styles.tierTitle}>{tier.title}</div>
                <div className={styles.tierSubtitle}>{tier.subtitle}</div>
                <div className={styles.tierDivider} />
                <ul className={styles.tierBenefits}>
                  {tier.benefits.map((b) => (
                    <li key={b} className={styles.tierBenefit}>
                      <IconCheck className={`${iconStyles.svgIconSm} ${styles.benefitCheck}`} aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={tier.id === 'strategic' ? styles.tierCtaFeatured : styles.tierCta}
                  onClick={() => {
                    handleChange('partnerType', tier.id);
                    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {tier.cta}
                  <span className={styles.ctaArrow}>
                    <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`${styles.whyInvestHead} animate-on-scroll`}>
            <span className="sectionLabel">{inv.whyLabel}</span>
            <h2 className="sectionTitle">{inv.whyTitle}</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {inv.benefits.map(({ title, desc }, i) => {
              const BenefitIcon = benefitIcons[i];
              return (
                <div key={title} className={`${styles.benefitCard} animate-on-scroll`}>
                  <div className={styles.benefitIcon}>
                    <BenefitIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h4 className={styles.benefitTitle}>{title}</h4>
                  <p className={styles.benefitDesc}>{desc}</p>
                </div>
              );
            })}
          </div>
          <div className={`${styles.vision2030Banner} animate-on-scroll`}>
            <div className={styles.visionFlag}>
              <IconLandmark className={iconStyles.svgIconXl} aria-hidden />
            </div>
            <div>
              <h3 className={styles.visionTitle}>{inv.visionBannerTitle}</h3>
              <p className={styles.visionDesc}>{inv.visionBannerDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry-form" className={`${styles.formSection} section`}>
        <div className="container">
          <div className={styles.formGrid}>
            <div className="animate-on-scroll">
              <span className="sectionLabel">{inv.formLabel}</span>
              <h2 className="sectionTitle">{inv.formTitle}</h2>
              <p className={styles.formIntro}>{inv.formIntro}</p>
              <div className={styles.formSideInfo}>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconLock className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>{inv.formConfidential}</span>
                </div>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconClock className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>{inv.formResponse}</span>
                </div>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconFileText className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>{inv.formDeck}</span>
                </div>
              </div>
              <button type="button" className={styles.brochureBtn}>
                <IconDownload className={iconStyles.svgIcon} aria-hidden />
                {inv.brochure}
                <span className={styles.brochureNote}>{inv.brochureNote}</span>
              </button>
            </div>

            <div className={`${styles.formCard} animate-on-scroll`}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <IconCheck className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.successTitle}>{inv.successTitle}</h3>
                  <p className={styles.successText}>{inv.successText}</p>
                </div>
              ) : (
                <>
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>{inv.fieldPartnerType}</label>
                    <div className={styles.typeSelector}>
                      {inv.tiers.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          className={`${styles.typeOption} ${form.partnerType === t.id ? styles.typeActive : ''}`}
                          onClick={() => handleChange('partnerType', t.id)}
                        >
                          {t.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{inv.fieldName}</label>
                      <input
                        className={`${styles.fieldInput} ${errors.name ? styles.fieldError : ''}`}
                        type="text"
                        placeholder={inv.placeholderName}
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                      {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{inv.fieldCompany}</label>
                      <input
                        className={`${styles.fieldInput} ${errors.company ? styles.fieldError : ''}`}
                        type="text"
                        placeholder={inv.placeholderCompany}
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                      {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>{inv.fieldEmail}</label>
                    <input
                      className={`${styles.fieldInput} ${errors.email ? styles.fieldError : ''}`}
                      type="email"
                      placeholder={inv.placeholderEmail}
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>{inv.fieldMessage}</label>
                    <textarea
                      className={`${styles.fieldTextarea} ${errors.message ? styles.fieldError : ''}`}
                      placeholder={inv.placeholderMessage}
                      value={form.message}
                      rows={5}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
                    {inv.submit}
                    <span className={styles.submitArrow}>
                      <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
