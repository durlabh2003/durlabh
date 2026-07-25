import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

export function Thinking() {
  const articles = useSection("articles");
  const preview = articles.slice(0, 5);
  return (
    <section id="thinking" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-2 text-[11px] font-medium uppercase tracking-widest text-brand">
              Product Thinking
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              Notes on how I build, decide and ship
            </h2>
            <p className="mt-2 text-muted">Essays on discovery, AI products, growth loops and decision-making.</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {articles.length} essays
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface divide-y divide-border">
          {preview.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.03}>
              <Link
                to="/thinking/$slug"
                params={{ slug: a.slug }}
                className="group flex items-center justify-between gap-6 px-6 md:px-8 py-5 hover:bg-muted/5 transition-colors"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="font-mono text-[11px] text-muted tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-lg md:text-xl truncate">
                      {a.title}
                    </div>
                    <div className="mt-0.5 text-xs text-muted truncate">
                      {a.excerpt}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden md:inline text-[10px] font-mono uppercase tracking-widest text-muted">
                    {a.readTime}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                    {a.tag}
                  </span>
                  <span className="text-muted group-hover:translate-x-1 group-hover:text-brand transition-all">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/thinking"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
          >
            Read all essays
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
