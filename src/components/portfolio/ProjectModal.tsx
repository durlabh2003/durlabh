import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FeaturedProduct } from "@/lib/portfolio-content";
import { ExternalLink, FileText, X } from "lucide-react";

function getStatusLabel(status: FeaturedProduct["status"]) {
  if (status === "shipped") return "Shipped";
  if (status === "pilot") return "Prototype / Pilot";
  return "Concept";
}

/* ─────────────────────────────────────────────────────────────────────── */
/*  SVG Product Mockups — one per product name                            */
/* ─────────────────────────────────────────────────────────────────────── */

function KartifyMockup() {
  return (
    <svg viewBox="0 0 560 220" className="w-full" aria-label="Kartify UI concept">
      {/* Phone shell */}
      <rect x="8" y="4" width="160" height="212" rx="16" fill="#111" stroke="#333" strokeWidth="1.5" />
      <rect x="16" y="20" width="144" height="188" rx="8" fill="#0d0d0d" />
      {/* Chat messages */}
      <rect x="24" y="28" width="90" height="20" rx="4" fill="#1a1a2e" />
      <text x="69" y="42" textAnchor="middle" fill="#818cf8" fontSize="7" fontFamily="monospace">Find me a laptop under ₹60k</text>
      <rect x="58" y="56" width="92" height="20" rx="4" fill="#1e3a2f" />
      <text x="104" y="66" textAnchor="middle" fill="#6ee7b7" fontSize="6.5" fontFamily="monospace">Gaming or work? Screen size?</text>
      <rect x="24" y="84" width="100" height="32" rx="4" fill="#1a1a2e" />
      <text x="74" y="96" textAnchor="middle" fill="#a5b4fc" fontSize="6" fontFamily="monospace">Work. 15" preferred, 8GB RAM+</text>
      <text x="74" y="108" textAnchor="middle" fill="#a5b4fc" fontSize="6" fontFamily="monospace">No gaming, prefer thin</text>
      {/* Comparison table preview */}
      <rect x="16" y="124" width="144" height="68" rx="6" fill="#111827" stroke="#374151" strokeWidth="0.8" />
      <text x="88" y="136" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">Comparing 3 options...</text>
      <rect x="24" y="142" width="128" height="8" rx="2" fill="#1f2937" />
      <rect x="24" y="154" width="128" height="8" rx="2" fill="#1f2937" />
      <rect x="24" y="166" width="128" height="8" rx="2" fill="#1f2937" />
      <rect x="24" y="142" width="42" height="8" rx="2" fill="#4f46e5" opacity="0.6" />
      <rect x="24" y="154" width="96" height="8" rx="2" fill="#4f46e5" opacity="0.4" />
      <rect x="24" y="166" width="64" height="8" rx="2" fill="#4f46e5" opacity="0.3" />
      {/* Score card on right */}
      <rect x="192" y="12" width="170" height="196" rx="12" fill="#0f0f0f" stroke="#222" strokeWidth="1.2" />
      <text x="277" y="36" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Recommendation Score</text>
      {/* Donut chart placeholder */}
      <circle cx="277" cy="90" r="42" fill="none" stroke="#1f2937" strokeWidth="12" />
      <circle cx="277" cy="90" r="42" fill="none" stroke="#4f46e5" strokeWidth="12"
        strokeDasharray="198 66" strokeDashoffset="66" strokeLinecap="round" />
      <text x="277" y="86" textAnchor="middle" fill="#e0e7ff" fontSize="18" fontWeight="bold" fontFamily="sans-serif">78%</text>
      <text x="277" y="98" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="sans-serif">task completion</text>
      {/* Stat pills */}
      <rect x="202" y="148" width="68" height="22" rx="6" fill="#1e1b4b" />
      <text x="236" y="163" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="sans-serif">6.4 avg turns</text>
      <rect x="278" y="148" width="76" height="22" rx="6" fill="#14432a" />
      <text x="316" y="163" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="sans-serif">6 wk MVP</text>
      <rect x="202" y="178" width="152" height="18" rx="6" fill="#1f2937" />
      <text x="278" y="191" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="sans-serif">Pilot · Self-run usability test, n=9</text>
      {/* Stack labels */}
      <rect x="384" y="12" width="168" height="196" rx="12" fill="#0f0f0f" stroke="#222" strokeWidth="1.2" />
      <text x="468" y="36" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Tech Stack</text>
      {[["Next.js", "#22d3ee"], ["Gemini API", "#818cf8"], ["Supabase", "#34d399"], ["n8n", "#fb923c"]].map(
        ([label, color], i) => (
          <g key={label} transform={`translate(400, ${56 + i * 36})`}>
            <rect width="136" height="24" rx="6" fill="#111827" />
            <circle cx="18" cy="12" r="5" fill={color} opacity="0.8" />
            <text x="32" y="16" fill="#d1d5db" fontSize="9" fontFamily="sans-serif">{label}</text>
          </g>
        )
      )}
    </svg>
  );
}

