"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trackContactClick } from "@/lib/analytics";
import { revealInitial, revealTransition } from "@/lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-20 text-center"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(74,255,0,0.08)" }}
        />
        <div
          className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(74,255,0,0.05)" }}
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
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <motion.h1
          initial={revealInitial(reduce)}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(reduce, 0.1)}
          className="mb-4 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-[5.5rem]"
          style={{
            fontFamily: "var(--font-montserrat)",
            color: "var(--c-text)",
            fontWeight: 800,
          }}
        >
          Je Transforme vos idées en{" "}
          <span style={{ color: "#4AFF00", fontWeight: 800 }}>site web</span> ou{" "}
          <span style={{ color: "#4AFF00", fontWeight: 800 }}>
            Application mobiles
          </span>
          <br />
          moderne et performant
        </motion.h1>

        <motion.p
          initial={revealInitial(reduce)}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(reduce, 0.18)}
          style={{
            fontSize: "1rem",
            color: "#AACBC4",
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}
        >
          Full Stack Developer — Cotonou, Bénin
        </motion.p>

        <motion.div
          initial={revealInitial(reduce)}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(reduce, 0.28)}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "#4AFF00", fontWeight: 700, fontFamily: "var(--font-inter)" }}
          >
            Mes services
          </a>
          <a
            href="#contact"
            onClick={() => trackContactClick("hero")}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border px-8 py-4 text-base transition-all duration-200 hover:border-[#4AFF00] hover:text-[#4AFF00]"
            style={{
              borderColor: "var(--c-border-xl)",
              color: "var(--c-text)",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
            }}
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={revealTransition(reduce, 0.7)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border pt-2"
          style={{ borderColor: "var(--c-border-2xl)" }}
        >
          <motion.div
            animate={reduce ? { y: 0 } : { y: [0, 8, 0] }}
            transition={reduce ? { duration: 0 } : { repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full"
            style={{ background: "#4AFF00" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
