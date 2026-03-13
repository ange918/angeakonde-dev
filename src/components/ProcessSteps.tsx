"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    title: "Discussion",
    subtitle: "Cadrage du projet",
    desc: "On échange sur vos besoins, vos objectifs et votre vision. Un appel ou une réunion suffit pour poser les bases.",
    Icon: ChatBubbleLeftRightIcon,
    color: "#FF6B00",
  },
  {
    number: "02",
    title: "Signature",
    subtitle: "Devis & Contrat",
    desc: "Un devis détaillé est établi, puis un contrat clair définit les délais, livrables et conditions de collaboration.",
    Icon: DocumentCheckIcon,
    color: "#61DAFB",
  },
  {
    number: "03",
    title: "Développement",
    subtitle: "Conception & Code",
    desc: "Je conçois et développe votre solution par itérations. Vous suivez l'avancement à chaque étape clé.",
    Icon: CodeBracketIcon,
    color: "#F7DF1E",
  },
  {
    number: "04",
    title: "Tests",
    subtitle: "Validation & QA",
    desc: "Tests fonctionnels, corrections et validation avec vous pour garantir un produit fiable avant la mise en ligne.",
    Icon: BeakerIcon,
    color: "#A855F7",
  },
  {
    number: "05",
    title: "Livraison",
    subtitle: "Déploiement",
    desc: "Mise en production du projet, formation à l'utilisation et transfert complet des accès et sources.",
    Icon: RocketLaunchIcon,
    color: "#F97316",
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Suivi & Maintenance",
    desc: "Un accompagnement post-livraison pour corriger, faire évoluer et maintenir votre solution dans le temps.",
    Icon: WrenchScrewdriverIcon,
    color: "#FF6B00",
  },
];

export default function ProcessSteps() {
  return (
    <section id="processus" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#FF6B00" }}>
            Comment je travaille
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Les étapes d&apos;un projet.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            De la première conversation à la livraison finale, voici comment je mène chaque projet de bout en bout.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-[27px] top-0 hidden h-full w-px md:block"
            style={{ background: "linear-gradient(to bottom, #FF6B0040, transparent)" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-6"
              >
                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <step.Icon style={{ color: step.color, width: 22, height: 22 }} />
                  </div>
                </div>

                <div
                  className="flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:border-white/10"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: step.color, fontFamily: "var(--font-outfit)" }}
                        >
                          {step.number}
                        </span>
                        <h3
                          className="text-base font-bold text-white"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="mb-2 text-xs font-medium" style={{ color: step.color }}>
                        {step.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-xl px-7 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{
              background: "#FF6B00",
              boxShadow: "0 0 24px rgba(255,107,0,0.3)",
              fontFamily: "var(--font-outfit)",
            }}
          >
            Démarrer un projet →
          </a>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Première consultation gratuite
          </p>
        </motion.div>
      </div>
    </section>
  );
}
