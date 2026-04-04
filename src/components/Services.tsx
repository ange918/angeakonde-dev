"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  Zap,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Web Modernes",
    desc: "Création de sites vitrines, portfolios et landing pages rapides, responsive et optimisés SEO.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Boutiques",
    desc: "Boutiques en ligne connectées WhatsApp ou avec passerelle de paiement.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    desc: "Applications cross-platform avec Flutter pour iOS et Android.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & SaaS",
    desc: "Tableaux de bord sur mesure et plateformes SaaS pour vos équipes.",
  },
  {
    icon: Zap,
    title: "Stratégie Digitale",
    desc: "Conseil et mise en place d'une présence digitale efficace.",
  },
  {
    icon: Code2,
    title: "APIs & Intégrations",
    desc: "Connexion de vos outils via des APIs : paiement, messagerie, CRM, analytics.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#4AFF00", fontFamily: "var(--font-inter)" }}
          >
            Services
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ce que je réalise
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--c-muted)", fontFamily: "var(--font-inter)" }}
          >
            Des solutions digitales sur mesure pour vos projets.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card group relative overflow-hidden rounded-2xl p-6 sm:p-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(300px at 50% 0%, rgba(74,255,0,0.06), transparent)",
                  }}
                />
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(74,255,0,0.08)",
                    border: "1px solid rgba(74,255,0,0.2)",
                  }}
                >
                  <Icon size={22} color="#4AFF00" strokeWidth={1.5} />
                </div>
                <h3
                  className="mb-3 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
