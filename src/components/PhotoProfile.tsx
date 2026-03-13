"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPinIcon, EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function PhotoProfile() {
  return (
    <section id="profil" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#FF6B00" }}>
            Profil
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Qui suis-je ?
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-3xl opacity-60 blur-xl"
                style={{ background: "radial-gradient(ellipse, #FF6B0030, transparent 70%)" }}
              />
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: 340,
                  height: 420,
                  border: "1px solid rgba(255,107,0,0.2)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Ange Akonde"
                  fill
                  className="object-cover"
                  sizes="340px"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Ange Akonde
                  </p>
                  <p className="text-xs" style={{ color: "#FF6B00" }}>
                    Développeur Full Stack · Cotonou, Bénin
                  </p>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,107,0,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Disponible</p>
                <p className="text-sm font-bold" style={{ color: "#FF6B00" }}>pour des projets</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Développeur Full Stack passionné, basé à Cotonou. Je conçois des solutions numériques adaptées aux réalités africaines — robustes, élégantes et centrées sur l&apos;utilisateur.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Étudiant en ingénierie logicielle à l&apos;Institut Futurcraft, je bâtis des produits qui allient code propre et design intentionnel. Mon objectif : être le pont entre la tech mondiale et le marché africain.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <MapPinIcon className="h-4 w-4 shrink-0" style={{ color: "#FF6B00" }} />
                Cotonou, Bénin — disponible en remote
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <EnvelopeIcon className="h-4 w-4 shrink-0" style={{ color: "#FF6B00" }} />
                contact@angeakonde.dev
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Full Stack", "React / Next.js", "Node.js", "Flutter", "Africa-first", "Product builder"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    border: "1px solid rgba(255,107,0,0.2)",
                    color: "#FF6B00",
                    background: "rgba(255,107,0,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex h-10 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-black transition-all hover:opacity-90"
                style={{ background: "#FF6B00", fontFamily: "var(--font-space-grotesk)" }}
              >
                Me contacter →
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex h-10 items-center gap-2 rounded-xl border px-5 text-sm font-medium transition-all hover:border-white/20 hover:text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
