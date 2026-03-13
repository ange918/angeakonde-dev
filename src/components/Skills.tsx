"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  desc: string;
  Icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML5", desc: "Balisage sémantique et structure web moderne.", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", desc: "Animations, Flexbox, Grid et styles avancés.", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", desc: "Logique métier, DOM, APIs et ES2024+.", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", desc: "JavaScript typé pour des apps robustes.", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", desc: "Interfaces composants avec hooks et state management.", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", desc: "Apps full-stack avec App Router, SSR et SSG.", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", desc: "Services backend scalables et APIs REST.", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", desc: "Routage serveur rapide et middleware.", Icon: SiExpress, color: "#FFFFFF" },
  { name: "Flutter", desc: "Apps mobiles cross-platform Android & iOS.", Icon: SiFlutter, color: "#02569B" },
  { name: "MongoDB", desc: "Base de données NoSQL pour apps modernes.", Icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", desc: "Design rapide et responsive utility-first.", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", desc: "Versioning, branches et collaboration équipe.", Icon: SiGit, color: "#F05032" },
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
            Compétences
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ma stack technique.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card group rounded-2xl p-6"
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
              >
                <skill.Icon size={22} color={skill.color} />
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
