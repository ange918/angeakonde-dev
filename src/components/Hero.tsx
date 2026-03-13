"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(0,255,102,0.08)" }}
        />
        <div
          className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(0,255,102,0.05)" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs"
          style={{
            borderColor: "rgba(0,255,102,0.3)",
            color: "#00FF66",
            background: "rgba(0,255,102,0.05)",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "#00FF66" }}
          />
          Disponible pour de nouveaux projets
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Je crée des
          <br />
          <span style={{ color: "#00FF66" }}>produits</span> digitaux
          <br />
          qui comptent.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Full Stack Developer — Cotonou, Benin
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "#00FF66" }}
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border px-8 text-sm font-semibold text-white transition-all duration-200 hover:border-[#00FF66] hover:text-[#00FF66]"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>30+</span>
            <span>Projets</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>4+</span>
            <span>Ans d&apos;expérience</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>Afrique</span>
            <span>& Au-delà</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border pt-2"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full"
            style={{ background: "#00FF66" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
