"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { productMenu } from "@/content/nav";

export function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full w-[min(960px,92vw)] -translate-x-1/2 pt-4"
    >
      <div className="overflow-hidden rounded-3xl border border-forest/20 bg-surface shadow-[0_40px_80px_-40px_rgba(28,56,41,0.35)]">
        <div className="grid grid-cols-1 gap-2 p-8 md:grid-cols-3">
          {productMenu.map((group) => (
            <div key={group.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy/40">
                {group.heading}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group block rounded-xl px-3 py-2 transition hover:bg-orange/5"
                    >
                      <p className="text-sm font-medium text-navy group-hover:text-orange-deep">
                        {link.label}
                      </p>
                      {link.desc && (
                        <p className="mt-0.5 text-xs text-navy/50">{link.desc}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-navy/5 bg-off-blue/40 px-8 py-4">
          <p className="text-sm text-navy/70">
            Built for agencies. Designed for analysts.
          </p>
          <Link
            href="https://getipsa.ai"
            className="text-sm font-medium text-orange-deep hover:text-orange"
          >
            Book a demo →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
