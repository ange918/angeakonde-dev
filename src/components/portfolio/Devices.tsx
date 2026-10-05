"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function PhoneFrame({
  tilt,
  amplitude,
  duration,
  delay,
  light,
  children,
}: {
  tilt: number;
  amplitude: number;
  duration: number;
  delay: number;
  light?: boolean;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`phone${light ? " is-light" : ""}`}
      data-motion="device-float"
      animate={
        reduce
          ? { y: 0, rotate: tilt }
          : { y: [0, -amplitude, 0], rotate: tilt }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { duration, repeat: Infinity, ease: "easeInOut", delay }
      }
    >
      <div className="notch" />
      <div className={`screen${light ? " screen-light" : ""}`}>{children}</div>
    </motion.div>
  );
}

export function HeroDevices() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="devices"
      data-motion="hero-devices"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.55 }}
    >
      <div className="phone-slot s1">
        <PhoneFrame tilt={-12} amplitude={14} duration={6.2} delay={0.6}>
          <div className="ph-kicker">PROJET</div>
          <div className="ph-title">OCD APP</div>
          <div className="ph-line w70" />
          <div className="ph-line w50" />
          <div className="ph-block green" />
          <div className="ph-row">
            <div className="ph-tile" />
            <div className="ph-tile" />
          </div>
        </PhoneFrame>
      </div>
      <div className="phone-slot s2">
        <PhoneFrame tilt={0} amplitude={16} duration={5.4} delay={0.9} light>
          <div className="ph-kicker muted">ÉDUCATION</div>
          <div className="ph-title dark">O’SCHOOL</div>
          <p className="ph-copy">Gestion scolaire, notes, parents & enseignants — une plateforme unique.</p>
          <div className="ph-block dark" />
          <div className="ph-cta">ACCÉDER</div>
        </PhoneFrame>
      </div>
      <div className="phone-slot s3">
        <PhoneFrame tilt={10} amplitude={10} duration={6.8} delay={0.75}>
          <div className="ph-kicker lilac">MODE</div>
          <div className="ph-title">FASHLINK</div>
          <p className="ph-copy light">Des rendez-vous qui font ressentir, pas seulement matcher.</p>
          <div className="ph-block fashion" />
          <div className="ph-line w80" />
        </PhoneFrame>
      </div>
    </motion.div>
  );
}

export function FloatingPhone({
  kicker,
  title,
  light,
}: {
  kicker: string;
  title: string;
  light?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="detail-phone"
      data-motion="device-float"
      animate={reduce ? { y: 0 } : { y: [0, -12, 0] }}
      transition={reduce ? { duration: 0 } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="detail-phone-inner">
        <div className="ph-accent" />
        <div className="ph-title lg">{title}</div>
        <div className="detail-stack">
          <div className="ph-tile tall" />
          <div className="ph-tile tall" />
          <div className={`ph-block short${light ? "" : ""}`} />
        </div>
        <span className="sr-only">{kicker}</span>
      </div>
    </motion.div>
  );
}
