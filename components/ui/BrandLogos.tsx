import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

/* Brand marks rendered as monochrome `currentColor` SVGs for a uniform
   logo-wall treatment. Path data sourced from the open-source Simple Icons
   project (CC0) where applicable; wordmark-only brands use typographic
   renderings. */

export function NikeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 9" fill="currentColor" aria-label="Nike" {...props}>
      <path d="M24 2.748L7.04 9.057c-1.43.534-2.626.802-3.583.802-1.077 0-1.86-.336-2.353-1.011C-.224 7.71.916 5.323 3.43 3.16q.32-.276.643-.512c-.34.435-2.42 3.227-1.297 4.733.272.366.728.55 1.367.55.515 0 1.117-.121 1.806-.359z" />
    </svg>
  );
}

export function MetaLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 287 192" fill="currentColor" aria-label="Meta" {...props}>
      <path d="M62 96c0 16.4 9.5 32.7 23 41 16.7 10.3 35.7 6 56-21l21-30c10-15 20-29 32-29s23 11 23 36-11 36-23 36c-9 0-15-3-22-9l-19 22c14 13 30 22 49 22 36 0 60-25 60-71s-25-71-60-71c-23 0-39 11-55 35l-23 32c-15 22-23 27-32 27-12 0-19-9-19-25s7-25 19-25c8 0 14 4 21 11l19-22c-12-12-26-22-43-22-32 0-56 22-56 64z" />
    </svg>
  );
}

export function GoogleLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Google" {...props}>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export function TikTokLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="TikTok" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}

export function DoorDashLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="DoorDash" {...props}>
      <path d="M23.071 8.409a6.09 6.09 0 0 0-5.396-3.228H.584a.589.589 0 0 0-.415 1.002l3.054 3.044a2.052 2.052 0 0 0 1.451.6h12.31a2.224 2.224 0 0 1 .104 4.446H8.66a.586.586 0 0 0-.415 1.002l3.054 3.044c.385.384.907.6 1.452.6h4.924a6.082 6.082 0 0 0 5.395-8.51z" />
    </svg>
  );
}

export function ToastLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 88 24" fill="currentColor" aria-label="Toast" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={800}
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        toast
      </text>
    </svg>
  );
}

export function GA4Logo(props: LogoProps) {
  return (
    <svg viewBox="0 0 64 22" fill="currentColor" aria-label="Google Analytics 4" {...props}>
      <rect x="0" y="2" width="5" height="18" rx="2.5" />
      <rect x="8" y="8" width="5" height="12" rx="2.5" />
      <rect x="16" y="13" width="5" height="7" rx="2.5" />
      <text
        x="26"
        y="17"
        fontFamily="'Inter',system-ui,sans-serif"
        fontWeight={600}
        fontSize="15"
        letterSpacing="-0.2"
        fill="currentColor"
      >
        GA4
      </text>
    </svg>
  );
}

export function AnnalectLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 24" fill="currentColor" aria-label="Annalect" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.4"
        fill="currentColor"
      >
        Annalect
      </text>
    </svg>
  );
}

export function OmnicomLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" fill="currentColor" aria-label="Omnicom" {...props}>
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={500}
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        OMNICOM
      </text>
    </svg>
  );
}

export function MetaWordmark(props: LogoProps) {
  // Meta's wordmark with the recognizable infinity-style 'M' replaced by a
  // simplified mark + text wordmark.
  return (
    <svg viewBox="0 0 90 24" fill="currentColor" aria-label="Meta" {...props}>
      <path
        d="M2 16c0-6 3-11 7-11 3 0 5 2 8 7l1 2c2-3 4-9 9-9 4 0 7 5 7 11s-3 7-6 7c-2 0-3-1-5-4l-2-3-3 4c-2 3-3 4-5 4-3 0-3-3-3-5s1-3 2-3c2 0 3 1 5 4l2 2c-1 1-2 2-4 2-2 0-3-1-3-3"
        opacity="0"
      />
      <text
        x="0"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.6"
        fill="currentColor"
      >
        Meta
      </text>
    </svg>
  );
}

export const BRAND_LOGOS: Record<
  string,
  { Component: (p: LogoProps) => JSX.Element; height: number }
> = {
  Nike: { Component: NikeLogo, height: 18 },
  Annalect: { Component: AnnalectLogo, height: 22 },
  Omnicom: { Component: OmnicomLogo, height: 18 },
  Meta: { Component: MetaWordmark, height: 22 },
  Google: { Component: GoogleLogo, height: 26 },
  TikTok: { Component: TikTokLogo, height: 28 },
  GA4: { Component: GA4Logo, height: 22 },
  Toast: { Component: ToastLogo, height: 24 },
  DoorDash: { Component: DoorDashLogo, height: 28 },
};
