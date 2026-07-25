import { createFileRoute, Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Nav } from "@/components/portfolio/Nav";
import { MacWindow } from "@/components/portfolio/MacWindow";
import { Reveal } from "@/components/portfolio/Reveal";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/thinking")({
  head: () => ({
    meta: [
      { title: "Product Thinking — Durlabh Daryani" },
      {
        name: "description",
        content:
          "Essays by Durlabh Daryani on discovery, AI products, growth loops, analytics and decision-making.",
      },
      { property: "og:title", content: "Product Thinking — Durlabh Daryani" },
      {
        property: "og:description",
        content:
          "Essays on discovery, AI products, growth loops and decision-making.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThinkingIndexPage,
});

function ThinkingIndexPage() {
  const articles = useSection("articles");
  const sorted = useMemo(
    () => [...articles].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(sorted.map((a) => a.tag)))],
    [sorted]
  );
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? sorted : sorted.filter((a) => a.tag === active);

  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink selection:bg-brand selection:text-white">
      <Nav />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-24">
        <MacWindow title="Product Thinking" bodyClassName="p-0">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
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
                  Product Thinking
                </div>
                <h1 className="font-display text-4xl font-medium tracking-tight text-ink md:text-6xl">
                  Essays on shipping AI-first products
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  Notes on discovery, prompt engineering, retention, analytics
                  and decision-making — pulled from real products I've shipped.
                </p>
              </div>
            </Reveal>

            <div className="mb-8 flex flex-wrap items-center gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest transition-colors ${
                    active === t
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-border text-muted hover:border-brand/40 hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="ml-auto font-mono text-[11px] text-muted tabular-nums">
                {filtered.length} / {sorted.length}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.04}>
                  <Link
                    to="/thinking/$slug"
                    params={{ slug: a.slug }}
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-elevated/40 p-7 transition-colors hover:border-brand/40 hover:bg-elevated"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted">
                        <span className="text-brand/80">{a.tag}</span>
                        <span>
                          {new Date(a.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-medium leading-snug text-ink group-hover:text-brand transition-colors md:text-2xl">
                        {a.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {a.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted">
                      <span>{a.readTime} read</span>
                      <span className="text-brand transition-transform group-hover:translate-x-1">
                        Read →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
              >
                <ArrowLeft className="size-4" />
                Back Home
              </Link>
            </div>
          </div>
        </MacWindow>
      </main>
    </div>
  );
}
