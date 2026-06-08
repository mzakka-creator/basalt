import Image from 'next/image';
import type { HomePartner } from '@/lib/home-partners';
import styles from './PartnerMarquee.module.css';

type PartnerMarqueeProps = {
  partners: HomePartner[];
};

function PartnerCard({ partner }: { partner: HomePartner }) {
  const logo = (
    <Image
      src={partner.logo}
      alt={partner.name}
      className={styles.partnerLogo}
      unoptimized
    />
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        className={styles.marqueeItem}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
      >
        {logo}
      </a>
    );
  }

  return <div className={styles.marqueeItem}>{logo}</div>;
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
