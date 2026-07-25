import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles } from "@/data/portfolio";
import { Nav } from "@/components/portfolio/Nav";
import { MacWindow } from "@/components/portfolio/MacWindow";
import { Reveal } from "@/components/portfolio/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/thinking/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    const idx = articles.findIndex((a) => a.slug === params.slug);
    const prev = idx > 0 ? articles[idx - 1] : null;
    const next = idx < articles.length - 1 ? articles[idx + 1] : null;
    return { article, prev, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Essay not found — Durlabh Daryani" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} — Durlabh Daryani`;
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
  errorComponent: ArticleError,
});

function ArticlePage() {
  const { article, prev, next } = Route.useLoaderData();
  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink selection:bg-brand selection:text-white">
      <Nav />
      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-16 pt-24">
        <MacWindow title={article.title} bodyClassName="p-0">
          <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <Reveal>
              <Link
                to="/thinking"
                className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-brand"
              >
                <ArrowLeft className="size-3.5" />
                All essays
              </Link>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 text-brand">
                  {article.tag}
                </span>
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{article.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {article.excerpt}
              </p>
            </Reveal>

            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mt-12 space-y-6">
              {article.body.map((p: string, i: number) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-[15px] leading-[1.8] text-ink/85 md:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <nav className="mt-10 grid gap-4 md:grid-cols-2">
              {prev ? (
                <Link
                  to="/thinking/$slug"
                  params={{ slug: prev.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-elevated/40 p-5 transition-colors hover:border-brand/40 hover:bg-elevated"
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted">
                    <ArrowLeft className="size-3" /> Previous
                  </span>
                  <span className="mt-2 font-display text-base text-ink group-hover:text-brand">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to="/thinking/$slug"
                  params={{ slug: next.slug }}
                  className="group flex flex-col items-end rounded-2xl border border-border bg-elevated/40 p-5 text-right transition-colors hover:border-brand/40 hover:bg-elevated"
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted">
                    Next <ArrowRight className="size-3" />
                  </span>
                  <span className="mt-2 font-display text-base text-ink group-hover:text-brand">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </article>
        </MacWindow>
      </main>
    </div>
  );
}

function ArticleNotFound() {
  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink">
      <Nav />
      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-32 text-center">
        <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-brand">
          404
        </div>
        <h1 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
          Essay not found
        </h1>
        <p className="mt-3 text-muted">
          The essay you're looking for doesn't exist yet.
        </p>
        <Link
          to="/thinking"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-elevated"
        >
          <ArrowLeft className="size-4" />
          All essays
        </Link>
      </main>
    </div>
  );
}

function ArticleError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mac-desktop min-h-dvh font-sans text-ink">
      <Nav />
      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-32 text-center">
        <h1 className="font-display text-3xl font-medium tracking-tight">
          This essay didn't load
        </h1>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-elevated"
        >
          Try again
        </button>
      </main>
    </div>
  );
}
