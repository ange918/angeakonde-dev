export function ContactCard() {
  return (
    <div className="glow-ring glass grid gap-5 rounded-2xl p-6 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="text-sm font-semibold text-white/90">Contact</div>
        <p className="muted mt-2 text-sm leading-6">
          Objectif: attirer des clients freelance et trouver un job CDI (remote
          worldwide). Dis‑moi ce que tu veux construire.
        </p>

        <div className="mt-5 space-y-2 text-sm text-white/80">
          <div>
            <span className="muted">Email:</span>{" "}
            <a
              className="hover:text-white"
              href="mailto:akondejunior18@gmail.com"
            >
              akondejunior18@gmail.com
            </a>
          </div>
          <div>
            <span className="muted">Téléphone:</span>{" "}
            <a className="hover:text-white" href="tel:+22941483715">
              +229 41 48 37 15
            </a>
          </div>
          <div>
            <span className="muted">Localisation:</span> Cotonou, Littoral —
            Bénin (Abomey‑Calavi, Bidosessi)
          </div>
        </div>
      </div>

      <form className="lg:col-span-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="muted text-xs">Name</span>
            <input
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/40 focus:ring-2 focus:ring-fuchsia-500/20"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2">
            <span className="muted text-xs">Email</span>
            <input
              type="email"
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/40 focus:ring-2 focus:ring-fuchsia-500/20"
              placeholder="Email address"
            />
          </label>
        </div>

        <label className="mt-3 grid gap-2">
          <span className="muted text-xs">Message</span>
          <textarea
            rows={4}
            className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-fuchsia-300/40 focus:ring-2 focus:ring-fuchsia-500/20"
            placeholder="Tell me about your project..."
          />
        </label>

        <div className="mt-4 flex items-center justify-end">
          <button
            type="button"
            className="primary-btn inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white transition hover:brightness-110"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

