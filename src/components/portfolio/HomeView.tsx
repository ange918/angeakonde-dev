"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { easeOutstand } from "@/lib/motion";
import {
  faqs,
  plans,
  processSteps,
  reasons,
  services,
  WHATSAPP_URL,
} from "@/lib/site";
import { CountUp } from "./CountUp";
import { HeroDevices } from "./Devices";
import { CheckIcon, ServiceGlyph } from "./icons";
import { ProjectGrid } from "./ProjectGrid";
import { HeroBlock, InView, Item, SectionHead, Stagger, Words } from "./ui";

const heroLine = "Des sites et applications sur mesure, pensés pour votre croissance";

export function HomeView() {
  return (
    <main>
      <section className="section hero-section">
        <div className="bg-portrait" aria-hidden />
        <div className="wrap hero-copy">
          <HeroBlock className="hero-eyebrow-wrap" dataMotion="hero-eyebrow" delay={0.1}>
            <div className="eyebrow pill">
              <span className="dot" />
              &lt;/&gt; Développeur full-stack
            </div>
          </HeroBlock>
          <Words text={heroLine} className="hero-title display" />
          <HeroBlock dataMotion="hero-sub" delay={0.78}>
            <p className="hero-sub">
              Je conçois et développe des expériences web & mobile pour entrepreneurs et organisations — de Cotonou au monde.
            </p>
          </HeroBlock>
          <HeroBlock className="hero-ctas" dataMotion="hero-cta" delay={0.9}>
            <Link className="btn btn-primary" data-motion="hero-cta" href="/#realisations">
              Voir mes projets
            </Link>
            <a className="btn btn-ghost" data-motion="hero-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </HeroBlock>
          <HeroDevices />
        </div>
      </section>

      <section className="section stats-section">
        <div className="wrap">
          <Stagger className="g2 stats-grid" dataMotion="stats-stagger">
            <Item className="card stat-card" hover>
              <div className="dash" />
              <div className="num">
                <CountUp value={7} prefix="+" />
              </div>
              <div className="lbl">Projets livrés</div>
            </Item>
            <Item className="card stat-card" hover>
              <div className="dash" />
              <div className="num">
                <CountUp value={5} prefix="+" />
              </div>
              <div className="lbl">Clients satisfaits</div>
            </Item>
            <Item className="card stat-card" hover>
              <div className="dash" />
              <div className="num">
                <CountUp value={100} suffix="%" />
              </div>
              <div className="lbl">Sur mesure</div>
            </Item>
            <Item className="card stat-card" hover>
              <div className="dash" />
              <div className="num num-text">Full-stack</div>
              <div className="lbl">Web & mobile</div>
            </Item>
          </Stagger>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <SectionHead
            eyebrow="Mes services"
            title="Ce que je réalise"
            lead="Du site vitrine à la plateforme SaaS — une offre full-stack pour accélérer votre présence digitale."
          />
          <Stagger className="g2">
            {services.map((service) => (
              <Item key={service.title} className="card" dataMotion="service-card" hover>
                <ServiceGlyph name={service.icon} />
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section projects-section" id="realisations">
        <div className="wrap">
          <SectionHead
            eyebrow="Réalisations"
            title="Quelques réalisations"
            lead="Produits livrés pour l’éducation, la mode, la santé et la fintech — stacks modernes, UI soignée."
          />
          <ProjectGrid />
          <div className="center-cta">
            <Link className="btn btn-ghost" href="/projets">
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Pourquoi moi"
            title="Pourquoi me faire appel"
            lead="Un partenaire technique qui parle business, design et code — sans friction."
          />
          <Stagger className="g2">
            {reasons.map((reason) => (
              <Item key={reason.title} className="card" hover>
                <div className="dash" />
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-text">{reason.text}</p>
              </Item>
            ))}
          </Stagger>

          <SectionHead className="spaced" eyebrow="Process" title="De l’idée à la livraison" />
          <Stagger className="g2">
            {processSteps.map((step) => (
              <Item key={step.n} className="card step" dataMotion="process-step" hover>
                <StepNumber n={step.n} />
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="card-text">{step.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" id="formules">
        <div className="wrap">
          <SectionHead
            eyebrow="Formules"
            title="Des formules adaptées à votre projet"
            lead="Chaque projet a ses contraintes. Le devis se construit sur le périmètre, les fonctionnalités et le délai."
          />
          <Stagger className="g2">
            {plans.map((plan) => (
              <Item
                key={plan.name}
                className={plan.popular ? "card card-green pricing-popular" : "card"}
                dataMotion={plan.popular ? "pricing-popular" : "pricing-card"}
                hover
              >
                <div className="plan-head">
                  <h3 className="plan-name">{plan.name}</h3>
                  {plan.popular ? <span className="badge-pop">Populaire</span> : null}
                </div>
                <p className="card-text plan-text">{plan.text}</p>
                <hr className="rule" />
                <ul className="checks">
                  {plan.checks.map((check, index) => (
                    <CheckRow key={check} label={check} index={index} />
                  ))}
                </ul>
                <div className="plan-cta">
                  <Link className={plan.primary ? "btn btn-primary btn-block" : "btn btn-outline btn-block"} href="/contact">
                    Demander un devis
                  </Link>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Ce qu’on me demande le plus" />
          <InView className="card faq-card">
            <FaqList />
          </InView>
        </div>
      </section>

      <section className="section cta-section">
        <div className="wrap">
          <InView className="card cta-band">
            <div className="cta-glow" aria-hidden />
            <p className="eyebrow" data-motion="section-eyebrow">
              Contact
            </p>
            <h2 className="cta-title" data-motion="section-title">
              Parlons de votre projet
            </h2>
            <p className="cta-lead" data-motion="section-lead">
              Décrivez votre besoin — je vous réponds sous 24h avec une proposition claire.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" data-motion="hero-cta" href="/contact">
                Écrire un message
              </Link>
              <a className="btn btn-ghost" data-motion="hero-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </InView>
        </div>
      </section>
    </main>
  );
}

function StepNumber({ n }: { n: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="step-n"
      initial={reduce ? false : { scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduce ? 0 : 0.5, ease: easeOutstand }}
    >
      {n}
    </motion.div>
  );
}

function CheckRow({ label, index }: { label: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      className="check"
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4, ease: easeOutstand, delay: reduce ? 0 : index * 0.04 }}
    >
      <CheckIcon />
      <span>{label}</span>
    </motion.li>
  );
}

function FaqList() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<boolean[]>(() => faqs.map(() => true));

  return (
    <Stagger>
      {faqs.map((item, index) => {
        const isOpen = open[index];
        return (
          <Item key={item.q} className="faq-item" dataMotion="faq-item">
            <button
              type="button"
              className="faq-summary"
              aria-expanded={isOpen}
              onClick={() =>
                setOpen((current) => current.map((value, i) => (i === index ? !value : value)))
              }
            >
              <span>{item.q}</span>
              <motion.span
                className="faq-plus"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.35, ease: easeOutstand }}
              >
                +
              </motion.span>
            </button>
            <motion.div
              className="faq-panel"
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: easeOutstand }}
            >
              <p>{item.a}</p>
            </motion.div>
          </Item>
        );
      })}
    </Stagger>
  );
}
