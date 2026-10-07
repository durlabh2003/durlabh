import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";
import { PostCard } from "./PostCard";

export function LinkedInPosts() {
  const linkedinPosts = useSection("linkedinPosts");
  const latest = [...linkedinPosts]
    .sort((a, b) => ((a.date || "") < (b.date || "") ? 1 : -1))
    .slice(0, 3);

  return (
    <section id="posts" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">
              Writing & Thoughts
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Thoughts
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted">
            {linkedinPosts.length} posts
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.id || i} delay={i * 0.05}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Reveal delay={0.2}>
            <Link
              to="/thoughts"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
            >
              View all thoughts
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
