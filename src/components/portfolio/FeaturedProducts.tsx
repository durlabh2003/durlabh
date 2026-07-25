import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export function FeaturedProducts() {
  const featuredProducts = useSection("featuredProducts");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="work" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <Reveal>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-widest text-brand">
                Featured Products
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                Shipped Products
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-2 text-sm text-muted">
                Shipped and prototyped from 0 to 1 — click any card to inspect.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-muted">
              2022 — Present
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <button
                onClick={() => setOpenIdx(i)}
                className="glass-panel group relative h-full w-full rounded-2xl p-8 text-left transition-all hover:shadow-xl"
                aria-label={`Open ${p.name} details`}
              >
                <div className="mb-10 flex items-center justify-between text-[10px] font-mono text-muted">
                  <span>[{p.index}] {p.kicker}</span>
                  <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    ↗ open
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {p.name}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest ${
                      p.status === "shipped"
                        ? "border border-brand/40 bg-brand/10 text-brand"
                        : "border border-border bg-muted/10 text-muted"
                    }`}
                  >
                    {p.status === "shipped" ? "Shipped" : "Concept"}
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-brand/90">
                  {p.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Reveal delay={0.2}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
            >
              View all projects
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>

      <ProjectModal
        product={openIdx !== null ? featuredProducts[openIdx] : null}
        onClose={() => setOpenIdx(null)}
      />
    </section>
  );
}
