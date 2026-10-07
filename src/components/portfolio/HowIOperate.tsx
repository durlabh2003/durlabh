import { motion } from "framer-motion";
import {
  Search,
  FileText,
  FlaskConical,
  BarChart3,
  Repeat2,
  MessageSquareQuote,
} from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Discovery before build",
    short: "I talk to users before writing a line of spec.",
    detail:
      "Five interviews per week, a four-column quote-behaviour-workaround-emotion note doc, and a shared 'kill list' that keeps every stakeholder accountable to evidence over opinion.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
  },
  {
    icon: FileText,
    title: "PRDs as communication contracts",
    short: "A PRD is not a document — it's a decision log.",
    detail:
      "I write one-page briefs: problem statement, JTBD, North Star, out-of-scope list, and acceptance criteria. Engineers and designers review it before a single wireframe exists.",
    color: "text-brand",
    border: "border-brand/20",
    bg: "bg-brand/5",
  },
  {
    icon: FlaskConical,
    title: "Treat the MVP as an experiment",
    short: "Every MVP has exactly one riskiest assumption.",
    detail:
      "I define the assumption, the kill metric, and the learning deadline before the first sprint. If the signal doesn't come by week 6, we pivot or kill — not drag on.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
  {
    icon: BarChart3,
    title: "Three events before Amplitude",
    short: "Track activation, core action, retention proxy. That's it.",
    detail:
      "Instrument what matters on day one, review cohort curves every Monday, and only buy tooling when manual analysis costs more than the tool. Most seed products hit that at month 9.",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
  },
  {
    icon: Repeat2,
    title: "Ship, Measure, Repeat",
    short: "Shipping is not the end state — measurement is.",
    detail:
      "Every release ships with a pre-registered metric and a 2-week check-in. If the number didn't move, that's the next sprint's bug — not a retrospective footnote.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
  },
  {
    icon: MessageSquareQuote,
    title: "Write the memo first",
    short: "Decisions get a one-page memo, not a deck.",
    detail:
      "What I'd do today, what changes with a week of research, and what evidence would flip me. The act of writing usually resolves the ambiguity before anyone reads it.",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HowIOperate() {
  return (
    <section className="w-full py-24 px-4" id="operate">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Working Style
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            How I Operate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Six non-negotiable habits that shape every product I touch — from the first discovery
            call to the post-launch cohort review.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={card}
                className={`group relative overflow-hidden rounded-2xl border ${p.border} ${p.bg} p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20`}
              >
                {/* Subtle glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex size-10 items-center justify-center rounded-xl border ${p.border} bg-black/40`}
                >
                  <Icon className={`size-4 ${p.color}`} />
                </div>

                {/* Content */}
                <h3 className="mb-1.5 text-sm font-semibold text-ink">{p.title}</h3>
                <p className={`mb-2 text-xs font-medium ${p.color}`}>{p.short}</p>
                <p className="text-[11.5px] leading-relaxed text-muted">{p.detail}</p>

                {/* Bottom accent line animation */}
                <span
                  className={`absolute bottom-0 left-0 h-px w-0 bg-current opacity-40 transition-all duration-500 group-hover:w-full ${p.color}`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer callout */}
        <div className="mt-10 flex justify-center">
          <p className="max-w-lg text-center text-xs leading-relaxed text-muted">
            These principles are grounded in real builds — see the{" "}
            <a href="#case-studies" className="text-brand underline underline-offset-2">
              Case Studies
            </a>{" "}
            for where each one shows up in practice.
          </p>
        </div>
      </div>
    </section>
  );
}
