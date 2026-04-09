import { problem } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function Problem() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Wide warm-white top band that gradually blends down into forest/anchor */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFBF5 0%, #FFFBF5 50%, #F2EFE7 62%, #CCDBD0 73%, #94B5A1 83%, #5A8870 92%, #2E5E45 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(at_80%_85%,rgba(176,254,118,0.18),transparent_55%)]" />
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
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-forest">
              {problem.body}
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
