import Container from "../common/Container";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin-handle" },
  { label: "GitHub", href: "https://github.com/your-github-handle" }
] as const;

function SocialIcon({ label }: { label: string }) {
  // Simple inline SVG icons (no external dependencies).
  const common = "h-5 w-5";
  if (label === "GitHub") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.59 2 12.26c0 4.53 2.865 8.37 6.839 9.73.5.095.682-.224.682-.5 0-.245-.009-.892-.014-1.752-2.782.616-3.369-1.37-3.369-1.37-.454-1.175-1.11-1.487-1.11-1.487-.907-.64.069-.627.069-.627 1.003.072 1.531 1.058 1.531 1.058.892 1.563 2.341 1.113 2.91.851.091-.662.35-1.113.636-1.368-2.221-.263-4.555-1.145-4.555-5.092 0-1.126.39-2.045 1.029-2.764-.103-.263-.446-1.326.098-2.762 0 0 .84-.276 2.75 1.053A9.33 9.33 0 0 1 12 6.844a9.3 9.3 0 0 1 2.5.347c1.909-1.329 2.747-1.053 2.747-1.053.545 1.436.202 2.499.099 2.762.64.719 1.028 1.638 1.028 2.764 0 3.957-2.338 4.825-4.566 5.084.359.316.679.938.679 1.89 0 1.364-.012 2.463-.012 2.802 0 .278.18.599.688.498 3.967-1.363 6.826-5.197 6.826-9.724C22 6.59 17.523 2 12 2Z" />
      </svg>
    );
  }

  // LinkedIn icon
  return (
    <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V23h-4V8.5Zm8 0h3.84v1.9h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.93-2.86 3.94V23h-4V8.5Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/40">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300/80">
            © {year} Navin Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-800/70 bg-slate-900/30 p-2 transition hover:border-indigo-400/60 hover:bg-slate-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label={s.label}
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

