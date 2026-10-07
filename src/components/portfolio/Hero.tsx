import { useState } from "react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/portfolio-content";
import { ArrowRight, Download, Mail, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { RecruiterModal } from "./RecruiterModal";

export function Hero() {
  const profile = useSection("profile");
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* Radial glow behind the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div className="h-[32rem] w-[32rem] rounded-full bg-brand/12 blur-[130px] md:h-[44rem] md:w-[44rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/70 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          <span className="text-xs font-medium tracking-wide text-ink/80">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.02 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-muted"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-display font-semibold tracking-[-0.04em] leading-[0.92] text-balance text-6xl sm:text-7xl md:text-[8.5rem] lg:text-[10.5rem]"
        >
          <span className="block bg-gradient-to-b from-ink via-ink/95 to-ink/80 bg-clip-text text-transparent">
            AI Product
          </span>
          <span className="block bg-gradient-to-br from-brand via-ink to-ink/85 bg-clip-text text-transparent">
            Manager.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted/90"
        >
          Four product builds, six PM case studies, and clearly marked proof placeholders where
          public evidence is still being prepared.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={0.3}>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cta-ink shadow-[0_10px_40px_-10px_rgba(41,151,255,0.6)] transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-brand"
            >
              View work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={() => setRecruiterOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-6 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-cta-ink"
            >
              <Zap className="size-4" />
              60-Sec Recruiter TL;DR
            </button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
            >
              <Mail className="size-4" />
              Contact
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="/Durlabh-Daryani-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-elevated"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <RecruiterModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
    </header>
  );
}
