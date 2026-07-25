import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";
import { PostCard } from "./PostCard";

export function LinkedInPosts() {
  const linkedinPosts = useSection("linkedinPosts");
  const latest = [...linkedinPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <section id="posts" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-brand">
              From LinkedIn
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Latest Posts
            </h2>
            <p className="mt-2 text-muted">
              Latest three posts — newest first. Full archive on{" "}
              <Link to="/thoughts" className="text-brand hover:underline">
                /thoughts
              </Link>
              .
            </p>
          </div>
          <Link
            to="/thoughts"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
          >
            View all thoughts →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
