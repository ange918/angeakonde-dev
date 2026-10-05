import { Container } from "@/components/Container";

const logos = ["Code Capital", "God's Plan", "Susuni Lab", "Malt Scotch"];

export function TrustedStrip() {
  return (
    <section className="mt-4 pb-4">
      <Container>
        <div className="glow-ring glass flex flex-col items-center justify-between gap-4 rounded-2xl px-5 py-4 text-xs sm:flex-row sm:px-6">
          <div className="text-center sm:text-left">
            <div className="text-white/70">Trusted by teams in</div>
            <div className="muted mt-1">
              Éducation, sécurité, labs, fintech & plus encore.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {logos.map((name) => (
              <span
                key={name}
                className="glass rounded-full px-3 py-1 text-[11px] text-white/75"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