function CafeOSMockup() {
  return (
    <svg viewBox="0 0 560 220" className="w-full" aria-label="CafeOS UI concept">
      {/* Dashboard header */}
      <rect x="8" y="8" width="544" height="28" rx="6" fill="#111" stroke="#222" strokeWidth="1" />
      <circle cx="26" cy="22" r="6" fill="#34d399" />
      <text x="40" y="26" fill="#9ca3af" fontSize="8" fontFamily="monospace">CafeOS Dashboard</text>
      <text x="460" y="26" fill="#6b7280" fontSize="7" fontFamily="monospace">Sat, 12:45 PM · Live</text>
      {/* KDS Column */}
      <rect x="8" y="44" width="170" height="168" rx="8" fill="#0d1117" stroke="#1f2937" strokeWidth="1" />
      <text x="93" y="60" textAnchor="middle" fill="#f97316" fontSize="8" fontFamily="sans-serif" fontWeight="600">Kitchen Display (KDS)</text>
      {[
        { t: "#T12", items: "Cappuccino × 2, Sandwich", age: "2m", color: "#fef9c3", bg: "#422006" },
        { t: "#T14", items: "Americano × 1, Croissant", age: "5m", color: "#fed7aa", bg: "#431407" },
        { t: "#T09", items: "Latte × 3", age: "8m", color: "#fecaca", bg: "#450a0a" },
      ].map((o, i) => (
        <g key={o.t} transform={`translate(16, ${72 + i * 48})`}>
          <rect width="154" height="40" rx="6" fill={o.bg} />
          <text x="8" y="14" fill={o.color} fontSize="8" fontWeight="bold" fontFamily="sans-serif">{o.t}</text>
          <text x="8" y="26" fill="#d1d5db" fontSize="7" fontFamily="sans-serif">{o.items}</text>
          <text x="8" y="36" fill="#9ca3af" fontSize="6" fontFamily="sans-serif">{o.age} ago</text>
          <rect x="118" y="10" width="28" height="14" rx="3" fill="#166534" />
          <text x="132" y="21" textAnchor="middle" fill="#bbf7d0" fontSize="6" fontFamily="sans-serif">Done</text>
        </g>
      ))}
      {/* Analytics Column */}
      <rect x="186" y="44" width="180" height="168" rx="8" fill="#0d1117" stroke="#1f2937" strokeWidth="1" />
      <text x="276" y="60" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="sans-serif" fontWeight="600">Pilot Metrics</text>
      {/* Metric blocks */}
      <rect x="194" y="68" width="164" height="52" rx="6" fill="#1a1a2e" />
      <text x="276" y="86" textAnchor="middle" fill="#c4b5fd" fontSize="22" fontWeight="bold" fontFamily="sans-serif">−31%</text>
      <text x="276" y="102" textAnchor="middle" fill="#7c3aed" fontSize="7" fontFamily="sans-serif">Ticket time · 3-cafe pilot</text>
      <rect x="194" y="128" width="164" height="52" rx="6" fill="#14202a" />
      <text x="276" y="146" textAnchor="middle" fill="#34d399" fontSize="22" fontWeight="bold" fontFamily="sans-serif">−42%</text>
      <text x="276" y="162" textAnchor="middle" fill="#065f46" fontSize="7" fontFamily="sans-serif">Order errors · same pilot</text>
      <text x="276" y="200" textAnchor="middle" fill="#4b5563" fontSize="6" fontFamily="sans-serif">⚠ Operator self-reported</text>
      {/* QR Ordering Column */}
      <rect x="374" y="44" width="178" height="168" rx="8" fill="#0d1117" stroke="#1f2937" strokeWidth="1" />
      <text x="463" y="60" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="sans-serif" fontWeight="600">QR Order Flow</text>
      {/* Simplified QR code */}
      <rect x="420" y="70" width="86" height="86" rx="4" fill="#111" stroke="#374151" strokeWidth="1" />
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => {
          const on = ((r + c) % 3 === 0) || (r < 2 && c < 2) || (r > 4 && c < 2) || (r < 2 && c > 4);
          return on ? <rect key={`${r}-${c}`} x={424 + c * 11} y={74 + r * 11} width="9" height="9" rx="1" fill="#e2e8f0" /> : null;
        })
      )}
      <text x="463" y="172" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Scan → Order → Pay</text>
      <rect x="390" y="180" width="146" height="20" rx="6" fill="#0c4a6e" />
      <text x="463" y="194" textAnchor="middle" fill="#7dd3fc" fontSize="7" fontFamily="sans-serif">No app install required</text>
    </svg>
  );
}

