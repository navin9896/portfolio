import Section from "../common/Section";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <div className="py-16 sm:py-20">
      <Section title="Projects" eyebrow="SELECTED WORK">
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delayMs={idx * 90}>
              <article className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900/45">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute -left-24 top-[-24px] h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
                  <div className="absolute -right-24 bottom-[-24px] h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
                </div>

                <div className="relative">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                    {p.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold tracking-widest text-slate-300/70">
                      TECH STACK
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-200/85 ring-1 ring-slate-800/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Button
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                    <Button
                      href={p.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  </div>

                  <p className="mt-4 text-xs text-slate-400/80">
                    Live demo is a placeholder link.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

