"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { mainNav } from "@/content/nav";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const onDark = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-forest/15 bg-warm-white/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto grid h-16 max-w-container grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:-translate-y-px"
        >
          <Logo
            size={28}
            tone={onDark ? "light" : "dark"}
            className={clsx(
              "transition-transform duration-500 group-hover:rotate-[8deg]",
              onDark
                ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                : "drop-shadow-[0_2px_6px_rgba(28,56,41,0.18)]"
            )}
          />
          <span
            className={clsx(
              "font-display text-[19px] font-semibold tracking-[-0.015em] transition-colors duration-300",
              onDark ? "text-warm-white" : "text-anchor"
            )}
          >
            Ipsa
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasMenu && setOpenMenu(item.label)}
            >
              <Link
                href={item.href}
                className={clsx(
                  "inline-flex items-center px-4 py-2 text-sm font-medium transition",
                  onDark
                    ? "text-warm-white/85 hover:text-accent"
                    : "text-navy/80 hover:text-orange-deep"
                )}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {item.hasMenu && openMenu === item.label && <MegaMenu />}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="#"
            className={clsx(
              "hidden text-sm font-medium transition md:inline",
              onDark
                ? "text-warm-white/80 hover:text-warm-white"
                : "text-navy/70 hover:text-navy"
            )}
          >
            Sign in
          </Link>
          <Button href="#book-demo" variant="primary">
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}
