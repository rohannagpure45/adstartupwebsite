import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";
  const styles = {
    primary:
      "bg-sienna text-warm-white shadow-[0_4px_14px_rgba(123,52,32,0.25)] hover:bg-sienna-deep hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(123,52,32,0.45)]",
    secondary:
      "bg-warm-white text-anchor ring-1 ring-forest/20 hover:ring-forest/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(28,56,41,0.25)]",
    glass:
      "bg-white/[0.08] text-warm-white/90 ring-1 ring-white/20 backdrop-blur hover:bg-white/[0.15] hover:-translate-y-0.5",
    ghost: "text-anchor hover:text-forest",
  }[variant];
  const classes = clsx(base, styles, className);
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
