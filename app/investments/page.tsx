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
import styles from './investments.module.css';

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

const tiers = [
  {
    id: 'financial',
    badge: '',
    title: 'Financial Investor',
    subtitle: 'Equity participation in Basalt Co.',
    benefits: [
      'Equity stake with dividend rights',
      'Board observer seat (threshold-based)',
      'Quarterly financial reporting',
      'Pre-IPO positioning access',
      'Transparent governance structure',
    ],
    cta: 'Inquire About Financial Investment',
    featured: false,
  },
  {
    id: 'strategic',
    badge: 'Most Sought After',
    title: 'Strategic Partner',
    subtitle: 'Deep integration with Basalt operations',
    benefits: [
      'Exclusive regional distribution rights',
      'Co-branding and white-label options',
      'Priority product allocation',
      'Joint R&D and product development',
      'Board representation',
      'Vision 2030 project pipeline access',
    ],
    cta: 'Apply as Strategic Partner',
    featured: true,
  },
  {
    id: 'distribution',
    badge: '',
    title: 'Distribution Partner',
    subtitle: 'Market access across the GCC',
    benefits: [
      'Exclusive territory distribution rights',
      'Sales training & technical support',
      'Marketing materials & co-op advertising',
      'Volume pricing and rebate structure',
      'Basalt co-branding for your market',
    ],
    cta: 'Become a Distributor',
    featured: false,
  },
];

const marketStats = [
  { value: '$1.5T', label: 'Saudi construction market projected value by 2030' },
  { value: '847+', label: 'Active Vision 2030 projects requiring materials' },
  { value: '14%', label: 'Annual growth rate of basalt fiber global market' },
  { value: '0', label: 'Domestic basalt manufacturers in Saudi Arabia currently' },
];

const benefits: { Icon: SvgIcon; title: string; desc: string }[] = [
  { Icon: IconTarget, title: 'First-Mover Advantage', desc: 'Be part of the only dedicated basalt factory in Saudi Arabia — before the market matures.' },
  { Icon: IconLandmark, title: 'Vision 2030 Aligned', desc: 'NEOM, Red Sea, Diriyah Gate — all require massive construction materials locally sourced.' },
  { Icon: IconTrendingUp, title: 'High-Growth Sector', desc: 'The global basalt fiber market is forecast to reach USD 4.2 billion by 2032 at 14% CAGR.' },
  { Icon: IconLeaf, title: 'ESG Credentials', desc: 'Green material credentials support ESG mandates for institutional and sovereign investors.' },
  { Icon: IconScale, title: 'Import Substitution', desc: 'Saudi Arabia imports 100% of its basalt materials. We eliminate that dependency.' },
  { Icon: IconHexagon, title: 'Diversified Revenue', desc: 'Multiple product lines across aggregates, fiber products, and custom solutions reduce risk.' },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
  partnerType: string;
};

