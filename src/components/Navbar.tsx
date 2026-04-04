"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#testimonials", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              borderLeft: "1px solid var(--c-border-xl)",
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-montserrat)", color: "var(--c-text)" }}>
                Bs<span style={{ color: "#4AFF00" }}>.dev</span>
              </span>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
                style={{ borderColor: "var(--c-border-xl)", color: "var(--c-muted)" }}
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
                  className="rounded-xl px-4 py-3 text-base font-medium transition-colors"
                  style={
                    active === l.href
                      ? { background: "rgba(74,255,0,0.1)", color: "#4AFF00" }
                      : { color: "var(--c-muted)" }
                  }
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
                className="flex-1 rounded-xl border py-3 text-center text-base font-medium transition-colors hover:text-[#4AFF00] hover:border-[#4AFF00]"
                style={{ borderColor: "var(--c-border-xl)", color: "var(--c-muted)" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ange-akonde"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border py-3 text-center text-base font-medium transition-colors hover:text-[#4AFF00] hover:border-[#4AFF00]"
                style={{ borderColor: "var(--c-border-xl)", color: "var(--c-muted)" }}
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
            ? { borderBottom: "1px solid var(--c-border-sm)", background: "var(--c-nav-bg)", backdropFilter: "blur(20px)" }
            : { background: "transparent" }
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--c-text)", fontFamily: "var(--font-montserrat)" }}
          >
            Bs<span style={{ color: "#4AFF00" }}>.dev</span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-base font-medium transition-colors duration-200"
                style={{
                  color: active === l.href ? "#4AFF00" : "var(--c-muted)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="rounded-full border border-[#4AFF00] px-6 py-3 text-base font-semibold text-[#4AFF00] transition-all duration-200 hover:bg-[#4AFF00] hover:text-black"
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border"
              style={{ borderColor: "var(--c-border-xl)", background: "var(--c-surface)" }}
            >
              <span className="block h-0.5 w-5" style={{ background: "var(--c-text)" }} />
              <span className="block h-0.5 w-5" style={{ background: "var(--c-text)" }} />
              <span className="block h-0.5 w-3 self-start ml-1" style={{ background: "var(--c-text)" }} />
            </button>
          </div>
        </div>
      </header>

      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
