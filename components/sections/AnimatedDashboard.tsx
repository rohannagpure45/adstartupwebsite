"use client";
import { motion } from "framer-motion";
import { type SVGProps } from "react";
import { MetaLogo, TikTokLogo } from "@/components/ui/BrandLogos";

type IconProps = SVGProps<SVGSVGElement>;

function PaidSearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-label="Paid Search" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="YouTube" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function DisplayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Display" {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

const channels = [
  { name: "Paid Search", value: 78, color: "#B0FE76", Icon: PaidSearchIcon },
  { name: "Meta", value: 64, color: "#F38668", Icon: MetaLogo },
  { name: "TikTok", value: 52, color: "#2E5E45", Icon: TikTokLogo },
  { name: "YouTube", value: 46, color: "#DE6854", Icon: YouTubeIcon },
  { name: "Display", value: 28, color: "#1C3829", Icon: DisplayIcon },
];

const Y_TICKS = [0, 25, 50, 75, 100];

export function AnimatedDashboard() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-forest/20 bg-surface p-4 shadow-[0_50px_100px_-30px_rgba(28,56,41,0.35),0_18px_36px_-22px_rgba(28,56,41,0.18)] sm:p-6">
        {/* header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_0_4px_rgba(176,254,118,0.18)]" />
            <span className="text-xs font-medium text-navy/60">Live model · Q2</span>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-navy/10" />
            <span className="h-2 w-2 rounded-full bg-navy/10" />
            <span className="h-2 w-2 rounded-full bg-orange" />
          </div>
        </div>

        {/* KPIs */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Kpi
            label="ROAS"
            value="3.18×"
            delta="+0.3 vs reported"
            color="#2E5E45"
            graph={<MiniSparkline color="#2E5E45" data={[2.4, 2.6, 2.5, 2.8, 2.7, 3.0, 3.1, 3.18]} />}
          />
          <Kpi
            label="Reallocation"
            value="$22.5k"
            delta="this week"
            color="#F38668"
            graph={<MiniSparkbars color="#F38668" data={[0.4, 0.55, 0.5, 0.7, 0.62, 0.85, 0.95]} />}
          />
          <Kpi
            label="Uplift vs reported"
            value="29%"
            delta="incremental"
            color="#2E5E45"
            graph={<MiniProgress color="#B0FE76" trackColor="#2E5E45" percent={29} />}
          />
        </div>

        {/* Bar chart with platform icons */}
        <BarChart />

        {/* Insight strip */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-orange/20 bg-orange/5 p-4">
          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
          <p className="text-xs leading-relaxed text-navy/80">
            <span className="font-semibold">Why ROAS shifted:</span> Meta exceeded saturation.
            Reallocate $20k → Paid Search for projected +12% lift.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Channel contribution chart ─────────────────────────────────────────
   HTML-based bars in a CSS grid so the bars and the legend share the same
   column structure at every viewport. Gridlines render as a backdrop. */

function BarChart() {
  return (
    <div className="rounded-2xl border border-forest/10 bg-warm-white/80 p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-navy/50">
          Channel contribution
        </p>
        <p className="hidden text-[10px] text-navy/40 sm:block">% of incremental revenue</p>
      </div>

      {/* Plot area: gridlines as backdrop, bars as HTML grid on top. */}
      <div className="grid grid-cols-[28px_1fr] gap-2 sm:gap-3">
        {/* Y-axis labels */}
        <div className="relative h-44">
          {Y_TICKS.map((tick) => (
            <span
              key={tick}
              className="absolute right-0 -translate-y-1/2 text-[10px] text-navy/40"
              style={{ top: `${100 - tick}%` }}
            >
              {tick}
            </span>
          ))}
        </div>

        {/* Bars + gridlines */}
        <div className="relative h-44">
          {/* gridlines */}
          <div className="pointer-events-none absolute inset-0">
            {Y_TICKS.map((tick) => (
              <div
                key={tick}
                className="absolute left-0 right-0 border-t"
                style={{
                  top: `${100 - tick}%`,
                  borderColor: tick === 0 ? "rgba(28,56,41,0.25)" : "rgba(28,56,41,0.10)",
                  borderTopStyle: tick === 0 ? "solid" : "dashed",
                }}
              />
            ))}
          </div>

          {/* bars in a 5-col grid */}
          <div className="absolute inset-0 grid grid-cols-5 items-end gap-1 sm:gap-2">
            {channels.map((c, i) => (
              <BarColumn key={c.name} channel={c} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Legend: same 5-col grid as the bars, offset by the y-axis gutter */}
      <div className="mt-3 grid grid-cols-[28px_1fr] gap-2 border-t border-forest/10 pt-3 sm:gap-3">
        <div />
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {channels.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-1.5"
            >
              <div className="flex items-center gap-1">
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full sm:h-2.5 sm:w-2.5"
                  style={{ background: c.color }}
                />
                <c.Icon className="h-3 w-3 text-navy/55 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="truncate text-[10px] font-medium text-navy/70 sm:text-[11px]">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BarColumn({
  channel,
  index,
}: {
  channel: (typeof channels)[number];
  index: number;
}) {
  const { value, color, name } = channel;
  return (
    <div className="relative flex h-full flex-col items-center justify-end">
      {/* value label */}
      <motion.span
        className="mb-1 text-[10px] font-semibold text-navy/75"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.45 + index * 0.06, duration: 0.4 }}
      >
        {value}%
      </motion.span>
      <motion.div
        className="relative w-full max-w-[44px] overflow-hidden rounded-t-md shadow-[0_4px_8px_-2px_rgba(28,56,41,0.22)]"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, ${withAlpha(color, 0.78)} 100%)`,
        }}
        initial={{ height: 0 }}
        whileInView={{ height: `${value}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.15 + index * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-label={`${name} ${value} percent`}
      >
        {/* inner highlight */}
        <span
          className="absolute inset-x-1 top-1 block h-1/3 rounded-t-md"
          style={{ background: "rgba(255,255,255,0.18)" }}
        />
      </motion.div>
    </div>
  );
}

/* ─── KPI tile + footer visualizations ───────────────────────────────── */

function Kpi({
  label,
  value,
  delta,
  graph,
  color,
}: {
  label: string;
  value: string;
  delta: string;
  graph: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-forest/15 bg-warm-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_18px_-12px_rgba(28,56,41,0.18)]">
      <div className="px-4 pb-3 pt-4">
        <p className="text-[10px] font-medium uppercase tracking-wider text-navy/40">
          {label}
        </p>
        <p className="mt-1 font-display text-2xl text-navy">{value}</p>
        <p className="text-[10px] text-navy/50">{delta}</p>
      </div>
      <div
        className="block h-10 w-full border-t border-forest/10"
        style={{ background: withAlpha(color, 0.04) }}
      >
        {graph}
      </div>
    </div>
  );
}

function MiniSparkline({ color, data }: { color: string; data: number[] }) {
  const W = 100;
  const H = 40;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - 4 - ((v - min) / range) * (H - 12);
    return [x, y] as const;
  });
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-full w-full">
      <path d={`${d} L${W} ${H} L0 ${H} Z`} fill={color} fillOpacity="0.18" />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function MiniSparkbars({ color, data }: { color: string; data: number[] }) {
  const W = 100;
  const H = 40;
  const slot = W / data.length;
  const bw = slot * 0.62;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-full w-full">
      {data.map((v, i) => {
        const h = Math.max(2, v * (H - 6));
        const x = slot * i + (slot - bw) / 2;
        const y = H - h;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={bw}
            height={h}
            rx="1.2"
            fill={color}
            fillOpacity={0.45 + (i / data.length) * 0.5}
          />
        );
      })}
    </svg>
  );
}

function MiniProgress({
  color,
  trackColor,
  percent,
}: {
  color: string;
  trackColor: string;
  percent: number;
}) {
  // Centered horizontal progress bar — same visual rhythm as the sparkline /
  // sparkbars for the other two KPIs, with the % label inline.
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="flex h-full items-center gap-2 px-3">
      <div
        className="relative h-1.5 flex-1 overflow-hidden rounded-full"
        style={{ background: withAlpha(trackColor, 0.12) }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
      <span className="text-[10px] font-semibold tabular-nums text-navy/75">
        {clamped}%
      </span>
    </div>
  );
}

/* ─── helpers ───────────────────────────────────────────────────────── */

function withAlpha(hex: string, alpha: number) {
  // #RRGGBB → rgba(r,g,b,a)
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return hex;
  const [r, g, b] = m.map((c) => parseInt(c, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
