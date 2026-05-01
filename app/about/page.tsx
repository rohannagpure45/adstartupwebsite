import { VisionMissionPromise } from "@/components/sections/VisionMissionPromise";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";
import { sampleCopy } from "@/content/copy";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14">
        <GradientBlob variant={2} className="-top-40 -left-40 h-[600px] w-[600px]" />
        <div className="relative mx-auto max-w-container px-6">
          <Reveal className="max-w-3xl">
            <RevealItem>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
                About Ipsa
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-7xl">
                Built so every marketing dollar has a clear answer.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-lg text-navy/65">
                We&rsquo;re turning MMM from a luxury into the industry standard, replacing
                bespoke builds with a repeatable, automated platform built for the analysts who
                live this work every day.
              </p>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <VisionMissionPromise />

      <section className="bg-off-blue/40 py-10 md:py-14">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <RevealItem>
              <h2 className="font-display text-4xl text-navy md:text-5xl">
                Questions agencies asked us.
              </h2>
            </RevealItem>
          </Reveal>
          <Reveal className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sampleCopy.map((c) => (
              <RevealItem
                key={c.title}
                className="rounded-3xl border border-forest/20 bg-surface p-6"
              >
                <p className="font-semibold text-navy">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">{c.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
