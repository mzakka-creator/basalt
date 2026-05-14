import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  xmlns: 'http://www.w3.org/2000/svg' as const,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.65,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* ——— Home / global ——— */

export function IconAbout(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  );
}

export function IconProducts(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

export function IconFactory(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V7l3-3v5l4-4v4l4-4v9" />
      <path d="M19 21V10h-2V7l-2-2v16" />
      <path d="M9 21v-4h4v4" />
    </svg>
  );
}

export function IconInvestments(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <path d="M14 9h5v5" />
    </svg>
  );
}

export const IconTrendingUp = IconInvestments;

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

export function IconThermometer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z" />
      <path d="M12 9v4" />
    </svg>
  );
}

export function IconStrength(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function IconLocation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ——— Contact / footer ——— */

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function IconFileText(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

/* ——— UI primitives (arrows — same stroke family) ——— */

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ——— Factory ——— */

export function IconMountain(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export function IconRoute(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

export function IconAnchor(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}

export function IconConstruction(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 6h4v4H10z" />
      <path d="M4 22V10l4-4h8l4 4v12" />
      <path d="M2 22h20" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function IconGear(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1-1-2-2-3s-2-3-2-5a8 8 0 0 0 16 4c0 5-3.5 7.5-7.5 8.5-1 0-1.5-.5-2.5-1-.5.5-1.5 1-2.5 1Z" />
    </svg>
  );
}

export function IconRefreshCw(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

export function IconRecycle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7 11m-7-6h5.221a1 1 0 0 1 .984.749l.109.687M13 5h6.218a1.83 1.83 0 0 1 1.556.884 1.786 1.786 0 0 1 0 1.232L17 13" />
      <path d="m13 11-3 3 3 3m4-8 3 3-3 3" />
    </svg>
  );
}

export function IconDroplets(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 7.17 7 5.3 5 2.5 5 2.5s-2 2.17-2 4.55c0 1.93 1.71 3.81 2.71 4.73s.29.49.29.73Z" />
      <path d="M12 18.6c3.37 0 6.1-2.8 6.1-6.2 0-1.77-.87-3.45-2.61-4.84S12 4.2 12 2.5s-2.49 2.8-4.49 4.86C5.87 8.75 5 10.43 5 12.2 5 15.8 8.13 18.6 12 18.6Z" />
    </svg>
  );
}

export function IconWind(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

export function IconZap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 4-1 4-3 0 2 2 3 4 3h2" />
      <path d="M21 7h-2c-2 0-4-1-4-3 0 2-2 3-4 3h-2" />
    </svg>
  );
}

export function IconCoins(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 5.5h2" />
    </svg>
  );
}

export function IconLandmark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 21 18-9-6-3-6 3-6-3v9" />
      <path d="M9 9V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v3" />
      <path d="M12 21v-9" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconHexagon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 16V8l-7-4-7 4v8l7 4 7-4z" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3-1.9 5.8-6 .1 4.8 3.5L6.5 21 12 16.8 17.5 21l-2.3-8.6 4.8-3.5-6-.1L12 3Z" />
    </svg>
  );
}

export function IconGrid3x3(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12.83 2.18 8 3.6a1 1 0 0 1 0 1.82l-8 3.6a1 1 0 0 1-.66 0l-8-3.6a1 1 0 0 1 0-1.82l8-3.6a1 1 0 0 1 .66 0Z" />
      <path d="M3.3 7.79 12 11l8.7-3.21" />
      <path d="M12 22V11" />
    </svg>
  );
}

export function IconPanel(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

export function IconMesh(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 3v9" />
      <path d="M20 21v-5" />
      <path d="M20 8V3" />
      <path d="M2 14h4" />
      <path d="M10 8h4" />
      <path d="M18 14h4" />
      <circle cx="4" cy="14" r="2" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="20" cy="14" r="2" />
    </svg>
  );
}

export function IconUserCircle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="3" />
      <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
    </svg>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}

export function IconAward(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 13.5 11 21l2.5-7.5L21 12l-7.5-1.5L11 3 8.5 10.5 1 12l7.5 1.5Z" />
    </svg>
  );
}

export function IconFeather(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12.67 19.35A8 8 0 0 0 20 10.67m-8.34 8.68a8 8 0 0 0 7.66-7.66" />
      <path d="M12 2v6m0 0c-1.33 4.67-4 8-8 10h12c-4-2-6.67-5.33-8-10Z" />
    </svg>
  );
}

export function IconFlask(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.07-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  );
}

/* ——— Social (generic stroke marks) ——— */

export function IconLinkedin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function IconTwitter(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function IconYoutube(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6z" />
    </svg>
  );
}
