import { problem } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-28 md:py-44">
      {/* Editorial cream surface with a soft off-axis ambient accent.
         The ambient glow sits in the upper-right so it never crosses the
         body text, keeping foreground copy fully legible against a light
         background. A faint top/bottom feather blends with neighboring
         sections without forcing a hard tonal shift. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFBF5 0%, #FBF6EA 18%, #F6F0E0 50%, #FBF6EA 82%, #FFFBF5 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_18%,rgba(46,94,69,0.10),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_15%_85%,rgba(176,254,118,0.08),transparent_70%)]"
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
