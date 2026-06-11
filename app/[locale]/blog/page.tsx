import { getBlogEvents, getBlogPosts } from '@/lib/cms/store';
import BlogPageClient from './BlogPageClient';

export default async function BlogPage() {
  const [posts, events] = await Promise.all([getBlogPosts(), getBlogEvents()]);
  return <BlogPageClient posts={posts} events={events} />;
}
