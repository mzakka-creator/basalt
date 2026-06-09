'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroHeadline from '@/app/components/PageHero/HeroHeadline';
import PageHero from '@/app/components/PageHero/PageHero';
import heroImage from '@/assets/images/heroes/hero-about.png';
import { useI18n } from '@/lib/i18n/i18n-context';
import { blogPosts, type BlogCategory } from '@/lib/blog-posts';
import {
  IconArrowRight,
  IconClock,
  IconFileText,
  IconFactory,
  IconGear,
  IconLayers,
  IconMail,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import styles from './blog.module.css';

type FilterKey = 'all' | BlogCategory;

function useScrollAnimation(deps: unknown[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );

    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    return () => observer.disconnect();
  }, deps);
}

function formatDate(dateStr: string, locale: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const categoryIcons: Record<BlogCategory, typeof IconFactory> = {
  news: IconFactory,
  industry: IconLayers,
  tech: IconGear,
};

export default function BlogPage() {
  const { messages, locale, href } = useI18n();
  const b = messages.blog;
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filterLabels: Record<FilterKey, string> = {
    all: b.filterAll,
    news: b.filterNews,
    industry: b.filterIndustry,
    tech: b.filterTech,
  };

  const featured = blogPosts.find((p) => p.featured);

  // Grid posts: exclude featured, then apply category filter
  const postsInGrid = blogPosts.filter(
    (p) => !p.featured && (activeFilter === 'all' || p.category === activeFilter)
  );

  useScrollAnimation([activeFilter, postsInGrid.length]);

  const getTitle = (post: (typeof blogPosts)[0]) =>
    locale === 'ar' ? post.titleAr : post.titleEn;
  const getExcerpt = (post: (typeof blogPosts)[0]) =>
    locale === 'ar' ? post.excerptAr : post.excerptEn;

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <div className={styles.blogRoot}>
      <PageHero
        tagline={b.heroTag}
        title={<HeroHeadline line1={b.heroTitleLine1} line2={b.heroTitleAccent} />}
        subtitle={b.heroSubtitle}
        backgroundImage={heroImage}
      />

      {/* Featured article */}
      {featured && (
        <section className={`${styles.featuredSection} section`}>
          <div className="container">
            <Link
              href={`${href('/blog')}/${featured.slug}`}
              className={`${styles.featuredCard} animate-on-scroll`}
            >
              {/* Featured image */}
              <div className={styles.featuredImageWrap}>
                <Image
                  src={featured.image}
                  alt={getTitle(featured)}
                  fill
                  className={styles.featuredImage}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                <div className={styles.featuredImageOverlay} />
              </div>

              {/* Featured content */}
              <div className={styles.featuredContent}>
                <div className={styles.featuredBadge}>
                  <span className={styles.featuredDot} />
                  {b.featuredLabel}
                </div>
                <div className={styles.featuredMeta}>
                  <span className={styles.categoryChip} data-category={featured.category}>
                    {filterLabels[featured.category]}
                  </span>
                  <span className={styles.metaSep} aria-hidden>·</span>
                  <span className={styles.metaDate}>{formatDate(featured.date, locale)}</span>
                  <span className={styles.metaSep} aria-hidden>·</span>
                  <span className={styles.metaRead}>
                    <IconClock className={iconStyles.svgIconSm} aria-hidden />
                    {featured.readMin} {b.minRead}
                  </span>
                </div>
                <h2 className={styles.featuredTitle}>{getTitle(featured)}</h2>
                <p className={styles.featuredExcerpt}>{getExcerpt(featured)}</p>
                <span className={styles.readMoreLink}>
                  {b.readMore}
                  <IconArrowRight className={iconStyles.svgIconSm} aria-hidden />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid with filter */}
      <section className={`${styles.postsSection} section`}>
        <div className="container">
          <div className={`${styles.sectionIntro} animate-on-scroll`}>
            <span className="sectionLabel">{b.latestLabel}</span>
          </div>

          <div className={`${styles.filterBar} animate-on-scroll`} role="tablist">
            {(['all', 'news', 'industry', 'tech'] as FilterKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeFilter === key}
                className={`${styles.filterBtn} ${activeFilter === key ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(key)}
              >
                {filterLabels[key]}
              </button>
            ))}
          </div>

          {postsInGrid.length === 0 ? (
            <p className={styles.emptyMessage}>{b.noPostsFound}</p>
          ) : (
            <div className={styles.postsGrid}>
              {postsInGrid.map((post, i) => {
                const CatIcon = categoryIcons[post.category];
                return (
                  <Link
                    key={post.id}
                    href={`${href('/blog')}/${post.slug}`}
                    className={`${styles.postCard} animate-on-scroll`}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {/* Post image */}
                    <div className={styles.postImageWrap}>
                      <Image
                        src={post.image}
                        alt={getTitle(post)}
                        fill
                        className={styles.postImage}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className={styles.postImageOverlay} />
                      <span className={styles.categoryChipOverlay} data-category={post.category}>
                        <CatIcon className={iconStyles.svgIconSm} aria-hidden />
                        {filterLabels[post.category]}
                      </span>
                    </div>

                    <div className={styles.postCardBody}>
                      <h3 className={styles.postTitle}>{getTitle(post)}</h3>
                      <p className={styles.postExcerpt}>{getExcerpt(post)}</p>
                    </div>
                    <footer className={styles.postCardFooter}>
                      <div className={styles.postMeta}>
                        <span className={styles.metaDate}>{formatDate(post.date, locale)}</span>
                        <span className={styles.metaSep} aria-hidden>·</span>
                        <span className={styles.metaRead}>
                          <IconClock className={iconStyles.svgIconSm} aria-hidden />
                          {post.readMin} {b.minRead}
                        </span>
                      </div>
                      <span className={styles.cardReadMore}>
                        {b.readMore}
                        <IconArrowRight className={iconStyles.svgIconSm} aria-hidden />
                      </span>
                    </footer>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className={`${styles.newsletterSection} section`}>
        <div className="container">
          <div className={`${styles.newsletterCard} animate-on-scroll`}>
            <div className={styles.newsletterIcon}>
              <IconMail className={iconStyles.svgIconLg} aria-hidden />
            </div>
            <div className={styles.newsletterCopy}>
              <span className="sectionLabel">{b.newsletterLabel}</span>
              <h2 className={`sectionTitle ${styles.newsletterTitle}`}>{b.newsletterTitle}</h2>
              <p className={styles.newsletterDesc}>{b.newsletterDesc}</p>
            </div>
            <div className={styles.newsletterForm}>
              {subscribed ? (
                <div className={styles.subscribedMsg}>
                  <IconFileText className={iconStyles.svgIconMd} aria-hidden />
                  <span>✓ {b.newsletterBtn}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.form}>
                  <div className={styles.inputRow}>
                    <input
                      type="email"
                      className={styles.emailInput}
                      placeholder={b.newsletterPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label={b.newsletterPlaceholder}
                    />
                    <button type="submit" className={`btnPrimary ${styles.subscribeBtn}`}>
                      {b.newsletterBtn}
                    </button>
                  </div>
                  <p className={styles.newsletterNote}>{b.newsletterNote}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
