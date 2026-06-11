'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft, IconArrowRight, IconPlay } from '@/app/components/icons/SiteIcons';
import iconStyles from '@/app/components/icons/icons.module.css';
import { useI18n } from '@/lib/i18n/i18n-context';
import type { BlogEventRecord } from '@/lib/cms/types';
import styles from './BlogEvents.module.css';

type EventMediaItem =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster: string };

type BlogEventsProps = {
  events: BlogEventRecord[];
};

function formatDate(dateStr: string, locale: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function buildMediaItems(event: BlogEventRecord): EventMediaItem[] {
  const items: EventMediaItem[] = event.images.map((src) => ({ type: 'image', src }));
  if (event.video) {
    items.push({ type: 'video', src: event.video, poster: event.cover });
  }
  return items;
}

export default function BlogEvents({ events }: BlogEventsProps) {
  const { messages, locale, href } = useI18n();
  const b = messages.blog;
  const [activeId, setActiveId] = useState(events[0]?.id ?? '');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const activeEvent = events.find((event) => event.id === activeId) ?? events[0];
  const mediaItems = useMemo(
    () => (activeEvent ? buildMediaItems(activeEvent) : []),
    [activeEvent]
  );
  const title = activeEvent ? (locale === 'ar' ? activeEvent.titleAr : activeEvent.titleEn) : '';
  const desc = activeEvent ? (locale === 'ar' ? activeEvent.descAr : activeEvent.descEn) : '';
  const mediaCount = mediaItems.length;
  const hasMultipleMedia = mediaCount > 1;
  const activeMedia = lightboxIndex !== null ? mediaItems[lightboxIndex] : null;
  const prevLabel = locale === 'ar' ? 'السابق' : 'Previous';
  const nextLabel = locale === 'ar' ? 'التالي' : 'Next';
  const viewImageLabel = locale === 'ar' ? 'عرض الصورة' : 'View image';
  const viewVideoLabel = locale === 'ar' ? 'تشغيل الفيديو' : 'Play video';

  const closeLightbox = useCallback(() => {
    lightboxVideoRef.current?.pause();
    setLightboxIndex(null);
  }, []);

  const closeGallery = useCallback(() => {
    lightboxVideoRef.current?.pause();
    setGalleryOpen(false);
    setLightboxIndex(null);
  }, []);

  const goToMedia = useCallback(
    (index: number) => {
      if (mediaCount === 0) return;
      lightboxVideoRef.current?.pause();
      setLightboxIndex((index + mediaCount) % mediaCount);
    },
    [mediaCount]
  );

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    goToMedia(lightboxIndex - 1);
  }, [goToMedia, lightboxIndex]);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    goToMedia(lightboxIndex + 1);
  }, [goToMedia, lightboxIndex]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeId]);

  useEffect(() => {
    if (!galleryOpen) return;

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) closeLightbox();
        else closeGallery();
        return;
      }

      if (lightboxIndex !== null && hasMultipleMedia) {
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'ArrowRight') goToNext();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [
    closeGallery,
    closeLightbox,
    galleryOpen,
    goToNext,
    goToPrev,
    hasMultipleMedia,
    lightboxIndex,
  ]);

  useEffect(() => {
    if (activeMedia?.type !== 'video') return;
    const timer = window.setTimeout(() => {
      void lightboxVideoRef.current?.play();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [activeMedia, lightboxIndex]);

  function openGallery() {
    setGalleryOpen(true);
  }

  function handlePanelKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGallery();
    }
  }

  if (!events.length) return null;

  return (
    <section className={`${styles.eventsSection} section`}>
      <div className="container">
        <div className={`${styles.sectionIntro} animate-on-scroll`}>
          <span className="sectionLabel">{b.eventsLabel}</span>
        </div>

        <div className={`${styles.eventsBar} animate-on-scroll`} role="tablist" aria-label={b.eventsLabel}>
          {events.map((event) => {
            const tabLabel = locale === 'ar' ? event.tabLabelAr : event.tabLabelEn;
            return (
              <button
                key={event.id}
                type="button"
                role="tab"
                aria-selected={activeId === event.id}
                className={`${styles.eventsTab} ${activeId === event.id ? styles.eventsTabActive : ''}`}
                onClick={() => setActiveId(event.id)}
              >
                {tabLabel}
              </button>
            );
          })}
        </div>

        <div
          className={`${styles.eventPanel} animate-on-scroll`}
          role="button"
          tabIndex={0}
          onClick={openGallery}
          onKeyDown={handlePanelKeyDown}
          aria-label={`${title}. ${b.eventsViewPhotos}`}
        >
          <div className={styles.eventCover}>
            <Image
              src={activeEvent.cover}
              alt=""
              fill
              className={styles.eventCoverImage}
              sizes="(max-width: 640px) 100vw, 240px"
            />
          </div>

          <div className={styles.eventBody}>
            <div className={styles.eventMeta}>
              <span className={styles.eventDate}>{formatDate(activeEvent.date, locale)}</span>
              <span className={styles.eventCount}>
                {activeEvent.images.length} {b.eventsPhotos}
                {activeEvent.video ? ` · 1 ${b.eventsVideo}` : ''}
              </span>
            </div>
            <h3 className={styles.eventTitle}>{title}</h3>
            <p className={styles.eventDesc}>{desc}</p>
            <span className={styles.eventHint}>{b.eventsViewPhotos}</span>
            {activeEvent.slug ? (
              <Link
                href={`${href('/blog')}/${activeEvent.slug}`}
                className={styles.eventLink}
                onClick={(e) => e.stopPropagation()}
              >
                {b.readMore}
                <IconArrowRight className={iconStyles.svgIconSm} aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {galleryOpen ? (
        <div
          className={styles.galleryBackdrop}
          onClick={() => {
            if (lightboxIndex !== null) closeLightbox();
            else closeGallery();
          }}
          role="presentation"
        >
          <div
            className={styles.galleryCard}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-gallery-title"
          >
            <header className={styles.galleryHeader}>
              <div className={styles.galleryHeaderText}>
                <span className={styles.galleryDate}>{formatDate(activeEvent.date, locale)}</span>
                <h3 id="event-gallery-title" className={styles.galleryTitle}>
                  {title}
                </h3>
              </div>
              <button
                type="button"
                className={styles.galleryClose}
                onClick={closeGallery}
                aria-label={b.eventsClose}
              >
                ×
              </button>
            </header>

            <div className={styles.galleryGrid}>
              {mediaItems.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.galleryItem} ${lightboxIndex === i ? styles.galleryItemActive : ''}`}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={item.type === 'video' ? viewVideoLabel : `${viewImageLabel} ${i + 1}`}
                  aria-current={lightboxIndex === i ? 'true' : undefined}
                >
                  <span className={styles.galleryItemMedia}>
                    {item.type === 'image' ? (
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        className={styles.galleryImage}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <>
                        <Image
                          src={item.poster}
                          alt=""
                          fill
                          className={styles.galleryImage}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <span className={styles.galleryVideoOverlay} aria-hidden>
                          <span className={styles.galleryVideoIcon}>
                            <IconPlay className={iconStyles.svgIconMd} />
                          </span>
                        </span>
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {activeEvent.slug ? (
              <footer className={styles.galleryFooter}>
                <Link href={`${href('/blog')}/${activeEvent.slug}`} className={styles.galleryArticleLink}>
                  {b.readMore}
                  <IconArrowRight className={iconStyles.svgIconSm} aria-hidden />
                </Link>
              </footer>
            ) : null}
          </div>

          {lightboxIndex !== null && activeMedia ? (
            <div
              className={styles.lightboxBackdrop}
              onClick={closeLightbox}
              role="presentation"
            >
              <div
                className={styles.lightboxCard}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={title}
              >
                <button
                  type="button"
                  className={styles.lightboxClose}
                  onClick={closeLightbox}
                  aria-label={b.eventsClose}
                >
                  ×
                </button>

                {activeMedia.type === 'image' ? (
                  <div className={styles.lightboxImageWrap}>
                    <Image
                      key={lightboxIndex}
                      src={activeMedia.src}
                      alt={title}
                      fill
                      className={styles.lightboxImage}
                      sizes="(max-width: 900px) 100vw, 1100px"
                      priority
                    />
                  </div>
                ) : (
                  <div className={styles.lightboxVideoWrap}>
                    <video
                      key={activeMedia.src}
                      ref={lightboxVideoRef}
                      className={styles.lightboxVideo}
                      src={activeMedia.src}
                      controls
                      playsInline
                      preload="metadata"
                      poster={activeMedia.poster}
                    />
                  </div>
                )}

                {hasMultipleMedia ? (
                  <>
                    <button
                      type="button"
                      className={`${styles.lightboxNavBtn} ${styles.lightboxNavPrev}`}
                      onClick={goToPrev}
                      aria-label={prevLabel}
                    >
                      <IconArrowLeft className={iconStyles.svgIcon} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={`${styles.lightboxNavBtn} ${styles.lightboxNavNext}`}
                      onClick={goToNext}
                      aria-label={nextLabel}
                    >
                      <IconArrowRight className={iconStyles.svgIcon} aria-hidden />
                    </button>
                    <span className={styles.lightboxCounter}>
                      {lightboxIndex + 1} / {mediaCount}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
