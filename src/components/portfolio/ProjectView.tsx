"use client";

import Link from "next/link";
import type { Project } from "@/lib/site";
import { CountUp } from "./CountUp";
import { FloatingPhone } from "./Devices";
import { ProjectGrid } from "./ProjectGrid";
import { HeroBlock, InView, Item, SectionHead, Stagger, Words } from "./ui";

export function ProjectView({ project }: { project: Project }) {
  return (
    <main>
      <section className="section hero-section project-hero">
        <div className="wrap">
          <HeroBlock delay={0.05}>
            <Link href="/#realisations" className="back-link" data-motion="card-reveal">
              ← Retour aux réalisations
            </Link>
          </HeroBlock>
          <HeroBlock className="tag-row project-tags" delay={0.12} dataMotion="section-head">
            <span className="tag tag-green" data-motion="project-tag">
              {project.category}
            </span>
            <span className="tag" data-motion="project-tag">
              {project.year}
            </span>
            <span className="tag" data-motion="project-tag">
              {project.kind}
            </span>
          </HeroBlock>
          <Words text={project.title} className="display hero-title project-title-xl" />
          <HeroBlock dataMotion="hero-sub" delay={0.45}>
            <p className="project-summary">{project.summary}</p>
          </HeroBlock>
          <Stagger className="tag-row project-stack">
            {project.stack.map((tag) => (
              <Item key={tag} dataMotion="project-tag">
                <span className="tag">{tag}</span>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="preview-section">
        <div className="wrap">
          <InView className="card preview-card" hover>
            <div className="preview-glow" aria-hidden />
            <div className="preview-layout">
              <div>
                <p className="eyebrow" data-motion="section-eyebrow">
                  {project.previewEyebrow}
                </p>
                <h2 className="preview-title" data-motion="section-title">
                  {project.previewTitle}
                </h2>
                <p className="card-text preview-text">{project.previewText}</p>
              </div>
              <FloatingPhone kicker={project.phoneKicker} title={project.phoneTitle} light={project.phoneLight} />
            </div>
          </InView>
        </div>
      </section>

      <section className="section detail-section">
        <div className="wrap">
          <Stagger className="g2">
            <Item className="card" hover>
              <p className="eyebrow">Contexte</p>
              <h2 className="block-title">{project.challengeTitle}</h2>
              <p className="card-text body">{project.challenge}</p>
            </Item>
            <Item className="card" hover>
              <p className="eyebrow">Réponse</p>
              <h2 className="block-title">{project.solutionTitle}</h2>
              <p className="card-text body">{project.solution}</p>
            </Item>
          </Stagger>

          <SectionHead className="spaced" eyebrow="Livrables" title="Ce qui a été livré" />
          <Stagger className="g3">
            {project.deliverables.map((item) => (
              <Item key={item.n} className="card" dataMotion="process-step" hover>
                <div className="step-n step-n-block">{item.n}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </Item>
            ))}
          </Stagger>

          <Stagger className="g2 stats-grid detail-stats">
            {project.stats.map((stat) => (
              <Item key={stat.label} className="card stat-card" hover>
                <div className="dash" />
                <div className={stat.count != null ? "num" : "num num-text"}>
                  {stat.count != null ? (
                    <CountUp value={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="lbl">{stat.label}</div>
              </Item>
            ))}
          </Stagger>

          <InView className="card project-cta">
            <p className="eyebrow">Suite</p>
            <h2 className="block-title cta-inline">Un projet similaire ?</h2>
            <Link className="btn btn-primary" data-motion="hero-cta" href="/contact">
              {project.cta}
            </Link>
          </InView>
        </div>
      </section>
    </main>
  );
}

export function ProjectsIndex() {
  return (
    <main>
      <section className="section hero-section project-hero">
        <div className="wrap">
          <HeroBlock delay={0.08}>
            <p className="eyebrow" data-motion="hero-eyebrow">
              Réalisations
            </p>
          </HeroBlock>
          <Words text="Toutes les réalisations" className="display hero-title" />
          <HeroBlock dataMotion="hero-sub" delay={0.55}>
            <p className="project-summary">
              Éducation, mode, santé, fintech, événement et communauté — six produits livrés, une même exigence de craft.
            </p>
          </HeroBlock>
        </div>
      </section>
      <section className="section projects-section">
        <div className="wrap">
          <ProjectGrid />
        </div>
      </section>
    </main>
  );
}
