"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOutstand } from "@/lib/motion";
import { EMAIL, MAILTO, navLinks, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

function isActive(pathname: string, href: string, activePrefix?: string) {
  if (activePrefix && pathname.startsWith(activePrefix)) return true;
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="nav-fixed" data-motion="load-stagger">
      <motion.nav
        className="nav-capsule"
        data-motion="nav-capsule"
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: easeOutstand, delay: reduce ? 0 : 0.08 }}
        whileHover={reduce ? undefined : { scale: 1.01, borderColor: "rgba(24,232,107,0.33)", boxShadow: "0 8px 32px rgba(0,0,0,.35), 0 0 24px rgba(24,232,107,.12)" }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: easeOutstand, delay: reduce ? 0 : 0.05 }}
        >
          <Link href="/" className="logo" data-motion="nav-logo" title="Ange Akonde" aria-label="Ange Akonde, accueil">
            AA
          </Link>
        </motion.div>

        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.14 + index * 0.04 }}
            >
              <Link
                href={link.href}
                data-motion="nav-link"
                className={isActive(pathname, link.href, "activePrefix" in link ? link.activePrefix : undefined) ? "active" : undefined}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="nav-cta-wrap"
          data-motion="nav-cta"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutstand, delay: reduce ? 0 : 0.15 }}
        >
          <Link href="/contact" className="nav-cta">
            Discutons
          </Link>
        </motion.div>

        <button
          className={`burger${open ? " is-open" : ""}`}
          data-motion="nav-burger"
          aria-label={open ? "Fermer le menu" : "Menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="nav-sheet"
            data-motion="nav-mobile-menu"
            initial={reduce ? false : { opacity: 0, y: "-8%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: "-8%" }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-motion="nav-link"
                className={isActive(pathname, link.href, "activePrefix" in link ? link.activePrefix : undefined) ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
              Discutons
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const reduce = useReducedMotion();
  return (
    <motion.footer
      className="footer"
      data-motion="footer"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.7, ease: easeOutstand }}
    >
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="logo">AA</span>
              <div>
                <div className="footer-name">Ange Akonde</div>
                <div className="footer-studio">BigSixTeen · JRC DIGIT</div>
              </div>
            </div>
            <p className="muted footer-blurb">
              Développeur full-stack & formateur à Cotonou. Sites et applications sur mesure pour faire grandir votre activité.
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <div className="eyebrow muted footer-label">Navigation</div>
              <div className="footer-links">
                <Link href="/">Accueil</Link>
                <Link href="/a-propos">À propos</Link>
                <Link href="/projets">Projets</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div>
              <div className="eyebrow muted footer-label">Contact</div>
              <div className="footer-meta">
                <span>Cotonou, Bénin</span>
                <a href={MAILTO}>{EMAIL}</a>
                <a href={WHATSAPP_URL} className="wa-link" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="rule footer-rule" />
        <div className="footer-bottom muted">
          <span>© 2026 Ange Akonde · BigSixTeen</span>
          <span>Maquettes portfolio · #18E86B</span>
        </div>
      </div>
    </motion.footer>
  );
}

export function WhatsAppFab() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      className="fab-wa"
      href={WHATSAPP_URL}
      data-motion="fab-pulse"
      aria-label="WhatsApp"
      title="WhatsApp"
      target="_blank"
      rel="noreferrer"
      animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
      transition={reduce ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
    >
      <WhatsAppIcon />
    </motion.a>
  );
}
