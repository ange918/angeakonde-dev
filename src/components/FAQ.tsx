"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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

function Item({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="card overflow-hidden rounded-xl"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span
          className="pr-4 text-sm font-medium text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-xl font-light"
          style={{ color: "#00FF66" }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div
              className="border-t px-6 pb-5 pt-4 text-sm leading-relaxed"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            FAQ
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Questions fréquentes.
          </h2>
        </motion.div>

        <div className="grid gap-3 lg:grid-cols-2">
          {faqs.map((faq, i) => (
            <Item key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 card rounded-2xl p-8 text-center"
        >
          <p className="mb-2 text-base font-semibold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Vous avez une autre question ?
          </p>
          <p className="mb-5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
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
