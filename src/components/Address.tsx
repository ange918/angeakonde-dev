"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import type { FC, SVGProps } from "react";

type HeroIcon = FC<SVGProps<SVGSVGElement>>;

const contactItems: {
  Icon: HeroIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    Icon: MapPinIcon,
    label: "Adresse",
    value: "Cotonou, Littoral\nAbomey-Calavi, Bidosessi\nBénin",
  },
  {
    Icon: EnvelopeIcon,
    label: "Email",
    value: "akondejunior18@gmail.com",
    href: "mailto:akondejunior18@gmail.com",
  },
  {
    Icon: PhoneIcon,
    label: "Téléphone",
    value: "+229 41 48 37 15",
    href: "tel:+22941483715",
  },
  {
    Icon: ClockIcon,
    label: "Disponibilité",
    value: "Lun – Ven : 8h00 – 20h00 (GMT+1)\nWeekend : sur rendez-vous",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Address() {
  return (
    <section id="address" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase" style={{ color: "#00FF66" }}>
            Adresse
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Où me trouver.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="card rounded-xl p-5 flex items-start gap-4"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div
                  className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(0,255,102,0.08)", border: "1px solid rgba(0,255,102,0.15)" }}
                >
                  <item.Icon style={{ color: "#00FF66", width: 18, height: 18 }} />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium" style={{ color: "#00FF66" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-relaxed hover:text-[#00FF66] transition-colors whitespace-pre-line"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="card overflow-hidden rounded-2xl lg:col-span-3"
          >
            <div className="relative h-full min-h-[400px]">
              <iframe
                title="Carte Cotonou Bénin"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3212%2C6.3404%2C2.4654%2C6.4254&layer=mapnik&marker=6.3829%2C2.3933"
                className="absolute inset-0 h-full w-full"
                style={{
                  border: "none",
                  filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.95)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ border: "1px solid rgba(0,255,102,0.15)" }}
              />
            </div>
            <div
              className="flex items-center justify-between px-5 py-3 text-xs"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}
            >
              <span>Cotonou, Bénin · Afrique de l&apos;Ouest</span>
              <a
                href="https://www.openstreetmap.org/?mlat=6.3829&mlon=2.3933#map=13/6.3829/2.3933"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#00FF66]"
              >
                Ouvrir dans OpenStreetMap ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
