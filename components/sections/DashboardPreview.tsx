"use client";
import { useEffect, useRef, useState, type SVGProps } from "react";
import {
  GoogleLogo,
  MetaLogo,
  TikTokLogo,
  YouTubeLogo,
} from "@/components/ui/BrandLogos";

type IconProps = SVGProps<SVGSVGElement>;

function DisplayIcon(props: IconProps) {
  // Display isn't a single brand — match the product-page treatment with a
  // neutral anchor-tone monitor mark.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1C3829"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Display"
      {...props}
    >
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

const CHANNELS = [
  { name: "Paid Search", Icon: GoogleLogo },
  { name: "Meta", Icon: MetaLogo },
  { name: "TikTok", Icon: TikTokLogo },
  { name: "YouTube", Icon: YouTubeLogo },
  { name: "Display", Icon: DisplayIcon },
] as const;
const BAR_COLORS = ["#7B3420", "#A44E2A", "#C97050", "#E49572", "#F2B89A"];
const BASELINE = [82, 64, 48, 38, 28];

export function DashboardPreview() {
  // Gentle breathing — slow, subtle motion instead of constant jitter.
  const startRef = useRef<number | null>(null);
  const [t, setT] = useState(0);
  const [hov, setHov] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      setT((now - startRef.current) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const m = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(m);
    };
  }, []);

  // KPIs — slow sin so values feel like steady-state with occasional updates.
  const roas = (3.2 + Math.sin(t * 0.18) * 0.18).toFixed(2);
  const realloc = (24.1 + Math.cos(t * 0.14) * 0.4).toFixed(1);
  const uplift = Math.round(26 + Math.sin(t * 0.16 + 2) * 1.6);

  const channels = CHANNELS.map(({ name, Icon }, i) => {
    const drift = Math.sin(t * (0.18 + i * 0.02) + i) * (1.5 + i * 0.4);
    return { name, Icon, value: BASELINE[i] + drift };
  });

  return (
    <div
      className="mx-auto max-w-[640px] overflow-hidden rounded-2xl bg-[#EDE8DF] text-left ring-1 ring-anchor/10"
      style={{
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.6)",
          "inset 0 -1px 0 rgba(28,56,41,0.08)",
          "0 1px 0 rgba(255,255,255,0.4)",
          "0 30px 60px -28px rgba(28,56,41,0.32)",
          "0 12px 24px -16px rgba(28,56,41,0.18)",
        ].join(", "),
      }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-anchor/10 bg-[#E0D9CE] px-4 py-2.5">
        <div className="flex gap-1.5">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full"
              style={{
                background: c,
                boxShadow: "inset 0 1px 1px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        <span className="ml-1 text-[12px] text-[#6B8A7A]">Ipsa Analytics · Live model</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28C840] animate-pulse-dot" />
          <span className="text-[11px] text-[#6B8A7A]">Live</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5">
        {/* KPI grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "TRUE ROAS", val: `${roas}x`, sub: "+0.3 vs last week", pos: true },
            { label: "REALLOCATION", val: `$${realloc}k`, sub: "Meta → Search", pos: false },
            { label: "INCREMENTAL LIFT", val: `${uplift}%`, sub: "vs attributed", pos: true },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-[10px] bg-surface px-3.5 py-3 ring-1 ring-anchor/8"
              style={{
                boxShadow:
                  "inset 0 1px 2px rgba(255,255,255,0.55), 0 1px 2px rgba(28,56,41,0.04)",
              }}
            >
              <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#6B8A7A]">
                {k.label}
              </div>
              <div className="mt-1 font-display text-[22px] font-semibold leading-none tracking-[-0.02em] text-anchor tabular-nums">
                {k.val}
              </div>
              <div
                className="mt-1.5 text-[10.5px]"
                style={{ color: k.pos ? "#2E5E45" : "#6B8A7A" }}
              >
                {k.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          className="rounded-[10px] bg-warm-white/60 px-4 pb-3 pt-3.5 ring-1 ring-anchor/8"
          style={{
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.6), 0 1px 2px rgba(28,56,41,0.04)",
          }}
        >
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#6B8A7A]">
              Channel contribution
            </span>
            <span className="text-[9.5px] tabular-nums text-[#6B8A7A]">% of incremental</span>
          </div>

          {/* Plot area with gridlines */}
          <div className="relative h-[124px] w-full">
            {/* Gridlines */}
            <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border-t border-dashed border-anchor/10"
                  style={{ height: 0 }}
                />
              ))}
            </div>
            {/* Y axis labels */}
            <div className="absolute -left-1 top-0 bottom-6 flex flex-col-reverse justify-between text-[8px] tabular-nums text-anchor/35">
              {[0, 25, 50, 75, 100].map((v) => (
                <span key={v} className="-translate-y-1/2">{v}</span>
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-x-0 bottom-6 top-0 flex items-end gap-2 pl-5">
              {channels.map((ch, ci) => {
                const isHov = hov === ci;
                const color = BAR_COLORS[ci];
                const targetH = mounted ? ch.value : 0;
                return (
                  <div
                    key={ch.name}
                    onMouseEnter={() => setHov(ci)}
                    onMouseLeave={() => setHov(null)}
                    className="group relative flex h-full flex-1 cursor-pointer flex-col justify-end"
                  >
                    {/* Tooltip */}
                    <div
                      className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-anchor px-2 py-1 text-[10px] text-warm-white tabular-nums"
                      style={{
                        bottom: "calc(100% + 6px)",
                        opacity: isHov ? 1 : 0,
                        transform: isHov
                          ? "translate(-50%, 0)"
                          : "translate(-50%, 4px)",
                        transition: "opacity .15s, transform .15s",
                        boxShadow: "0 6px 14px rgba(28,56,41,0.25)",
                      }}
                    >
                      {ch.name}: {ch.value.toFixed(0)}%
                    </div>
                    {/* Value label above bar */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 text-[9.5px] font-semibold tabular-nums text-anchor"
                      style={{
                        bottom: `calc(${targetH}% + 4px)`,
                        opacity: mounted ? (isHov ? 0 : 0.7) : 0,
                        transition: "bottom 0.5s cubic-bezier(.22,1,.36,1), opacity .2s",
                      }}
                    >
                      {ch.value.toFixed(0)}
                    </div>
                    {/* Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: `${targetH}%`,
                        borderRadius: "5px 5px 2px 2px",
                        background: `linear-gradient(180deg, ${color} 0%, ${color}DD 60%, ${color}AA 100%)`,
                        boxShadow: isHov
                          ? `inset 0 1px 0 rgba(255,255,255,0.35), 0 -2px 12px ${color}55`
                          : "inset 0 1px 0 rgba(255,255,255,0.25)",
                        filter: isHov ? "brightness(1.08)" : "none",
                        transition:
                          "height 0.5s cubic-bezier(.22,1,.36,1), filter .18s ease, box-shadow .18s ease",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* X axis labels — brand logo + name (inline) */}
            <div className="absolute inset-x-0 bottom-0 flex gap-2 pl-5">
              {channels.map((ch, ci) => {
                const Icon = ch.Icon;
                const isHov = hov === ci;
                return (
                  <div
                    key={ch.name}
                    className="flex flex-1 items-center justify-center gap-1 transition-[opacity,transform] duration-200"
                    style={{
                      opacity: isHov ? 1 : 0.85,
                      transform: isHov ? "scale(1.05)" : "scale(1)",
                    }}
                    aria-label={ch.name}
                  >
                    <Icon className="h-3 w-3 flex-shrink-0" />
                    <span
                      className="whitespace-nowrap text-[8.5px] leading-none transition-colors"
                      style={{
                        color: isHov ? "#1C3829" : "#6B8A7A",
                        fontWeight: isHov ? 600 : 500,
                      }}
                    >
                      {ch.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Insight */}
        <div className="flex items-start gap-2.5 rounded-[10px] border border-accent/30 bg-accent/10 px-3.5 py-3">
          <span
            className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
            style={{ boxShadow: "0 0 0 4px rgba(176,254,118,0.25)" }}
          />
          <p className="text-[12px] leading-[1.55] text-forest">
            <strong className="font-semibold text-anchor">Why ROAS shifted:</strong>{" "}
            Meta exceeded saturation threshold. Reallocate ${Math.round(parseFloat(realloc))}k →
            Paid Search for projected +{uplift}% incremental lift.
          </p>
        </div>
      </div>
    </div>
  );
}
