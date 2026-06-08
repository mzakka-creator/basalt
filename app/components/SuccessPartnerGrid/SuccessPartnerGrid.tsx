import Image from 'next/image';
import type { SuccessPartner } from '@/lib/success-partners';
import styles from './SuccessPartnerGrid.module.css';

type SuccessPartnerGridProps = {
  partners: SuccessPartner[];
};

export default function SuccessPartnerGrid({ partners }: SuccessPartnerGridProps) {
  return (
    <ul className={styles.grid}>
      {partners.map((partner) => (
        <li key={partner.id} className={styles.gridItem}>
          <Image
            src={partner.logo}
            alt={partner.name}
            className={styles.partnerLogo}
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}
