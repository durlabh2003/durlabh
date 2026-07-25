import { createFileRoute, Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Nav } from "@/components/portfolio/Nav";
import { MacWindow } from "@/components/portfolio/MacWindow";
import { PostCard } from "@/components/portfolio/PostCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: [
      { title: "My Thoughts — Durlabh Daryani" },
      {
        name: "description",
        content:
          "LinkedIn posts, notes and product thinking from Durlabh Daryani — AI Product Manager.",
      },
      { property: "og:title", content: "My Thoughts — Durlabh Daryani" },
      {
        property: "og:description",
        content: "LinkedIn posts, notes and product thinking from Durlabh Daryani.",
      },
    ],
  }),
  component: ThoughtsPage,
});

function ThoughtsPage() {
  const linkedinPosts = useSection("linkedinPosts");
  const posts = [...linkedinPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink selection:bg-brand selection:text-white">
      <Nav />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-24">
        <MacWindow title="Thoughts" bodyClassName="p-0">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Link
                  to="/"
                  className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-brand"
                >
                  <ArrowLeft className="size-3.5" />
                  Back to Home
                </Link>
                <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-brand">
                  Thoughts
                </div>
                <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  My Thoughts
                </h1>
                <p className="mt-3 max-w-xl text-muted">
                  Everything I've shared on LinkedIn about building AI-first
                  products, discovery, and shipping fast. Newest first.
                </p>
              </div>
              <div className="font-mono text-[11px] text-muted tabular-nums">
                {posts.length} entries
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.04}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-8 text-center font-mono text-[11px] text-muted">
              — end of feed —
            </div>
          </div>
        </MacWindow>
      </main>
    </div>
  );
}
