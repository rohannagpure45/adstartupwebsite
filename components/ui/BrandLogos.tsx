import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

/* Canonical brand marks for the Ipsa marketing site.

   Path data is sourced from Simple Icons (CC0). Each glyph is rendered in
   its official brand color (or, for type-only marks, in a brand-aligned
   tone). Where a brand is typically read as a logo+wordmark pair, the SVG
   bundles both so it works as a drop-in replacement at marquee size.

   Two flavors exist for a few brands:
     - <BrandLogo />        — icon only, brand color, viewBox 0 0 24 24.
       Used in the dashboard channel legend, alongside a small color
       swatch that ties back to the chart bar color.
     - <BrandWordmark />    — icon + wordmark, brand color, wider viewBox.
       Used in the homepage logo marquee where horizontal real-estate
       reads better. */

export const BRAND_COLORS = {
  nike: "#111111",
  meta: "#0467DF",
  google: { blue: "#4285F4", green: "#34A853", yellow: "#FBBC05", red: "#EA4335" },
  tiktokBlack: "#010101",
  tiktokCyan: "#25F4EE",
  tiktokRed: "#FE2C55",
  youtube: "#FF0000",
  doordash: "#FF3008",
  toast: "#FF4C00",
  ga4: "#E37400",
  annalect: "#19233C",
  omnicom: "#1B1B1B",
} as const;

/* ─── Icon-only marks (24x24) ───────────────────────────────────────── */

export function NikeLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={BRAND_COLORS.nike}
      aria-label="Nike"
      {...props}
    >
      <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z" />
    </svg>
  );
}

export function MetaLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={BRAND_COLORS.meta}
      aria-label="Meta"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
      />
    </svg>
  );
}

export function GoogleLogo(props: LogoProps) {
  // Multi-color Google "G" mark.
  return (
    <svg viewBox="0 0 24 24" aria-label="Google" {...props}>
      <path
        fill={BRAND_COLORS.google.blue}
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill={BRAND_COLORS.google.green}
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill={BRAND_COLORS.google.yellow}
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill={BRAND_COLORS.google.red}
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function TikTokLogo(props: LogoProps) {
  // Three-stack note silhouette: cyan + magenta offsets behind a black main
  // shape — the iconic 3D split look.
  const note =
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
  return (
    <svg viewBox="0 0 24 24" aria-label="TikTok" {...props}>
      <path d={note} fill={BRAND_COLORS.tiktokRed} transform="translate(-1 1)" />
      <path d={note} fill={BRAND_COLORS.tiktokCyan} transform="translate(1 -1)" />
      <path d={note} fill={BRAND_COLORS.tiktokBlack} />
    </svg>
  );
}

export function YouTubeLogo(props: LogoProps) {
  // Red rounded rectangle + white play triangle.
  return (
    <svg viewBox="0 0 24 24" aria-label="YouTube" {...props}>
      <path
        fill={BRAND_COLORS.youtube}
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function DoorDashLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={BRAND_COLORS.doordash}
      aria-label="DoorDash"
      {...props}
    >
      <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
    </svg>
  );
}

export function GA4Logo(props: LogoProps) {
  // Simple Icons Google Analytics 4 mark — 3 stepped pills + counter.
  return (
    <svg
      viewBox="0 0 24 24"
      fill={BRAND_COLORS.ga4}
      aria-label="Google Analytics 4"
      {...props}
    >
      <path d="M22.84 2.998v17.999c.009 1.647-1.32 2.99-2.967 2.998a2.98 2.98 0 0 1-.368-.02c-1.528-.226-2.648-1.556-2.61-3.1V3.12c-.037-1.546 1.085-2.876 2.616-3.1 1.636-.192 3.118.98 3.31 2.616.013.12.02.24.02.362zM4.133 18.055c-1.642 0-2.973 1.331-2.973 2.973S2.491 24 4.133 24s2.972-1.331 2.972-2.972-1.331-2.973-2.972-2.973zm7.872-9.01h-.05c-1.65.09-2.93 1.474-2.892 3.126v7.985c0 2.167.954 3.482 2.351 3.763 1.612.327 3.183-.715 3.51-2.327.04-.197.06-.398.06-.6V12.034c.003-1.648-1.33-2.985-2.978-2.988z" />
    </svg>
  );
}

/* ─── Wordmark composites (used in the marquee) ──────────────────────── */

function MarqueeText({
  x,
  children,
  weight = 600,
  spacing = -0.5,
  fill,
}: {
  x: number;
  children: string;
  weight?: number;
  spacing?: number;
  fill: string;
}) {
  return (
    <text
      x={x}
      y={19}
      fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
      fontWeight={weight}
      fontSize="22"
      letterSpacing={spacing}
      fill={fill}
    >
      {children}
    </text>
  );
}

/* Path data shared between icon-only and wordmark variants. */
const META_PATH =
  "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z";
const GOOGLE_PATHS: { fill: string; d: string }[] = [
  {
    fill: BRAND_COLORS.google.blue,
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
  },
  {
    fill: BRAND_COLORS.google.green,
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
  },
  {
    fill: BRAND_COLORS.google.yellow,
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
  },
  {
    fill: BRAND_COLORS.google.red,
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
  },
];
const TIKTOK_PATH =
  "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
const YOUTUBE_OUTER =
  "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z";
const YOUTUBE_PLAY = "M9.545 15.568V8.432L15.818 12l-6.273 3.568z";
const DOORDASH_PATH =
  "M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413";
const NIKE_PATH =
  "M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z";
const GA4_PATH =
  "M22.84 2.998v17.999c.009 1.647-1.32 2.99-2.967 2.998a2.98 2.98 0 0 1-.368-.02c-1.528-.226-2.648-1.556-2.61-3.1V3.12c-.037-1.546 1.085-2.876 2.616-3.1 1.636-.192 3.118.98 3.31 2.616.013.12.02.24.02.362zM4.133 18.055c-1.642 0-2.973 1.331-2.973 2.973S2.491 24 4.133 24s2.972-1.331 2.972-2.972-1.331-2.973-2.972-2.973zm7.872-9.01h-.05c-1.65.09-2.93 1.474-2.892 3.126v7.985c0 2.167.954 3.482 2.351 3.763 1.612.327 3.183-.715 3.51-2.327.04-.197.06-.398.06-.6V12.034c.003-1.648-1.33-2.985-2.978-2.988z";

export function NikeWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 24" aria-label="Nike" {...props}>
      <path
        d={NIKE_PATH}
        fill={BRAND_COLORS.nike}
        transform="translate(0 7)"
      />
      <MarqueeText x={30} fill={BRAND_COLORS.nike} weight={800} spacing={-0.4}>
        Nike
      </MarqueeText>
    </svg>
  );
}

