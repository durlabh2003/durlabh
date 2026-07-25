import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

export function Lab() {
  const aiLab = useSection("aiLab");
  return (
    <section id="lab" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              The Lab
            </h2>
            <p className="mt-2 text-muted">
              AI experiments, prototypes and workflow tools I build for myself.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiLab.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-ink">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-8 rounded-lg border border-border grid place-items-center text-[10px] font-mono text-muted group-hover:border-brand group-hover:text-brand transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                    Experiment
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium">{l.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{l.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
