import { NextResponse } from 'next/server';
import { clearAdminSessionCookie } from '@/lib/cms/auth';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  return clearAdminSessionCookie(response);
}