export function MetaWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" aria-label="Meta" {...props}>
      <path d={META_PATH} fill={BRAND_COLORS.meta} fillRule="evenodd" clipRule="evenodd" />
      <MarqueeText x={30} fill={BRAND_COLORS.meta} weight={700} spacing={-0.6}>
        Meta
      </MarqueeText>
    </svg>
  );
}

export function GoogleWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 134 24" aria-label="Google" {...props}>
      {GOOGLE_PATHS.map((p) => (
        <path key={p.d} d={p.d} fill={p.fill} />
      ))}
      <MarqueeText x={30} fill="#1B1B1B" weight={600} spacing={-0.4}>
        Google
      </MarqueeText>
    </svg>
  );
}

export function TikTokWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 124 24" aria-label="TikTok" {...props}>
      <path d={TIKTOK_PATH} fill={BRAND_COLORS.tiktokRed} transform="translate(-1 1)" />
      <path d={TIKTOK_PATH} fill={BRAND_COLORS.tiktokCyan} transform="translate(1 -1)" />
      <path d={TIKTOK_PATH} fill={BRAND_COLORS.tiktokBlack} />
      <MarqueeText x={30} fill={BRAND_COLORS.tiktokBlack} weight={700} spacing={-0.5}>
        TikTok
      </MarqueeText>
    </svg>
  );
}

export function DoorDashWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 154 24" aria-label="DoorDash" {...props}>
      <path d={DOORDASH_PATH} fill={BRAND_COLORS.doordash} />
      <MarqueeText x={30} fill={BRAND_COLORS.doordash} weight={700} spacing={-0.5}>
        DoorDash
      </MarqueeText>
    </svg>
  );
}

export function ToastLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 88 24" aria-label="Toast" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={800}
        fontSize="22"
        letterSpacing="-0.5"
        fill={BRAND_COLORS.toast}
      >
        toast
      </text>
    </svg>
  );
}

export function GA4Wordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 92 24" aria-label="Google Analytics 4" {...props}>
      <path d={GA4_PATH} fill={BRAND_COLORS.ga4} />
      <MarqueeText x={30} fill={BRAND_COLORS.ga4} weight={700} spacing={-0.3}>
        GA4
      </MarqueeText>
    </svg>
  );
}

export function AnnalectLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 24" aria-label="Annalect" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.4"
        fill={BRAND_COLORS.annalect}
      >
        Annalect
      </text>
    </svg>
  );
}

export function OmnicomLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" aria-label="Omnicom" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={500}
        fontSize="22"
        letterSpacing="-0.5"
        fill={BRAND_COLORS.omnicom}
      >
        OMNICOM
      </text>
    </svg>
  );
}

/* ─── Marquee directory ──────────────────────────────────────────────── */

export const BRAND_LOGOS: Record<
  string,
  { Component: (p: LogoProps) => JSX.Element; height: number }
> = {
  Nike: { Component: NikeWordmark, height: 22 },
  Annalect: { Component: AnnalectLogo, height: 22 },
  Omnicom: { Component: OmnicomLogo, height: 18 },
  Meta: { Component: MetaWordmark, height: 24 },
  Google: { Component: GoogleWordmark, height: 24 },
  TikTok: { Component: TikTokWordmark, height: 24 },
  GA4: { Component: GA4Wordmark, height: 22 },
  Toast: { Component: ToastLogo, height: 24 },
  DoorDash: { Component: DoorDashWordmark, height: 24 },
};
