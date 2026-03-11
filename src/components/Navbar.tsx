"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-wide text-white/90"
        >
          <span className="text-fuchsia-300">ANGE</span>{" "}
          <span className="text-white/80">AKONDE</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#blog"
            className="glow-ring glass hidden rounded-full px-4 py-2 text-sm text-white/85 sm:inline-flex"
          >
            Blog
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 sm:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
          />
          <aside className="fixed left-3 top-3 z-50 w-[280px] overflow-hidden rounded-2xl">
            <div className="glow-ring glass rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">
                  Portfolio
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="mt-4 grid gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <a
                  className="glass rounded-xl px-3 py-2 text-center text-xs text-white/80"
                  href="https://github.com/ange918"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>
                <a
                  className="glass rounded-xl px-3 py-2 text-center text-xs text-white/80"
                  href="#"
                >
                  IN
                </a>
                <a
                  className="glass rounded-xl px-3 py-2 text-center text-xs text-white/80"
                  href="#"
                >
                  X
                </a>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}

