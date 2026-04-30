"use client";
import { motion } from "framer-motion";
import { budgetOptimizer } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";
import { MetaWordmark } from "@/components/ui/BrandLogos";

// Plot dimensions
const W = 400;
const H = 220;
const PAD_L = 44;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 32;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

// Saturation curve sampled at evenly spaced spend ticks ($k):
// 0, 25, 50, 75, 100, 125
// Revenue ($k) at each, illustrating diminishing returns
const SPEND_TICKS = [0, 25, 50, 75, 100, 125];
const REV_TICKS = [0, 100, 200, 300];
const POINTS: [number, number][] = [
  [0, 0],
  [25, 110],
  [52, 195],
  [75, 245],
  [100, 270],
  [125, 282],
];

const X_MAX = SPEND_TICKS[SPEND_TICKS.length - 1];
const Y_MAX = REV_TICKS[REV_TICKS.length - 1];

const sx = (v: number) => PAD_L + (v / X_MAX) * PLOT_W;
const sy = (v: number) => PAD_T + PLOT_H - (v / Y_MAX) * PLOT_H;

// Build smooth curve path via cubic-bezier between sampled points.
function smoothPath() {
  const pts = POINTS.map(([x, y]) => [sx(x), sy(y)]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx1 = x0 + (x1 - x0) * 0.55;
    const cx2 = x0 + (x1 - x0) * 0.45;
    d += ` C ${cx1} ${y0}, ${cx2} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

const CURVE = smoothPath();
const FILL_PATH = `${CURVE} L ${sx(X_MAX)} ${sy(0)} L ${sx(0)} ${sy(0)} Z`;

// Recommended point: $52k spend → $195k revenue (knee of the curve)
const REC_X = sx(52);
const REC_Y = sy(195);

export function BudgetOptimizer() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-container items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <RevealItem>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              {budgetOptimizer.eyebrow}
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-anchor md:text-5xl">
              {budgetOptimizer.headline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 text-lg leading-relaxed text-forest">
              {budgetOptimizer.body}
            </p>
          </RevealItem>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-anchor/10 bg-surface p-7"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.55), 0 1px 2px rgba(28,56,41,0.04), 0 30px 60px -32px rgba(28,56,41,0.28)",
          }}
        >
          {/* Header row with Meta logo */}
          <div className="flex items-center justify-between">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-anchor/55">
              Saturation curve
            </p>
            <div
              className="flex items-center gap-1.5 rounded-full border border-anchor/10 bg-warm-white px-2.5 py-1"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
            >
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #4A8BF5 0%, #1877F2 60%, #0E5BC4 100%)",
                  boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.15)",
                }}
              >
                <span className="font-display text-[10px] font-semibold leading-none text-warm-white">
                  M
                </span>
              </span>
              <MetaWordmark style={{ height: 13, width: "auto" }} className="text-anchor" />
            </div>
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mt-4 w-full"
            role="img"
            aria-label="Saturation curve for Meta showing revenue plateauing as spend increases"
          >
            <defs>
              <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#B0FE76" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#B0FE76" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Y gridlines + tick labels (revenue $k) */}
            {REV_TICKS.map((v) => (
              <g key={`y-${v}`}>
                <line
                  x1={PAD_L}
                  x2={W - PAD_R}
                  y1={sy(v)}
                  y2={sy(v)}
                  stroke="rgba(28,56,41,0.08)"
                  strokeDasharray="3 3"
                />
                <text
                  x={PAD_L - 8}
                  y={sy(v) + 3.5}
                  textAnchor="end"
                  fontSize="9"
                  fill="rgba(28,56,41,0.5)"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                >
                  ${v}k
                </text>
              </g>
            ))}

            {/* X tick labels (spend $k) */}
            {SPEND_TICKS.map((v) => (
              <g key={`x-${v}`}>
                <line
                  x1={sx(v)}
                  x2={sx(v)}
                  y1={sy(0)}
                  y2={sy(0) + 3}
                  stroke="rgba(28,56,41,0.25)"
                />
                <text
                  x={sx(v)}
                  y={sy(0) + 14}
                  textAnchor="middle"
                  fontSize="9"
                  fill="rgba(28,56,41,0.5)"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                >
                  ${v}k
                </text>
              </g>
            ))}

            {/* Axes */}
            <line
              x1={PAD_L}
              x2={W - PAD_R}
              y1={sy(0)}
              y2={sy(0)}
              stroke="rgba(28,56,41,0.35)"
              strokeWidth="1"
            />
            <line
              x1={PAD_L}
              x2={PAD_L}
              y1={PAD_T}
              y2={sy(0)}
              stroke="rgba(28,56,41,0.35)"
              strokeWidth="1"
            />

            {/* Axis titles */}
            <text
              x={PAD_L + PLOT_W / 2}
              y={H - 4}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="rgba(28,56,41,0.55)"
              fontFamily="var(--font-dm-sans), system-ui, sans-serif"
              letterSpacing="0.08em"
            >
              SPEND
            </text>
            <text
              x={-(PAD_T + PLOT_H / 2)}
              y={12}
              transform="rotate(-90)"
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="rgba(28,56,41,0.55)"
              fontFamily="var(--font-dm-sans), system-ui, sans-serif"
              letterSpacing="0.08em"
            >
              REVENUE
            </text>

            {/* Filled area */}
            <motion.path
              d={FILL_PATH}
              fill="url(#curveFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            />

            {/* Curve — animated via stroke-dashoffset on actual length to
               avoid framer-motion's pathLength/dasharray unit conflict that
               can render the line as a 1px dotted stub. */}
            <path
              d={CURVE}
              stroke="#2E5E45"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: 420,
                animation: "drawCurve 1.4s cubic-bezier(.22,1,.36,1) .15s forwards",
              }}
            />

            {/* Recommended marker (knee of curve) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.4 }}
              style={{ transformOrigin: `${REC_X}px ${REC_Y}px` }}
            >
              {/* Drop line to X axis */}
              <line
                x1={REC_X}
                x2={REC_X}
                y1={REC_Y}
                y2={sy(0)}
                stroke="#F38668"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.55"
              />
              {/* Point with halo */}
              <circle cx={REC_X} cy={REC_Y} r="9" fill="#F38668" opacity="0.18" />
              <circle
                cx={REC_X}
                cy={REC_Y}
                r="5"
                fill="#F38668"
                stroke="#FFFBF5"
                strokeWidth="2"
              />
              {/* Tooltip */}
              <g transform={`translate(${REC_X + 12}, ${REC_Y - 30})`}>
                <rect
                  x="0"
                  y="0"
                  width="92"
                  height="36"
                  rx="6"
                  fill="#1C3829"
                />
                <text
                  x="9"
                  y="14"
                  fontSize="9"
                  fill="rgba(255,251,245,0.65)"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                  letterSpacing="0.08em"
                >
                  RECOMMENDED
                </text>
                <text
                  x="9"
                  y="28"
                  fontSize="11"
                  fontWeight="600"
                  fill="#FFFBF5"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                >
                  $52k → $195k rev
                </text>
              </g>
            </motion.g>
          </svg>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            <Stat label="Current" value="$72k" sub="Meta spend" tone="muted" />
            <Stat
              label="Recommended"
              value="$52k"
              sub="-28% spend"
              tone="warning"
            />
            <Stat
              label="Projected lift"
              value="+12%"
              sub="incremental rev"
              tone="positive"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "muted" | "warning" | "positive";
}) {
  const ring =
    tone === "warning"
      ? "ring-coral/35 bg-coral/5"
      : tone === "positive"
      ? "ring-accent/45 bg-accent/10"
      : "ring-anchor/8 bg-warm-white/60";
  const labelColor =
    tone === "warning"
      ? "text-coral"
      : tone === "positive"
      ? "text-forest"
      : "text-anchor/50";
  return (
    <div
      className={`rounded-2xl px-3.5 py-3 ring-1 ${ring}`}
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55)" }}
    >
      <p
        className={`text-[9.5px] font-medium uppercase tracking-[0.14em] ${labelColor}`}
      >
        {label}
      </p>
      <p className="mt-1 font-display text-[22px] font-semibold leading-none tracking-[-0.02em] text-anchor tabular-nums">
        {value}
      </p>
      <p className="mt-1.5 text-[10.5px] text-anchor/55">{sub}</p>
    </div>
  );
}
