import { useMemo, useState } from "react";
import Button from "../common/Button";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(() => navLinks, []);

  const scrollToId = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Go to home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-300/20 transition-transform group-hover:scale-[1.03]">
              <span className="text-sm font-bold text-indigo-200">N</span>
            </span>
            <span className="text-sm font-semibold tracking-wide sm:text-base">
              Navin Kumar
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollToId(l.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200/80 transition-colors hover:bg-slate-800/60 hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="secondary"
              className="px-3 py-2 text-sm"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
            >
              Projects
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/60 ring-1 ring-slate-800/70 transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="h-5 w-5 text-slate-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-2 shadow-glow">
                <div className="grid gap-1">
                  {links.map((l, idx) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => scrollToId(l.id)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-100/90 transition hover:bg-slate-800/60"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <span>{l.label}</span>
                      <span className="text-indigo-300">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