function FinMateMockup() {
  return (
    <svg viewBox="0 0 560 220" className="w-full" aria-label="FinMate UI concept">
      {/* Phone */}
      <rect x="8" y="4" width="164" height="212" rx="18" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="18" y="20" width="144" height="188" rx="10" fill="#0f172a" />
      <text x="90" y="38" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Health Score</text>
      {/* Score ring */}
      <circle cx="90" cy="80" r="34" fill="none" stroke="#1e293b" strokeWidth="10" />
      <circle cx="90" cy="80" r="34" fill="none" stroke="#14b8a6" strokeWidth="10"
        strokeDasharray="150 63" strokeDashoffset="50" strokeLinecap="round" />
      <text x="90" y="76" textAnchor="middle" fill="#f0fdfa" fontSize="16" fontWeight="bold" fontFamily="sans-serif">72</text>
      <text x="90" y="88" textAnchor="middle" fill="#5eead4" fontSize="7" fontFamily="sans-serif">On Track</text>
      {/* Nudge cards */}
      <rect x="18" y="124" width="144" height="30" rx="6" fill="#0d2b22" />
      <text x="28" y="138" fill="#6ee7b7" fontSize="7" fontFamily="sans-serif">💡 You saved ₹240 vs last week</text>
      <text x="28" y="148" fill="#4ade80" fontSize="6" fontFamily="sans-serif">Keep it up — 3 days streak</text>
      <rect x="18" y="160" width="144" height="30" rx="6" fill="#2d1a0e" />
      <text x="28" y="174" fill="#fb923c" fontSize="7" fontFamily="sans-serif">⚡ Food spend 18% above goal</text>
      <text x="28" y="184" fill="#f97316" fontSize="6" fontFamily="sans-serif">Budget for 4 more days</text>
      {/* Category breakdown */}
      <rect x="186" y="12" width="370" height="196" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
      <text x="371" y="34" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Spend Breakdown · This Month</text>
      {[
        { cat: "Food & Dining", pct: 38, w: 200, color: "#f97316" },
        { cat: "Transport", pct: 22, w: 116, color: "#3b82f6" },
        { cat: "Shopping", pct: 18, w: 95, color: "#a855f7" },
        { cat: "Utilities", pct: 12, w: 63, color: "#22c55e" },
        { cat: "Entertainment", pct: 10, w: 53, color: "#ec4899" },
      ].map((item, i) => (
        <g key={item.cat} transform={`translate(200, ${50 + i * 28})`}>
          <text x="0" y="12" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">{item.cat}</text>
          <rect x="120" y="2" width={item.w} height="12" rx="3" fill={item.color} opacity="0.25" />
          <rect x="120" y="2" width={item.w} height="12" rx="3" fill={item.color} opacity="0.6" />
          <text x={item.w + 128} y="12" fill={item.color} fontSize="7" fontFamily="sans-serif">{item.pct}%</text>
        </g>
      ))}
      <rect x="196" y="192" width="352" height="10" rx="3" fill="#1e293b" />
      <text x="372" y="200" textAnchor="middle" fill="#475569" fontSize="6" fontFamily="sans-serif">Auto-categorised · &lt;60s to first insight in QA</text>
    </svg>
  );
}

