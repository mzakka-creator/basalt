import { cookies } from 'next/headers';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'basalt_admin_session';

function getSecret() {
  return process.env.ADMIN_SECRET || 'basalt-dev-secret-change-in-production';
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'admin';
}

export function createSessionToken() {
  return crypto.createHmac('sha256', getSecret()).update('basalt-admin').digest('hex');
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === createSessionToken();
}

export function setAdminSessionCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export function clearAdminSessionCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
  return response;
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error('UNAUTHORIZED');
  }
}
