import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // New canonical brand tokens
        anchor: "#1C3829",
        forest: "#2E5E45",
        accent: "#B0FE76",
        coral: "#F38668",
        burnt: "#DE6854",
        "warm-white": "#FFFBF5",
        surface: "#F0EDE6",
        surface2: "#E5DDD0",
        sienna: { DEFAULT: "#7B3420", deep: "#5C2616", soft: "#A44E2A" },

        // Legacy aliases mapped to new palette so existing class usage keeps working.
        // navy → anchor (primary dark/text), navy.caption → forest (secondary text)
        navy: { DEFAULT: "#1C3829", caption: "#2E5E45" },
        // orange → accent (CTA highlights), orange.deep → coral (warm accent)
        orange: { DEFAULT: "#B0FE76", deep: "#F38668" },
        sky: "#F0EDE6",
        "off-blue": "#F0EDE6",
        "blue-tint": "#2E5E45",
        "baby-blue": "#F0EDE6",
        "dark-grey": "#A3A3A3",
        grey: "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "var(--font-radley)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "var(--font-radley)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      backgroundImage: {
        // Surface-toned gradient (warm white + faint coral/forest washes)
        "gradient-1":
          "radial-gradient(at 30% 30%, rgba(243,134,104,0.35) 0%, transparent 55%), radial-gradient(at 70% 70%, rgba(46,94,69,0.18) 0%, transparent 60%), linear-gradient(135deg, #FFFBF5, #F0EDE6)",
        // Soft surface gradient for closing CTA (no large accent green)
        "gradient-2":
          "radial-gradient(at 70% 30%, rgba(46,94,69,0.25) 0%, transparent 55%), radial-gradient(at 25% 75%, rgba(243,134,104,0.3) 0%, transparent 60%), linear-gradient(135deg, #FFFBF5, #F0EDE6)",
        // Deep forest/anchor gradient for dark feature accents
        "gradient-3":
          "radial-gradient(at 30% 50%, rgba(176,254,118,0.18) 0%, transparent 55%), radial-gradient(at 75% 80%, rgba(243,134,104,0.25) 0%, transparent 60%), linear-gradient(135deg, #1C3829, #2E5E45)",
        // Anchor gradient for hero illustrations
        "gradient-4":
          "radial-gradient(at 60% 40%, rgba(176,254,118,0.2) 0%, transparent 55%), radial-gradient(at 20% 80%, rgba(243,134,104,0.25) 0%, transparent 60%), linear-gradient(135deg, #1C3829, #2E5E45)",
      },
    },
  },
  plugins: [],
};

export default config;
