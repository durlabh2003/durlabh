import type { LinkedInPost } from "@/data/portfolio";

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function PostCard({ post }: { post: any }) {
  // If full embed HTML is provided, render the interactive iframe
  if (post.embedCode) {
    return (
      <article className="glass-panel flex flex-col items-center justify-center overflow-hidden rounded-xl p-3 shadow-lg transition-transform hover:-translate-y-1">
        <div
          className="w-full flex justify-center overflow-auto max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: post.embedCode }}
        />
      </article>
    );
  }

  // If embedUrl iframe link is provided
  if (post.embedUrl) {
    return (
      <article className="glass-panel flex flex-col items-center justify-center overflow-hidden rounded-xl p-3 shadow-lg transition-transform hover:-translate-y-1">
        <iframe
          src={post.embedUrl}
          height="634"
          width="100%"
          frameBorder="0"
          allowFullScreen
          title={post.title || "LinkedIn post"}
          className="rounded-lg w-full"
        />
      </article>
    );
  }

  // Fallback to card UI
  return (
    <article className="glass-panel group flex flex-col overflow-hidden rounded-xl transition-transform hover:-translate-y-1">
      {post.cover && (
        <a
          href={post.url || post.postUrl || "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read LinkedIn post: ${(post.excerpt || post.title || "").slice(0, 80)}`}
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
          <span className="text-brand">#{post.tag || "LinkedIn"}</span>
          {post.date && (
            <time dateTime={post.date} className="tabular-nums">
              {formatDate(post.date)}
            </time>
          )}
        </div>
        <p className="text-sm leading-relaxed text-ink/90 line-clamp-4">
          {post.excerpt || post.title}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2 font-mono text-[11px]">
          <a
            href={post.url || post.postUrl || "https://linkedin.com/in/durlabhdaryani"}
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
