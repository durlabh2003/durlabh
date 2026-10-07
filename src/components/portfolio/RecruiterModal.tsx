import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

export function RecruiterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("durlabh.daryani@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[color:var(--scrim)] p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Recruiter Cheat Sheet"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mac-window premium-glow relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/80 bg-[#0a0a0a] text-ink shadow-2xl"
          >
            {/* Window Title Bar */}
            <div className="mac-title-bar flex items-center justify-between border-b border-border/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs font-mono font-medium text-muted/90 flex items-center gap-1.5">
                <Zap className="size-3.5 text-brand" />
                60-Second Recruiter Briefing
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="rounded p-1 text-muted transition-colors hover:text-brand"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              {/* Top Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    Durlabh Daryani
                  </h3>
                  <p className="text-sm text-brand font-medium">
                    AI Product Manager · Discovery, PRDs, Evals & Shipped MVPs
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Actively Interviewing
                </div>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-border/70 bg-surface/50 p-3.5">
                  <div className="font-mono uppercase text-muted tracking-wider text-[10px] mb-1 flex items-center gap-1">
                    <Briefcase className="size-3 text-brand" />
                    Target Roles
                  </div>
                  <div className="text-ink font-medium">
                    AI Product Manager · Technical PM · Founding PM
                  </div>
                </div>

                <div className="rounded-xl border border-border/70 bg-surface/50 p-3.5">
                  <div className="font-mono uppercase text-muted tracking-wider text-[10px] mb-1 flex items-center gap-1">
                    <MapPin className="size-3 text-brand" />
                    Location & Mobility
                  </div>
                  <div className="text-ink font-medium">
                    Jaipur, India · Open to Remote / Hybrid / Relocation
                  </div>
                </div>
              </div>

              {/* Core PM Superpowers */}
              <div>
                <div className="mb-3 text-[11px] font-mono uppercase tracking-widest text-brand">
                  Core PM Superpowers
                </div>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  <div className="rounded-xl border border-border/70 bg-surface/40 p-3.5">
                    <div className="text-xs font-semibold text-ink mb-1 flex items-center gap-1">
                      <Sparkles className="size-3.5 text-brand" />
                      AI Evals & Prompting
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted">
                      Designs prompt chains, deterministic schemas, eval datasets, and guardrails
                      to curb hallucinations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-surface/40 p-3.5">
                    <div className="text-xs font-semibold text-ink mb-1 flex items-center gap-1">
                      <Zap className="size-3.5 text-brand" />
                      0-to-1 PRD Speed
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted">
                      Translates fuzzy customer pain into JTBD, Opportunity Trees, and scoped PRDs
                      within 7 days.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-surface/40 p-3.5">
                    <div className="text-xs font-semibold text-ink mb-1 flex items-center gap-1">
                      <Check className="size-3.5 text-brand" />
                      QA & Release Rigor
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted">
                      Strong QA/BA roots: clear acceptance criteria, bug triage discipline, and
                      zero-regression delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flagship Signal Summary */}
              <div>
                <div className="mb-2 text-[11px] font-mono uppercase tracking-widest text-brand">
                  Verified Pilot Signals
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-border/60 bg-black/40 p-2.5">
                    <span className="font-semibold text-ink block">Kartify (AI Shopping)</span>
                    <span className="text-[11px] text-muted">
                      ~78% task completion in pilot usability test; 6-wk MVP.
                    </span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-black/40 p-2.5">
                    <span className="font-semibold text-ink block">CafeOS (Hospitality SaaS)</span>
                    <span className="text-[11px] text-muted">
                      ~31% faster kitchen ticket turnaround in 3-cafe pilot.
                    </span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-black/40 p-2.5">
                    <span className="font-semibold text-ink block">FinMate (Gen-Z AI)</span>
                    <span className="text-[11px] text-muted">
                      &lt;60s time to first financial insight in QA benchmarks.
                    </span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-black/40 p-2.5">
                    <span className="font-semibold text-ink block">Tapinfi (NFC Identity)</span>
                    <span className="text-[11px] text-muted">
                      &lt;90s onboarding to first NFC share in QA runs.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Hiring Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5">
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:durlabh.daryani@gmail.com?subject=AI%20Product%20Manager%20Role%20Discussion"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-cta-ink transition-colors hover:bg-brand-strong"
                  >
                    <Mail className="size-3.5" />
                    Email Durlabh
                  </a>

                  <a
                    href="/Durlabh-Daryani-CV.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-elevated"
                  >
                    <Download className="size-3.5" />
                    Download CV (PDF)
                  </a>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
