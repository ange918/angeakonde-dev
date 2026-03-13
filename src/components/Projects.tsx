"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Models Academy Management",
    desc: "Plateforme académique de suivi des étudiants et des modèles. Système de gestion complet avec inscription, planification et suivi des progrès.",
    tag: "Éducation",
    href: "https://modelacademy-management.com/",
    num: "01",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&h=300&fit=crop&q=80",
  },
  {
    title: "Code-Capital",
    desc: "Communauté de développeurs et hub de ressources. Une plateforme fintech-dev connectant les codeurs avec des outils, du contenu et des ressources.",
    tag: "Communauté",
    href: "https://codecapital.net",
    num: "02",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=300&fit=crop&q=80",
  },
  {
    title: "SusuniLab",
    desc: "Lab d'innovation collaboratif pour les projets tech africains. Un espace où les bâtisseurs africains se retrouvent pour idéer, prototyper et livrer.",
    tag: "Innovation",
    href: "https://susunilab.com",
    num: "03",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=300&fit=crop&q=80",
  },
  {
    title: "God's Plan",
    desc: "Application personnelle de suivi des objectifs et gestion de vie. Fixez des intentions, suivez vos jalons et restez aligné avec votre vision.",
    tag: "Productivité",
    href: "https://god-plan.vercel.app/",
    num: "04",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=640&h=300&fit=crop&q=80",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Projets
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Travaux sélectionnés.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card group relative overflow-hidden rounded-2xl"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
                style={{ background: "radial-gradient(400px at 50% 0%, rgba(0,255,102,0.06), transparent)" }}
              />

              <div className="relative h-44 w-full overflow-hidden">
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
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "rgba(0,255,102,0.6)" }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs backdrop-blur-md"
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
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {p.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {p.desc}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border px-5 text-xs font-medium transition-all duration-200 hover:border-[#00FF66] hover:text-[#00FF66]"
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
