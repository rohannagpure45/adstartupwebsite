import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

/* Brand marks rendered as monochrome `currentColor` SVGs for a uniform
   logo-wall treatment. Path data sourced from the open-source Simple Icons
   project (CC0). Brands that are typically recognized as a wordmark (Google,
   TikTok, DoorDash, Meta) pair the glyph with the wordmark for clarity at
   small sizes. */

export function NikeLogo(props: LogoProps) {
  // Full Simple Icons Nike swoosh (CC0). Native viewBox 0 0 24 24.
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Nike" {...props}>
      <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.116 0-1.926-.392-2.435-1.165C-.317 14.135-.094 12.65.86 10.989c.575-1.025 1.395-2.05 2.467-3.075-.486 1-1.481 3.32-.276 4.39.385.384.969.575 1.74.575.628 0 1.378-.122 2.241-.367z" />
    </svg>
  );
}

export function MetaLogo(props: LogoProps) {
  // Simple Icons Meta infinity mark (CC0).
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Meta" {...props}>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.652 0 12.667 0 14.62c0 .768.155 1.413.448 1.92a3.27 3.27 0 0 0 1.354 1.297 3.836 3.836 0 0 0 1.795.42c1.218 0 2.318-.526 3.526-1.886.795-.895 1.598-1.91 2.421-3.05.026-.038.052-.077.078-.117.171-.247.345-.499.521-.756l.04-.058a72.5 72.5 0 0 1 1.205-1.751c.7-.991 1.31-1.808 1.821-2.412.575-.683 1.084-1.111 1.587-1.32.42-.176.857-.243 1.27-.18.405.061.79.243 1.092.526.302.282.51.65.6 1.057.13.585.085 1.169-.025 1.747-.116.61-.323 1.235-.564 1.836-.477 1.176-1.094 2.262-1.69 3.179-.625.961-1.21 1.773-1.78 2.367-.534.554-1.049.984-1.582 1.227-.526.241-1.04.32-1.534.236-.486-.083-.946-.31-1.353-.65a3.84 3.84 0 0 1-.94-1.222 4.04 4.04 0 0 1-.398-1.394c-.027-.236-.02-.477.011-.722l-.157.235c-1.275 1.91-2.402 3.42-3.515 4.434-.96.873-1.94 1.387-2.958 1.547-.522.082-1.04.054-1.547-.07a3.7 3.7 0 0 1-1.41-.682A3.81 3.81 0 0 1 .65 19.43a4.4 4.4 0 0 1-.45-1.43Z" opacity="0.001" />
      <path d="M2.5 13.4c0-2.5 1.5-5.6 3.5-7.4 1-.9 2.2-1.4 3.4-1.4 1.4 0 2.6.6 3.7 1.7 1.1 1.1 2.1 2.6 3.1 4.4l.7 1.2c.4-.6.9-1.4 1.4-2.3 1-1.5 2-2.8 3.1-3.7 1-.9 2.1-1.3 3.3-1.3v3.4c-.7 0-1.3.2-1.9.7-.7.5-1.4 1.3-2.2 2.5-.6.9-1.2 1.9-1.8 3l-.7 1.1.5.8c1.4 2.2 2.6 3.7 3.5 4.4.7.6 1.5.9 2.6.9v3.4c-2.2 0-3.9-.7-5.5-2-1.3-1.1-2.5-2.6-3.6-4.5l-.5-.8-.6 1c-1.1 1.7-2.1 3-3.1 3.9-1.3 1.1-2.7 1.7-4.3 1.7-1.4 0-2.6-.5-3.5-1.5-1-1-1.6-2.5-1.6-4.6 0-1.5.4-3.2 1.1-4.9zm3.4.4c-.4 1.1-.7 2.3-.7 3.2 0 1.1.3 1.9.8 2.4.5.5 1.1.8 1.9.8.9 0 1.7-.4 2.5-1.1.7-.6 1.4-1.5 2.1-2.6l.5-.8-.5-.7c-.9-1.4-1.7-2.5-2.5-3.3-.7-.7-1.5-1.1-2.2-1.1s-1.4.3-1.9 1c-.6.7-1.2 1.7-1.6 2.7l-.4-.5z" />
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

/* Composite logo + wordmark renderers — used for brands typically read as
   logo-and-wordmark pairs in a logo wall (Google, TikTok, DoorDash, Meta). */

export function MetaWordmark(props: LogoProps) {
  // Simple Icons Meta infinity-style mark (CC0) — twin-loop glyph rendered
  // alongside the "Meta" wordmark.
  return (
    <svg viewBox="0 0 116 24" fill="currentColor" aria-label="Meta" {...props}>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.652 0 12.667 0 14.62c0 2.887 1.39 4.79 3.703 4.79 1.711 0 2.916-.804 5.146-4.717l1.512-2.671c.052-.094.105-.188.156-.282l.116.21c.31.555.624 1.124.95 1.717l1.107 2.07c1.484 2.762 2.685 4.196 5.13 4.196 2.358 0 3.708-1.97 3.708-4.79 0-2.094-.71-4.965-2.09-7.504-1.135-2.084-2.785-3.61-4.83-3.61-1.93 0-3.43 1.05-4.74 2.96-.176.252-.343.514-.51.79-.262-.31-.526-.6-.792-.87-1.295-1.317-2.673-1.97-4.04-1.97zm-.078 4.275c.74 0 1.418.297 2.041 1.014.428.493.815 1.06 1.205 1.643l-.39.59c-.99 1.514-1.638 2.43-2.367 2.43-.832 0-1.4-.673-1.4-1.752 0-1.087.61-2.46 1.34-3.46.21-.293.37-.465.57-.465zm10.382 0c.21 0 .376.15.566.42.745.985 1.36 2.39 1.36 3.49 0 1.05-.55 1.78-1.39 1.78-.71 0-1.34-.92-2.34-2.43l-.4-.6c.39-.58.78-1.15 1.21-1.65.62-.72 1.31-1.01 2.04-1.01z" />
      <text
        x="30"
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

export function GoogleWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 24" fill="currentColor" aria-label="Google" {...props}>
      <g transform="translate(0 1) scale(0.92)">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </g>
      <text
        x="30"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        Google
      </text>
    </svg>
  );
}

export function TikTokWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 24" fill="currentColor" aria-label="TikTok" {...props}>
      <g transform="translate(0 1) scale(0.92)">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
      </g>
      <text
        x="30"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        TikTok
      </text>
    </svg>
  );
}

