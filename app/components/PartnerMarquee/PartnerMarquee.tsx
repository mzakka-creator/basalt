import Image from 'next/image';
import type { HomePartner } from '@/lib/home-partners';
import styles from './PartnerMarquee.module.css';

type PartnerMarqueeProps = {
  partners: HomePartner[];
};

function PartnerCard({ partner }: { partner: HomePartner }) {
  const cardClass =
    partner.id === 'double-act'
      ? `${styles.marqueeItem} ${styles.marqueeItemDoubleAct}`
      : styles.marqueeItem;

  const logo = (
    <span className={styles.logoWrap}>
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        className={styles.partnerLogo}
        sizes="280px"
        unoptimized
      />
    </span>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        className={cardClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
      >
        {logo}
      </a>
    );
  }

  return <div className={cardClass}>{logo}</div>;
}

export default function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  const track = [...partners, ...partners];

  return (
    <div className={styles.marquee} aria-label="Strategic partners">
      <div className={styles.marqueeTrack}>
        {track.map((partner, index) => (
          <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}
