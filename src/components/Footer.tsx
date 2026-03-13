export default function Footer() {
  return (
    <footer className="border-t px-5 py-12" style={{ borderColor: "var(--c-border-sm)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-base font-medium" style={{ color: "var(--c-subtle)" }}>
          © BigSixteen 2026. Tous droits réservés.
        </div>
        <div className="flex items-center gap-6 text-base font-medium" style={{ color: "var(--c-faint)" }}>
          <a href="#about" className="transition-colors hover:text-[#FF6B00]">À propos</a>
          <a href="#projects" className="transition-colors hover:text-[#FF6B00]">Projets</a>
          <a href="#contact" className="transition-colors hover:text-[#FF6B00]">Contact</a>
          <a href="https://github.com/ange918" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#FF6B00]">
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-2 text-base font-medium" style={{ color: "var(--c-subtle)" }}>
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#FF6B00" }} />
          Cotonou, Bénin
        </div>
      </div>
    </footer>
  );
}
