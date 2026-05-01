import { mission } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

function renderHeadlineWithEm(text: string) {
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

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-anchor py-12 md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 18%, rgba(176,254,118,0.10), transparent 70%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(243,134,104,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-white/10 to-transparent"
      />
      <div className="relative mx-auto max-w-container px-6">
        <Reveal className="mx-auto max-w-4xl text-center">
          <RevealItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-warm-white/15 bg-warm-white/[0.06] px-4 py-1.5 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-warm-white/70">
                {mission.eyebrow}
              </span>
            </span>
          </RevealItem>
          <RevealItem>
            <h2
              className="mt-8 font-display text-warm-white"
              style={{
                fontSize: "clamp(36px, 5.4vw, 68px)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              {renderHeadlineWithEm(mission.headline)}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-8 max-w-[640px] text-[18px] leading-[1.7] text-warm-white/70">
              {mission.sub}
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
