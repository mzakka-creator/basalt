'use client';

import { useEffect, useState } from 'react';
import styles from './products.module.css';

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

const products = [
  {
    id: 1,
    icon: '⊞',
    name: 'Basalt Fiber Reinforced Polymer (BFRP) Bars',
    category: 'Reinforcement',
    desc: 'Next-generation rebar alternative offering 2× the tensile strength of steel at one-quarter the weight. Completely corrosion-proof — ideal for bridges, tunnels, and marine infrastructure.',
    specs: ['Tensile strength: 1,000–1,500 MPa', 'Density: 2.1 g/cm³', 'Diameter: 6–32 mm', 'Non-magnetic, non-conductive'],
    highlight: 'Best for saltwater environments',
  },
  {
    id: 2,
    icon: '◻',
    name: 'Basalt Crushed Stone & Aggregates',
    category: 'Aggregates',
    desc: 'High-purity crushed basalt stone for road construction, concrete mixes, and ballast. Superior hardness and abrasion resistance versus limestone or granite alternatives.',
    specs: ['Hardness: 8 Mohs scale', 'Compressive strength: 200–300 MPa', 'Sizes: 4–80mm fractions', 'Low water absorption'],
    highlight: 'Premium road construction material',
  },
  {
    id: 3,
    icon: '▦',
    name: 'Basalt Fiber Insulation Panels',
    category: 'Insulation',
    desc: 'Thermal and acoustic insulation panels woven from basalt fiber. Superior fire resistance (non-combustible at 700°C+), moisture-proof, and eco-friendly. No chemical binders required.',
    specs: ['Thermal conductivity: 0.034–0.038 W/m·K', 'Fire resistance: Class A1', 'Temperature range: -260°C to +700°C', 'Thickness: 50–200mm'],
    highlight: 'Non-combustible Class A1',
  },
  {
    id: 4,
    icon: '⊟',
    name: 'Basalt Rebar & Mesh',
    category: 'Reinforcement',
    desc: 'Continuous basalt fiber rebar and welded mesh grids for concrete slab reinforcement. Replaces conventional steel mesh with lighter, corrosion-free, long-lasting alternatives.',
    specs: ['Flexural strength: 700–900 MPa', 'Bond strength: >10 MPa', 'Grid sizes: 150×150 to 200×200mm', 'Easy field cutting'],
    highlight: 'Corrosion-free lifetime performance',
  },
  {
    id: 5,
    icon: '◈',
    name: 'Custom Construction Solutions',
    category: 'Custom',
    desc: 'Bespoke basalt-based construction components engineered to your project specifications. From geogrids to chopped fiber additives for concrete mixes — we engineer to your requirements.',
    specs: ['Custom dimensions on request', 'Project-specific engineering', 'Full technical support', 'Prototype to production'],
    highlight: 'Tailored to your project',
  },
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
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <span className="sectionLabel">Our Products</span>
          <h1 className={styles.pageTitle}>Basalt-Based<br />Construction Materials</h1>
          <p className={styles.pageSubtitle}>
            Five core product lines engineered from volcanic basalt rock — stronger, lighter, and more durable than conventional alternatives.
          </p>
        </div>
        <div className={styles.comingSoonBanner}>
          <span className={styles.bannerPulse} />
          Products Available Upon Factory Opening — 2028
        </div>
      </section>

      {/* FILTER */}
      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>Filter by category:</span>
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterTab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={styles.productGrid}>
            {filtered.map((product, index) => (
              <div
                key={product.id}
                className={`${styles.productCard} ${flipped === product.id ? styles.flipped : ''}`}
                style={{ animationDelay: `${index * 0.07}s` }}
                onClick={() => setFlipped(flipped === product.id ? null : product.id)}
              >
                {/* Coming Soon Overlay */}
                <div className={styles.comingSoonOverlay}>
                  <div className={styles.comingSoonBadge}>
                    <span className={styles.csBadgePulse} />
                    Coming 2028
                  </div>
                </div>

                {/* Front */}
                <div className={styles.cardFront}>
                  <div className={styles.cardCategory}>{product.category}</div>
                  <div className={styles.cardIcon}>{product.icon}</div>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <p className={styles.cardDesc}>{product.desc}</p>
                  <div className={styles.cardHighlight}>
                    <span className={styles.highlightDot}>◆</span>
                    {product.highlight}
                  </div>
                  <button className={styles.learnMoreBtn}>
                    View Specs
                    <span className={styles.learnArrow}>→</span>
                  </button>
                </div>

                {/* Back (specs) */}
                <div className={styles.cardBack}>
                  <div className={styles.cardCategory}>{product.category}</div>
                  <h3 className={styles.cardName}>{product.name}</h3>
                  <div className={styles.specsList}>
                    <p className={styles.specsTitle}>Technical Specifications</p>
                    {product.specs.map((spec) => (
                      <div key={spec} className={styles.specItem}>
                        <span className={styles.specDot}>→</span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button className={styles.backBtn}>
                    ← Back
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR PRODUCTS */}
      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={`animate-on-scroll`} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="sectionLabel">Advantages</span>
            <h2 className="sectionTitle" style={{ textAlign: 'center' }}>Why Choose Basalt Materials?</h2>
          </div>
          <div className={styles.advantageGrid}>
            {[
              { icon: '⚡', title: 'Corrosion-Free', desc: 'Unlike steel, basalt fiber products never rust — ideal for coastal, saline, and humid environments.' },
              { icon: '🌡', title: 'Fire Resistant', desc: 'Class A1 non-combustible. Stable performance from -260°C to +700°C — no toxic fumes.' },
              { icon: '⚖', title: 'Lighter than Steel', desc: 'At 2.1–2.7 g/cm³ vs steel\'s 7.8 g/cm³, basalt materials reduce structural load significantly.' },
              { icon: '♻', title: 'Eco-Friendly', desc: '100% natural volcanic rock origin. No synthetic binders. Significantly lower carbon footprint.' },
              { icon: '💰', title: 'Long-Term Value', desc: 'Higher upfront savings in infrastructure with 50+ year service life vs 15–20 years for steel.' },
              { icon: '🇸🇦', title: 'Local Supply Chain', desc: 'Saudi-manufactured means shorter supply chains, lower import costs, and Vision 2030 compliance.' },
            ].map((a) => (
              <div key={a.title} className={`${styles.advantageItem} animate-on-scroll`}>
                <div className={styles.advIcon}>{a.icon}</div>
                <h4 className={styles.advTitle}>{a.title}</h4>
                <p className={styles.advDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