export function DoorDashWordmark(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 24" fill="currentColor" aria-label="DoorDash" {...props}>
      <g transform="translate(0 1) scale(0.92)">
        <path d="M23.071 8.409a6.09 6.09 0 0 0-5.396-3.228H.584a.589.589 0 0 0-.415 1.002l3.054 3.044a2.052 2.052 0 0 0 1.451.6h12.31a2.224 2.224 0 0 1 .104 4.446H8.66a.586.586 0 0 0-.415 1.002l3.054 3.044c.385.384.907.6 1.452.6h4.924a6.082 6.082 0 0 0 5.395-8.51z" />
      </g>
      <text
        x="30"
        y="19"
        fontFamily="'Inter','Helvetica Neue',system-ui,sans-serif"
        fontWeight={600}
        fontSize="22"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        DoorDash
      </text>
    </svg>
  );
}

export const BRAND_LOGOS: Record<
  string,
  { Component: (p: LogoProps) => JSX.Element; height: number }
> = {
  Nike: { Component: NikeLogo, height: 22 },
  Annalect: { Component: AnnalectLogo, height: 22 },
  Omnicom: { Component: OmnicomLogo, height: 18 },
  Meta: { Component: MetaWordmark, height: 24 },
  Google: { Component: GoogleWordmark, height: 24 },
  TikTok: { Component: TikTokWordmark, height: 24 },
  GA4: { Component: GA4Logo, height: 22 },
  Toast: { Component: ToastLogo, height: 24 },
  DoorDash: { Component: DoorDashWordmark, height: 24 },
};
