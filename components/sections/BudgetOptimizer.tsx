"use client";
import { motion } from "framer-motion";
import { budgetOptimizer } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function BudgetOptimizer() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-container items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <RevealItem>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              {budgetOptimizer.eyebrow}
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy md:text-5xl">
              {budgetOptimizer.headline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 text-lg leading-relaxed text-navy/65">{budgetOptimizer.body}</p>
          </RevealItem>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-forest/20 bg-surface p-8 shadow-[0_40px_80px_-40px_rgba(28,56,41,0.3)]"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-navy/50">
            Saturation curve · Meta
          </p>
          <svg viewBox="0 0 400 200" className="mt-4 w-full">
            <defs>
              <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#B0FE76" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B0FE76" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 180 C 80 180, 120 60, 200 40 C 280 25, 340 20, 400 18 L 400 200 L 0 200 Z"
              fill="url(#curveFill)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M0 180 C 80 180, 120 60, 200 40 C 280 25, 340 20, 400 18"
              stroke="#2E5E45"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.circle
              cx="200"
              cy="40"
              r="6"
              fill="#F38668"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            />
          </svg>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-navy/5 bg-off-blue/40 p-4">
              <p className="text-[10px] uppercase tracking-wider text-navy/50">Current</p>
              <p className="mt-1 font-display text-2xl text-navy">$72k</p>
              <p className="text-[10px] text-navy/50">Meta spend</p>
            </div>
            <div className="rounded-2xl border border-orange/30 bg-orange/5 p-4">
              <p className="text-[10px] uppercase tracking-wider text-orange-deep">
                Recommended
              </p>
              <p className="mt-1 font-display text-2xl text-navy">$52k</p>
              <p className="text-[10px] text-navy/50">+12% projected lift</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
