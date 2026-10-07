import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Durlabh's ability to translate ambiguous product requirements into clear, testable acceptance criteria saved our sprint multiple times. He thinks like a PM but writes like a BA — rare combination.",
    author: "Senior Developer",
    context: "Greenfinch Global Consultancy",
    initials: "SD",
    color: "from-violet-500/20 to-violet-900/5",
    ring: "ring-violet-500/30",
  },
  {
    quote:
      "The CafeOS requirement spec was the clearest I've seen from someone who hadn't held the PM title yet. Stakeholder alignment was zero-drama. He'd read the room better than people twice his experience.",
    author: "Operations Lead",
    context: "3-Cafe Pilot Partner",
    initials: "OL",
    color: "from-emerald-500/20 to-emerald-900/5",
    ring: "ring-emerald-500/30",
  },
  {
    quote:
      "He ran our JTBD workshops with real discipline — not the fluffy 'jobs-to-be-done' buzzword stuff, but genuine hypothesis framing followed by user interviews. The insights were actionable on day one.",
    author: "Co-Founder",
    context: "AI Startup Cohort",
    initials: "CF",
    color: "from-brand/20 to-brand/5",
    ring: "ring-brand/30",
  },
  {
    quote:
      "Durlabh joined mid-sprint and still wrote the tightest PRD I've reviewed in the last 12 months. One page, clear north star, explicit out-of-scope — no fluff, no feature sprawl.",
    author: "Engineering Manager",
    context: "Edtech Engagement",
    initials: "EM",
    color: "from-amber-500/20 to-amber-900/5",
    ring: "ring-amber-500/30",
  },
  {
    quote:
      "What impressed me most was the eval mindset. He wasn't just prompting the model — he built a test set, tracked regressions, and treated the AI as a product requirement, not a black box.",
    author: "AI Product Lead",
    context: "Mentorship Session",
    initials: "AP",
    color: "from-cyan-500/20 to-cyan-900/5",
    ring: "ring-cyan-500/30",
  },
  {
    quote:
      "His feedback on our onboarding flow was sharper than the UX consultant we'd hired. He tied every suggestion directly back to a drop-off metric we could track. Extremely results-oriented.",
    author: "Product Designer",
    context: "SaaS Collaboration",
    initials: "PD",
    color: "from-rose-500/20 to-rose-900/5",
    ring: "ring-rose-500/30",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Testimonials() {
  return (
    <section className="w-full py-24 px-4" id="testimonials">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Social Proof
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            What People Say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            Excerpts from colleagues, pilot partners, and collaborators.{" "}
            <span className="text-muted/60">
              ⚠ Placeholder — replace with verified quotes before sharing broadly.
            </span>
          </p>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              className={`break-inside-avoid rounded-2xl bg-gradient-to-br ${t.color} border border-border/60 p-5 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/20`}
            >
              {/* Quote icon */}
              <Quote className="mb-3 size-5 text-muted/40" />

              {/* Quote text */}
              <p className="text-[13px] leading-relaxed text-ink/85">"{t.quote}"</p>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3">
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ${t.ring} bg-black/60 font-mono text-xs font-semibold text-ink`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink">{t.author}</div>
                  <div className="text-[11px] text-muted">{t.context}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
