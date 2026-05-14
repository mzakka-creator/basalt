'use client';

import { useEffect, useState } from 'react';
import styles from './contact.module.css';

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

const subjectOptions = [
  'General Inquiry',
  'Investment & Partnership',
  'Product Information',
  'Factory Visit / Tour',
  'Careers & Jobs',
  'Media & Press',
  'Other',
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  useScrollAnimation();
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.message.trim()) e.message = 'Message is required';
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
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <span className="sectionLabel">Contact Us</span>
          <h1 className={styles.pageTitle}>Let&rsquo;s Start<br />a Conversation</h1>
          <p className={styles.pageSubtitle}>
            Have a question, investment inquiry, or just want to know more?
            Our team is ready to respond within 48 hours.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className={`${styles.infoSection} section`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>✉</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoValue}>info@basalt.com.sa</p>
              <p className={styles.infoSub}>For general inquiries</p>
              <a href="mailto:info@basalt.com.sa" className={styles.infoLink}>Send Email →</a>
            </div>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>✆</div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoValue}>+966 XX XXX XXXX</p>
              <p className={styles.infoSub}>Sun – Thu, 9:00 AM – 5:00 PM AST</p>
              <a href="tel:+966XXXXXXXX" className={styles.infoLink}>Call Us →</a>
            </div>
            <div className={`${styles.infoCard} animate-on-scroll`}>
              <div className={styles.infoIcon}>◎</div>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoValue}>Kingdom of Saudi Arabia</p>
              <p className={styles.infoSub}>Factory site — to be announced</p>
              <span className={styles.infoLink}>Riyadh Registered Office</span>
            </div>
            <div className={`${styles.infoCard} ${styles.infoCardHighlight} animate-on-scroll`}>
              <div className={styles.infoIcon}>⏱</div>
              <h3 className={styles.infoTitle}>Response Time</h3>
              <p className={styles.infoValue}>Within 48 Hours</p>
              <p className={styles.infoSub}>We respond to every inquiry</p>
              <div className={styles.trustBadge}>
                <span className={styles.trustDot} />
                Guaranteed response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className={`${styles.mainSection} section`}>
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Form */}
            <div className={`${styles.formCard} animate-on-scroll`}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>Fields marked with * are required</p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. We&rsquo;ll get back to you within 48 hours.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className={styles.formBody}>
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
                      <label className={styles.fieldLabel}>Company</label>
                      <input
                        className={styles.fieldInput}
                        type="text"
                        placeholder="Your company (optional)"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>Email Address *</label>
                      <input
                        className={`${styles.fieldInput} ${errors.email ? styles.fieldError : ''}`}
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                      {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.fieldLabel}>Phone Number</label>
                      <input
                        className={styles.fieldInput}
                        type="tel"
                        placeholder="+966 XX XXX XXXX"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Subject</label>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.fieldSelect}
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                      >
                        {subjectOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.fieldLabel}>Message *</label>
                    <textarea
                      className={`${styles.fieldTextarea} ${errors.message ? styles.fieldError : ''}`}
                      placeholder="How can we help you?"
                      value={form.message}
                      rows={6}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button className={styles.submitBtn} onClick={handleSubmit}>
                    Send Message
                    <span className={styles.submitArrow}>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Map + Social */}
            <div className={styles.rightCol}>
              {/* Map Placeholder */}
              <div className={`${styles.mapContainer} animate-on-scroll`}>
                <div className={styles.mapGrid} />
                <div className={styles.mapContent}>
                  <div className={styles.mapPin}>
                    <div className={styles.mapPinDot} />
                    <div className={styles.mapPinLine} />
                  </div>
                  <div className={styles.mapLabel}>Saudi Arabia</div>
                  <div className={styles.mapSub}>Kingdom of Saudi Arabia</div>
                  <div className={styles.mapBadge}>Factory Site — TBD 2026</div>
                </div>
              </div>

              {/* Social */}
              <div className={`${styles.socialCard} animate-on-scroll`}>
                <h3 className={styles.socialTitle}>Follow Our Journey</h3>
                <p className={styles.socialDesc}>
                  Stay updated on factory progress, product launches, and investment opportunities.
                </p>
                <div className={styles.socialLinks}>
                  {[
                    { label: 'LinkedIn', icon: 'in', url: '#' },
                    { label: 'X (Twitter)', icon: '𝕏', url: '#' },
                    { label: 'Instagram', icon: '▣', url: '#' },
                    { label: 'YouTube', icon: '▶', url: '#' },
                  ].map((s) => (
                    <a key={s.label} href={s.url} className={styles.socialItem}>
                      <span className={styles.socialIcon}>{s.icon}</span>
                      <span className={styles.socialName}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className={`${styles.trustCard} animate-on-scroll`}>
                <div className={styles.trustContent}>
                  <span className={styles.trustIcon}>🇸🇦</span>
                  <div>
                    <div className={styles.trustTitle}>Registered in Saudi Arabia</div>
                    <div className={styles.trustSub}>Fully compliant with Saudi commercial law</div>
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
