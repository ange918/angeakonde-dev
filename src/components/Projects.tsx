"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Models Academy Management",
    desc: "Academic platform for student and model tracking. Full management system for academic institutions with enrollment, scheduling, and progress tracking.",
    tag: "Education",
    href: "https://modelacademy-management.com/",
    num: "01",
  },
  {
    title: "Code-Capital",
    desc: "Developer community and coding resources hub. A fintech-meets-dev platform connecting coders with tools, content, and capital resources.",
    tag: "Community",
    href: "https://codecapital.net",
    num: "02",
  },
  {
    title: "SusuniLab",
    desc: "Collaborative innovation lab for African tech projects. A space where African builders come together to ideate, prototype, and ship.",
    tag: "Innovation",
    href: "https://susunilab.com",
    num: "03",
  },
  {
    title: "God's Plan",
    desc: "Personal goal-tracking and life management app. Set intentions, track milestones, and stay aligned with your vision — built for deliberate living.",
    tag: "Productivity",
    href: "https://god-plan.vercel.app/",
    num: "04",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Projects
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Selected work.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card group relative overflow-hidden rounded-2xl p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px at 50% 0%, rgba(0,255,102,0.06), transparent)",
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: "rgba(0,255,102,0.15)",
                  }}
                >
                  {p.num}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {p.tag}
                </span>
              </div>

              <div className="relative mt-4">
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {p.desc}
                </p>
              </div>

              <div className="relative mt-6 flex items-center justify-between">
                <div
                  className="h-px flex-1 mr-4"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border px-5 text-xs font-medium transition-all duration-200 hover:border-[#00FF66] hover:text-[#00FF66]"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  View project
                  <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
