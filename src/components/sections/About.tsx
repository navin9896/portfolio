import Section from "../common/Section";
import Reveal from "../common/Reveal";

export default function About() {
  return (
    <div className="py-16 sm:py-20">
      <Section title="About" eyebrow="WHO I AM">
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            <Reveal delayMs={0}>
              <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">
                I am a 4th year B.Tech student passionate about AI, ML, and Web
                Development. I enjoy turning messy problems into clean
                solutions, and building real-world systems that people can use.
              </p>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-900/30 p-5">
                <h3 className="text-sm font-semibold tracking-wide text-indigo-200/90">
                  What I focus on
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-slate-800/60">
                    <p className="text-sm font-semibold">Problem Solving</p>
                    <p className="mt-1 text-sm text-slate-300/80">
                      Structured thinking, measurable outcomes.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-slate-800/60">
                    <p className="text-sm font-semibold">Real Projects</p>
                    <p className="mt-1 text-sm text-slate-300/80">
                      End-to-end work from data to delivery.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Full Stack", "Data Analysis", "Clean UI"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-200/90 ring-1 ring-slate-800/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={80}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="aspect-square w-full rounded-[2.25rem] bg-gradient-to-br from-indigo-500/20 via-slate-900/20 to-cyan-400/10 p-1 ring-1 ring-slate-800/70">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.1rem] bg-slate-950/60 p-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-500/15 ring-1 ring-indigo-300/20">
                    <span className="text-3xl font-bold text-indigo-200">NK</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold tracking-wide">
                    Profile Image
                  </p>
                  <p className="mt-1 text-sm text-slate-300/80">
                    Add your photo here
                  </p>
                  <div className="mt-6 w-full rounded-2xl border border-slate-800/70 bg-slate-900/30 p-4">
                    <p className="text-xs font-semibold tracking-widest text-slate-300/80">
                      EXPERIENCE
                    </p>
                    <p className="mt-2 text-sm font-semibold text-indigo-200/90">
                      Building with curiosity
                    </p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800/60">
                      <div className="h-full w-[72%] rounded-full bg-indigo-500/80" />
                    </div>
                    <p className="mt-2 text-xs text-slate-300/80">
                      Continuous learning mindset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

