"use client";
import { motion } from "framer-motion";
import { hero } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { AnimatedDashboard } from "./AnimatedDashboard";

function renderSub(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) =>
    p.startsWith("*") && p.endsWith("*") ? (
      <em key={i} className="font-display italic text-accent">
        {p.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Bold dark-to-light vertical gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0F1F17 0%, #1C3829 15%, #2E5E45 32%, #5A8870 48%, #94B5A1 60%, #CCDBD0 70%, #F2EFE7 78%, #FFFBF5 85%, #FFFBF5 100%)",
        }}
      />
      {/* Soft accent glows for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(176,254,118,0.18), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(243,134,104,0.10), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-container px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-warm-white/5 px-3 py-1 text-xs font-medium text-warm-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 font-display text-4xl leading-[1.1] text-warm-white sm:text-5xl md:whitespace-nowrap md:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-warm-white/75 md:text-xl"
        >
          {renderSub(hero.sub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="secondary">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-4xl text-left"
        >
          <AnimatedDashboard />
        </motion.div>
      </div>
    </section>
  );
}
