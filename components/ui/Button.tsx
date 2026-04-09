import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";
  const styles = {
    primary:
      "bg-accent text-anchor hover:bg-coral hover:text-warm-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(176,254,118,0.55)]",
    secondary:
      "bg-warm-white text-anchor ring-1 ring-forest/20 hover:ring-forest/40 hover:-translate-y-0.5",
    ghost: "text-anchor hover:text-forest",
  }[variant];
  return (
    <Link href={href} className={clsx(base, styles, className)}>
      {children}
    </Link>
  );
}
