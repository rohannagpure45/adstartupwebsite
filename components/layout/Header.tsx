"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { mainNav } from "@/content/nav";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/Button";

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
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy">
            <span className="h-3 w-3 rounded-full bg-orange" />
          </span>
          <span className="font-display text-xl">Ipsa</span>
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
