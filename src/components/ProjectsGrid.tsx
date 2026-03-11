type Project = {
  title: string;
  desc: string;
  tag: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "God's Plan",
    desc: "Centre de formation — landing + contenus.",
    tag: "Éducation",
    href: "https://god-plan.vercel.app/",
  },
  {
    title: "Futur Certy",
    desc: "Sécurité — plateforme & pages marketing.",
    tag: "Sécurité",
    href: "https://futur-certy-nine.vercel.app/",
  },
  {
    title: "Susuni Lab",
    desc: "Laboratoire — vitrine & présentation services.",
    tag: "Web",
    href: "https://susunilab.com",
  },
  {
    title: "Malt Scotch",
    desc: "Template premium — UI dark futuriste.",
    tag: "Template",
    href: "https://scotch-malt.vercel.app/",
  },
  {
    title: "Code Capital",
    desc: "Progiciel — produit Fintech & outils internes.",
    tag: "Fintech",
    href: "https://codecapital.net",
  },
  {
    title: "Model academy management",
    desc: "Gestion d’académie — admin & opérations.",
    tag: "Système",
    href: "https://modelacademy-management.com/",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.title}
          className="glow-ring glass group relative overflow-hidden rounded-2xl p-5 transition hover:translate-y-[-2px]"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute left-1/2 top-[-140px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[70px]" />
          </div>

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white/90">
                {p.title}
              </div>
              <div className="muted mt-1 text-sm leading-6">{p.desc}</div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {p.tag}
            </span>
          </div>

          <div className="relative mt-5 flex items-center justify-between">
            <div className="muted text-xs">View project</div>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-xs font-medium text-white/85 transition hover:bg-white/10"
            >
              Visit
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

