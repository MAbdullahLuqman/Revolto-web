"use client";

import { Link } from "@/lib/router-compat";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { nav } from "@/data/site";
import { Menu, X, ChevronDown } from "lucide-react";
import { spring, ease } from "./motion";

function MegaLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-secondary-foreground"
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
  hovered,
  setHovered,
  width,
}: {
  label: string;
  items: readonly { readonly to: string; readonly title: string }[];
  hovered: string | null;
  setHovered: (v: string | null) => void;
  width: string;
}) {
  const open = hovered === label;
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(label)}
      onMouseLeave={() => setHovered(null)}
    >
      <button className="relative z-10 flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground">
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.span
          layoutId="nav-pill"
          transition={spring}
          className="absolute inset-0 rounded-full bg-secondary"
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, scale: 0.98, filter: "blur(3px)" }}
            transition={{ duration: 0.22, ease }}
            style={{ transformOrigin: "top left" }}
            className={`absolute left-0 top-full mt-2 ${width} rounded-2xl border border-border bg-popover/95 p-2 shadow-[0_24px_60px_-30px_rgba(15,27,61,0.18)] backdrop-blur-xl`}
          >
            {items.map((s) => (
              <MegaLink key={s.to} to={s.to}>
                {s.title}
              </MegaLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
          {nav.main.map((item) => {
            if (item.label === "Services")
              return (
                <Dropdown
                  key="Services"
                  label="Services"
                  items={nav.services}
                  hovered={hovered}
                  setHovered={setHovered}
                  width="w-64"
                />
              );
            if (item.label === "Industries")
              return (
                <Dropdown
                  key="Industries"
                  label="Industries"
                  items={nav.industries}
                  hovered={hovered}
                  setHovered={setHovered}
                  width="w-56"
                />
              );
            return (
              <div key={item.to} className="relative" onMouseEnter={() => setHovered(item.label)}>
                {hovered === item.label && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-secondary"
                  />
                )}
                <Link
                  to={item.to as "/"}
                  activeProps={{ className: "text-foreground" }}
                  className="relative z-10 block rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href="/contact">Contact</a>
          </Button>
          <Button asChild size="sm">
            <a href="/contact">Get a quote</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.18, ease }}
              className="flex"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {nav.main.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as "/"}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border pt-4">
                <Button asChild className="w-full">
                  <a href="/contact" onClick={() => setMobileOpen(false)}>
                    Get a quote
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
