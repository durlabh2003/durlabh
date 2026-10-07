import { useState } from "react";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";
import { ChevronRight } from "lucide-react";

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
            <p className="mt-4 text-muted max-w-sm text-sm md:text-base">
              The mental models I lean on to decide what to build, what to cut and what to test
              next.
            </p>
            <Reveal>
              <div className="mt-8 rounded-xl border border-border bg-muted/5 p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-brand mb-2">
                  {frameworks[active].tag}
                </div>
                <div className="font-display text-2xl font-medium mb-2">
                  {frameworks[active].name}
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{frameworks[active].desc}</p>
                {frameworks[active].usedIn && (
                  <div className="mt-4 text-xs font-mono text-muted">
                    Applied in:{" "}
                    <a href="#work" className="text-brand font-medium hover:underline">
                      {frameworks[active].usedIn} case study →
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {frameworks.map((f, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={f.name}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative rounded-xl border p-6 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand flex flex-col justify-between ${
                      isActive
                        ? "border-brand bg-brand/10 text-ink shadow-md shadow-brand/10"
                        : "border-border bg-surface text-ink/80 hover:border-border/80 hover:bg-elevated/40"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-muted mb-3 flex items-center justify-between">
                        <span className={isActive ? "text-brand font-semibold" : "text-muted"}>
                          {f.tag}
                        </span>
                        <ChevronRight
                          className={`size-3.5 transition-transform ${
                            isActive
                              ? "text-brand translate-x-0.5"
                              : "text-muted/40 group-hover:text-muted group-hover:translate-x-0.5"
                          }`}
                        />
                      </div>
                      <div className="font-display text-lg font-medium tracking-tight">
                        {f.name}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? "text-brand font-semibold" : "text-muted"}>
                        {isActive ? "● Active" : "Select"}
                      </span>
                      <span
                        className={`transition-transform ${isActive ? "text-brand translate-x-0.5" : "text-muted group-hover:translate-x-0.5"}`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
