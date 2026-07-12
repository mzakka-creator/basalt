export const FACTORY_VIDEO_SRC = '/video/basalt-video.mp4';

export function getFactoryVideoSrc(): string {
  return process.env.NEXT_PUBLIC_FACTORY_VIDEO_URL ?? FACTORY_VIDEO_SRC;
}
