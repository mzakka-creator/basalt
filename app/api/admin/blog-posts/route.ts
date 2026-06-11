import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/cms/auth';
import { createBlogPost, getBlogPosts } from '@/lib/cms/store';
import type { BlogPostInput } from '@/lib/cms/types';

export async function GET() {
  try {
    await requireAdmin();
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = (await request.json()) as BlogPostInput;
    const post = await createBlogPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'UNAUTHORIZED') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (error instanceof Error && error.message === 'SLUG_EXISTS') {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
