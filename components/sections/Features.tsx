import { features } from "@/content/copy";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

const icons = [
  // pipelines
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 6h12a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h12" strokeLinecap="round" />
  </svg>,
  // explanations
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10a3 3 0 1 1 4.5 2.6c-.8.5-1.5 1.1-1.5 2.4M12 18h.01" strokeLinecap="round" />
  </svg>,
  // multi-client
  <svg key="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="7" height="7" rx="1.5" />
    <rect x="14" y="4" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>,
];

export function Features() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-container px-6">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              What Ipsa does
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy md:text-5xl">
              {features.headline}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-navy/65">{features.sub}</p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3">
          {features.cards.map((c, i) => (
            <RevealItem key={c.title}>
              <Card>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange-deep">
                  <div className="h-6 w-6">{icons[i]}</div>
                </div>
                <h3 className="font-display text-2xl text-navy">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy/65">{c.body}</p>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
