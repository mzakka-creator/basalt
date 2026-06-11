import { NextResponse } from 'next/server';
import { getBlogEvents } from '@/lib/cms/store';

export async function GET() {
  const events = await getBlogEvents();
  return NextResponse.json(events);
}
