import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/cms/auth';
import { createBlogEvent, getBlogEvents } from '@/lib/cms/store';
import type { BlogEventInput } from '@/lib/cms/types';

export async function GET() {
  try {
    await requireAdmin();
    const events = await getBlogEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = (await request.json()) as BlogEventInput;
    const event = await createBlogEvent(body);
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === 'UNAUTHORIZED') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
