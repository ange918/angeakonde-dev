"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SiReact, SiNodedotjs, SiFlutter, SiMongodb } from "react-icons/si";
import type { IconType } from "react-icons";

type Soft = {
  title: string;
  desc: string;
  longDesc: string;
  tag: string;
  status: string;
  img: string;
  stack: { Icon: IconType; color: string; name: string }[];
  features: string[];
};

const softwares: Soft[] = [
  {
    title: "BigSixteen ERP",
    desc: "Système de gestion intégré pour PME africaines.",
    longDesc: "Un ERP complet couvrant la gestion des stocks, la facturation, les RH et la comptabilité — conçu pour les réalités des entreprises béninoises et africaines.",
    tag: "SaaS",
    status: "En développement",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=300&fit=crop&q=80",
    stack: [
      { Icon: SiReact, color: "#61DAFB", name: "React" },
      { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    ],
    features: ["Gestion des stocks", "Facturation automatisée", "Module RH", "Tableau de bord analytique"],
  },
  {
    title: "SchoolPilot",
    desc: "Gestion complète d'établissements scolaires.",
    longDesc: "Plateforme tout-en-un pour écoles, collèges et lycées : inscriptions, bulletins, emplois du temps, paiements et communication parents-école.",
    tag: "Éducation",
    status: "Disponible",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=640&h=300&fit=crop&q=80",
    stack: [
      { Icon: SiReact, color: "#61DAFB", name: "React" },
      { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    ],
    features: ["Gestion des inscriptions", "Bulletins en ligne", "Emplois du temps", "Notifications SMS/Email"],
  },
  {
    title: "TrackMobile",
    desc: "Application mobile de suivi et de reporting terrain.",
    longDesc: "App Flutter pour équipes terrain : collecte de données, géolocalisation, rapports photos et synchronisation hors-ligne. Idéal pour les ONG et entreprises de logistique.",
    tag: "Mobile",
    status: "Beta",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=300&fit=crop&q=80",
    stack: [
      { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
      { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    ],
    features: ["Géolocalisation GPS", "Mode hors-ligne", "Rapports photo", "Tableau de bord web"],
  },
];

const statusColors: Record<string, string> = {
  "Disponible": "#00FF66",
  "Beta": "#F7DF1E",
  "En développement": "#61DAFB",
};

export default function Progiciel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="progiciel" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Progiciels
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Mes logiciels produits.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Des solutions logicielles clé-en-main pensées pour le marché africain — robustes, adaptables et prêtes à déployer.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {softwares.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="card group overflow-hidden rounded-2xl"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.9))" }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      border: `1px solid ${statusColors[s.status] ?? "#fff"}40`,
                      color: statusColors[s.status] ?? "#fff",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    ● {s.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="mb-1 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {s.title}
                </h3>
                <p className="mb-3 text-xs font-medium" style={{ color: "#00FF66" }}>{s.desc}</p>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.longDesc}
                </p>

                <ul className="mb-5 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span style={{ color: "#00FF66" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-5 flex items-center gap-2">
                  {s.stack.map(({ Icon, color, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs"
                      style={{ background: `${color}15`, border: `1px solid ${color}25`, color }}
                      title={name}
                    >
                      <Icon size={12} />
                      {name}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex h-9 w-full items-center justify-center rounded-xl border text-xs font-medium transition-all duration-200 hover:border-[#00FF66] hover:text-[#00FF66]"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)" }}
                >
                  Demander une démo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
