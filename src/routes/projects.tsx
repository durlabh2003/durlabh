import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSection } from "@/lib/portfolio-content";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { Reveal } from "@/components/portfolio/Reveal";
import { Nav } from "@/components/portfolio/Nav";
import { MacWindow } from "@/components/portfolio/MacWindow";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Durlabh Daryani" },
      {
        name: "description",
        content:
          "All shipped products, prototypes and case studies by Durlabh Daryani — AI Product Manager.",
      },
      { property: "og:title", content: "Projects — Durlabh Daryani" },
      {
        property: "og:description",
        content: "All shipped products, prototypes and case studies by Durlabh Daryani.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featuredProducts = useSection("featuredProducts");
  const caseStudies = useSection("caseStudies");
  useSmoothScroll();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink selection:bg-brand selection:text-white">
      <Nav />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-24">
        <MacWindow title="Projects" bodyClassName="p-0">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <Reveal>
              <div className="mb-16">
                <Link
                  to="/"
                  className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-brand"
                >
                  <ArrowLeft className="size-3.5" />
                  Back to Home
                </Link>
                <div className="mb-2 text-[11px] font-medium uppercase tracking-widest text-brand">
                  Projects
                </div>
                <h1 className="font-display text-4xl font-medium tracking-tight text-ink md:text-6xl">
                  All Projects
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {featuredProducts.length + caseStudies.length} projects across
                  shipped products, prototypes and case studies. Click any card to
                  inspect.
                </p>
              </div>
            </Reveal>

            <section className="mb-20">
              <h2 className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-muted">
                <span className="text-brand">●</span>
                Shipped Products
                <span className="h-px flex-1 bg-border" />
                <span>{featuredProducts.length} items</span>
              </h2>

              <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-xl border border-border bg-elevated/40 md:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.04}>
                    <button
                      onClick={() => setOpenIdx(i)}
                      className="group relative h-full w-full bg-surface p-7 text-left transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-brand"
                      aria-label={`Open ${p.name} details`}
                    >
                      <div className="mb-8 flex items-center justify-between text-[11px] font-mono text-muted">
                        <span>
                          {p.index} — {p.kicker}
                        </span>
                        <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
                          Open
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-medium text-ink">
                        {p.name}
                      </h3>
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-brand/90">
                        {p.role}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {p.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded border border-border px-2 py-0.5 text-[10px] font-medium text-ink/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-muted">
                <span className="text-brand">●</span>
                Case Studies
                <span className="h-px flex-1 bg-border" />
                <span>{caseStudies.length} items</span>
              </h2>

              <div className="overflow-hidden rounded-lg border border-border bg-elevated/40">
                {caseStudies.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.03}>
                    <div className="grid items-start gap-4 px-6 py-6 transition-colors hover:bg-elevated/60 md:grid-cols-12 md:px-8">
                      <div className="flex items-center gap-4 md:col-span-3">
                        <span className="font-mono text-[11px] text-muted tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="font-display text-lg text-ink">
                            {c.name}
                          </div>
                          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-brand/70">
                            {c.tag}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted md:col-span-7">
                        {c.problem}
                      </p>
                      <div className="flex md:col-span-2 md:justify-end">
                        <Link
                          to="/"
                          hash="case-studies"
                          className="text-[11px] font-medium uppercase tracking-widest text-brand transition-colors hover:underline"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <div className="mt-20 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
              >
                <ArrowLeft className="size-4" />
                Back Home
              </Link>
            </div>
          </div>
        </MacWindow>
      </main>

      <ProjectModal
        product={openIdx !== null ? featuredProducts[openIdx] : null}
        onClose={() => setOpenIdx(null)}
      />
    </div>
  );
}
