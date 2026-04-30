"use client";
import { BRAND_LOGOS } from "./BrandLogos";

export function LogoMarquee({ logos }: { logos: string[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-8">
        {doubled.map((logo, i) => {
          const entry = BRAND_LOGOS[logo];
          if (!entry) {
            return (
              <span
                key={i}
                className="font-display text-2xl text-anchor/40 transition hover:text-anchor"
              >
                {logo}
              </span>
            );
          }
          const { Component, height } = entry;
          return (
            <Component
              key={i}
              style={{ height, width: "auto" }}
              className="text-anchor/45 transition-colors duration-200 hover:text-anchor"
            />
          );
        })}
      </div>
    </div>
  );
}
