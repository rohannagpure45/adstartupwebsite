"use client";
import { motion } from "framer-motion";
import { budgetOptimizer } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

// ─── Plot dimensions ────────────────────────────────────────────────
const W = 440;
const H = 240;
const PAD_L = 60; // room for "$300k" labels
const PAD_R = 18;
const PAD_T = 22;
const PAD_B = 36;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

// ─── Saturation curve ───────────────────────────────────────────────
// Sampled at evenly spaced spend ticks ($k) with revenue ($k) showing
// diminishing returns. Knee is at $52k → $195k. Past the knee each
// extra dollar buys progressively less.
const SPEND_TICKS = [0, 25, 50, 75, 100, 125];
const REV_TICKS = [0, 100, 200, 300];
const POINTS: [number, number][] = [
  [0, 0],
  [25, 110],
  [52, 195],
  [75, 238],
  [100, 262],
  [125, 275],
];

const X_MAX = SPEND_TICKS[SPEND_TICKS.length - 1];
const Y_MAX = REV_TICKS[REV_TICKS.length - 1];

const sx = (v: number) => PAD_L + (v / X_MAX) * PLOT_W;
const sy = (v: number) => PAD_T + PLOT_H - (v / Y_MAX) * PLOT_H;

// Smooth path via cubic-bezier between sampled points.
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

// Story numbers — matched to curve so chart and KPIs agree.
const CURRENT_SPEND = 72; // $k
const CURRENT_REV = 238; // $k  (interpolated from POINTS at x=72)
const REC_SPEND = 52; // $k (knee)
const REC_REV = 195; // $k
const FREED = CURRENT_SPEND - REC_SPEND; // $20k
const PORTFOLIO_LIFT = 12; // %

const CUR_X = sx(CURRENT_SPEND);
const CUR_Y = sy(CURRENT_REV);
const REC_X = sx(REC_SPEND);
const REC_Y = sy(REC_REV);

export function BudgetOptimizer() {
  return (
    <section className="relative py-12 md:py-16">
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
          {/* Header row with Meta chip */}
          <div className="flex items-center justify-between">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-anchor/55">
              Saturation curve
            </p>
            <MetaChip />
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mt-4 w-full"
            role="img"
            aria-label="Saturation curve for Meta showing revenue plateauing as spend increases past $52k"
          >
            <defs>
              <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#B0FE76" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#B0FE76" stopOpacity="0" />
              </linearGradient>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1C3829" />
              </marker>
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
                  x={PAD_L - 10}
                  y={sy(v) + 3.5}
                  textAnchor="end"
                  fontSize="9.5"
                  fill="rgba(28,56,41,0.55)"
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
                  fontSize="9.5"
                  fill="rgba(28,56,41,0.55)"
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
              y={14}
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

            {/* Curve — CSS keyframe avoids framer-motion's pathLength
               unit conflict that rendered the line as a 1px dotted stub. */}
            <path
              d={CURVE}
              stroke="#2E5E45"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: 500,
                strokeDashoffset: 500,
                animation:
                  "drawCurve 1.4s cubic-bezier(.22,1,.36,1) .15s forwards",
              }}
            />

            {/* CURRENT marker — past the knee, dimmer */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.95, duration: 0.4 }}
              style={{ transformOrigin: `${CUR_X}px ${CUR_Y}px` }}
            >
              <line
                x1={CUR_X}
                x2={CUR_X}
                y1={CUR_Y}
                y2={sy(0)}
                stroke="rgba(28,56,41,0.4)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <circle cx={CUR_X} cy={CUR_Y} r="4" fill="#FFFBF5" stroke="#2E5E45" strokeWidth="2" />
              <g transform={`translate(${CUR_X + 8}, ${CUR_Y - 18})`}>
                <rect
                  x="0"
                  y="0"
                  width="74"
                  height="14"
                  rx="4"
                  fill="#FFFBF5"
                  stroke="rgba(28,56,41,0.12)"
                  strokeWidth="1"
                />
                <text
                  x="6"
                  y="10"
                  fontSize="9"
                  fontWeight="600"
                  fill="#2E5E45"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                >
                  Current · ${CURRENT_SPEND}k
                </text>
              </g>
            </motion.g>

            {/* Reallocation arrow: current → recommended */}
            <motion.path
              d={`M ${CUR_X - 6} ${CUR_Y + 18} Q ${(CUR_X + REC_X) / 2} ${
                CUR_Y + 36
              } ${REC_X + 6} ${REC_Y + 18}`}
              stroke="#1C3829"
              strokeWidth="1.25"
              fill="none"
              markerEnd="url(#arrowhead)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />

            {/* RECOMMENDED marker (knee) — primary highlight */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.05, duration: 0.4 }}
              style={{ transformOrigin: `${REC_X}px ${REC_Y}px` }}
            >
              <line
                x1={REC_X}
                x2={REC_X}
                y1={REC_Y}
                y2={sy(0)}
                stroke="#F38668"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.6"
              />
              <circle cx={REC_X} cy={REC_Y} r="9" fill="#F38668" opacity="0.18" />
              <circle
                cx={REC_X}
                cy={REC_Y}
                r="5"
                fill="#F38668"
                stroke="#FFFBF5"
                strokeWidth="2"
              />
              {/* Tooltip — sized to fit content, anchored upper-left of point */}
              <g transform={`translate(${REC_X - 130}, ${REC_Y - 46})`}>
                <rect
                  x="0"
                  y="0"
                  width="120"
                  height="40"
                  rx="7"
                  fill="#1C3829"
                />
                <text
                  x="10"
                  y="15"
                  fontSize="8.5"
                  fill="rgba(255,251,245,0.62)"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                  letterSpacing="0.12em"
                >
                  RECOMMENDED
                </text>
                <text
                  x="10"
                  y="31"
                  fontSize="11.5"
                  fontWeight="600"
                  fill="#FFFBF5"
                  fontFamily="var(--font-dm-sans), system-ui, sans-serif"
                >
                  ${REC_SPEND}k → ${REC_REV}k rev
                </text>
                {/* Tooltip pointer */}
                <path
                  d={`M 120 28 L 128 32 L 120 36 Z`}
                  fill="#1C3829"
                />
              </g>
            </motion.g>
          </svg>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            <Stat
              label="Current"
              value={`$${CURRENT_SPEND}k`}
              sub={`Meta · $${CURRENT_REV}k rev`}
              tone="muted"
            />
            <Stat
              label="Recommended"
              value={`$${REC_SPEND}k`}
              sub={`Meta · $${REC_REV}k rev`}
              tone="warning"
            />
            <Stat
              label="Reallocate to Search"
              value={`+${PORTFOLIO_LIFT}%`}
              sub={`$${FREED}k freed · portfolio lift`}
              tone="positive"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Meta chip ─────────────────────────────────────────────────────
   Recognizable infinity-style mark in Meta's blue gradient + wordmark.
   Two overlapping ribbon loops, a stylized take on the Meta glyph. */
