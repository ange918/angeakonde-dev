"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  desc: string;
  tag: string;
  href: string;
  num: string;
  img: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ background: "#111" }}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="relative h-56 w-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                sizes="512px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9))" }}
              />
              <div className="absolute top-4 left-4">
                <span
                  className="rounded-full px-3 py-1 text-sm font-medium backdrop-blur-md"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                    background: "rgba(0,0,0,0.4)",
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <span
                className="absolute bottom-3 left-5 text-5xl font-extrabold leading-none"
                style={{ fontFamily: "var(--font-outfit)", color: "rgba(74,255,0,0.5)" }}
              >
                {project.num}
              </span>
            </div>

            <div className="p-8">
              <h2
                className="mb-4 text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {project.title}
              </h2>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {project.desc}
              </p>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold transition-all duration-200 hover:opacity-90 hover:gap-3"
                style={{ background: "#4AFF00", color: "#000" }}
              >
                Visiter le site
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
