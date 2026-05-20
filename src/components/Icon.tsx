import type { IconName } from "@/lib/data";

const paths: Record<IconName, React.ReactNode> = {
  pump: (
    <>
      <rect x="3" y="9" width="9" height="11" rx="1.5" />
      <path d="M12 12h4l4-3v9l-4-3h-4" />
      <path d="M7.5 9V5m-2 0h4" />
    </>
  ),
  cup: (
    <>
      <path d="M5 7h14l-2.5 6a3 3 0 0 1-2.8 2H10.3a3 3 0 0 1-2.8-2L5 7Z" />
      <path d="M12 15v5m-3 0h6" />
    </>
  ),
  robot: (
    <>
      <rect x="6" y="9" width="12" height="9" rx="2" />
      <path d="M12 9V5m0 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M9.5 13h.01M14.5 13h.01M4 12v3m16-3v3" />
    </>
  ),
  conveying: (
    <>
      <circle cx="6" cy="15" r="2.5" />
      <circle cx="18" cy="15" r="2.5" />
      <path d="M6 12.5h12M8.5 8l3-3 3 3m-3-3v6" />
    </>
  ),
  soft: (
    <>
      <path d="M7 4v7m4-7v7m4-7v7" />
      <path d="M5 11h14v2a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-2Z" />
    </>
  ),
  sensor: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2" />
    </>
  ),
  energy: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  automotive: (
    <>
      <path d="M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5v4h-3m-12 0H3v-4Z" />
      <circle cx="7.5" cy="17" r="1.6" />
      <circle cx="16.5" cy="17" r="1.6" />
    </>
  ),
  food: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
      <path d="M12 7v10m-3-7c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5" />
    </>
  ),
  package: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </>
  ),
  pharma: (
    <>
      <rect x="4" y="9" width="11" height="11" rx="3" transform="rotate(-45 9.5 14.5)" />
      <path d="M9 11l4 4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 7V4m4 3V4m-4 16v-3m4 3v-3M7 10H4m3 4H4m16-4h-3m3 4h-3" />
    </>
  ),
  print: (
    <>
      <path d="M7 9V4h10v5" />
      <rect x="4" y="9" width="16" height="7" rx="2" />
      <path d="M7 14h10v6H7v-6Z" />
    </>
  ),
  check: <path d="M4 12.5 9 17.5 20 6.5" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  leaf: <path d="M5 19c0-7 4-13 14-13 0 10-6 14-14 14m0 0c1-4 3-6 7-8" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  wrench: <path d="M15 6a4 4 0 0 0-5 5L4 17l3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5L13.5 8 16 5.5A4 4 0 0 0 15 6Z" />,
  lift: (
    <>
      <path d="M3 21h18M6 21V7l6-4 6 4v14" />
      <path d="M9.5 11h5v4h-5z" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l5 5v13H7V3Z" />
      <path d="M14 3v5h5M10 13h6m-6 4h6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9l5 3-5 3V9Z" />
    </>
  ),
  spark: <path d="M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-6.5-2.5 2.5m-4 4-2.5 2.5m9 0-2.5-2.5m-4-4L7.5 5.5" />,
  gauge: (
    <>
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14l4-3M4 14H2m20 0h-2m-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </>
  ),
  recycle: <path d="M7 7l2-3 3 1M5 12l-1 4 3 1m11-6 2 3-3 2M9 19h6m2-7-2-3M7 8 5 11" />,
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
