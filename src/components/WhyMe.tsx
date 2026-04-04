"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Sur mesure avant tout",
    desc: "Chaque projet est unique. Je ne utilise pas de templates génériques — je conçois et développe chaque site en partant de vos besoins réels.",
  },
  {
    num: "02",
    title: "Performance & rapidité",
    desc: "Des sites rapides, optimisés et bien structurés. Votre audience ne doit jamais attendre — la performance est intégrée dès le départ.",
  },
  {
    num: "03",
    title: "Design soigné",
    desc: "Un rendu visuel professionnel et moderne qui reflète votre image. Chaque détail compte pour donner confiance à vos visiteurs.",
  },
  {
    num: "04",
    title: "Accompagnement complet",
    desc: "Je suis présent de l'idée à la mise en ligne, et au-delà. Vous n'êtes jamais seul face à votre projet digital.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p
            className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#4AFF00", fontFamily: "var(--font-inter)" }}
          >
            Pourquoi moi
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Pourquoi me faire appel<br className="hidden sm:block" /> pour votre projet ?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--c-muted)", fontFamily: "var(--font-inter)" }}
        >
          Chaque projet est une opportunité pour moi de créer quelque chose d&apos;unique, sur mesure et performant pour mes clients. Je m&apos;investis pleinement dans chaque mission comme si c&apos;était la mienne.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card rounded-2xl p-6 sm:p-8 flex gap-5"
            >
              <span
                className="text-3xl font-extrabold shrink-0 leading-none mt-1"
                style={{ color: "rgba(74,255,0,0.25)", fontFamily: "var(--font-montserrat)" }}
              >
                {r.num}
              </span>
              <div>
                <h3
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}
                >
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
