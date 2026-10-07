import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSection } from "@/lib/portfolio-content";
import type { CaseStudy } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

const rowKeys = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "jtbd", label: "JTBD" },
  { key: "prd", label: "PRD" },
] as const;

function getStatusLabel(status: CaseStudy["status"]) {
  if (status === "shipped") return "Shipped";
  if (status === "pilot") return "Prototype / Pilot";
  return "Concept / Exploration";
}

function isTargetMetric(metric: string) {
  return metric.toLowerCase().startsWith("target:");
}

export function CaseStudies() {
  const caseStudies = useSection("caseStudies");
  const [open, setOpen] = useState<string | null>(caseStudies[0]?.slug ?? null);

  return (
    <section id="case-studies" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">
              Deep Dives & Case Studies
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Case Studies
            </h2>
            <p className="mt-2 text-muted text-sm md:text-base">
              Problem → Research → JTBD → PRD → Evidence → Lessons.
            </p>
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-muted">
            {caseStudies.length} studies
          </div>
        </div>

        <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
          {caseStudies.map((c, i) => {
            const isOpen = open === c.slug;
            return (
              <Reveal key={c.slug || i} delay={i * 0.03}>
                <button
                  onClick={() => setOpen(isOpen ? null : c.slug)}
                  className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between gap-6 hover:bg-muted/5 transition-colors focus-visible:outline-2 focus-visible:outline-brand"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <span className="font-mono text-xs text-muted tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-display text-xl md:text-2xl font-medium truncate">
                          {c.name}
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider ${
                            c.status === "shipped" || c.status === "pilot"
                              ? "border border-brand/40 bg-brand/10 text-brand"
                              : "border border-border bg-muted/10 text-muted"
                          }`}
                        >
                          {getStatusLabel(c.status)}
                        </span>
                      </div>
                      <div className="text-xs text-muted mt-0.5">{c.tag}</div>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className={`shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        {/* Notion Embed Document Render (excluded for kartify to prevent SmartShare content mismatch) */}
                        {c.notionEmbed && c.slug !== "kartify" ? (
                          <div className="space-y-6">
                            <div
                              className="w-full overflow-hidden rounded-xl border border-border bg-[#0d0d0d] text-ink p-4 shadow-xl min-h-[500px]"
                              dangerouslySetInnerHTML={{ __html: c.notionEmbed }}
                            />
                            {c.lessons && (
                              <div className="rounded-xl border border-border p-4 bg-muted/5">
                                <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1">
                                  Key Learnings & Takeaways
                                </div>
                                <p className="text-sm leading-relaxed text-ink/80 italic">
                                  {c.lessons}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          /* Standard Text Layout Fallback */
                          <div className="grid gap-8 md:grid-cols-12">
                            <div className="md:col-span-8 grid gap-6">
                              {rowKeys.map((r) =>
                                c[r.key] ? (
                                  <div key={r.key}>
                                    <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1.5">
                                      {r.label}
                                    </div>
                                    <p className="text-sm md:text-[15px] leading-relaxed text-ink/80">
                                      {c[r.key]}
                                    </p>
                                  </div>
                                ) : null,
                              )}
                            </div>
                            <aside className="md:col-span-4 space-y-6">
                              {c.metrics && c.metrics.length > 0 && (
                                <div className="space-y-4">
                                  {(() => {
                                    const observed = c.metrics.filter((m) => !isTargetMetric(m));
                                    const targets = c.metrics.filter((m) => isTargetMetric(m));
                                    return (
                                      <>
                                        {observed.length > 0 && (
                                          <div>
                                            <div className="text-[11px] font-mono uppercase tracking-widest text-brand mb-2 flex items-center gap-1.5">
                                              <span className="size-1.5 rounded-full bg-brand" />
                                              Observed / Pilot Signals
                                            </div>
                                            <ul className="space-y-2">
                                              {observed.map((m) => (
                                                <li
                                                  key={m}
                                                  className="text-xs md:text-sm border-l-2 border-brand/70 pl-3 py-0.5 text-ink/90 leading-relaxed"
                                                >
                                                  {m}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                        {targets.length > 0 && (
                                          <div>
                                            <div className="text-[11px] font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-1.5">
                                              <span className="size-1.5 rounded-full bg-muted/60" />
                                              Success Targets
                                            </div>
                                            <ul className="space-y-2">
                                              {targets.map((m) => (
                                                <li
                                                  key={m}
                                                  className="text-xs md:text-sm border-l-2 border-muted/30 pl-3 py-0.5 text-muted leading-relaxed"
                                                >
                                                  {m}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                      </>
                                    );
                                  })()}
                                </div>
                              )}
                              {c.lessons && (
                                <div>
                                  <div className="text-xs font-mono uppercase tracking-widest text-muted mb-2">
                                    Lessons
                                  </div>
                                  <p className="text-sm leading-relaxed text-ink/70 italic">
                                    {c.lessons}
                                  </p>
                                </div>
                              )}
                            </aside>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
