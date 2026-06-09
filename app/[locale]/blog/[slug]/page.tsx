'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/i18n-context';
import { blogPosts, type BlogCategory } from '@/lib/blog-posts';
import HeroHeadline from '@/app/components/PageHero/HeroHeadline';
import PageHero from '@/app/components/PageHero/PageHero';
import {
  IconArrowLeft,
  IconClock,
  IconFactory,
  IconGear,
  IconLayers,
} from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import styles from './post.module.css';

function useScrollAnimation() {
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
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

export default function PostPage() {
  useScrollAnimation();
  const params = useParams();
  const { messages, locale, href } = useI18n();
  const b = messages.blog;

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const title = locale === 'ar' ? post.titleAr : post.titleEn;
  const body = locale === 'ar' ? post.bodyAr : post.bodyEn;
  const CatIcon = categoryIcons[post.category];

  const filterLabels: Record<BlogCategory, string> = {
    news: b.filterNews,
    industry: b.filterIndustry,
    tech: b.filterTech,
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className={styles.postRoot}>
      <PageHero
        tagline={b.heroTag}
        title={<HeroHeadline line1={title} />}
        backgroundImage={post.image}
        brighten
      />

      <section className={`${styles.articleSection} section`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Main content */}
            <article className={`${styles.article} animate-on-scroll`}>
              {/* Back link */}
              <Link href={href('/blog')} className={styles.backLink}>
                <IconArrowLeft className={iconStyles.svgIconSm} aria-hidden />
                {b.latestLabel}
              </Link>

              {/* Meta row */}
              <div className={styles.metaRow}>
                <span className={styles.categoryChip} data-category={post.category}>
                  <CatIcon className={iconStyles.svgIconSm} aria-hidden />
                  {filterLabels[post.category]}
                </span>
                <span className={styles.metaDate}>{formatDate(post.date, locale)}</span>
                <span className={styles.metaRead}>
                  <IconClock className={iconStyles.svgIconSm} aria-hidden />
                  {post.readMin} {b.minRead}
                </span>
              </div>

              <h1 className={styles.articleTitle}>{title}</h1>

              {/* Hero image */}
              <div className={`${styles.heroImageWrap} animate-on-scroll`}>
                <Image
                  src={post.image}
                  alt={title}
                  fill
                  className={styles.heroImage}
                  sizes="(max-width: 900px) 100vw, 800px"
                  priority
                />
                <div className={styles.heroImageOverlay} />
              </div>

              {/* Body */}
              <div className={`${styles.body} animate-on-scroll`}>
                {body.map((paragraph, i) => (
                  <p key={i} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className={`${styles.sidebar} animate-on-scroll`}>
              {/* About Basalt card */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>{messages.about.whoWeAreLabel}</h3>
                <p className={styles.sideCardText}>
                  {messages.about.whoWeAreParagraphs[0]}
                </p>
                <Link href={href('/about')} className={styles.sideCardLink}>
                  {messages.nav.about} →
                </Link>
              </div>

              {/* All posts in same category */}
              {relatedPosts.length > 0 && (
                <div className={styles.sideCard}>
                  <h3 className={styles.sideCardTitle}>
                    {filterLabels[post.category]}
                  </h3>
                  <ul className={styles.relatedList}>
                    {relatedPosts.map((related) => (
                      <li key={related.id}>
                        <Link
                          href={`${href('/blog')}/${related.slug}`}
                          className={styles.relatedLink}
                        >
                          <div className={styles.relatedThumb}>
                            <Image
                              src={related.image}
                              alt=""
                              fill
                              className={styles.relatedThumbImg}
                              sizes="64px"
                              aria-hidden
                            />
                          </div>
                          <div className={styles.relatedInfo}>
                            <span className={styles.relatedTitle}>
                              {locale === 'ar' ? related.titleAr : related.titleEn}
                            </span>
                            <span className={styles.relatedDate}>
                              {formatDate(related.date, locale)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div className={`${styles.sideCard} ${styles.ctaCard}`}>
                <h3 className={styles.sideCardTitle}>{messages.investments.tiersTitle}</h3>
                <p className={styles.sideCardText}>{messages.investments.tiersDesc}</p>
                <Link href={href('/investments')} className="btnPrimary">
                  {messages.nav.investments}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
