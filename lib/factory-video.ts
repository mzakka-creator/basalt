export const FACTORY_VIDEO_DRIVE_ID = '1LhfB5Hnd9wbujTLpfWOSDTxkny8HutMw';

export const FACTORY_VIDEO_LOCAL_SRC = '/factory/factory-tour.mp4';

export const FACTORY_VIDEO_DRIVE_EMBED_SRC = `https://drive.google.com/file/d/${FACTORY_VIDEO_DRIVE_ID}/preview?autoplay=1&mute=1`;

export function useNativeFactoryVideo(): boolean {
  return (
    process.env.NODE_ENV === 'development' || !!process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL
  );
}

export function getFactoryVideoSrc(): string {
  if (process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL) {
    return process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL;
  }

  return FACTORY_VIDEO_LOCAL_SRC;
}
