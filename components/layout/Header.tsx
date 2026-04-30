"use client";
import Link from "next/link";
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
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:-translate-y-px"
        >
          <Logo
            size={28}
            className="drop-shadow-[0_2px_6px_rgba(28,56,41,0.18)] transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="font-display text-[19px] font-semibold tracking-[-0.015em] text-anchor">
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
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-navy/80 transition hover:text-orange-deep"
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {item.hasMenu && openMenu === item.label && <MegaMenu />}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden text-sm font-medium text-navy/70 hover:text-navy md:inline"
          >
            Sign in
          </Link>
          <Button href="https://getipsa.ai" variant="primary">
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}
