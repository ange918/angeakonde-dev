"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutstand } from "@/lib/motion";
import { skills, values } from "@/lib/site";
import { HeroBlock, InView, Item, SectionHead, Stagger, Words } from "./ui";

export function AboutView() {
  return (
    <main>
      <section className="section hero-section">
        <div className="bg-portrait" aria-hidden />
        <div className="wrap hero-copy about-copy">
          <HeroBlock delay={0.1} dataMotion="hero-eyebrow">
            <p className="eyebrow">À propos</p>
          </HeroBlock>
          <Words text="Développeur full-stack à Cotonou" className="display hero-title about-title" />
          <HeroBlock dataMotion="hero-sub" delay={0.55}>
            <p className="project-summary">
              Ange Akonde — aussi BigSixTeen / JRC DIGIT. Je construis des produits digitaux pour des marques et institutions qui veulent une présence nette, rapide et utile.
            </p>
          </HeroBlock>
        </div>
      </section>

      <section className="section about-section">
        <div className="wrap">
          <Stagger className="g2">
            <Item className="card about-portrait" hover>
              <div className="about-portrait-glow" aria-hidden />
              <div className="about-portrait-body">
                <div className="logo logo-lg" data-motion="nav-logo">
                  AA
                </div>
                <h3 className="about-name">Ange Akonde</h3>
                <p className="card-text">Full-stack · Formateur · Cotonou, Bénin</p>
              </div>
            </Item>
            <Item className="card" hover>
              <p className="card-text body">
                Mon approche mélange agence (design system, storytelling, conversion) et ingénierie (Next.js, APIs, data). J’accompagne aussi en formation : prise en main back-office, bases du web, ateliers pour équipes.
              </p>
              <p className="card-text body about-stack">
                Stack favorite : <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind</strong>, <strong>Supabase</strong> / Postgres, déploiements Vercel.
              </p>
              <div className="hero-ctas about-ctas">
                <Link className="btn btn-primary" data-motion="hero-cta" href="/contact">
                  Me contacter
                </Link>
                <Link className="btn btn-ghost" data-motion="hero-cta" href="/#realisations">
                  Voir les projets
                </Link>
              </div>
            </Item>
          </Stagger>

          <SectionHead className="spaced" eyebrow="Compétences" title="Skills" />
          <Stagger className="g2">
            {skills.map((skill) => (
              <Item key={skill.name} className="card" hover>
                <div className="skill-head">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <p className="skill-detail">{skill.detail}</p>
                <SkillBar pct={skill.pct} />
              </Item>
            ))}
          </Stagger>

          <SectionHead className="spaced" eyebrow="Valeurs" title="Ce qui compte" />
          <Stagger className="g3">
            {values.map((value) => (
              <Item key={value.title} className="card" hover>
                <div className="dash" />
                <h3 className="value-title">{value.title}</h3>
                <p className="card-text">{value.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}

function SkillBar({ pct }: { pct: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="skill-bar" aria-hidden>
      <motion.i
        style={{ width: `${pct}%`, transformOrigin: "left center" }}
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: reduce ? 0 : 1, ease: easeOutstand, delay: reduce ? 0 : 0.2 }}
      />
    </div>
  );
}
