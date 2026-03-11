import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section id="home" className="relative pt-10 sm:pt-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-[90px]" />
            <div className="absolute left-[10%] top-[30%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[80px]" />
            <div className="absolute right-[8%] top-[55%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[90px]" />
          </div>

          <div className="relative flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <div className="muted text-xs tracking-[0.38em] uppercase">
                BigSixteen Studio
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build{" "}
                <span className="text-fuchsia-300">modern web apps</span>{" "}
                powered by AI.
              </h1>
              <p className="muted mt-5 text-sm leading-6 sm:text-base">
                Développeur Full‑Stack & IA basé à Cotonou. J’aide les
                entreprises à lancer des produits digitaux premium, rapides et
                bien pensés pour le business.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-stretch">
                <a
                  href="#contact"
                  className="primary-btn inline-flex h-11 items-center justify-center rounded-full px-7 text-sm font-medium text-white transition hover:brightness-110"
                >
                  Réserver un appel
                </a>
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Voir les créations
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 lg:justify-start">
                <span>+30 projets livrés</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>Stack: JS, React, Node, Laravel, IA</span>
              </div>
            </div>

            <div className="glow-ring glass relative mt-4 w-full max-w-md rounded-3xl px-6 py-6 text-left lg:mt-0">
              <div className="muted text-xs uppercase tracking-[0.18em]">
                Snapshot
              </div>
              <div className="mt-3 text-sm font-semibold text-white/90">
                Ange Akonde | Full‑Stack & IA
              </div>
              <p className="muted mt-2 text-xs leading-5">
                Futurcraft Institut — 2e année en ingénierie logicielle. En
                route vers JRC Digit, ma propre agence digitale.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                <div className="glass rounded-2xl px-3 py-3">
                  <div className="text-xs text-white/70">Clients cibles</div>
                  <div className="mt-1 text-sm font-semibold">
                    PME & agences
                  </div>
                </div>
                <div className="glass rounded-2xl px-3 py-3">
                  <div className="text-xs text-white/70">Offres</div>
                  <div className="mt-1 text-sm font-semibold">
                    Sites, apps, IA
                  </div>
                </div>
                <div className="glass rounded-2xl px-3 py-3">
                  <div className="text-xs text-white/70">Mode</div>
                  <div className="mt-1 text-sm font-semibold">
                    Freelance & CDI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

