import { NextResponse } from 'next/server';
import { getAdminPassword, setAdminSessionCookie } from '@/lib/cms/auth';

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  if (!body.password || body.password !== getAdminPassword()) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  return setAdminSessionCookie(response);
}
