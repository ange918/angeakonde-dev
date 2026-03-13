"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Address() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="address" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              {
                icon: "📍",
                label: "Adresse",
                value: "Cotonou, Littoral\nAbomey-Calavi, Bidosessi\nBénin",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "akondejunior18@gmail.com",
                href: "mailto:akondejunior18@gmail.com",
              },
              {
                icon: "📞",
                label: "Téléphone",
                value: "+229 41 48 37 15",
                href: "tel:+22941483715",
              },
              {
                icon: "🕐",
                label: "Disponibilité",
                value: "Lun – Ven : 8h00 – 20h00 (GMT+1)\nWeekend : sur rendez-vous",
              },
            ].map((item) => (
              <div key={item.label} className="card rounded-xl p-5 flex items-start gap-4">
                <span className="text-xl">{item.icon}</span>
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
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
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
