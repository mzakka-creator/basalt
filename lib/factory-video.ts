export const FACTORY_VIDEO_DRIVE_ID = '1LhfB5Hnd9wbujTLpfWOSDTxkny8HutMw';

export const FACTORY_VIDEO_LOCAL_SRC = '/factory/factory-tour.mp4';

export const FACTORY_VIDEO_DRIVE_EMBED_SRC = `https://drive.google.com/file/d/${FACTORY_VIDEO_DRIVE_ID}/preview`;

/** Native MP4 source when available; null means use the Google Drive embed instead. */
export function getFactoryVideoSrc(): string | null {
  if (process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL) {
    return process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL;
  }

  if (process.env.NODE_ENV === 'development') {
    return FACTORY_VIDEO_LOCAL_SRC;
  }

  return null;
}
