"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export type Tab = { label: string; title: string; body: string };

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={clsx(
              "relative px-5 py-3 text-sm font-medium transition",
              i === active ? "text-navy" : "text-navy/50 hover:text-navy"
            )}
          >
            {t.label}
            {i === active && (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-x-3 -bottom-px h-0.5 rounded bg-orange"
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-6 pt-10 md:grid-cols-2 md:gap-12"
      >
        <h3 className="font-display text-3xl leading-tight md:text-4xl">{tabs[active].title}</h3>
        <p className="text-lg leading-relaxed text-navy/70">{tabs[active].body}</p>
      </motion.div>
    </div>
  );
}
