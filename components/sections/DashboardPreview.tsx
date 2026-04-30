"use client";
import { useEffect, useState } from "react";

const CHANNEL_NAMES = ["Paid Search", "Meta", "TikTok", "YouTube", "Display"] as const;
const BAR_COLORS = ["#7B3420", "#A44E2A", "#C97050", "#E49572", "#F2B89A"];

export function DashboardPreview() {
  const [t, setT] = useState(0);
  const [hov, setHov] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1 / 60), 1000 / 60);
    return () => clearInterval(id);
  }, []);

  const roas = (3.2 + Math.sin(t * 0.38) * 0.22).toFixed(2);
  const realloc = (24.1 + Math.cos(t * 0.28) * 0.45).toFixed(1);
  const uplift = Math.round(26 + Math.sin(t * 0.32 + 2) * 2.8);

  const channels = CHANNEL_NAMES.map((name, i) => ({
    name,
    h: [85, 62, 44, 38, 28][i] + Math.sin(t * (0.4 + i * 0.02) + i) * (4 + i),
  }));

  return (
    <div
      className="mx-auto max-w-[640px] overflow-hidden rounded-2xl border border-anchor/15 bg-[#EDE8DF] text-left"
      style={{
        boxShadow:
          "inset 0 3px 14px rgba(0,0,0,0.18), inset 0 1px 4px rgba(0,0,0,0.08), 0 40px 80px -30px rgba(0,0,0,0.35), 0 16px 30px -20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-anchor/10 bg-[#E0D9CE] px-4 py-3">
        <div className="flex gap-1.5">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full"
              style={{ background: c, boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)" }}
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
      <div className="flex flex-col gap-3.5 p-5">
        {/* KPI grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "TRUE ROAS", val: `${roas}x`, sub: "+0.3 vs last week", pos: true },
            { label: "REALLOCATION", val: `$${realloc}k`, sub: "Meta → Search", pos: false },
            { label: "INCREMENTAL LIFT", val: `${uplift}%`, sub: "vs attributed", pos: true },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-[10px] border border-anchor/12 bg-surface px-3.5 py-3"
              style={{
                boxShadow:
                  "inset 0 1px 3px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#6B8A7A]">
                {k.label}
              </div>
              <div className="mt-1 font-display text-[22px] font-semibold leading-none tracking-[-0.02em] text-anchor">
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
          className="rounded-[10px] border border-anchor/12 px-4 pb-2.5 pt-3.5"
          style={{
            background: "rgba(28,56,41,0.04)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div className="mb-3 text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#6B8A7A]">
            Channel contribution
          </div>
          <div className="flex h-[100px] items-end gap-2">
            {channels.map((ch, ci) => {
              const isHov = hov === ci;
              const color = BAR_COLORS[ci];
              return (
                <div
                  key={ch.name}
                  onMouseEnter={() => setHov(ci)}
                  onMouseLeave={() => setHov(null)}
                  className="relative flex flex-1 cursor-pointer flex-col items-center gap-1.5"
                >
                  {/* Tooltip */}
                  <div
                    className="pointer-events-none absolute z-10 whitespace-nowrap rounded-md bg-anchor px-2 py-1 text-[10px] text-warm-white"
                    style={{
                      bottom: "calc(100% + 4px)",
                      opacity: isHov ? 1 : 0,
                      transform: isHov ? "translateY(0)" : "translateY(4px)",
                      transition: "opacity .15s, transform .15s",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    {ch.name}: {ch.h.toFixed(0)}%
                  </div>
                  {/* Bar */}
                  <div
                    style={{
                      width: "100%",
                      height: `${ch.h}%`,
                      borderRadius: "4px 4px 2px 2px",
                      background: `linear-gradient(180deg, ${color}EE, ${color}88)`,
                      boxShadow: isHov ? `0 -4px 12px ${color}66` : "none",
                      filter: isHov ? "brightness(1.1)" : "none",
                      transform: isHov ? "scaleX(1.06)" : "scaleX(1)",
                      transformOrigin: "bottom",
                      transition:
                        "filter .2s, transform .2s, box-shadow .2s",
                    }}
                  />
                  <div
                    className="text-[9px] leading-tight text-center transition-colors"
                    style={{
                      color: isHov ? "#1C3829" : "#6B8A7A",
                      fontWeight: isHov ? 600 : 400,
                    }}
                  >
                    {ch.name.split(" ")[0]}
                  </div>
                </div>
              );
            })}
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
