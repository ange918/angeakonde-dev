"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20 text-center"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(0,223,129,0.08)" }}
        />
        <div
          className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(0,223,129,0.05)" }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium sm:px-5 sm:text-base transition-colors duration-300"
          style={{
            borderColor: "rgba(0,223,129,0.3)",
            color: "var(--c-accent)",
            background: "rgba(0,223,129,0.05)",
          }}
        >
          <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--c-accent)" }} />
          Disponible pour de nouveaux projets
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl transition-colors duration-300"
          style={{ fontFamily: "var(--font-nunito)", fontWeight: 800 }}
        >
          <span style={{ color: "var(--c-text)" }}>DÉVELOPPEUR WEB</span>
          <br />
          <span style={{ color: "var(--c-accent)" }}>À VOTRE SERVICE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 mx-auto text-xl font-normal leading-relaxed transition-colors duration-300"
          style={{ color: "var(--c-text-muted)", maxWidth: "600px" }}
        >
          J&apos;aide les entreprises et porteurs de projets à mettre en place des sites internes modernes et une stratégie digitale efficace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background: "var(--c-accent)",
              color: "var(--c-accent-btn-text)",
              boxShadow: "0 0 15px var(--accent-glow)",
            }}
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-bold transition-all duration-300 hover:opacity-80"
            style={{
              borderColor: "var(--c-accent)",
              color: "var(--c-accent)",
              background: "transparent",
            }}
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-10"
          style={{ color: "var(--c-text-muted)" }}
        >
          {[
            { value: "4", label: "Projets réalisés" },
            { value: "4", label: "En cours" },
            { value: "1", label: "An d'expérience" },
            { value: "Afrique", label: "& Au-delà" },
          ].map((stat, i) => (
            <>
              {i > 0 && (
                <div
                  key={`divider-${i}`}
                  className="hidden sm:block h-8 w-px"
                  style={{ background: "var(--c-border)" }}
                />
              )}
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-extrabold sm:text-3xl transition-colors duration-300" style={{ color: "var(--c-text)", fontWeight: 800 }}>
                  {stat.value}
                </span>
                <span className="text-sm font-medium sm:text-base">{stat.label}</span>
              </div>
            </>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border pt-2 transition-colors duration-300"
          style={{ borderColor: "var(--c-border)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full"
            style={{ background: "var(--c-accent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
