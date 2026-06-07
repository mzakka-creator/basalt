import Image from 'next/image';
import type { HomePartner } from '@/lib/home-partners';
import styles from './PartnerMarquee.module.css';

type PartnerMarqueeProps = {
  partners: HomePartner[];
};

export default function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  const track = [...partners, ...partners];

  return (
    <div className={styles.marquee} aria-label="Strategic partners">
      <div className={styles.marqueeTrack}>
        {track.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className={styles.marqueeItem}>
            <Image
              src={partner.logoSrc}
              alt={partner.name}
              width={200}
              height={56}
              className={styles.partnerLogo}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
