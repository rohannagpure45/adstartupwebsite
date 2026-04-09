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
        "group relative overflow-hidden rounded-3xl border border-forest/20 bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_30px_60px_-30px_rgba(28,56,41,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}
