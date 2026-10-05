"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { easeOutstand } from "@/lib/motion";
import { EMAIL, MAILTO, projectTypes, WHATSAPP_URL } from "@/lib/site";
import { HeroBlock, InView, Item, Stagger, Words } from "./ui";

export function ContactView() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<string>(projectTypes[1]);
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [`Nom: ${name}`, `Email: ${email}`, `Type de projet: ${type}`, "", message].join("\n");
    const href = `${MAILTO}?subject=${encodeURIComponent(`Projet — ${type}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <main>
      <section className="section hero-section contact-section">
        <div className="wrap">
          <HeroBlock delay={0.1} dataMotion="hero-eyebrow">
            <p className="eyebrow">Contact</p>
          </HeroBlock>
          <Words text="Parlons de votre projet" className="display hero-title contact-title" />
          <HeroBlock dataMotion="hero-sub" delay={0.5}>
            <p className="project-summary contact-lead">
              Décrivez votre besoin. Réponse sous 24h — ou écrivez-moi directement sur WhatsApp.
            </p>
          </HeroBlock>

          <div className="g2 contact-grid">
            <InView className="card" dataMotion="form-card" hover>
              <form onSubmit={onSubmit}>
                <Stagger staggerChildren={0.05}>
                  <Item dataMotion="form-field">
                    <label className="field">
                      <span>Nom</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </label>
                  </Item>
                  <Item dataMotion="form-field">
                    <label className="field">
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="vous@entreprise.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </label>
                  </Item>
                  <Item dataMotion="form-field">
                    <label className="field">
                      <span>Type de projet</span>
                      <select name="type" value={type} onChange={(event) => setType(event.target.value)}>
                        {projectTypes.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  </Item>
                  <Item dataMotion="form-field">
                    <label className="field">
                      <span>Message</span>
                      <textarea
                        name="message"
                        placeholder="Objectifs, délai, budget approximatif…"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                      />
                    </label>
                  </Item>
                  <Item>
                    <motion.button
                      className="btn btn-primary btn-block"
                      data-motion="hero-cta"
                      type="submit"
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={{ duration: 0.18, ease: easeOutstand }}
                    >
                      Envoyer le message
                    </motion.button>
                  </Item>
                </Stagger>
                {sent ? (
                  <p className="form-note" role="status">
                    Votre messagerie s’ouvre avec le message prérempli à {EMAIL}.
                  </p>
                ) : null}
              </form>
            </InView>

            <Stagger className="contact-side">
              <Item className="card" hover>
                <p className="eyebrow muted side-label">Coordonnées</p>
                <h3 className="side-title">Ange Akonde</h3>
                <div className="side-rows">
                  <div>
                    <span>Ville</span>
                    <br />
                    Cotonou, Bénin
                  </div>
                  <div>
                    <span>Email</span>
                    <br />
                    <a href={MAILTO}>{EMAIL}</a>
                  </div>
                  <div>
                    <span>Studio</span>
                    <br />
                    BigSixTeen · JRC DIGIT
                  </div>
                </div>
              </Item>
              <Item className="card wa-card" dataMotion="wa-card-glow" hover>
                <p className="eyebrow side-label">Réponse rapide</p>
                <h3 className="wa-title">WhatsApp</h3>
                <p className="card-text wa-copy">Idéal pour un brief court ou une question de cadrage.</p>
                <a className="btn btn-wa btn-block" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Ouvrir WhatsApp
                </a>
              </Item>
              <Item className="card" hover>
                <p className="eyebrow muted side-label">Disponibilité</p>
                <p className="card-text">Ouvert aux nouveaux projets · Formules Essentiel → Sur mesure.</p>
                <Link href="/#formules" className="formules-link">
                  Voir les formules →
                </Link>
              </Item>
            </Stagger>
          </div>
        </div>
      </section>
    </main>
  );
}
