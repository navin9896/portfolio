import Section from "../common/Section";
import Reveal from "../common/Reveal";
import { skills } from "../../data/skills";

function CategoryIcon({ category }: { category: string }) {
  const common = "h-6 w-6";
  switch (category) {
    case "Programming":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 9l-3 3 3 3" />
          <path d="M16 9l3 3-3 3" />
          <path d="M14 5l-4 14" />
        </svg>
      );
    case "Web":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 6-4 10-9 10S3 16 3 10 7 0 12 0s9 4 9 10Z" opacity="0" />
          <path d="M3 12h18" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
          <path d="M7 6V18" />
          <path d="M17 6V18" />
        </svg>
      );
    case "Tools":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 6.5l3 3-9 9H5.5v-3z" />
          <path d="M7 7l2 2" />
          <path d="M16 2l6 6" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l2.5 7H22l-6 4 2 7-6-4-6 4 2-7-6-4h7.5z" />
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <div className="py-16 sm:py-20">
      <Section title="Skills" eyebrow="WHAT I USE">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <Reveal key={s.category} delayMs={idx * 80}>
              <div className="group rounded-3xl border border-slate-800/70 bg-slate-900/30 p-5 transition-transform duration-500 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900/45">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/20 text-indigo-200/90 transition group-hover:bg-indigo-500/25">
                      <CategoryIcon category={s.category} />
                    </span>
                    <h3 className="text-sm font-semibold tracking-wide text-slate-50/95">
                      {s.category}
                    </h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-slate-950/40 px-3 py-2 text-xs font-semibold text-slate-200/85 ring-1 ring-slate-800/60 transition group-hover:ring-indigo-400/30"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

