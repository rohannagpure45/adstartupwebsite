"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howItWorks } from "@/content/copy";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="how-it-works" className="relative bg-off-blue/40 py-28 md:py-36">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy md:text-5xl">
            {howItWorks.headline}
          </h2>
        </div>

        <div ref={ref} className="relative mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[60vh]">
              <StickyVisual progress={scrollYProgress} />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {howItWorks.steps.map((s) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-5xl text-orange">{s.n}</span>
                <h3 className="mt-4 font-display text-3xl text-navy md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-navy/65">
                  {s.body.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <em key={i} className="font-bold italic text-navy">
                        {part.slice(2, -2)}
                      </em>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyVisual({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const rotate = useTransform(progress, [0, 1], [0, 90]);
  const fill = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-forest/20 bg-surface p-8 shadow-[0_50px_100px_-50px_rgba(28,56,41,0.3)]">
      <div className="absolute inset-0 bg-gradient-1 opacity-20" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
            Pipeline progress
          </p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-navy/10">
            <motion.div
              style={{ width: fill }}
              className="h-full rounded-full bg-orange"
            />
          </div>
        </div>
        <motion.svg
          viewBox="0 0 200 200"
          className="mx-auto h-48 w-48 text-navy"
          style={{ rotate }}
        >
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="100" cy="20" r="6" fill="#B0FE76" />
          <circle cx="180" cy="100" r="6" fill="#1C3829" />
          <circle cx="100" cy="180" r="6" fill="#F38668" />
          <circle cx="20" cy="100" r="6" fill="#2E5E45" />
        </motion.svg>
        <div className="grid grid-cols-3 gap-2">
          {["Connect", "Configure", "Deliver"].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-forest/15 bg-warm-white px-3 py-2 text-center text-[10px] font-medium text-forest"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
