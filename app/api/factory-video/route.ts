import { NextResponse } from 'next/server';
import { FACTORY_VIDEO_DRIVE_ID } from '@/lib/factory-video';

export const dynamic = 'force-dynamic';

const USER_AGENT = 'Mozilla/5.0';

async function fetchMeta(url: string) {
  return fetch(url, {
    redirect: 'manual',
    headers: { 'User-Agent': USER_AGENT },
  });
}

async function resolveFromHtml(html: string): string | null {
  const uuid = html.match(/name="uuid" value="([^"]+)"/)?.[1];
  const confirm = html.match(/name="confirm" value="([^"]+)"/)?.[1] ?? 't';

  if (uuid) {
    return `https://drive.usercontent.google.com/download?id=${FACTORY_VIDEO_DRIVE_ID}&export=download&confirm=${confirm}&uuid=${uuid}`;
  }

  const confirmToken = html.match(/confirm=([0-9A-Za-z_-]+)/)?.[1];
  if (confirmToken) {
    return `https://drive.google.com/uc?export=download&confirm=${confirmToken}&id=${FACTORY_VIDEO_DRIVE_ID}`;
  }

  return null;
}

async function resolveDriveDownloadUrl(): Promise<string> {
  const base = `https://drive.google.com/uc?export=download&id=${FACTORY_VIDEO_DRIVE_ID}`;
  let res = await fetchMeta(base);
  let location = res.headers.get('location');

  if (location) {
    res = await fetchMeta(location);
    location = res.headers.get('location');
    if (location) return location;

    const contentType = res.headers.get('content-type') ?? '';
    if (res.status === 200 && contentType.includes('text/html')) {
      const resolved = await resolveFromHtml(await res.text());
      if (resolved) return resolved;
    }

    return location ?? res.url;
  }

  const contentType = res.headers.get('content-type') ?? '';
  if (res.status === 200 && contentType.includes('text/html')) {
    const resolved = await resolveFromHtml(await res.text());
    if (resolved) return resolved;
  }

  return base;
}

export async function GET() {
  try {
    const url = await resolveDriveDownloadUrl();
    return NextResponse.redirect(url, 302);
  } catch {
    return NextResponse.json({ error: 'Unable to resolve factory video URL.' }, { status: 502 });
  }
}
