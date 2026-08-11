'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconInstagram, IconLinkedin, IconLocation, IconMail, IconPhone } from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import logo from '@/assets/logo/logo.png';
import styles from './Footer.module.css';
import { useI18n } from '@/lib/i18n/i18n-context';

export default function Footer() {
  const { messages, href } = useI18n();
  const f = messages.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href={href('/')} className={styles.logo}>
            <Image
              src={logo}
              alt="Basalt"
              width={130}
              height={48}
              className={styles.logoImg}
              style={{ width: 'auto', height: '48px' }}
            />
          </Link>
          <p className={styles.tagline}>
            {f.taglineLine1}
            <br />
            {f.taglineLine2}
          </p>
          <div className={styles.openingBadge}>
            <span className={styles.badgeDot} />
            {f.openingBadge}
          </div>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>{f.productsTitle}</h4>
          <ul>
            {f.productLinks.map((l) => (
              <li key={l.label}>
                <Link href={href(l.path)} className={styles.footerLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>{f.companyTitle}</h4>
          <ul>
            {f.companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={href(l.path)} className={styles.footerLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>{f.touchTitle}</h4>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <IconMail className={iconStyles.svgIcon} aria-hidden />
              </span>
              admin@basalt.com.sa
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <IconPhone className={iconStyles.svgIcon} aria-hidden />
              </span>
              <span className={styles.phoneNumber}>+966 555 251 338</span>
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <IconLocation className={iconStyles.svgIcon} aria-hidden />
              </span>
              {f.location}
            </p>
          </div>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label={f.linkedin}>
              <IconLinkedin className={iconStyles.svgIcon} aria-hidden />
            </a>
            <a href="#" className={styles.socialLink} aria-label={f.instagram}>
              <IconInstagram className={iconStyles.svgIcon} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>{f.copyright}</p>
          <p className={styles.vision}>
            {f.visionPrefix}{' '}
            <span className={styles.visionHighlight}>{f.visionHighlight}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
