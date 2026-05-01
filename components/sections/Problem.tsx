import { problem } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-12 md:py-20">
      {/* Editorial cream surface with soft off-axis ambient accents only.
         No vertical band — the section reads as a single warm-white field
         so it blends into Hero's bottom (also warm-white) without a seam. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_18%,rgba(46,94,69,0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_15%_85%,rgba(176,254,118,0.06),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-container px-6">
        <Reveal>
          <RevealItem>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              The problem
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] text-anchor md:text-6xl">
              {problem.headline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-anchor/75">
              {problem.body}
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
