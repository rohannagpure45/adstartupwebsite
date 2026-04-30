type Props = {
  size?: number;
  className?: string;
};

/* Refined Ipsa mark: an aperture/lens-style symbol that doubles as the
   "i" of Ipsa. Concentric rings with a soft inner glow and a subtle inset
   highlight to give the disc dimension instead of looking like a flat decal. */
export function Logo({ size = 28, className }: Props) {
  const id = `ipsa-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <radialGradient id={`${id}-disc`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#2E5E45" />
          <stop offset="55%" stopColor="#1C3829" />
          <stop offset="100%" stopColor="#0F1F17" />
        </radialGradient>
        <radialGradient id={`${id}-iris`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#D7FFA9" />
          <stop offset="55%" stopColor="#B0FE76" />
          <stop offset="100%" stopColor="#7BC944" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      {/* Outer ring with gradient + inset highlight */}
      <circle cx="16" cy="16" r="15" fill={`url(#${id}-disc)`} />
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="0.6"
      />
      {/* Top-left specular highlight */}
      <ellipse
        cx="11.5"
        cy="9"
        rx="6.5"
        ry="3"
        fill="rgba(255,255,255,0.16)"
        filter={`url(#${id}-shadow)`}
      />

      {/* Iris (accent green disc) */}
      <circle cx="16" cy="16" r="6.4" fill={`url(#${id}-iris)`} />
      {/* Iris rim */}
      <circle
        cx="16"
        cy="16"
        r="6.4"
        fill="none"
        stroke="rgba(28,56,41,0.35)"
        strokeWidth="0.5"
      />

      {/* Pupil */}
      <circle cx="16" cy="16" r="2.6" fill="#1C3829" />
      {/* Pupil catchlight */}
      <circle cx="14.9" cy="14.9" r="0.85" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}
