import Image from 'next/image';
import type { SuccessPartner, SuccessPartnerCategory } from '@/lib/success-partners';
import styles from './SuccessPartnerGrid.module.css';

type SuccessPartnerGridProps = {
  partners: SuccessPartner[];
  categories: SuccessPartnerCategory[];
  categoryLabels: Record<SuccessPartnerCategory, string>;
};

export default function SuccessPartnerGrid({
  partners,
  categories,
  categoryLabels,
}: SuccessPartnerGridProps) {
  return (
    <div className={styles.gridSection}>
      {categories.map((category) => {
        const categoryPartners = partners.filter((partner) => partner.category === category);
        if (categoryPartners.length === 0) return null;

        return (
          <div key={category} className={styles.categoryBlock}>
            <h3 className={styles.categoryLabel}>{categoryLabels[category]}</h3>
            <ul className={styles.grid}>
              {categoryPartners.map((partner) => (
                <li key={partner.id} className={styles.gridItem}>
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={180}
                    height={52}
                    className={styles.partnerLogo}
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
