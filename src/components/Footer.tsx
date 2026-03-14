export default function Footer() {
  return (
    <footer className="border-t px-5 py-10" style={{ borderColor: "var(--c-border-sm)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-base font-medium" style={{ color: "var(--c-subtle)" }}>
          © BigSixteen 2026. Tous droits réservés.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-base font-medium sm:gap-6" style={{ color: "var(--c-faint)" }}>
          <a href="#about" className="transition-colors hover:text-[#4AFF00]">À propos</a>
          <a href="#projects" className="transition-colors hover:text-[#4AFF00]">Projets</a>
          <a href="#contact" className="transition-colors hover:text-[#4AFF00]">Contact</a>
          <a href="https://github.com/ange918" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#4AFF00]">
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-2 text-base font-medium" style={{ color: "var(--c-subtle)" }}>
          <span className="inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: "#4AFF00" }} />
          Cotonou, Bénin
        </div>
      </div>
    </footer>
  );
}