function MetaChip() {
  return (
    <div
      className="flex items-center gap-2 rounded-full border border-anchor/10 bg-warm-white px-3 py-1.5"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
    >
      <svg width="22" height="14" viewBox="0 0 36 22" aria-label="Meta">
        <defs>
          <linearGradient id="metaBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0064E0" />
            <stop offset="55%" stopColor="#0082FB" />
            <stop offset="100%" stopColor="#0064E0" />
          </linearGradient>
        </defs>
        <path
          d="M9 1.5
             C 4.5 1.5, 1.5 5.5, 1.5 11
             C 1.5 16.5, 4.5 20.5, 9 20.5
             C 12.5 20.5, 14.6 18, 17.2 14.2
             L 18 13
             L 18.8 14.2
             C 21.4 18, 23.5 20.5, 27 20.5
             C 31.5 20.5, 34.5 16.5, 34.5 11
             C 34.5 5.5, 31.5 1.5, 27 1.5
             C 23.5 1.5, 21.4 4, 18.8 7.8
             L 18 9
             L 17.2 7.8
             C 14.6 4, 12.5 1.5, 9 1.5
             Z
             M 9 5.2
             C 11.4 5.2, 12.9 6.7, 15.6 10.6
             L 16 11
             L 15.6 11.4
             C 12.9 15.3, 11.4 16.8, 9 16.8
             C 6.6 16.8, 5 15.2, 5 11
             C 5 6.8, 6.6 5.2, 9 5.2 Z
             M 27 5.2
             C 29.4 5.2, 31 6.8, 31 11
             C 31 15.2, 29.4 16.8, 27 16.8
             C 24.6 16.8, 23.1 15.3, 20.4 11.4
             L 20 11
             L 20.4 10.6
             C 23.1 6.7, 24.6 5.2, 27 5.2 Z"
          fill="url(#metaBlue)"
        />
      </svg>
      <span className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-anchor">
        Meta
      </span>
    </div>
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
