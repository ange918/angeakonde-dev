"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
            About
          </p>
          <h2
            className="mb-16 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Passionate builder
            <br />
            from Benin.
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
              Hey, I&apos;m <span className="text-white font-medium">Ange Akonde</span>, a Full Stack Developer based in Cotonou, Benin. I&apos;m passionate about creating meaningful digital experiences that solve real problems for people across Africa and around the world.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              From academic management platforms to fintech tools and innovation labs, I build products that blend clean code with purposeful design. My goal is to be a bridge between technology and the African market — crafting digital tools that actually work for the people who use them.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Problem solver", "Clean code", "Africa-first", "Full Stack", "Product thinker"].map((tag) => (
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
                label: "Background",
                value: "Software Engineering student at Futurcraft Institut, 2nd year. Building towards JRC Digit, my own digital agency.",
              },
              {
                label: "Mission",
                value: "Create digital products that empower African businesses and individuals, bringing world-class technology to local contexts.",
              },
              {
                label: "Location",
                value: "Cotonou, Benin — working with clients worldwide.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card rounded-xl p-5"
              >
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
