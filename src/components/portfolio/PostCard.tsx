import type { LinkedInPost } from "@/data/portfolio";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function PostCard({ post }: { post: LinkedInPost }) {
  return (
    <article className="glass-panel group flex flex-col overflow-hidden rounded-xl transition-transform hover:-translate-y-1">
      {post.cover && (
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read LinkedIn post: ${post.excerpt.slice(0, 80)}`}
          className="block aspect-[16/9] overflow-hidden border-b border-border"
        >
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
          <span className="text-brand">#{post.tag}</span>
          <time dateTime={post.date} className="tabular-nums">
            {formatDate(post.date)}
          </time>
        </div>
        <p className="text-sm leading-relaxed text-ink/90 line-clamp-4">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2 font-mono text-[11px]">
          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="text-brand hover:underline"
          >
            Read on LinkedIn →
          </a>
          <span className="text-muted">@durlabhdaryani</span>
        </div>
      </div>
    </article>
  );
}
