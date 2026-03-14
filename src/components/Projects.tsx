"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Models Academy Management",
    desc: "Plateforme académique de suivi des étudiants et des modèles. Système de gestion complet avec inscription, planification et suivi des progrès.",
    tag: "Éducation",
    href: "https://modelacademy-management.com/",
    num: "01",
    img: "/project-models-academy.png",
  },
  {
    title: "Code-Capital",
    desc: "Communauté de développeurs et hub de ressources. Une plateforme fintech-dev connectant les codeurs avec des outils, du contenu et des ressources.",
    tag: "Communauté",
    href: "https://code-capital.vercel.app/",
    num: "02",
    img: "/project-code-capital.png",
  },
  {
    title: "SusuniLab",
    desc: "Lab d'innovation collaboratif pour les projets tech africains. Un espace où les bâtisseurs africains se retrouvent pour idéer, prototyper et livrer.",
    tag: "Innovation",
    href: "https://susunilab.com",
    num: "03",
    img: "/project-susuni-lab.png",
  },
  {
    title: "God's Plan",
    desc: "Centre privé de formation professionnelle. Plateforme web complète pour la gestion des inscriptions, des formations et des filières.",
    tag: "Formation",
    href: "https://god-plan.vercel.app/",
    num: "04",
    img: "/project-gods-plan.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: "#4AFF00" }}>
            Projets
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Travaux sélectionnés.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card group relative overflow-hidden rounded-2xl"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
                style={{ background: "radial-gradient(400px at 50% 0%, rgba(74,255,0,0.06), transparent)" }}
              />

              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85))" }}
                />
                <div className="absolute top-3 left-4 flex items-center gap-2">
                  <span
                    className="text-4xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-outfit)", color: "rgba(74,255,0,0.6)" }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="rounded-full px-3 py-1 text-sm font-medium backdrop-blur-md"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.8)",
                      background: "rgba(0,0,0,0.4)",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="relative z-10 p-6">
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {p.title}
                </h3>
                <p className="mb-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {p.desc}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-base font-semibold transition-all duration-200 hover:border-[#4AFF00] hover:text-[#4AFF00]"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
                >
                  Voir le projet →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
