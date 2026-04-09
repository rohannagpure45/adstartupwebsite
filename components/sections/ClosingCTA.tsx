import Link from "next/link";
import { closingCTA } from "@/content/copy";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-2 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_50%,rgba(255,255,255,0.5),transparent_70%)]" />
      <div className="relative mx-auto max-w-container px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[1.05] text-navy md:text-7xl">
          {closingCTA.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/70">{closingCTA.sub}</p>
        <div className="mt-10">
          <Link
            href={closingCTA.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-anchor transition hover:-translate-y-0.5 hover:bg-coral hover:text-warm-white hover:shadow-[0_20px_50px_-15px_rgba(243,134,104,0.55)]"
          >
            {closingCTA.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
