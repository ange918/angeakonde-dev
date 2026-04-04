"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CTAWhatsApp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackWhatsAppClick();
    const encodedName = encodeURIComponent(name);
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/22965291352?text=Bonjour+Ange,+je+suis+${encodedName}+et+je+voudrais+${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cta-whatsapp" className="py-24 px-5">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: "rgba(74,255,0,0.07)" }}
          />

          <div className="relative z-10">
            <h2
              className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Prêt à construire avec moi ?
            </h2>
            <p
              className="mb-8 text-lg leading-relaxed"
              style={{ color: "var(--c-muted)", fontFamily: "var(--font-inter)" }}
            >
              Décrivez votre projet en quelques mots. Je réponds sous 24h.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span
                  className="text-base font-medium"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}
                >
                  Nom
                </span>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 rounded-xl border bg-white/5 px-4 text-base text-white placeholder-white/25 transition-all outline-none focus:border-[#4AFF00]"
                  style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: "var(--font-inter)" }}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span
                  className="text-base font-medium"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter)" }}
                >
                  Message
                </span>
                <textarea
                  rows={3}
                  placeholder="Décrivez votre projet..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="resize-none rounded-xl border bg-white/5 px-4 py-3 text-base text-white placeholder-white/25 transition-all leading-relaxed outline-none focus:border-[#4AFF00]"
                  style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: "var(--font-inter)" }}
                />
              </label>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ background: "#4AFF00", fontFamily: "var(--font-inter)" }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Envoyer sur WhatsApp →
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
