"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutstand, fadeRise, hoverCard, stagger, viewport } from "@/lib/motion";

const MotionLink = motion.create(Link);

export function Stagger({
  children,
  className,
  dataMotion = "section-stagger",
  delayChildren = 0.08,
  staggerChildren = 0.06,
}: {
  children: ReactNode;
  className?: string;
  dataMotion?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} data-motion={dataMotion}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      data-motion={dataMotion}
      variants={stagger(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  className,
  dataMotion = "card-reveal",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  dataMotion?: string;
  hover?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      data-motion={dataMotion}
      variants={reduce ? undefined : fadeRise}
      whileHover={reduce || !hover ? undefined : hoverCard}
    >
      {children}
    </motion.div>
  );
}

export function InView({
  children,
  className,
  dataMotion = "card-reveal",
  delay = 0,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  dataMotion?: string;
  delay?: number;
  hover?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} data-motion={dataMotion}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      data-motion={dataMotion}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: easeOutstand, delay }}
      whileHover={hover ? hoverCard : undefined}
    >
      {children}
    </motion.div>
  );
}

export function RiseLink({
  href,
  className,
  children,
  dataMotion,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  dataMotion?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <MotionLink
      href={href}
      className={className}
      data-motion={dataMotion}
      variants={reduce ? undefined : fadeRise}
      whileHover={reduce ? undefined : { ...hoverCard, scale: 1 }}
    >
      {children}
    </MotionLink>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <Stagger className={className ? `section-head ${className}` : "section-head"} dataMotion="section-head">
      <Item dataMotion="section-eyebrow">
        <p className="eyebrow" data-motion="section-eyebrow">
          {eyebrow}
        </p>
      </Item>
      <Item dataMotion="section-title">
        <h2 data-motion="section-title">{title}</h2>
      </Item>
      {lead ? (
        <Item dataMotion="section-lead">
          <p className="section-lead" data-motion="section-lead">
            {lead}
          </p>
        </Item>
      ) : null}
    </Stagger>
  );
}

export function Words({
  text,
  className,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <Tag className={className} data-motion="hero-headline" aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="word"
          data-motion="hero-word"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.7,
            ease: easeOutstand,
            delay: reduce ? 0 : 0.22 + index * 0.055,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

export function HeroBlock({
  children,
  className,
  dataMotion,
  delay = 0.55,
}: {
  children: ReactNode;
  className?: string;
  dataMotion?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      data-motion={dataMotion}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.7, ease: easeOutstand, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
