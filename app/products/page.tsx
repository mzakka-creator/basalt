'use client';

import type { ComponentType, SVGProps } from 'react';
import { useEffect, useState } from 'react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconCoins,
  IconGrid3x3,
  IconHexagon,
  IconLandmark,
  IconLayers,
  IconLeaf,
  IconMesh,
  IconPanel,
  IconScale,
  IconShield,
  IconThermometer,
  IconWrench,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import PageHero from '@/app/components/PageHero/PageHero';
import pageHeroStyles from '@/app/components/PageHero/PageHero.module.css';
import styles from './products.module.css';

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

const products: {
  id: number;
  Icon: SvgIcon;
  name: string;
  category: string;
  desc: string;
  specs: string[];
  highlight: string;
}[] = [
  {
    id: 1,
    Icon: IconGrid3x3,
    name: 'Basalt Fiber Reinforced Polymer (BFRP) Bars',
    category: 'Reinforcement',
    desc: 'Next-generation rebar alternative offering 2× the tensile strength of steel at one-quarter the weight. Completely corrosion-proof — ideal for bridges, tunnels, and marine infrastructure.',
    specs: ['Tensile strength: 1,000–1,500 MPa', 'Density: 2.1 g/cm³', 'Diameter: 6–32 mm', 'Non-magnetic, non-conductive'],
    highlight: 'Best for saltwater environments',
  },
  {
    id: 2,
    Icon: IconLayers,
    name: 'Basalt Crushed Stone & Aggregates',
    category: 'Aggregates',
    desc: 'High-purity crushed basalt stone for road construction, concrete mixes, and ballast. Superior hardness and abrasion resistance versus limestone or granite alternatives.',
    specs: ['Hardness: 8 Mohs scale', 'Compressive strength: 200–300 MPa', 'Sizes: 4–80mm fractions', 'Low water absorption'],
    highlight: 'Premium road construction material',
  },
  {
    id: 3,
    Icon: IconPanel,
    name: 'Basalt Fiber Insulation Panels',
    category: 'Insulation',
    desc: 'Thermal and acoustic insulation panels woven from basalt fiber. Superior fire resistance (non-combustible at 700°C+), moisture-proof, and eco-friendly. No chemical binders required.',
    specs: ['Thermal conductivity: 0.034–0.038 W/m·K', 'Fire resistance: Class A1', 'Temperature range: -260°C to +700°C', 'Thickness: 50–200mm'],
    highlight: 'Non-combustible Class A1',
  },
  {
    id: 4,
    Icon: IconMesh,
    name: 'Basalt Rebar & Mesh',
    category: 'Reinforcement',
    desc: 'Continuous basalt fiber rebar and welded mesh grids for concrete slab reinforcement. Replaces conventional steel mesh with lighter, corrosion-free, long-lasting alternatives.',
    specs: ['Flexural strength: 700–900 MPa', 'Bond strength: >10 MPa', 'Grid sizes: 150×150 to 200×200mm', 'Easy field cutting'],
    highlight: 'Corrosion-free lifetime performance',
  },
  {
    id: 5,
    Icon: IconWrench,
    name: 'Custom Construction Solutions',
    category: 'Custom',
    desc: 'Bespoke basalt-based construction components engineered to your project specifications. From geogrids to chopped fiber additives for concrete mixes — we engineer to your requirements.',
    specs: ['Custom dimensions on request', 'Project-specific engineering', 'Full technical support', 'Prototype to production'],
    highlight: 'Tailored to your project',
  },
];

