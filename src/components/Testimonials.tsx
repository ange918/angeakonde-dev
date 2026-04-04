"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    quote: "Ange a transformé ma vision en une plateforme élégante et moderne. Son sens du détail et sa capacité à comprendre ce dont nous avions besoin m'ont impressionné. Un travail vraiment remarquable du début à la fin.",
    name: "Morille",
    role: "Artiste & Directeur Créatif",
    initial: "M",
    color: "#4AFF00",
  },
  {
    quote: "La qualité du code et la structure sont à un autre niveau. Propre, maintenable, exactement ce que nous voulions. Je retravaillerais avec lui sans hésitation. Un développeur qui pense produit.",
    name: "Gauthier O.",
    role: "CEO de Model Academy",
    initial: "G",
    color: "#61DAFB",
  },
  {
    quote: "À l'écoute, réactif, force de proposition. Une combinaison rare de compétences techniques et d'une vraie volonté de faire les choses bien. Il a livré au-delà de mes attentes.",
    name: "Merveille S.",
    role: "Entrepreneur",
    initial: "M",
    color: "#F7DF1E",
  },
  {
    quote: "Collaborer avec Ange a été une excellente expérience. Il a su saisir notre identité de marque et la traduire en un site à la fois moderne et professionnel. Résultat impeccable, délais respectés.",
    name: "Senan Concept",
    role: "Agence créative",
    initial: "S",
    color: "#FF6B35",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: "#4AFF00", fontSize: 18 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  }, [active]);

  const prev = () => go((active - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => go((active + 1) % testimonials.length), [active, go]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: "#4AFF00" }}>
            Témoignages
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)", color: "var(--c-text)" }}
          >
            Ce que disent les clients.
          </h2>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-3xl p-5 sm:p-10"
          style={{
            background: "var(--c-surface)",
            border: "1px solid var(--c-border)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[80px]"
            style={{ background: `${t.color}18` }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="mb-4 text-5xl sm:text-7xl font-serif leading-none"
                style={{ color: `${t.color}40` }}
              >
                &ldquo;
              </div>

              <p
                className="mb-8 text-base sm:text-xl leading-loose"
                style={{
                  color: "var(--c-dim)",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {t.quote}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-black sm:h-14 sm:w-14"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="text-base font-semibold sm:text-lg"
                      style={{ fontFamily: "var(--font-montserrat)", color: "var(--c-text)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-sm mt-0.5 sm:text-base" style={{ color: "var(--c-faint)" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
                <Stars />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 32 : 8,
                    background: i === active ? "#4AFF00" : "var(--c-border-xl)",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200"
                style={{
                  borderColor: "var(--c-border-md)",
                  color: "var(--c-faint)",
                  background: "var(--c-surface)",
                }}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200"
                style={{
                  borderColor: "var(--c-border-md)",
                  color: "var(--c-faint)",
                  background: "var(--c-surface)",
                }}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
