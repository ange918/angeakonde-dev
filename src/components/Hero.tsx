import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section id="home" className="relative pt-10 sm:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-[90px]" />
            <div className="absolute left-[10%] top-[30%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[80px]" />
            <div className="absolute right-[8%] top-[55%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[90px]" />
          </div>

          <div className="relative flex flex-col items-center gap-8 px-6 py-16 text-center sm:px-10 sm:py-20">
            <div className="muted text-xs tracking-[0.38em] uppercase">
              HERO
            </div>

            <div className="glow-ring glass w-full max-w-2xl rounded-3xl px-7 py-8 sm:px-10 sm:py-10">
              <div className="text-3xl font-semibold tracking-tight sm:text-5xl">
                ANGE AKONDE
              </div>
              <div className="mt-2 text-base text-white/80 sm:text-xl">
                Développeur Full‑Stack & IA
              </div>
              <p className="muted mx-auto mt-4 max-w-xl text-sm leading-6 sm:text-base">
                J’aide les entreprises et porteurs de projets à mettre en place
                des sites internes modernes et une stratégie digitale efficace.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="primary-btn inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium text-white transition hover:brightness-110"
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="muted text-sm">
              BigSixteen • Cotonou, Littoral — Bénin (Abomey‑Calavi)
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

