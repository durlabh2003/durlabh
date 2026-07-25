import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

export function Experience() {
  const experience = useSection("experience");
  const startups = useSection("startups");
  const skills = useSection("skills");
  return (
    <section id="experience" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-muted">
              Career Trajectory
            </h2>

            <div className="mt-12 space-y-14">
              {experience.map((e) => (
                <Reveal key={e.company}>
                  <div className="relative pl-8">
                    <div className="absolute top-1 left-0 h-full w-px bg-border" />
                    <div
                      className={`absolute top-1.5 -left-[3px] size-2 rounded-full ${
                        e.active ? "bg-brand" : "bg-muted"
                      }`}
                    />
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div className="min-w-0">
                        <h3 className="text-xl font-medium">{e.company}</h3>
                        <p className="text-sm text-muted">{e.role}</p>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/80">
                      {e.summary}
                    </p>
                    <ul className="mt-4 grid gap-1.5 max-w-xl">
                      {e.highlights.map((h) => (
                        <li key={h} className="text-xs text-muted flex gap-2">
                          <span className="text-brand">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <h2 className="mt-24 font-display text-sm font-bold uppercase tracking-[0.2em] text-muted">
              Founder Track
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {startups.map((s) => (
                <Reveal key={s.name}>
                  <div className="border border-border rounded-xl p-6 h-full bg-surface hover:border-ink transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium">{s.name}</h3>
                        <div className="text-xs text-muted mt-0.5">{s.tag}</div>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand shrink-0">
                        {s.role}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink/80">
                      {s.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.responsibilities.map((r) => (
                        <span
                          key={r}
                          className="text-[10px] rounded border border-border px-2 py-0.5 text-muted"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-border bg-muted/5 p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em]">
                Skills
              </h3>
              <div className="mt-6 space-y-6">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2">
                      {group}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] rounded-md bg-surface border border-border px-2 py-0.5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
