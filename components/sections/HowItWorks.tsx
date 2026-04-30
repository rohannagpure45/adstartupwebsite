"use client";
import { motion } from "framer-motion";
import { howItWorks } from "@/content/copy";

function renderBody(body: string) {
  return body.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-anchor">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest">
            How it works
          </span>
          <h2 className="mt-3.5 font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.1] tracking-[-0.02em] text-anchor">
            {howItWorks.headline}
          </h2>
        </div>

        <div className="grid border-t border-anchor/12 md:grid-cols-3">
          {howItWorks.steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                "py-9 pr-8 " +
                (i < howItWorks.steps.length - 1
                  ? "md:mr-8 md:border-r md:border-anchor/12"
                  : "")
              }
            >
              <div className="mb-3.5 font-display text-[14px] font-medium tracking-[0.04em] text-forest">
                {s.n}
              </div>
              <h3 className="mb-3 font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-anchor">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-[1.65] text-forest">
                {renderBody(s.body)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
