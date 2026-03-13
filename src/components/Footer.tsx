export default function Footer() {
  return (
    <footer
      className="border-t px-5 py-10"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © BigSixteen 2026. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="https://github.com/ange918"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "#00FF66" }}
          />
          Cotonou, Benin
        </div>
      </div>
    </footer>
  );
}
