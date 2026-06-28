export const FACTORY_VIDEO_DRIVE_ID = '1LhfB5Hnd9wbujTLpfWOSDTxkny8HutMw';

export const FACTORY_VIDEO_LOCAL_SRC = '/factory/factory-tour.mp4';

export const FACTORY_VIDEO_API_SRC = '/api/factory-video';

export function getFactoryVideoSrc(): string {
  if (process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL) {
    return process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL;
  }

  if (process.env.NODE_ENV === 'development') {
    return FACTORY_VIDEO_LOCAL_SRC;
  }

  return FACTORY_VIDEO_API_SRC;
}
