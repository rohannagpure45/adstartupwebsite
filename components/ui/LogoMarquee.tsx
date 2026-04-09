"use client";

export function LogoMarquee({ logos }: { logos: string[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {doubled.map((logo, i) => (
          <span
            key={i}
            className="font-display text-2xl text-navy/40 transition hover:text-navy"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
