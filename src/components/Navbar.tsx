"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="font-sans text-lg font-700 tracking-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Big<span style={{ color: "#00FF66" }}>Sixteen</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                active === l.href
                  ? "text-[#00FF66]"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#00FF66] px-5 py-2 text-sm text-[#00FF66] transition-all duration-200 hover:bg-[#00FF66] hover:text-black md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-3 bg-white self-start ml-1" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-white/10 bg-black px-6 py-8"
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Big<span style={{ color: "#00FF66" }}>Sixteen</span>
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                      active === l.href
                        ? "bg-[#00FF66]/10 text-[#00FF66]"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/ange918"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-white/10 py-2 text-center text-xs text-white/60 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-white/10 py-2 text-center text-xs text-white/60 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
