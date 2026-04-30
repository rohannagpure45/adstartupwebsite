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
      <div className="relative overflow-hidden rounded-3xl border border-forest/20 bg-surface p-6 shadow-[0_50px_100px_-30px_rgba(28,56,41,0.35),0_18px_36px_-22px_rgba(28,56,41,0.18)]">
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

        {/* KPIs with mini visualizations */}
        <div className="mb-5 grid grid-cols-3 gap-3">
          <Kpi
            label="ROAS"
            value="3.18×"
            delta="+0.3 vs reported"
            graph={<MiniSparkline color="#2E5E45" data={[2.4, 2.6, 2.5, 2.8, 2.7, 3.0, 3.1, 3.18]} />}
          />
          <Kpi
            label="Reallocation"
            value="$22.5k"
            delta="this week"
            graph={<MiniSparkbars color="#F38668" data={[0.4, 0.55, 0.5, 0.7, 0.62, 0.85, 0.95]} />}
          />
          <Kpi
            label="Uplift vs reported"
            value="29%"
            delta="incremental"
            graph={<MiniRing color="#B0FE76" percent={29} />}
          />
        </div>

        {/* Bar chart with platform icons */}
        <div className="rounded-2xl border border-forest/10 bg-warm-white/80 p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-navy/50">
              Channel contribution
            </p>
            <p className="text-[10px] text-navy/40">% of incremental revenue</p>
          </div>

          <BarChart />

          {/* legend */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-forest/10 pt-3">
            {channels.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                  style={{ background: c.color }}
                />
                <c.Icon style={{ height: 13, width: 13 }} className="text-navy/55" />
                <span className="text-[11px] font-medium text-navy/70">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

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

function BarChart() {
  // SVG-based chart so we get full control over gradients, gridlines, and shadows.
  const W = 480;
  const H = 170;
  const PAD_L = 32;
  const PAD_R = 8;
  const PAD_T = 14;
  const PAD_B = 18;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;
  const slot = innerW / channels.length;
  const barW = slot * 0.52;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full">
      <defs>
        {channels.map((c) => (
          <linearGradient
            key={c.name}
            id={`bar-${slugify(c.name)}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={c.color} stopOpacity="1" />
            <stop offset="100%" stopColor={c.color} stopOpacity="0.78" />
          </linearGradient>
        ))}
        <filter id="bar-shadow" x="-30%" y="-10%" width="160%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="3"
            floodColor="#1C3829"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      {/* gridlines + y-axis ticks */}
      {Y_TICKS.map((tick) => {
        const y = PAD_T + innerH - (tick / 100) * innerH;
        return (
          <g key={tick}>
            <line
              x1={PAD_L}
              x2={W - PAD_R}
              y1={y}
              y2={y}
              stroke="#1C3829"
              strokeOpacity={tick === 0 ? 0.25 : 0.08}
              strokeDasharray={tick === 0 ? "" : "3 3"}
            />
            <text
              x={PAD_L - 6}
              y={y + 3}
              fontSize="9"
              textAnchor="end"
              fill="#1C3829"
              fillOpacity="0.4"
            >
              {tick}
            </text>
          </g>
        );
      })}

      {/* bars */}
      {channels.map((c, i) => {
        const x = PAD_L + slot * i + (slot - barW) / 2;
        const h = (c.value / 100) * innerH;
        const y = PAD_T + innerH - h;
        return (
          <motion.g
            key={c.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
          >
            <motion.rect
              x={x}
              width={barW}
              rx="4"
              ry="4"
              fill={`url(#bar-${slugify(c.name)})`}
              filter="url(#bar-shadow)"
              initial={{ y: PAD_T + innerH, height: 0 }}
              whileInView={{ y, height: h }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* subtle inner highlight */}
            <motion.rect
              x={x + 1}
              width={barW - 2}
              rx="3"
              ry="3"
              fill="white"
              fillOpacity="0.16"
              initial={{ y: PAD_T + innerH, height: 0 }}
              whileInView={{ y: y + 1, height: Math.max(0, h - 6) }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* value label above */}
            <motion.text
              x={x + barW / 2}
              y={y - 5}
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fill="#1C3829"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.75 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
            >
              {c.value}%
            </motion.text>
          </motion.g>
        );
      })}
    </svg>
  );
}

function Kpi({
  label,
  value,
  delta,
  graph,
}: {
  label: string;
  value: string;
  delta: string;
  graph: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-forest/15 bg-warm-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_18px_-12px_rgba(28,56,41,0.18)]">
      <div className="px-4 pt-4">
        <p className="text-[10px] font-medium uppercase tracking-wider text-navy/40">
          {label}
        </p>
        <p className="mt-1 font-display text-2xl text-navy">{value}</p>
        <p className="text-[10px] text-navy/50">{delta}</p>
      </div>
      <div className="mt-2 h-9 w-full">{graph}</div>
    </div>
  );
}

function MiniSparkline({ color, data }: { color: string; data: number[] }) {
  // SVG fills its container via preserveAspectRatio="none" stretching, so the
  // line spans full card width without overflowing.
  const W = 100;
  const H = 36;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - 4 - ((v - min) / range) * (H - 10);
    return [x, y] as const;
  });
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-full w-full">
      <path d={`${d} L${W} ${H} L0 ${H} Z`} fill={color} fillOpacity="0.16" />
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
  const H = 36;
  const slot = W / data.length;
  const bw = slot * 0.62;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-full w-full">
      {data.map((v, i) => {
        const h = Math.max(2, v * (H - 4));
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

function MiniRing({ color, percent }: { color: string; percent: number }) {
  const r = 12;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.max(0, Math.min(1, percent / 100)));
  return (
    <svg viewBox="0 0 100 36" className="block h-full w-full">
      <g transform="translate(82 18)">
        <circle r={r} fill="none" stroke="#2E5E45" strokeOpacity="0.12" strokeWidth="3" />
        <circle
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90)"
        />
      </g>
    </svg>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
