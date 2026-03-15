"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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
type Skill = { name: string; Icon: HeroIcon; color: string };

const skills: Skill[] = [
  { name: "HTML5", Icon: CodeBracketIcon, color: "#E34F26" },
  { name: "CSS3", Icon: SwatchIcon, color: "#1572B6" },
  { name: "JavaScript", Icon: CommandLineIcon, color: "#F7DF1E" },
  { name: "TypeScript", Icon: DocumentTextIcon, color: "#3178C6" },
  { name: "React", Icon: CubeTransparentIcon, color: "#61DAFB" },
  { name: "Next.js", Icon: GlobeAltIcon, color: "#4AFF00" },
  { name: "Node.js", Icon: ServerIcon, color: "#339933" },
  { name: "Express", Icon: BoltIcon, color: "#888888" },
  { name: "Flutter", Icon: DevicePhoneMobileIcon, color: "#02569B" },
  { name: "MongoDB", Icon: CircleStackIcon, color: "#47A248" },
  { name: "Tailwind CSS", Icon: PaintBrushIcon, color: "#06B6D4" },
  { name: "Git", Icon: CodeBracketSquareIcon, color: "#F05032" },
];

const row1 = skills.slice(0, 6);
const row2 = skills.slice(6, 12);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: "#4AFF00" }}>
            Compétences
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)", color: "var(--c-text)" }}
          >
            Ma stack technique.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[row1, row2].map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              className="grid grid-cols-3 gap-4 sm:grid-cols-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {row.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: `0 0 20px ${skill.color}55`,
                    borderColor: `${skill.color}99`,
                    transition: { type: "spring", stiffness: 400, damping: 15 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 rounded-2xl px-4 py-5 cursor-default"
                  style={{
                    background: "var(--c-surface)",
                    border: "1px solid var(--c-border-md)",
                  }}
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}35` }}
                    whileHover={{ rotate: [0, -10, 10, -6, 6, 0], transition: { duration: 0.5 } }}
                  >
                    <skill.Icon style={{ color: skill.color, width: 20, height: 20 }} />
                  </motion.div>
                  <span
                    className="text-xs font-semibold text-center whitespace-nowrap"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--c-text)" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
