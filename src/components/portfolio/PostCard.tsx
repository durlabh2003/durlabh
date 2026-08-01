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

function processEmbedHtml(html: string) {
  if (!html) return "";
  // Ensure iframe dynamically fills 100% width of the card container
  let updated = html.replace(/width="[^"]*"/gi, 'width="100%"');
  // Fit height exactly to the post content (510px) to prevent empty bottom gap
  updated = updated.replace(/height="[^"]*"/gi, 'height="510"');
  return updated;
}

export function PostCard({ post }: { post: any }) {
  // If full embed HTML is provided, render clean original light theme iframe
  if (post.embedCode) {
    return (
      <article className="glass-panel group flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-white/5 p-2 shadow-2xl transition-all duration-300 hover:border-brand/40 hover:shadow-brand/10 hover:-translate-y-1">
        <div
          className="w-full flex justify-center overflow-hidden rounded-xl"
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={{ __html: processEmbedHtml(post.embedCode) }}
        />
      </article>
    );
  }

  // If embedUrl iframe link is provided
  if (post.embedUrl) {
    return (
      <article className="glass-panel group flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-white/5 p-2 shadow-2xl transition-all duration-300 hover:border-brand/40 hover:shadow-brand/10 hover:-translate-y-1">
        <iframe
          src={post.embedUrl}
          height="510"
          width="100%"
          frameBorder="0"
          allowFullScreen
          title={post.title || "LinkedIn post"}
          className="rounded-xl w-full"
          style={{ width: "100%" }}
        />
      </article>
    );
  }

  // Fallback to card UI
  return (
    <article className="glass-panel group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-brand/40 hover:-translate-y-1">
      {post.cover && (
        <a
          href={post.url || post.postUrl || "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read post: ${(post.excerpt || post.title || "").slice(0, 80)}`}
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
          <span className="text-brand">#{post.tag || "Thoughts"}</span>
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
            Read Post →
          </a>
          <span className="text-muted">@durlabhdaryani</span>
        </div>
      </div>
    </article>
  );
}
