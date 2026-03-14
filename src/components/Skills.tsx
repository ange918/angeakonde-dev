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
  Icon: HeroIcon;
  color: string;
};

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

const repeated = [...skills, ...skills, ...skills];

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
      </div>

      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 z-10 h-full w-24 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--c-bg), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 z-10 h-full w-24 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--c-bg), transparent)" }}
        />

        <div className="flex" style={{ animation: "marquee 28s linear infinite" }}>
          {repeated.map((skill, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 mx-3 rounded-2xl px-6 py-5"
              style={{
                background: "var(--c-surface)",
                border: "1px solid var(--c-border-md)",
                minWidth: "180px",
              }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}35` }}
              >
                <skill.Icon style={{ color: skill.color, width: 20, height: 20 }} />
              </div>
              <span
                className="text-base font-semibold whitespace-nowrap"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--c-text)" }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
