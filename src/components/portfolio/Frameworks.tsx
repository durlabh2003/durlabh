import { useState } from "react";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

export function Frameworks() {
  const frameworks = useSection("frameworks");
  const [active, setActive] = useState(0);

  return (
    <section id="frameworks" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              Framework Library
            </h2>
            <p className="mt-4 text-muted max-w-sm">
              The mental models I lean on to decide what to build, what to cut and
              what to test next.
            </p>
            <Reveal>
              <div className="mt-8 rounded-xl border border-border bg-muted/5 p-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand mb-2">
                  {frameworks[active].tag}
                </div>
                <div className="font-display text-2xl font-medium mb-2">
                  {frameworks[active].name}
                </div>
                <p className="text-sm leading-relaxed text-ink/80">
                  {frameworks[active].desc}
                </p>
                {frameworks[active].usedIn && (
                  <div className="mt-4 text-[11px] font-mono text-muted">
                    Used in:{" "}
                    <a
                      href={`#case-studies`}
                      className="text-brand hover:underline"
                    >
                      {frameworks[active].usedIn} case study
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {frameworks.map((f, i) => (
                <button
                  key={f.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`bg-surface p-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-brand ${
                    active === i ? "bg-muted/5" : "hover:bg-muted/5"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted mb-3">
                    {f.tag}
                  </div>
                  <div className="font-display text-lg font-medium">{f.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
