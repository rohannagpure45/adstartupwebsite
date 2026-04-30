import Link from "next/link";
import { brand } from "@/content/copy";
import { Logo } from "@/components/ui/Logo";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/product#how-it-works" },
      { label: "Budget Optimizer", href: "/product#optimizer" },
      { label: "Integrations", href: "/product#pipelines" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Vision", href: "/about#vision" },
      { label: "Contact", href: "mailto:hello@getipsa.ai" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-forest/20 bg-warm-white">
      <div className="mx-auto grid max-w-container gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={32} className="drop-shadow-[0_2px_6px_rgba(28,56,41,0.18)]" />
            <span className="font-display text-2xl tracking-[-0.015em] text-anchor">
              {brand.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-navy/60">{brand.tagline}</p>
        </div>
        {cols.map((c) => (
          <div key={c.heading}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy/40">
              {c.heading}
            </p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy/70 transition hover:text-orange-deep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-navy/5">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-navy/50 md:flex-row">
          <p>© {new Date().getFullYear()} Ipsa. All rights reserved.</p>
          <p>{brand.domain}</p>
        </div>
      </div>
    </footer>
  );
}
