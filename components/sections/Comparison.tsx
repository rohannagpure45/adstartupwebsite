"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";
import { socialProof } from "@/content/copy";

type Cell = "yes" | "no" | "sometimes";
type ColKey = "ipsa" | "saas" | "open" | "enterprise" | "inhouse";
type Column = { key: ColKey; label: string; sub: string; highlight?: boolean };

const columns: Column[] = [
  { key: "ipsa", label: "Ipsa", sub: "", highlight: true },
  { key: "saas", label: "SaaS MMM", sub: "Recast" },
  { key: "open", label: "Open Src", sub: "Robyn" },
  { key: "enterprise", label: "Enterprise", sub: "Nielsen" },
  { key: "inhouse", label: "In-House", sub: "Build" },
];

type Row = { label: string; values: Record<ColKey, Cell> };
type Group = { heading: string; rows: Row[] };

const groups: Group[] = [
  {
    heading: "Agency & Multi-client",
    rows: [
      { label: "Multi-client management", values: { ipsa: "yes", saas: "no", open: "no", enterprise: "sometimes", inhouse: "no" } },
      { label: "White-labeled reporting", values: { ipsa: "yes", saas: "no", open: "no", enterprise: "sometimes", inhouse: "yes" } },
      { label: "Built for analyst workflow", values: { ipsa: "yes", saas: "sometimes", open: "yes", enterprise: "sometimes", inhouse: "yes" } },
    ],
  },
  {
    heading: "Data & Automation",
    rows: [
      { label: "Automated data pipelines", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "sometimes", inhouse: "sometimes" } },
      { label: "Data hygiene dashboard", values: { ipsa: "yes", saas: "no", open: "no", enterprise: "no", inhouse: "no" } },
      { label: "No manual exports needed", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "no", inhouse: "sometimes" } },
    ],
  },
  {
    heading: "Modeling",
    rows: [
      { label: "No-code model configuration", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "sometimes", inhouse: "no" } },
      { label: "Builds in days, not months", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "no", inhouse: "no" } },
      { label: "Model versioning", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "sometimes", inhouse: "sometimes" } },
    ],
  },
  {
    heading: "Insights & Optimization",
    rows: [
      { label: "AI budget optimizer", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "sometimes", inhouse: "sometimes" } },
      { label: "Plain-language explanations", values: { ipsa: "yes", saas: "no", open: "no", enterprise: "no", inhouse: "no" } },
      { label: "Scenario planner", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "sometimes", inhouse: "sometimes" } },
      { label: "On-demand reporting", values: { ipsa: "yes", saas: "sometimes", open: "no", enterprise: "no", inhouse: "sometimes" } },
    ],
  },
];

function Indicator({ value, size = "sm" }: { value: Cell; size?: "sm" | "xs" }) {
  const dim = size === "sm" ? "h-5 w-5" : "h-4 w-4";
  const icon = size === "sm" ? "h-3 w-3" : "h-2.5 w-2.5";
  if (value === "yes") {
    return (
      <span
        title="Yes"
        className={clsx("inline-flex items-center justify-center rounded-full bg-accent/40 text-anchor ring-1 ring-accent/70", dim)}
      >
        <svg viewBox="0 0 20 20" className={icon} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10.5l4 4 8-9" />
        </svg>
      </span>
    );
  }
  if (value === "no") {
    return (
      <span
        title="No"
        className={clsx("inline-flex items-center justify-center rounded-full bg-coral/25 text-coral ring-1 ring-coral/45", dim)}
      >
        <svg viewBox="0 0 20 20" className={icon} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </span>
    );
  }
  return (
    <span
      title="Sometimes"
      className={clsx(
        "inline-flex items-center justify-center rounded-full ring-1",
        dim
      )}
      style={{
        backgroundColor: "rgba(239, 201, 76, 0.25)",
        color: "#B8860B",
        boxShadow: "inset 0 0 0 1px rgba(239, 201, 76, 0.6)",
      }}
    >
      <svg viewBox="0 0 20 20" className={icon} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M5 10h10" />
      </svg>
    </span>
  );
}

