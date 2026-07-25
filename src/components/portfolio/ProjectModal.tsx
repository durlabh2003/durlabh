import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { featuredProducts } from "@/data/portfolio";
import { ExternalLink, FileText, X } from "lucide-react";

type Product = (typeof featuredProducts)[number];

export function ProjectModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[color:var(--scrim)] p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} details`}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mac-window premium-glow relative w-full max-w-2xl font-sans"
          >
            <div className="mac-title-bar flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="mac-traffic-light size-3 rounded-full bg-[#ff5f57]" />
                <span className="mac-traffic-light size-3 rounded-full bg-[#febc2e]" />
                <span className="mac-traffic-light size-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs font-medium text-muted/80">
                {product.name}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-muted transition-colors hover:text-brand"
              >
                <X className="size-4" />
              </button>
            </div>

            <div
              className={`relative h-44 overflow-hidden border-b border-border bg-gradient-to-br md:h-56 ${product.accent}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-brand) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-semibold tracking-tight text-ink/90 md:text-6xl">
                  {product.name}
                </span>
              </div>
              <div className="absolute top-3 left-3 text-xs text-ink/70">
                {product.kicker}
              </div>
            </div>

            <div className="space-y-5 p-6 text-sm md:p-8">
              <div>
                <div className="mb-1 text-xs font-medium text-brand">
                  Description
                </div>
                <p className="leading-relaxed text-ink/85">
                  {product.longDescription ?? product.description}
                </p>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium text-brand">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {product.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-elevated/60 px-2.5 py-1 text-xs text-ink/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-3">
                {product.linksLive ? (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-cta-ink transition-colors hover:bg-brand/80"
                  >
                    <ExternalLink className="size-3.5" />
                    Live project
                  </a>
                ) : (
                  <span
                    title="Coming soon"
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-elevated/30 px-4 py-2 text-xs font-semibold text-muted/60"
                  >
                    <ExternalLink className="size-3.5" />
                    Live project · Coming soon
                  </span>
                )}
                {product.linksLive ? (
                  <a
                    href={product.prdUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-elevated"
                  >
                    <FileText className="size-3.5" />
                    View PRD
                  </a>
                ) : (
                  <span
                    title="Coming soon"
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-elevated/30 px-4 py-2 text-xs font-semibold text-muted/60"
                  >
                    <FileText className="size-3.5" />
                    View PRD · Coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
