import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useSection } from "@/lib/portfolio-content";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ChevronRight, Sparkles, Layers } from "lucide-react";

function getStatusLabel(status: string) {
  if (status === "shipped") return "Shipped";
  if (status === "pilot") return "Prototype / Pilot";
  return "Concept";
}

export function FeaturedProducts() {
  const featuredProducts = useSection("featuredProducts");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Desktop horizontal scroll refs & transforms
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  // Slide track smoothly across the horizontal axis
  // 4 cards each ~480px + gaps -> approx -52% translation across viewport
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section id="work" className="relative w-full">
      {/* =========================================================================
          DESKTOP: Pin & Horizontal Scroll Showcase (md and up)
      ========================================================================= */}
      <div ref={containerRef} className="hidden md:block relative h-[280vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 px-6 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto w-full max-w-7xl flex items-end justify-between gap-6 pt-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-brand">
                <Sparkles className="size-3" />
                Featured Products & Prototyping
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-ink">
                Product Builds
              </h2>
              <p className="mt-2 text-sm lg:text-base text-muted max-w-xl">
                Researched, scoped, and prototyped from 0 to 1. Scroll down to glide through
                flagship builds or click any card for verified proof.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="flex items-center gap-2 rounded-full border border-border/80 bg-elevated/70 px-3.5 py-1.5 text-xs font-mono text-muted backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                Scroll to explore
                <ArrowRight className="size-3 text-brand" />
              </div>

              <Link
                to="/projects"
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline"
              >
                View full catalog
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          {/* Horizontally Moving Cards Track */}
          <div className="relative w-full my-auto py-6">
            <motion.div style={{ x }} className="flex gap-6 lg:gap-8 pl-4 lg:pl-16 pr-24 w-max">
              {featuredProducts.map((p, i) => (
                <motion.div
                  key={p.name}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-[420px] lg:w-[480px] xl:w-[510px] shrink-0"
                >
                  <button
                    onClick={() => setOpenIdx(i)}
                    className="glass-panel group relative flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-left backdrop-blur-xl transition-all duration-300 hover:border-brand/50 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-brand/10 focus-visible:outline-2 focus-visible:outline-brand"
                    aria-label={`Open ${p.name} details`}
                  >
                    {/* Ambient Glow Header */}
                    <div
                      className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${p.accent} opacity-20 rounded-t-2xl pointer-events-none transition-opacity group-hover:opacity-35`}
                    />

                    <div>
                      {/* Meta Kicker & Status */}
                      <div className="relative z-10 mb-6 flex items-center justify-between text-xs font-mono">
                        <span className="text-muted/90 tracking-wider">
                          [{p.index}] · {p.kicker}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest ${
                            p.status === "shipped" || p.status === "pilot"
                              ? "border border-brand/40 bg-brand/10 text-brand font-medium"
                              : "border border-border bg-muted/10 text-muted"
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              p.status === "shipped" || p.status === "pilot"
                                ? "bg-brand"
                                : "bg-muted"
                            }`}
                          />
                          {getStatusLabel(p.status)}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h3 className="relative z-10 font-display text-3xl font-medium tracking-tight text-ink group-hover:text-white transition-colors">
                        {p.name}
                      </h3>
                      <div className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-widest text-brand">
                        {p.role}
                      </div>

                      {/* Description */}
                      <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted/95 line-clamp-3">
                        {p.description}
                      </p>

                      {/* Highlight Proof Note */}
                      {p.proofNote && (
                        <div className="relative z-10 mt-5 rounded-xl border border-border/70 bg-black/30 p-3 text-xs leading-relaxed text-muted line-clamp-2">
                          <span className="font-mono text-[10px] uppercase text-brand tracking-wider block mb-0.5">
                            Proof Dossier Note:
                          </span>
                          {p.proofNote}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-8 pt-4 border-t border-border/50">
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.stack.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-border/80 bg-surface/80 px-2 py-0.5 text-[10px] font-mono text-ink/80"
                          >
                            {s}
                          </span>
                        ))}
                        {p.stack.length > 4 && (
                          <span className="rounded-md border border-border/40 px-1.5 py-0.5 text-[10px] font-mono text-muted">
                            +{p.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Prompt */}
                      <div className="flex items-center justify-between text-xs font-medium text-brand">
                        <span className="group-hover:underline">Inspect Specs & Proof</span>
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}

              {/* End Card CTA */}
              <div className="w-[300px] shrink-0 flex items-center justify-center p-6">
                <Link
                  to="/projects"
                  className="glass-panel flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-border/80 bg-elevated/40 hover:bg-elevated hover:border-brand/40 transition-all group w-full h-[360px]"
                >
                  <Layers className="size-8 text-brand mb-3 transition-transform group-hover:scale-110" />
                  <span className="font-display text-lg font-medium text-ink">
                    Explore All Builds
                  </span>
                  <span className="text-xs text-muted mt-1 max-w-[180px]">
                    See older experiments, prototypes and case studies
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    Open archive →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET: Smooth Snap-Scroll Carousel (< md)
      ========================================================================= */}
      <div className="block md:hidden px-6 py-20">
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-brand">
            <Sparkles className="size-3" />
            Featured Products
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Product Builds
          </h2>
          <p className="mt-2 text-sm text-muted">
            Researched, scoped, and prototyped from 0 to 1 — swipe to explore each build.
          </p>
        </div>

        {/* Mobile Snap Track */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none -mx-6 px-6">
          {featuredProducts.map((p, i) => (
            <div key={p.name} className="w-[85vw] max-w-[340px] shrink-0 snap-center">
              <button
                onClick={() => setOpenIdx(i)}
                className="glass-panel relative flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
                aria-label={`Open ${p.name} details`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>
                      [{p.index}] {p.kicker}
                    </span>
                    <span className="rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-brand">
                      {getStatusLabel(p.status)}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-ink">{p.name}</h3>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-brand">
                    {p.role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border px-2 py-0.5 text-[10px] font-mono text-ink/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    Inspect Specs & Proof →
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-2.5 text-xs font-semibold text-ink"
          >
            View all projects →
          </Link>
        </div>
      </div>

      {/* Modal Dialog for clicked card */}
      <ProjectModal
        product={openIdx !== null ? featuredProducts[openIdx] : null}
        onClose={() => setOpenIdx(null)}
      />
    </section>
  );
}
