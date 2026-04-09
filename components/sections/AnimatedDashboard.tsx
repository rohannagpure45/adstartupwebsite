"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const channels = [
  { name: "Paid Search", color: "#B0FE76" }, // accent (primary series)
  { name: "Meta", color: "#F38668" }, // coral (secondary)
  { name: "TikTok", color: "#2E5E45" }, // forest (tertiary)
  { name: "YouTube", color: "#DE6854" }, // burnt
  { name: "Display", color: "#1C3829" }, // anchor
];

function useLoop(period = 4000) {
  const [t, setT] = useState(0);
  const start = useRef<number | null>(null);
  useAnimationFrame((now) => {
    if (start.current === null) start.current = now;
    setT(((now - start.current) % period) / period);
  });
  return t;
}

export function AnimatedDashboard() {
  const t = useLoop(5000);
  const roas = (3.2 + Math.sin(t * Math.PI * 2) * 0.25).toFixed(2);
  const reallocation = Math.round(22 + Math.sin(t * Math.PI * 2 + 1) * 4);
  const uplift = Math.round(26 + Math.sin(t * Math.PI * 2 + 2) * 3);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-forest/20 bg-surface p-6 shadow-[0_50px_100px_-30px_rgba(28,56,41,0.35)]">
        {/* header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange" />
            <span className="text-xs font-medium text-navy/60">Live model · Q2</span>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-navy/10" />
            <span className="h-2 w-2 rounded-full bg-navy/10" />
            <span className="h-2 w-2 rounded-full bg-orange" />
          </div>
        </div>

        {/* KPIs */}
        <div className="mb-5 grid grid-cols-3 gap-3">
          <Kpi label="ROAS" value={`${roas}x`} delta="+0.3" />
          <Kpi label="Reallocation" value={`$${reallocation}.5k`} delta="this week" />
          <Kpi label="Uplift vs reported" value={`${uplift}%`} delta="incremental" />
        </div>

        {/* Bar chart */}
        <div className="rounded-2xl bg-off-blue/40 p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-navy/50">
            Channel contribution
          </p>
          <div className="flex h-32 items-end gap-3">
            {channels.map((c, i) => {
              const phase = (t + i * 0.15) % 1;
              const h = 35 + Math.abs(Math.sin(phase * Math.PI * 2)) * 60;
              return (
                <div key={c.name} className="flex flex-1 flex-col items-center gap-2">
                  <motion.div
                    className="w-full rounded-t-md"
                    style={{ background: c.color, height: `${h}%` }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <span className="text-[10px] text-navy/50">{c.name}</span>
                </div>
              );
            })}
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

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-forest/15 bg-warm-white p-4">
      <p className="text-[10px] font-medium uppercase tracking-wider text-navy/40">{label}</p>
      <p className="mt-1 font-display text-2xl text-navy">{value}</p>
      <p className="text-[10px] text-navy/50">{delta}</p>
    </div>
  );
}
