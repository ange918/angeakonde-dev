"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  SwatchIcon,
  CommandLineIcon,
  DocumentTextIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  ServerIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  PaintBrushIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import type { FC, SVGProps } from "react";

type HeroIcon = FC<SVGProps<SVGSVGElement>>;

type Skill = {
  name: string;
  desc: string;
  Icon: HeroIcon;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML5", desc: "Balisage sémantique et structure web moderne.", Icon: CodeBracketIcon, color: "#E34F26" },
  { name: "CSS3", desc: "Animations, Flexbox, Grid et styles avancés.", Icon: SwatchIcon, color: "#1572B6" },
  { name: "JavaScript", desc: "Logique métier, DOM, APIs et ES2024+.", Icon: CommandLineIcon, color: "#F7DF1E" },
  { name: "TypeScript", desc: "JavaScript typé pour des apps robustes.", Icon: DocumentTextIcon, color: "#3178C6" },
  { name: "React", desc: "Interfaces composants avec hooks et state management.", Icon: CubeTransparentIcon, color: "#61DAFB" },
  { name: "Next.js", desc: "Apps full-stack avec App Router, SSR et SSG.", Icon: GlobeAltIcon, color: "#FFFFFF" },
  { name: "Node.js", desc: "Services backend scalables et APIs REST.", Icon: ServerIcon, color: "#339933" },
  { name: "Express", desc: "Routage serveur rapide et middleware.", Icon: BoltIcon, color: "#FFFFFF" },
  { name: "Flutter", desc: "Apps mobiles cross-platform Android & iOS.", Icon: DevicePhoneMobileIcon, color: "#02569B" },
  { name: "MongoDB", desc: "Base de données NoSQL pour apps modernes.", Icon: CircleStackIcon, color: "#47A248" },
  { name: "Tailwind CSS", desc: "Design rapide et responsive utility-first.", Icon: PaintBrushIcon, color: "#06B6D4" },
  { name: "Git", desc: "Versioning, branches et collaboration équipe.", Icon: CodeBracketSquareIcon, color: "#F05032" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="card group rounded-2xl p-6"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <skill.Icon style={{ color: skill.color, width: 22, height: 22 }} />
              </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
}
