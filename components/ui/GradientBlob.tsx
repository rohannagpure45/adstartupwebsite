import clsx from "clsx";

type Props = {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
};

export function GradientBlob({ variant = 1, className }: Props) {
  const bg = {
    1: "bg-gradient-1",
    2: "bg-gradient-2",
    3: "bg-gradient-3",
    4: "bg-gradient-4",
  }[variant];
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute rounded-full blur-3xl opacity-70 mix-blend-multiply",
        bg,
        className
      )}
    />
  );
}
