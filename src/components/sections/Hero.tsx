import Button from "../common/Button";
import Reveal from "../common/Reveal";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] items-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal delayMs={0}>
                <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200/90 ring-1 ring-slate-800/70">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_0_4px_rgba(99,102,241,0.25)]" />
                  Available for AI/ML + Full Stack work
                </p>
              </Reveal>

              <Reveal delayMs={120}>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Navin Kumar
                </h1>
              </Reveal>

              <Reveal delayMs={220}>
                <p className="mt-3 text-balance text-lg font-medium text-indigo-200/90 sm:text-xl">
                  AI/ML Engineer | Full Stack Developer
                </p>
              </Reveal>

              <Reveal delayMs={320}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
                  Building intelligent systems and modern web applications
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Reveal delayMs={420}>
                  <Button href="#projects">View Projects</Button>
                </Reveal>
                <Reveal delayMs={520}>
                  <Button
                    variant="secondary"
                    href="/navin_cv_sde.pdf"
                    download
                    className="ring-indigo-400/20"
                  >
                    Download Resume
                  </Button>
                </Reveal>
              </div>
            </div>

            <Reveal delayMs={200}>
              <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl bg-slate-900/40 p-1 ring-1 ring-slate-800/70 sm:max-w-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-400/10" />
                <div className="relative flex h-full flex-col justify-between rounded-[calc(1.5rem-1px)] bg-slate-950/60 p-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-slate-300/80">
                      HIGHLIGHTS
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
                        <p className="text-sm font-semibold">Problem Solving</p>
                        <p className="mt-1 text-sm text-slate-300/80">
                          From data to dashboards with a focus on real impact.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
                        <p className="text-sm font-semibold">Modern Web</p>
                        <p className="mt-1 text-sm text-slate-300/80">
                          React experiences designed for performance and clarity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-slate-300/80">
                        CURRENT FOCUS
                      </p>
                      <p className="mt-1 text-sm font-semibold text-indigo-200">
                        AI-driven Products + Full Stack
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/20">
                      <svg
                        className="h-6 w-6 text-indigo-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

