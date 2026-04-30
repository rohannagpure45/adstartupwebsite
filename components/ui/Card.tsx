import clsx from "clsx";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-anchor/10 bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-anchor/20",
        // Layered shadow: inset highlight + soft hairline + lifted ambient
        "[box-shadow:inset_0_1px_0_rgba(255,255,255,0.55),0_1px_2px_rgba(28,56,41,0.04),0_8px_18px_-12px_rgba(28,56,41,0.12)]",
        "hover:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.6),0_2px_4px_rgba(28,56,41,0.06),0_22px_40px_-22px_rgba(28,56,41,0.22),0_8px_16px_-10px_rgba(28,56,41,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
