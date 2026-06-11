import { blogPosts as legacyPosts } from '@/lib/blog-posts.legacy';
import { blogEvents as legacyEvents } from '@/lib/blog-events.legacy';
import type { BlogEventRecord, BlogPostRecord } from '@/lib/cms/types';

const galleryPaths = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return `/blog/partnership-signing-${n}.jpeg`;
});

const postImagePaths: Record<string, { image: string; gallery?: string[]; video?: string }> = {
  '1': {
    image: '/blog/partnership-signing-01.jpeg',
    gallery: galleryPaths,
    video: '/blog/partnership-signing-video.mp4',
  },
  '9': { image: '/blog/covers/hero-factory.png' },
  '2': { image: '/blog/covers/product-1-bfrp.jpeg' },
  '3': { image: '/blog/covers/sector-infrastructure.jpeg' },
  '4': { image: '/blog/covers/sector-industry.jpeg' },
  '5': { image: '/blog/covers/hero-investments.png' },
  '6': { image: '/blog/covers/sector-transport.jpeg' },
  '7': { image: '/blog/covers/sector-energy.jpeg' },
  '8': { image: '/blog/covers/hero-about.png' },
};

export function getLegacySeedPosts(): BlogPostRecord[] {
  return legacyPosts.map((post) => {
    const paths = postImagePaths[post.id];
    if (!paths) throw new Error(`Missing image path map for blog post ${post.id}`);
    return {
      id: post.id,
      slug: post.slug,
      category: post.category,
      date: post.date,
      readMin: post.readMin,
      featured: post.featured,
      image: paths.image,
      gallery: paths.gallery,
      video: paths.video,
      titleEn: post.titleEn,
      excerptEn: post.excerptEn,
      bodyEn: post.bodyEn,
      titleAr: post.titleAr,
      excerptAr: post.excerptAr,
      bodyAr: post.bodyAr,
    };
  });
}

export function getLegacySeedEvents(): BlogEventRecord[] {
  return legacyEvents.map((event) => ({
    id: event.id,
    slug: event.slug,
    date: event.date,
    titleAr: event.titleAr,
    titleEn: event.titleEn,
    tabLabelAr: event.tabLabelAr,
    tabLabelEn: event.tabLabelEn,
    descAr: event.descAr,
    descEn: event.descEn,
    cover: '/blog/partnership-signing-01.jpeg',
    images: galleryPaths,
    video: event.video,
  }));
}
