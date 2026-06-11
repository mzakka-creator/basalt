import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/cms/store';
import PostPageClient from './PostPageClient';

type PageProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getBlogPostBySlug(slug), getBlogPosts()]);
  if (!post) notFound();
  return <PostPageClient post={post} allPosts={allPosts} />;
}
