type Tech = {
  name: string;
  subtitle: string;
  accent: "fuchsia" | "cyan" | "indigo";
};

const techs: Tech[] = [
  { name: "Figma", subtitle: "UI Design", accent: "cyan" },
  { name: "Adobe XD", subtitle: "Wireframes", accent: "fuchsia" },
  { name: "Sketch", subtitle: "Prototypes", accent: "indigo" },
  { name: "Illustrator", subtitle: "Vectors", accent: "fuchsia" },
  { name: "React", subtitle: "Web Apps", accent: "cyan" },
  { name: "Next.js", subtitle: "Production", accent: "indigo" },
];

function AccentGlow({ accent }: { accent: Tech["accent"] }) {
  const cls =
    accent === "cyan"
      ? "bg-cyan-400/20"
      : accent === "indigo"
        ? "bg-indigo-400/20"
        : "bg-fuchsia-500/20";
  return (
    <div
      className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[40px] ${cls}`}
    />
  );
}

export function TechGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techs.map((t) => (
        <div
          key={t.name}
          className="glow-ring glass group relative overflow-hidden rounded-2xl p-5 transition hover:translate-y-[-2px]"
        >
          <AccentGlow accent={t.accent} />
          <div className="relative">
            <div className="text-sm font-semibold text-white/90">{t.name}</div>
            <div className="muted mt-1 text-sm">{t.subtitle}</div>
            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              View project
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

