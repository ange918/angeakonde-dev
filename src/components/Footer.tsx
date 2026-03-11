import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="muted text-xs">
          Copyright © {new Date().getFullYear()} Ange Akonde (BigSixteen). All
          rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a
            className="glass rounded-full px-4 py-2 text-xs text-white/80 hover:text-white"
            href="mailto:akondejunior18@gmail.com"
          >
            Email
          </a>
          <a
            className="glass rounded-full px-4 py-2 text-xs text-white/80 hover:text-white"
            href="tel:+22941483715"
          >
            Call
          </a>
          <a
            className="glass rounded-full px-4 py-2 text-xs text-white/80 hover:text-white"
            href="https://github.com/ange918"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="glass rounded-full px-4 py-2 text-xs text-white/80 hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </Container>
    </footer>
  );
}