function ColumnHeader({ col, compact = false }: { col: Column; compact?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      {col.highlight ? (
        <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-anchor">
          {col.label}
        </span>
      ) : (
        <span className={clsx("font-semibold uppercase tracking-wider text-anchor", compact ? "text-[10px]" : "text-[10px]")}>
          {col.label}
        </span>
      )}
      {col.sub && <span className="text-[9px] uppercase tracking-wider text-forest/55">{col.sub}</span>}
    </div>
  );
}

export function Comparison() {
  const competitors = columns.filter((c) => !c.highlight);
  const [activeCompetitor, setActiveCompetitor] = useState<ColKey>(competitors[0].key);

  return (
    <section className="relative bg-warm-white py-9 md:py-12">
      <div className="mx-auto max-w-container px-6">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-14">
          {/* LEFT — Comparison table */}
          <div>
            {/* Desktop compact table */}
            <Reveal className="hidden md:block">
              <RevealItem>
                <div className="overflow-hidden rounded-2xl border border-forest/20 bg-surface">
                  <div className="grid grid-cols-[1.4fr_repeat(5,1fr)] gap-2 px-5 pt-5 pb-3">
                    <div />
                    {columns.map((c) => (
                      <ColumnHeader key={c.key} col={c} />
                    ))}
                  </div>

                  {groups.map((g, gi) => (
                    <div key={g.heading}>
                      <div
                        className={clsx(
                          "grid grid-cols-[1.4fr_repeat(5,1fr)] gap-2 border-t border-forest/15 px-5 py-1.5",
                          gi === 0 && "border-t-0"
                        )}
                      >
                        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-forest/65">
                          {g.heading}
                        </span>
                      </div>
                      {g.rows.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-[1.4fr_repeat(5,1fr)] items-center gap-2 border-t border-forest/10 px-5 py-2"
                        >
                          <span className="text-[11px] font-medium text-anchor">{row.label}</span>
                          {columns.map((c) => (
                            <div
                              key={c.key}
                              className={clsx("flex justify-center", c.highlight && "bg-accent/8")}
                            >
                              <Indicator value={row.values[c.key]} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}

                  <div className="flex items-center justify-center gap-5 border-t border-forest/15 py-3 text-[10px] text-forest">
                    <span className="flex items-center gap-1.5">
                      <Indicator value="yes" size="xs" /> Yes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Indicator value="sometimes" size="xs" /> Sometimes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Indicator value="no" size="xs" /> No
                    </span>
                  </div>
                </div>
              </RevealItem>
            </Reveal>

            {/* Mobile tab switcher */}
            <div className="md:hidden">
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {competitors.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCompetitor(c.key)}
                    className={clsx(
                      "relative rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition",
                      activeCompetitor === c.key ? "text-anchor" : "text-forest/60 hover:text-forest"
                    )}
                  >
                    {activeCompetitor === c.key && (
                      <motion.span
                        layoutId="comp-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-surface ring-1 ring-forest/20"
                      />
                    )}
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-forest/20 bg-surface">
                <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2 px-4 pt-4 pb-3">
                  <div />
                  <ColumnHeader col={columns[0]} compact />
                  <ColumnHeader col={columns.find((c) => c.key === activeCompetitor)!} compact />
                </div>
                {groups.map((g, gi) => (
                  <div key={g.heading}>
                    <div
                      className={clsx(
                        "border-t border-forest/15 px-4 py-1.5",
                        gi === 0 && "border-t-0"
                      )}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-forest/65">
                        {g.heading}
                      </span>
                    </div>
                    {g.rows.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-t border-forest/10 px-4 py-2"
                      >
                        <span className="text-[11px] font-medium text-anchor">{row.label}</span>
                        <div className="flex justify-center">
                          <Indicator value={row.values.ipsa} />
                        </div>
                        <div className="flex justify-center">
                          <Indicator value={row.values[activeCompetitor]} />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="flex items-center justify-center gap-4 border-t border-forest/15 py-3 text-[10px] text-forest">
                  <span className="flex items-center gap-1.5">
                    <Indicator value="yes" size="xs" /> Yes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Indicator value="sometimes" size="xs" /> Sometimes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Indicator value="no" size="xs" /> No
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Validation copy */}
          <Reveal>
            <RevealItem>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Validation
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] text-anchor md:text-4xl lg:text-5xl">
                {socialProof.headline}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 text-base leading-relaxed text-forest md:text-lg">
                {socialProof.body}
              </p>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
