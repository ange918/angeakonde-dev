"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#testimonials", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:border-[var(--c-accent)]"
      style={{ borderColor: "var(--c-border)", background: "var(--c-surface)", color: "var(--c-text-muted)" }}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              background: "var(--c-backdrop)",
              backdropFilter: "blur(4px)",
            }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              width: "320px",
              overflowY: "auto",
              padding: "2rem 1.5rem",
              background: "var(--c-sidebar)",
              borderLeft: "1px solid var(--c-border)",
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-nunito)", color: "var(--c-text)" }}>
                Big<span style={{ color: "var(--c-accent)" }}>Sixteen</span>
              </span>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                style={{ borderColor: "var(--c-border)", color: "var(--c-text-muted)" }}
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
                  className="rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300"
                  style={
                    active === l.href
                      ? { background: "rgba(0,223,129,0.1)", color: "var(--c-accent)" }
                      : { color: "var(--c-text-muted)" }
                  }
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-6">
              <ThemeToggle />
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/ange918"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border py-3 text-center text-base font-medium transition-colors duration-300 hover:text-[var(--c-accent)] hover:border-[var(--c-accent)]"
                style={{ borderColor: "var(--c-border)", color: "var(--c-text-muted)" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ange-akonde"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border py-3 text-center text-base font-medium transition-colors duration-300 hover:text-[var(--c-accent)] hover:border-[var(--c-accent)]"
                style={{ borderColor: "var(--c-border)", color: "var(--c-text-muted)" }}
              >
                LinkedIn
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? { borderBottom: `1px solid var(--c-border)`, background: "var(--c-nav-bg)", backdropFilter: "blur(20px)" }
            : { background: "transparent" }
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: "var(--c-text)", fontFamily: "var(--font-nunito)" }}
          >
            Big<span style={{ color: "var(--c-accent)" }}>Sixteen</span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-200"
                style={{
                  color: active === l.href ? "var(--c-accent)" : "var(--c-text-muted)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-lg border-2 px-6 py-2.5 text-base font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                borderColor: "var(--c-accent)",
                color: "var(--c-accent)",
                background: "transparent",
              }}
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border"
              style={{ borderColor: "var(--c-border)", background: "var(--c-surface)" }}
            >
              <span className="block h-0.5 w-5 transition-colors duration-300" style={{ background: "var(--c-text)" }} />
              <span className="block h-0.5 w-5 transition-colors duration-300" style={{ background: "var(--c-text)" }} />
              <span className="block h-0.5 w-3 self-start ml-1 transition-colors duration-300" style={{ background: "var(--c-text)" }} />
            </button>
          </div>
        </div>
      </header>

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
