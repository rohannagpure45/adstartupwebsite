type Props = {
  size?: number;
  className?: string;
  tone?: "dark" | "light";
};

/* Ipsa evil-eye mark. Four concentric rings matching the reference
   proportions: dominant outer disc (~42% of radius), eye-white ring,
   iris ring, accent pupil. Outer disc inverts per tone. */
export function Logo({ size = 28, className, tone = "dark" }: Props) {
  const id = `ipsa-${size}-${tone}`;

  // tone="dark"  → navy outer disc (dominant, like the reference cobalt)
  // tone="light" → cream outer disc (inverted for dark hero bg)
  const discStops =
    tone === "light"
      ? [
          { offset: "0%", color: "#FFFFFF" },
          { offset: "55%", color: "#FBF6EA" },
          { offset: "100%", color: "#E8E2D2" },
        ]
      : [
          { offset: "0%", color: "#2E5E45" },  // forest highlight at top-left
          { offset: "30%", color: "#1C3829" },  // anchor/navy dominant
          { offset: "100%", color: "#0F1F17" }, // near-black at rim
        ];

  // Eye-white separator: warm-white on dark tone, navy on light tone
  const eyeWhite = tone === "light" ? "#1C3829" : "#FFFBF5";

  const outerStroke =
    tone === "light" ? "rgba(255,255,255,0.35)" : "rgba(15,31,23,0.6)";
  const highlight =
    tone === "light" ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.20)";

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
          {discStops.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </radialGradient>
      </defs>

      {/* Outer disc — navy (dark) or cream (light); thick band ~42% of radius */}
      <circle
        cx="16"
        cy="16"
        r="15.5"
        fill={`url(#${id}-disc)`}
        stroke={outerStroke}
        strokeWidth="0.5"
      />

      {/* Specular highlight sits on outer disc; covered by eye-white below */}
      <ellipse cx="11" cy="9" rx="5" ry="2.5" fill={highlight} />

      {/* Eye-white ring — r=9 leaves a 6.5-unit navy band outside it */}
      <circle cx="16" cy="16" r="9" fill={eyeWhite} />

      {/* Forest iris — brand "light blue" equivalent */}
      <circle cx="16" cy="16" r="5.5" fill="#2E5E45" />

      {/* Accent pupil */}
      <circle cx="16" cy="16" r="3" fill="#B0FE76" />
    </svg>
  );
}
