"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "HTML / CSS / JS",
    desc: "Semantic markup, modern CSS, and clean vanilla JavaScript.",
    icon: "⟨/⟩",
  },
  {
    name: "React",
    desc: "Component-driven UIs with hooks, context, and state management.",
    icon: "⚛",
  },
  {
    name: "Next.js",
    desc: "Full-stack apps with App Router, SSR, SSG, and API routes.",
    icon: "▲",
  },
  {
    name: "Node.js",
    desc: "Scalable backend services, REST APIs and real-time systems.",
    icon: "⬡",
  },
  {
    name: "Express",
    desc: "Fast, unopinionated server-side routing and middleware.",
    icon: "⚡",
  },
  {
    name: "Flutter",
    desc: "Cross-platform mobile apps for Android and iOS from one codebase.",
    icon: "◈",
  },
  {
    name: "Mobile Dev",
    desc: "Responsive design, PWAs, and native-feeling mobile experiences.",
    icon: "📱",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Skills
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            My tech stack.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card group rounded-2xl p-6"
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold transition-colors duration-300"
                style={{
                  background: "rgba(0,255,102,0.08)",
                  color: "#00FF66",
                  border: "1px solid rgba(0,255,102,0.15)",
                }}
              >
                {skill.icon}
              </div>
              <h3
                className="mb-2 text-sm font-semibold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {skill.name}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
