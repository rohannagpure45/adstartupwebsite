import { closingCTA } from "@/content/copy";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="bg-surface px-7 py-24 md:py-28">
      <div
        className="mx-auto max-w-[860px] rounded-3xl border border-anchor/12 bg-warm-white px-8 py-16 text-center md:px-12 md:py-[72px]"
        style={{
          boxShadow:
            "0 24px 60px -30px rgba(28,56,41,0.18), 0 8px 20px -12px rgba(28,56,41,0.18)",
        }}
      >
        <h2 className="font-display text-[clamp(30px,4vw,54px)] font-semibold leading-[1.1] tracking-[-0.025em] text-anchor">
          {closingCTA.headline}
        </h2>
        <p className="mt-3.5 text-[17px] leading-[1.6] text-forest">{closingCTA.sub}</p>
        <div className="mt-9">
          <Button href={closingCTA.cta.href}>{closingCTA.cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