const advantages: { Icon: SvgIcon; title: string; desc: string }[] = [
  { Icon: IconShield, title: 'Corrosion-Free', desc: 'Unlike steel, basalt fiber products never rust — ideal for coastal, saline, and humid environments.' },
  { Icon: IconThermometer, title: 'Fire Resistant', desc: 'Class A1 non-combustible. Stable performance from -260°C to +700°C — no toxic fumes.' },
  { Icon: IconScale, title: 'Lighter than Steel', desc: 'At 2.1–2.7 g/cm³ vs steel\'s 7.8 g/cm³, basalt materials reduce structural load significantly.' },
  { Icon: IconLeaf, title: 'Eco-Friendly', desc: '100% natural volcanic rock origin. No synthetic binders. Significantly lower carbon footprint.' },
  { Icon: IconCoins, title: 'Long-Term Value', desc: 'Higher upfront savings in infrastructure with 50+ year service life vs 15–20 years for steel.' },
  { Icon: IconLandmark, title: 'Local Supply Chain', desc: 'Saudi-manufactured means shorter supply chains, lower import costs, and Vision 2030 compliance.' },
];

const categories = ['All', 'Reinforcement', 'Aggregates', 'Insulation', 'Custom'];

export default function ProductsPage() {
  useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [flipped, setFlipped] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setFlipped(null);
    setActiveCategory(cat);
  };

  return (
    <>
      <PageHero
        tagline="Our Products"
        title={
          <>
            Basalt-Based<br />
            <span className={pageHeroStyles.heroHeadlineAccent}>Construction Materials</span>
          </>
        }
        subtitle="Five core product lines engineered from volcanic basalt rock — stronger, lighter, and more durable than conventional alternatives."
        banner={
          <div className={styles.comingSoonBanner}>
            <span className={styles.bannerPulse} />
            Products Available Upon Factory Opening — 2028
          </div>
        }
      />

      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>Filter by category:</span>
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterTab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={styles.productGrid}>
            {filtered.map((product, index) => {
              const ProductIcon = product.Icon;
              return (
              <div
                key={product.id}
                className={`${styles.productCard} ${flipped === product.id ? styles.flipped : ''}`}
                style={{ animationDelay: `${index * 0.07}s` }}
                onClick={() => setFlipped(flipped === product.id ? null : product.id)}
              >
                <div className={styles.comingSoonOverlay}>
                  <div className={styles.comingSoonBadge}>
                    <span className={styles.csBadgePulse} />
                    Coming 2028
                  </div>
                </div>

                <div className={styles.cardFront}>
                  <div className={styles.cardCategory}>{product.category}</div>
                  <div className={styles.cardIcon}>
                    <ProductIcon className={iconStyles.svgIconLg} aria-hidden />
                  </div>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <p className={styles.cardDesc}>{product.desc}</p>
                  <div className={styles.cardHighlight}>
                    <IconHexagon className={`${iconStyles.svgIconSm} ${styles.highlightIcon}`} aria-hidden />
                    {product.highlight}
                  </div>
                  <button type="button" className={styles.learnMoreBtn}>
                    View Specs
                    <span className={styles.learnArrow}>
                      <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                    </span>
                  </button>
                </div>

                <div className={styles.cardBack}>
                  <div className={styles.cardCategory}>{product.category}</div>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <div className={styles.specsList}>
                    <p className={styles.specsTitle}>Technical Specifications</p>
                    {product.specs.map((spec) => (
                      <div key={spec} className={styles.specItem}>
                        <span className={styles.specDot}>
                          <IconArrowRight className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                        </span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button type="button" className={styles.backBtn}>
                    <IconArrowLeft className={`${iconStyles.svgIcon} ${iconStyles.svgIconSm}`} aria-hidden />
                    Back
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`${styles.whySectionHead} animate-on-scroll`}>
            <span className="sectionLabel">Advantages</span>
            <h2 className="sectionTitle">Why Choose Basalt Materials?</h2>
          </div>
          <div className={styles.advantageGrid}>
            {advantages.map(({ Icon: AdvIcon, title, desc }) => (
              <div key={title} className={`${styles.advantageItem} animate-on-scroll`}>
                <div className={styles.advIcon}>
                  <AdvIcon className={iconStyles.svgIconLg} aria-hidden />
                </div>
                <h4 className={styles.advTitle}>{title}</h4>
                <p className={styles.advDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
