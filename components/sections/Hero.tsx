"use client";
import { useEffect, useState } from "react";
import { hero } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { DashboardPreview } from "./DashboardPreview";

const HERO_GRADIENT =
  "linear-gradient(180deg, #0F1F17 0%, #1C3829 16%, #2E5E45 33%, #5A8870 50%, #94B5A1 63%, #CCDBD0 73%, #F2EFE7 81%, #FFFBF5 89%, #FFFBF5 100%)";

const RADIAL_GLOWS =
  "radial-gradient(ellipse 70% 36% at 50% 94%, rgba(176,254,118,0.16) 0%, transparent 70%), radial-gradient(ellipse 44% 28% at 82% 12%, rgba(243,134,104,0.09) 0%, transparent 60%)";

function renderSubWithEm(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) =>
    p.startsWith("*") && p.endsWith("*") ? (
      <em
        key={i}
        className="font-display italic text-accent"
        style={{ fontStyle: "italic" }}
      >
        {p.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function Hero() {
  const words = hero.headline.split(" ");
  const [shown, setShown] = useState(0);
  const [subOn, setSubOn] = useState(false);
  const [ctaOn, setCtaOn] = useState(false);
  const [prevOn, setPrevOn] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= words.length) {
        clearInterval(id);
        setTimeout(() => setSubOn(true), 250);
        setTimeout(() => setCtaOn(true), 500);
        setTimeout(() => setPrevOn(true), 800);
      }
    }, 100);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0" style={{ background: HERO_GRADIENT }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: RADIAL_GLOWS }}
      />

      <div className="relative mx-auto max-w-container px-6 pb-20 pt-[148px] text-center md:pb-24">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 backdrop-blur"
          style={{ animation: "fadeUpIn .6s ease both" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-warm-white/70">
            {hero.eyebrow}
          </span>
        </span>

        {/* Headline — word-by-word stream */}
        <h1
          className="mx-auto mt-8 font-display text-warm-white"
          style={{
            fontSize: "clamp(42px, 6.8vw, 82px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: 28,
          }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              className="mr-[0.28em] inline-block"
              style={{
                opacity: i < shown ? 1 : 0,
                transform: i < shown ? "none" : "translateY(12px)",
                filter: i < shown ? "blur(0)" : "blur(6px)",
                transition:
                  "opacity .5s ease, transform .5s cubic-bezier(.22,1,.36,1), filter .4s ease",
              }}
            >
              {w}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mb-10 max-w-[580px] text-[18px] leading-[1.7] text-warm-white/70"
          style={{
            opacity: subOn ? 1 : 0,
            transform: subOn ? "none" : "translateY(14px)",
            transition:
              "opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1)",
          }}
        >
          {renderSubWithEm(hero.sub)}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            opacity: ctaOn ? 1 : 0,
            transform: ctaOn ? "none" : "translateY(10px)",
            transition:
              "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="glass">
            {hero.ctaSecondary.label}
          </Button>
        </div>

        {/* Dashboard preview */}
        <div
          className="mt-[72px]"
          style={{
            opacity: prevOn ? 1 : 0,
            transform: prevOn ? "none" : "translateY(36px)",
            transition:
              "opacity .8s ease, transform .8s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
