"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 7, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 2, suffix: "", label: "Pays clients" },
  { value: 1, suffix: "an+", label: "D'expérience" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 1200, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-2"
    >
      <span
        className="text-4xl sm:text-5xl font-extrabold"
        style={{ color: "#4AFF00", fontFamily: "var(--font-montserrat)" }}
      >
        {count}
        {suffix}
      </span>
      <span
        className="text-base font-medium text-center"
        style={{ color: "var(--c-muted)", fontFamily: "var(--font-inter)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Statistics() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="statistics"
      className="py-24 px-5"
      style={{ background: "rgba(74,255,0,0.02)", borderTop: "1px solid rgba(74,255,0,0.08)", borderBottom: "1px solid rgba(74,255,0,0.08)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              active={active}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
