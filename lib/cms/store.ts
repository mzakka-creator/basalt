import { promises as fs } from 'fs';
import path from 'path';
import { getLegacySeedEvents, getLegacySeedPosts } from '@/lib/cms/legacy-seed';
import type {
  BlogEventInput,
  BlogEventRecord,
  BlogPostInput,
  BlogPostRecord,
} from '@/lib/cms/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json');
const EVENTS_FILE = path.join(DATA_DIR, 'blog-events.json');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function ensureFile<T>(filePath: string, seed: T[]) {
  await ensureDataDir();
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify(seed, null, 2), 'utf-8');
  }
}

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

async function writeJson<T>(filePath: string, data: T) {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function getBlogPosts(): Promise<BlogPostRecord[]> {
  await ensureFile(POSTS_FILE, getLegacySeedPosts());
  const posts = await readJson<BlogPostRecord[]>(POSTS_FILE);
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getBlogPostById(id: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.id === id) ?? null;
}

export async function createBlogPost(input: BlogPostInput) {
  const posts = await getBlogPosts();
  const slug = input.slug.trim() || slugify(input.titleEn);
  if (posts.some((post) => post.slug === slug)) {
    throw new Error('SLUG_EXISTS');
  }

  const post: BlogPostRecord = {
    ...input,
    id: input.id ?? newId(),
    slug,
    featured: input.featured ?? false,
  };

  if (post.featured) {
    posts.forEach((p) => {
      p.featured = false;
    });
  }

  posts.unshift(post);
  await writeJson(POSTS_FILE, posts);
  return post;
}

export async function updateBlogPost(id: string, input: BlogPostInput) {
  const posts = await getBlogPosts();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) throw new Error('NOT_FOUND');

  const slug = input.slug.trim() || slugify(input.titleEn);
  if (posts.some((post) => post.slug === slug && post.id !== id)) {
    throw new Error('SLUG_EXISTS');
  }

  const updated: BlogPostRecord = {
    ...input,
    id,
    slug,
    featured: input.featured ?? false,
  };

  if (updated.featured) {
    posts.forEach((p) => {
      if (p.id !== id) p.featured = false;
    });
  }

  posts[index] = updated;
  await writeJson(POSTS_FILE, posts);
  return updated;
}

export async function deleteBlogPost(id: string) {
  const posts = await getBlogPosts();
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) throw new Error('NOT_FOUND');
  await writeJson(POSTS_FILE, next);
}

export async function getBlogEvents(): Promise<BlogEventRecord[]> {
  await ensureFile(EVENTS_FILE, getLegacySeedEvents());
  const events = await readJson<BlogEventRecord[]>(EVENTS_FILE);
  return events.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogEventById(id: string) {
  const events = await getBlogEvents();
  return events.find((event) => event.id === id) ?? null;
}

export async function createBlogEvent(input: BlogEventInput) {
  const events = await getBlogEvents();
  const event: BlogEventRecord = {
    ...input,
    id: input.id ?? newId(),
  };
  events.unshift(event);
  await writeJson(EVENTS_FILE, events);
  return event;
}

export async function updateBlogEvent(id: string, input: BlogEventInput) {
  const events = await getBlogEvents();
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) throw new Error('NOT_FOUND');
  events[index] = { ...input, id };
  await writeJson(EVENTS_FILE, events);
  return events[index];
}

export async function deleteBlogEvent(id: string) {
  const events = await getBlogEvents();
  const next = events.filter((event) => event.id !== id);
  if (next.length === events.length) throw new Error('NOT_FOUND');
  await writeJson(EVENTS_FILE, next);
}
