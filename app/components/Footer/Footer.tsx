import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const productLinks = [
  { label: 'BFRP Bars', href: '/products' },
  { label: 'Crushed Stone', href: '/products' },
  { label: 'Insulation Panels', href: '/products' },
  { label: 'Basalt Rebar', href: '/products' },
  { label: 'Custom Solutions', href: '/products' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Factory & Process', href: '/factory' },
  { label: 'Investments', href: '/investments' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.texture} />

      <div className={styles.inner}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Basalt Logo"
              width={130}
              height={48}
              className={styles.logoImg}
              style={{ width: 'auto', height: '48px' }}
            />
          </Link>
          <p className={styles.tagline}>
            Building Tomorrow,<br />From the Earth&rsquo;s Core.
          </p>
          <div className={styles.openingBadge}>
            <span className={styles.badgeDot} />
            Factory Opening 2028
          </div>
        </div>

        {/* Products */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Products</h4>
          <ul>
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              info@basalt.com.sa
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>✆</span>
              +966 XX XXX XXXX
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactIcon}>◎</span>
              Kingdom of Saudi Arabia
            </p>
          </div>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">𝕏</a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">▣</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © 2026 Basalt Co. — Saudi Arabia. All rights reserved.
          </p>
          <p className={styles.vision}>
            Proudly aligned with{' '}
            <span className={styles.visionHighlight}>Saudi Vision 2030</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
