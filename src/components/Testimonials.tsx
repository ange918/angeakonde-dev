"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Ange a transformé ma vision en une plateforme élégante et moderne. Son sens du détail et sa capacité à comprendre ce dont nous avions besoin m'ont impressionné.",
    name: "Axel Merryl",
    role: "Artiste & Directeur Créatif",
    initial: "A",
  },
  {
    quote: "La qualité du code et la structure sont à un autre niveau. Propre, maintenable, exactement ce que nous voulions. Je retravaillerais avec lui sans hésitation.",
    name: "Gauthier O.",
    role: "Architecte",
    initial: "G",
  },
  {
    quote: "À l'écoute, réactif, force de proposition. Une combinaison rare de compétences techniques et d'une vraie volonté de faire les choses bien.",
    name: "Merveille S.",
    role: "Entrepreneuse",
    initial: "M",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: "#00FF66" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Témoignages
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ce que disent les clients.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="card relative overflow-hidden rounded-2xl p-7"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-[60px]"
                style={{ background: "rgba(0,255,102,0.08)" }}
              />

              <div className="mb-4 text-5xl font-serif leading-none" style={{ color: "rgba(0,255,102,0.3)" }}>
                &ldquo;
              </div>

              <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-black"
                    style={{ background: "#00FF66" }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{t.role}</p>
                  </div>
                </div>
                <Stars />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
