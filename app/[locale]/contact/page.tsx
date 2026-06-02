'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useState } from 'react';
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconInstagram,
  IconLandmark,
  IconLinkedin,
  IconLocation,
  IconMail,
  IconPhone,
  IconTwitter,
  IconYoutube,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import heroImage from '@/assets/images/heroes/hero-contact.png';
import { useI18n } from '@/lib/i18n/i18n-context';
import type { Messages } from '@/lib/i18n/messages';
import styles from './contact.module.css';

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type SubjectId = Messages['contact']['subjects'][number]['id'];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: SubjectId;
  message: string;
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

const socialLinks: { label: string; url: string; Icon: SvgIcon }[] = [
  { label: 'LinkedIn', url: '#', Icon: IconLinkedin },
  { label: 'X (Twitter)', url: '#', Icon: IconTwitter },
  { label: 'Instagram', url: '#', Icon: IconInstagram },
  { label: 'YouTube', url: '#', Icon: IconYoutube },
];

export default function ContactPage() {
  useScrollAnimation();
  const { messages } = useI18n();
  const c = messages.contact;
  const defaultSubject = c.subjects[0].id;

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = c.errors.name;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = c.errors.email;
    if (!form.message.trim()) e.message = c.errors.message;
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

  const emptyForm = (): FormState => ({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: '',
  });

  return (
    <>
      <PageHero
        tagline={c.heroTag}
        title={
          <>
            {c.heroTitleLine1}
            <br />
            <span className={pageHeroStyles.heroHeadlineAccent}>{c.heroTitleAccent}</span>
          </>
        }
        subtitle={c.heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className={`${styles.infoSection} section`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>
                <IconMail className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h3 className={styles.infoTitle}>{c.emailTitle}</h3>
              <p className={styles.infoValue}>info@basalt.com.sa</p>
              <p className={styles.infoSub}>{c.emailSub}</p>
              <a href="mailto:info@basalt.com.sa" className={styles.infoLink}>
                {c.emailCta}
                <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
              </a>
            </div>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>
                <IconPhone className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h3 className={styles.infoTitle}>{c.phoneTitle}</h3>
              <p className={styles.infoValue}>+966 XX XXX XXXX</p>
              <p className={styles.infoSub}>{c.phoneHours}</p>
              <a href="tel:+966XXXXXXXX" className={styles.infoLink}>
                {c.phoneCta}
                <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
              </a>
            </div>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>
                <IconLocation className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h3 className={styles.infoTitle}>{c.locTitle}</h3>
              <p className={styles.infoValue}>{c.locValue}</p>
              <p className={styles.infoSub}>{c.locSub}</p>
              <span className={styles.infoLink}>{c.locOffice}</span>
            </div>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>
                <IconClock className={iconStyles.svgIconLg} aria-hidden />
              </div>
              <h3 className={styles.infoTitle}>{c.respTitle}</h3>
              <p className={styles.infoValue}>{c.respValue}</p>
              <p className={styles.infoSub}>{c.respSub}</p>
              <div className={styles.trustBadge}>
                <span className={styles.trustDot} />
                {c.respBadge}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.mainSection} section`}>
        <div className="container">
          <div className={styles.mainGrid}>
            <div className={`${styles.formCard} animate-on-scroll`}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>{c.formTitle}</h2>
                <p className={styles.formSubtitle}>{c.formSubtitle}</p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <IconCheck className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.successTitle}>{c.successTitle}</h3>
                  <p className={styles.successText}>{c.successText}</p>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => {
                      setSubmitted(false);
                      setForm(emptyForm());
                    }}
                  >
                    {c.resetBtn}
                  </button>
                </div>
              ) : (
                <div className={styles.formBody}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{c.fieldName}</label>
                      <input
                        className={`${styles.fieldInput} ${errors.name ? styles.fieldError : ''}`}
                        type="text"
                        placeholder={c.placeholderName}
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                      {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{c.fieldCompany}</label>
                      <input
                        className={styles.fieldInput}
                        type="text"
                        placeholder={c.placeholderCompany}
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{c.fieldEmail}</label>
                      <input
                        className={`${styles.fieldInput} ${errors.email ? styles.fieldError : ''}`}
                        type="email"
                        placeholder={c.placeholderEmail}
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                      {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>{c.fieldPhone}</label>
                      <input
                        className={styles.fieldInput}
                        type="tel"
                        placeholder={c.placeholderPhone}
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>{c.fieldSubject}</label>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.fieldSelect}
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value as SubjectId)}
                      >
                        {c.subjects.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>
                        <IconChevronDown className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                      </span>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>{c.fieldMessage}</label>
                    <textarea
                      className={`${styles.fieldTextarea} ${errors.message ? styles.fieldError : ''}`}
                      placeholder={c.placeholderMessage}
                      value={form.message}
                      rows={6}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
                    {c.send}
                    <span className={styles.submitArrow}>
                      <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div className={styles.rightCol}>
              <div className={`${styles.mapContainer} animate-on-scroll`}>
                <div className={styles.mapGrid} />
                <div className={styles.mapContent}>
                  <div className={styles.mapPin}>
                    <div className={styles.mapPinDot} />
                    <div className={styles.mapPinLine} />
                  </div>
                  <div className={styles.mapLabel}>{c.mapLabel}</div>
                  <div className={styles.mapSub}>{c.mapSub}</div>
                  <div className={styles.mapBadge}>{c.mapBadge}</div>
                </div>
              </div>

              <div className={`${styles.socialCard} animate-on-scroll`}>
                <h3 className={styles.socialTitle}>{c.socialTitle}</h3>
                <p className={styles.socialDesc}>{c.socialDesc}</p>
                <div className={styles.socialLinks}>
                  {socialLinks.map(({ label, url, Icon: SocialIcon }) => (
                    <a key={label} href={url} className={styles.socialItem}>
                      <span className={styles.socialIcon}>
                        <SocialIcon className={iconStyles.svgIcon} aria-hidden />
                      </span>
                      <span className={styles.socialName}>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={`${styles.trustCard} animate-on-scroll`}>
                <div className={styles.trustContent}>
                  <span className={styles.trustIcon}>
                    <IconLandmark className={iconStyles.svgIconLg} aria-hidden />
                  </span>
                  <div>
                    <div className={styles.trustTitle}>{c.trustTitle}</div>
                    <div className={styles.trustSub}>{c.trustSub}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
