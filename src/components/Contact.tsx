"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: "#4AFF00" }}>
            Contact
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Construisons quelque chose.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <p className="mb-8 text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Je suis ouvert aux projets freelance et aux postes full-time en remote. Que vous ayez un brief précis ou juste une idée — contactez-moi et parlons-en.
            </p>

            <div className="mb-6 space-y-5 text-base">
              <div>
                <p className="mb-1 text-sm font-semibold tracking-wide uppercase" style={{ color: "#4AFF00" }}>Email</p>
                <a href="mailto:akondejunior18@gmail.com" className="text-base break-all text-white/70 hover:text-white transition-colors sm:text-lg">
                  akondejunior18@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold tracking-wide uppercase" style={{ color: "#4AFF00" }}>Téléphone</p>
                <a href="tel:+22941483715" className="text-lg text-white/70 hover:text-white transition-colors">
                  +229 41 48 37 15
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold tracking-wide uppercase" style={{ color: "#4AFF00" }}>Localisation</p>
                <span className="text-lg text-white/70">Cotonou, Bénin</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ange918"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-base font-medium transition-all duration-200 hover:border-[#4AFF00] hover:text-[#4AFF00]"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ange-akonde"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-base font-medium transition-all duration-200 hover:border-[#4AFF00] hover:text-[#4AFF00]"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="card rounded-2xl p-5 sm:p-8 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Nom</span>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="h-12 rounded-xl border bg-white/5 px-4 text-base text-white placeholder-white/25 transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Email</span>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="h-12 rounded-xl border bg-white/5 px-4 text-base text-white placeholder-white/25 transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-2">
              <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Message</span>
              <textarea
                rows={5}
                placeholder="Parlez-moi de votre projet..."
                className="resize-none rounded-xl border bg-white/5 px-4 py-3 text-base text-white placeholder-white/25 transition-all leading-relaxed"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              />
            </label>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center rounded-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "#4AFF00" }}
              >
                Envoyer →
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
