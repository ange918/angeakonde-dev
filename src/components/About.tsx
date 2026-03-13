"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            À propos
          </p>
          <h2
            className="mb-16 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Bâtisseur passionné
            <br />
            du Bénin.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card rounded-2xl p-8"
          >
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Salut, je suis <span className="text-white font-medium">Ange Akonde</span>, développeur Full Stack basé à Cotonou, au Bénin. Je suis passionné par la création d&apos;expériences numériques qui résolvent de vrais problèmes pour les gens à travers l&apos;Afrique et le monde entier.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Des plateformes de gestion académique aux outils fintech et aux labs d&apos;innovation, je construis des produits qui allient un code propre à un design intentionnel. Mon objectif est d&apos;être un pont entre la technologie et le marché africain — en créant des outils numériques qui fonctionnent vraiment pour les personnes qui les utilisent.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Résolveur de problèmes", "Code propre", "Africa-first", "Full Stack", "Product builder"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    border: "1px solid rgba(0,255,102,0.2)",
                    color: "#00FF66",
                    background: "rgba(0,255,102,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                label: "Parcours",
                value: "Étudiant en ingénierie logicielle à l'Institut Futurcraft, 2e année. En route vers JRC Digit, ma propre agence digitale.",
              },
              {
                label: "Mission",
                value: "Créer des produits numériques qui donnent du pouvoir aux entreprises et aux individus africains, en apportant une technologie de classe mondiale aux contextes locaux.",
              },
              {
                label: "Localisation",
                value: "Cotonou, Bénin — travaillant avec des clients du monde entier.",
              },
            ].map((item) => (
              <div key={item.label} className="card rounded-xl p-5">
                <p className="mb-1 text-xs font-medium" style={{ color: "#00FF66" }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
