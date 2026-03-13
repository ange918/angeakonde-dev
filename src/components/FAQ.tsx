"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Quels types de projets acceptez-vous ?",
    a: "J'accepte des projets de développement web (sites vitrines, applications web, dashboards), d'applications mobiles Flutter, de systèmes de gestion (ERP, CRM, LMS) et de plateformes SaaS. Je travaille aussi bien avec des startups qu'avec des PME ou des particuliers.",
  },
  {
    q: "Quels sont vos délais de livraison ?",
    a: "Les délais varient selon la complexité du projet. Un site vitrine simple prend généralement 1 à 2 semaines. Une application web complète peut nécessiter 4 à 8 semaines. Je fournis toujours un calendrier détaillé avant de démarrer.",
  },
  {
    q: "Travaillez-vous en remote avec des clients hors du Bénin ?",
    a: "Oui, absolument. La majorité de mes clients sont en remote. Je collabore avec des clients en France, en Côte d'Ivoire, au Sénégal et partout dans le monde. Les outils de communication modernes rendent ça très fluide.",
  },
  {
    q: "Comment se passe le processus de travail ?",
    a: "Nous commençons par un appel de découverte pour cerner vos besoins. Ensuite je propose un devis et un planning. Dès validation, je démarre avec des points réguliers (hebdomadaires ou bi-hebdomadaires) pour vous tenir informé de l'avancement.",
  },
  {
    q: "Proposez-vous une maintenance après livraison ?",
    a: "Oui. Je propose des contrats de maintenance mensuelle incluant les mises à jour de sécurité, les corrections de bugs et les petites évolutions fonctionnelles. C'est une option que je recommande pour tous les projets en production.",
  },
  {
    q: "Quelles sont vos conditions de paiement ?",
    a: "En général, je demande 50% à la signature du devis, et 50% à la livraison finale. Pour les grands projets, un paiement en 3 fois peut être envisagé. J'accepte les virements bancaires, Mobile Money et PayPal.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Item({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={itemVariants} className="card overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span
          className="pr-4 text-sm font-medium"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--c-text)" }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon style={{ color: "#00FF66", width: 18, height: 18 }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="border-t px-6 pb-5 pt-4 text-sm leading-relaxed"
              style={{
                borderColor: "var(--c-border-sm)",
                color: "var(--c-card-text)",
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            FAQ
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--c-text)" }}
          >
            Questions fréquentes.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-3 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((faq, i) => (
            <Item key={i} faq={faq} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 card rounded-2xl p-8 text-center"
        >
          <p
            className="mb-2 text-base font-semibold"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--c-text)" }}
          >
            Vous avez une autre question ?
          </p>
          <p className="mb-5 text-sm" style={{ color: "var(--c-muted)" }}>
            Écrivez-moi directement, je réponds en général sous 24h.
          </p>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full px-8 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90"
            style={{ background: "#00FF66" }}
          >
            Poser une question →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
