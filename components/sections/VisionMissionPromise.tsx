import { visionMissionPromise } from "@/content/copy";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export function VisionMissionPromise() {
  return (
    <section id="vision" className="py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <RevealItem>
            <h2 className="font-display text-4xl text-navy md:text-5xl">
              {visionMissionPromise.sectionLabel}
            </h2>
            <p className="mt-4 max-w-sm text-base text-navy/60">
              {visionMissionPromise.sectionSub}
            </p>
          </RevealItem>
          <div className="space-y-12">
            {visionMissionPromise.items.map((item) => (
              <RevealItem key={item.label}>
                <p className="font-semibold text-navy">{item.label}</p>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy/65">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