function TapinfiMockup() {
  return (
    <svg viewBox="0 0 560 220" className="w-full" aria-label="Tapinfi UI concept">
      {/* NFC Card visual */}
      <rect x="8" y="30" width="220" height="140" rx="14" fill="url(#tapGrad)" stroke="#0e7490" strokeWidth="1.5" />
      <defs>
        <linearGradient id="tapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#083344" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>
      {/* NFC waves */}
      <path d="M 160 100 Q 174 100 174 100" stroke="#67e8f9" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 160 100 Q 184 84 184 100 Q 184 116 160 100" stroke="#67e8f9" strokeWidth="2" fill="none" opacity="0.55" />
      <path d="M 160 100 Q 196 72 196 100 Q 196 128 160 100" stroke="#67e8f9" strokeWidth="2" fill="none" opacity="0.35" />
      <circle cx="160" cy="100" r="6" fill="#22d3ee" />
      {/* Card text */}
      <text x="26" y="68" fill="#e0f2fe" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Durlabh Daryani</text>
      <text x="26" y="84" fill="#7dd3fc" fontSize="8" fontFamily="sans-serif">AI Product Manager</text>
      <text x="26" y="98" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Jaipur, India</text>
      <text x="26" y="152" fill="#38bdf8" fontSize="7" fontFamily="monospace">tapinfi.com/d/durlabh</text>
      {/* Profile view */}
      <rect x="246" y="12" width="306" height="196" rx="12" fill="#0c1a2c" stroke="#1e3a5f" strokeWidth="1" />
      <text x="399" y="34" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Profile · Live View after NFC tap</text>
      <circle cx="399" cy="72" r="24" fill="#1e3a5f" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="399" y="78" textAnchor="middle" fill="#e0f2fe" fontSize="14" fontFamily="sans-serif">DD</text>
      <text x="399" y="108" textAnchor="middle" fill="#f0f9ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Durlabh Daryani</text>
      <text x="399" y="122" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="sans-serif">AI Product Manager</text>
      {/* Links */}
      {["LinkedIn", "GitHub", "Portfolio"].map((link, i) => (
        <g key={link} transform={`translate(262, ${142 + i * 22})`}>
          <rect width="274" height="17" rx="5" fill="#0f2840" stroke="#1e4060" strokeWidth="0.8" />
          <text x="137" y="12" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="sans-serif">{link}</text>
        </g>
      ))}
      {/* Analytics strip */}
      <rect x="246" y="210" width="306" height="0" />
      <text x="399" y="208" textAnchor="middle" fill="#475569" fontSize="6" fontFamily="sans-serif">⚡ &lt;90s onboarding → first share · QA benchmark</text>
    </svg>
  );
}

function getMockup(name: string) {
  if (name === "Kartify") return <KartifyMockup />;
  if (name === "CafeOS") return <CafeOSMockup />;
  if (name === "FinMate") return <FinMateMockup />;
  if (name === "Tapinfi") return <TapinfiMockup />;
  return null;
}

/* ─────────────────────────────────────────────────────────────────────── */
/*  Modal                                                                  */
/* ─────────────────────────────────────────────────────────────────────── */

export function ProjectModal({
  product,
  onClose,
}: {
  product: FeaturedProduct | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const mockup = product ? getMockup(product.name) : null;

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
            className="mac-window premium-glow relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] text-ink font-sans border border-border/80 shadow-2xl rounded-2xl"
          >
            <div className="mac-title-bar flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="mac-traffic-light size-3 rounded-full bg-[#ff5f57]" />
                <span className="mac-traffic-light size-3 rounded-full bg-[#febc2e]" />
                <span className="mac-traffic-light size-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs font-medium text-muted/80">{product.name}</div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-muted transition-colors hover:text-brand"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Hero banner */}
            <div
              className={`relative overflow-hidden border-b border-border bg-gradient-to-br ${product.accent}`}
            >
              {mockup ? (
                /* SVG Product Mockup */
                <div className="px-4 pt-4 pb-2">
                  {mockup}
                  <div className="pb-2 flex justify-end">
                    <span className="text-[10px] font-mono text-muted/50">
                      UI concept — not production screenshot
                    </span>
                  </div>
                </div>
              ) : (
                /* Fallback text banner for products without a mockup */
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--color-brand) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    }}
                  />
                  <div className="relative h-44 flex items-center justify-center md:h-56">
                    <span className="font-display text-5xl font-semibold tracking-tight text-ink/90 md:text-6xl">
                      {product.name}
                    </span>
                  </div>
                </>
              )}
              <div className="absolute top-3 left-3 text-xs text-ink/70">{product.kicker}</div>
              <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-ink/80 backdrop-blur">
                {getStatusLabel(product.status)}
              </div>
            </div>

            <div className="space-y-5 p-6 text-sm md:p-8">
              <div>
                <div className="mb-1 text-xs font-medium text-brand">Description</div>
                <p className="leading-relaxed text-ink/85">
                  {product.longDescription ?? product.description}
                </p>
                {product.proofNote && (
                  <p className="mt-3 rounded-lg border border-border bg-elevated/40 p-3 text-xs leading-relaxed text-muted">
                    {product.proofNote}
                  </p>
                )}
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
                  <a
                    href={product.placeholderProofUrl ?? "/placeholders/product-proof.html"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-elevated"
                  >
                    <ExternalLink className="size-3.5" />
                    Mock proof pack
                  </a>
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
                  <a
                    href={product.placeholderPrdUrl ?? "/placeholders/prd-placeholder.html"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/50 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-elevated"
                  >
                    <FileText className="size-3.5" />
                    Mock PRD
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
