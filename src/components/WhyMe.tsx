"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Colonne gauche — photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(74,255,0,0.15)" }}
            >
              <Image
                src="/photo-ange.jpg"
                alt="Ange Akonde"
                width={600}
                height={700}
                className="w-full object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
              {/* Overlay subtle */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                }}
              />
              {/* Badge en bas */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="rounded-xl px-4 py-3 backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(74,255,0,0.2)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#4AFF00", fontFamily: "var(--font-inter)" }}
                  >
                    Ange Akonde
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
                  >
                    Full Stack Developer — Cotonou, Bénin
                  </p>
                </div>
              </div>
            </div>

            {/* Décoration */}
            <div
              className="pointer-events-none absolute -top-6 -left-6 h-32 w-32 rounded-full blur-[60px]"
              style={{ background: "rgba(74,255,0,0.08)" }}
            />
          </motion.div>

          {/* Colonne droite — texte + arguments */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#4AFF00", fontFamily: "var(--font-inter)" }}
            >
              Pourquoi moi
            </p>
            <h2
              className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Pourquoi me faire appel<br /> pour votre projet ?
            </h2>
            <p
              className="mb-10 text-lg leading-relaxed"
              style={{ color: "var(--c-muted)", fontFamily: "var(--font-inter)" }}
            >
              Chaque projet est une opportunité pour moi de créer quelque chose d&apos;unique, sur mesure et performant pour mes clients. Je m&apos;investis pleinement dans chaque mission comme si c&apos;était la mienne.
            </p>

            <div className="flex flex-col gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <span
                    className="text-2xl font-extrabold shrink-0 leading-none mt-0.5"
                    style={{ color: "rgba(74,255,0,0.3)", fontFamily: "var(--font-montserrat)" }}
                  >
                    {r.num}
                  </span>
                  <div>
                    <h3
                      className="mb-1 text-base font-bold text-white"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter)" }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
