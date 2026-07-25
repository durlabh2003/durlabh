import { useSection } from "@/lib/portfolio-content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function About() {
  const about = useSection("about");
  return (
    <section id="about" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-muted">
                About
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-ink/80 text-pretty md:text-xl">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
            <div className="glass-panel h-full rounded-3xl p-8 transition-all hover:shadow-xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted">
                  {s.label}
                </div>
                <div className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
