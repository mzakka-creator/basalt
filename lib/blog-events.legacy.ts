import type { StaticImageData } from 'next/image';
import {
  partnershipSigningCover,
  partnershipSigningImages,
  partnershipSigningVideo,
} from '@/lib/blog/partnership-signing-images';

export type BlogEvent = {
  id: string;
  slug?: string;
  date: string;
  titleAr: string;
  titleEn: string;
  tabLabelAr: string;
  tabLabelEn: string;
  descAr: string;
  descEn: string;
  images: StaticImageData[];
  cover: StaticImageData;
  video?: string;
};

export const blogEvents: BlogEvent[] = [
  {
    id: 'partnership-signing',
    slug: 'partnership-signing-largest-basalt-complex',
    date: '2026-06-08',
    tabLabelAr: 'توقيع الشراكة',
    tabLabelEn: 'Partnership signing',
    titleAr: 'مراسم توقيع عقد الشراكة لإنشاء أكبر مجمع صناعي لصناعة البازلت',
    titleEn:
      'Partnership agreement signing ceremony for the largest basalt manufacturing industrial complex',
    descAr:
      'صور من مراسم توقيع عقد الشراكة بين الشركاء لإنشاء أكبر مجمع صناعي متخصص في صناعة البازلت.',
    descEn:
      'Photos from the partnership signing ceremony between partners to establish the largest basalt manufacturing industrial complex.',
    cover: partnershipSigningCover,
    images: partnershipSigningImages,
    video: partnershipSigningVideo,
  },
];