export default function InvestmentsPage() {
  useScrollAnimation();
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
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.company.trim()) e.company = 'Company is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.message.trim()) e.message = 'Please describe your interest';
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

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <PageHero
        tagline="Investments & Partnerships"
        title={
          <>
            Partner With the<br />
            <span className={pageHeroStyles.heroHeadlineAccent}>Future of Construction</span>
          </>
        }
        subtitle="Secure your position as a founding partner in Saudi Arabia&rsquo;s first basalt materials factory. Opportunities are limited and selective."
      >
        <div className={styles.heroStats}>
          {marketStats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <div className={styles.heroStatValue}>{s.value}</div>
              <div className={styles.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* TIERS */}
      <section className={`${styles.tiersSection} section`}>
        <div className="container">
          <div className={`${styles.tiersSectionHead} animate-on-scroll`}>
            <span className="sectionLabel">Partnership Tiers</span>
            <h2 className="sectionTitle">Three Ways to Partner</h2>
            <p className={styles.sectionDesc}>
              Choose the partnership model that best fits your strategic or financial objectives.
            </p>
          </div>
          <div className={styles.tiersGrid}>
            {tiers.map((tier) => (
              <div key={tier.id} className={`${styles.tierCard} ${tier.featured ? styles.tierFeatured : ''} animate-on-scroll`}>
                {tier.badge && (
                  <div className={styles.tierBadge}>{tier.badge}</div>
                )}
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
                  className={tier.featured ? styles.tierCtaFeatured : styles.tierCta}
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

      {/* WHY INVEST */}
      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`${styles.whyInvestHead} animate-on-scroll`}>
            <span className="sectionLabel">Why Invest</span>
            <h2 className="sectionTitle">The Investment Case</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map(({ Icon: BenefitIcon, title, desc }) => (
              <div key={title} className={`${styles.benefitCard} animate-on-scroll`}>
                <div className={styles.benefitIcon}>
                  <BenefitIcon className={iconStyles.svgIconLg} aria-hidden />
                </div>
                <h4 className={styles.benefitTitle}>{title}</h4>
                <p className={styles.benefitDesc}>{desc}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.vision2030Banner} animate-on-scroll`}>
            <div className={styles.visionFlag}>
              <IconLandmark className={iconStyles.svgIconXl} aria-hidden />
            </div>
            <div>
              <h3 className={styles.visionTitle}>Saudi Vision 2030</h3>
              <p className={styles.visionDesc}>
                Basalt Co. is directly aligned with Vision 2030&rsquo;s industrial diversification goals —
                building Saudi manufacturing capacity, reducing imports, creating high-value jobs,
                and supplying the Kingdom&rsquo;s unprecedented infrastructure buildout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry-form" className={`${styles.formSection} section`}>
        <div className="container">
          <div className={styles.formGrid}>
            <div className={`animate-on-scroll`}>
              <span className="sectionLabel">Get In Touch</span>
              <h2 className="sectionTitle">Start a Conversation</h2>
              <p className={styles.formIntro}>
                Fill in your details and our partnerships team will reach out within 48 hours
                with a confidential information pack.
              </p>
              <div className={styles.formSideInfo}>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconLock className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>All enquiries are strictly confidential</span>
                </div>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconClock className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>Response within 48 business hours</span>
                </div>
                <div className={styles.sideInfoItem}>
                  <span className={styles.sideIcon}>
                    <IconFileText className={iconStyles.svgIcon} aria-hidden />
                  </span>
                  <span>Investment deck available upon request</span>
                </div>
              </div>
              <button type="button" className={styles.brochureBtn}>
                <IconDownload className={iconStyles.svgIcon} aria-hidden />
                Download Investment Brochure
                <span className={styles.brochureNote}>(Coming Soon)</span>
              </button>
            </div>

            <div className={`${styles.formCard} animate-on-scroll`}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <IconCheck className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Received</h3>
                  <p className={styles.successText}>
                    Thank you for your interest in partnering with Basalt Co.
                    Our team will contact you within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  {/* Partnership Type Selector */}
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Partnership Type</label>
                    <div className={styles.typeSelector}>
                      {tiers.map((t) => (
                        <button
                          key={t.id}
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
                      <label className={styles.fieldLabel}>Full Name *</label>
                      <input
                        className={`${styles.fieldInput} ${errors.name ? styles.fieldError : ''}`}
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                      {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>Company *</label>
                      <input
                        className={`${styles.fieldInput} ${errors.company ? styles.fieldError : ''}`}
                        type="text"
                        placeholder="Company or organization"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                      {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Email Address *</label>
                    <input
                      className={`${styles.fieldInput} ${errors.email ? styles.fieldError : ''}`}
                      type="email"
                      placeholder="your@company.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Message *</label>
                    <textarea
                      className={`${styles.fieldTextarea} ${errors.message ? styles.fieldError : ''}`}
                      placeholder="Describe your interest, background, and what you're looking for..."
                      value={form.message}
                      rows={5}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button className={styles.submitBtn} onClick={handleSubmit}>
                    Submit Partnership Inquiry
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
