export type BlogCategory = 'news' | 'industry' | 'tech';

export type BlogPostRecord = {
  id: string;
  slug: string;
  category: BlogCategory;
  date: string;
  readMin: number;
  featured?: boolean;
  image: string;
  gallery?: string[];
  video?: string;
  titleEn: string;
  excerptEn: string;
  bodyEn: string[];
  titleAr: string;
  excerptAr: string;
  bodyAr: string[];
};

export type BlogEventRecord = {
  id: string;
  slug?: string;
  date: string;
  titleAr: string;
  titleEn: string;
  tabLabelAr: string;
  tabLabelEn: string;
  descAr: string;
  descEn: string;
  images: string[];
  cover: string;
  video?: string;
};

export type BlogPostInput = Omit<BlogPostRecord, 'id'> & { id?: string };
export type BlogEventInput = Omit<BlogEventRecord, 'id'> & { id?: string };
