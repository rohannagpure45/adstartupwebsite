import { problem } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function Problem() {
  return (
    <section className="relative overflow-hidden py-32 md:py-56">
      {/* Bloom-and-return: warm-white → forest peak (~62%) → warm-white at
         100%. Peak moved up so the fade-out has ~38% of section height to
         resolve, and many intermediate stops keep the green velvety. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFBF5 0%, #FFFBF5 18%, #FAF5EA 26%, #EEE9DA 33%, #DDE6D4 40%, #B8CDB6 48%, #8FAE94 55%, #5C8770 60%, #3A6B4F 65%, #5C8770 71%, #8FAE94 77%, #B8CDB6 83%, #DDE6D4 89%, #F2EEE2 94%, #FBF7EC 98%, #FFFBF5 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_22%_at_75%_62%,rgba(176,254,118,0.14),transparent_70%)]" />
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
