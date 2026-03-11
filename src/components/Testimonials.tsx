type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const items: Testimonial[] = [
  {
    quote:
      "Collaboration exceptionnelle. Il a transformé ma vision en une plateforme élégante et moderne.",
    name: "Axel Merryl",
    role: "Artiste",
  },
  {
    quote:
      "Le niveau de détail et la qualité du code sont impressionnants. Travail propre et structuré.",
    name: "Gauthier O.",
    role: "Architecte",
  },
  {
    quote:
      "À l’écoute, réactif, force de proposition. Il comprend vite et exécute avec précision.",
    name: "Merveille S.",
    role: "Entrepreneure",
  },
  {
    quote:
      "Un atout majeur pour l’équipe : efficace, moderne, rigoureux, et orienté résultats.",
    name: "Code Capital Team",
    role: "Fintech",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-fuchsia-300">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((t, idx) => (
        <div
          key={idx}
          className="glow-ring glass relative overflow-hidden rounded-2xl p-6"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-[50px]" />
          <div className="relative">
            <div className="text-3xl text-white/30">“</div>
            <p className="muted mt-1 text-sm leading-6">{t.quote}</p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  {t.name}
                </div>
                <div className="muted text-xs">{t.role}</div>
              </div>
              <Stars />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

