import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Project = {
  index: string;
  name: string;
  eyebrow: string;
  role: string;
  description: string;
  problem: string;
  stack: string[];
  liveUrl?: string;
  notionUrl?: string;
  visual: "phone" | "dashboard" | "game" | "travel";
};

const projects: Project[] = [
  {
    index: "01",
    name: "Tapinfi",
    eyebrow: "NFC · DIGITAL IDENTITY",
    role: "Founder · Product Lead",
    description:
      "A digital business-card platform built around instant sharing, dynamic profiles and lead capture.",
    problem: "Turn a physical introduction into a measurable digital relationship.",
    stack: ["NFC", "React", "Node.js", "MongoDB"],
    liveUrl: "https://tapinfi-peach.vercel.app/",
    visual: "phone",
  },
  {
    index: "02",
    name: "SignalOS",
    eyebrow: "AI · PRODUCT INTELLIGENCE",
    role: "Product · AI Workflow",
    description:
      "An agentic product and competitor intelligence workspace that turns public product signals into decisions.",
    problem:
      "Reduce the time between discovering a market signal and deciding what to do about it.",
    stack: ["AI Agents", "RAG", "Next.js", "Supabase"],
    visual: "dashboard",
  },
  {
    index: "03",
    name: "Vyapaar Saathi",
    eyebrow: "AI · SMB",
    role: "Product · Strategy",
    description:
      "A lightweight digital assistant for small businesses to simplify everyday commerce workflows.",
    problem:
      "Give small-business owners practical tools without enterprise complexity.",
    stack: ["AI", "Next.js", "Supabase"],
    liveUrl: "https://vyapaar-saathi-olive.vercel.app/",
    visual: "dashboard",
  },
  {
    index: "04",
    name: "CafeOS",
    eyebrow: "SAAS · RESTAURANT OPS",
    role: "Product Owner",
    description:
      "A unified operating layer for cafes covering QR ordering, kitchen operations, billing and customer workflows.",
    problem:
      "Replace fragmented operational tools with one connected workflow.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://cafe-os-beige.vercel.app/login",
    visual: "dashboard",
  },
  {
    index: "05",
    name: "RushVerse",
    eyebrow: "GAMING · PROTOTYPE",
    role: "Product · Game Systems",
    description:
      "A game prototype exploring fast feedback loops, progression and replayable interactions.",
    problem:
      "Create a simple core loop that communicates value within the first few seconds.",
    stack: ["Game Design", "Systems", "UX"],
    visual: "game",
  },
  {
    index: "06",
    name: "Bharat Svarga",
    eyebrow: "TRAVEL · AI",
    role: "Founder · Product",
    description:
      "An AI-assisted tourism concept connecting personalised journeys with curated destinations and experiences.",
    problem:
      "Make planning culturally rich travel feel as simple as describing what you want.",
    stack: ["AI", "Recommendations", "Travel UX"],
    visual: "travel",
  },
];

function Visual({ project }: { project: Project }) {
  if (project.visual === "phone") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[78%] w-[42%] max-w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border border-white/20 bg-neutral-950 p-2 shadow-2xl shadow-brand/20">
          <div className="h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-brand/20 via-black to-black p-4">
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-white/20" />
            <div className="text-[9px] uppercase tracking-[0.25em] text-brand">
              Tapinfi
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-white">
              Connect once.
            </div>
            <div className="mt-1 text-xs text-white/45">Remembered longer.</div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="size-10 rounded-full bg-gradient-to-br from-brand to-white/20" />
              <div className="mt-3 h-2 w-24 rounded bg-white/70" />
              <div className="mt-2 h-1.5 w-32 rounded bg-white/15" />
              <div className="mt-5 h-9 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "game") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-black to-cyan-500/10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          animate={{ x: [0, 18, -10, 0], y: [0, -10, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[34%] top-[32%] size-24 rounded-[30%] border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,.18)]"
        />
        <motion.div
          animate={{ x: [0, -20, 12, 0], y: [0, 12, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[24%] right-[22%] size-16 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10"
        />
        <div className="absolute bottom-5 left-6 text-[9px] font-mono uppercase tracking-[0.25em] text-white/40">
          CORE LOOP / 001
        </div>
      </div>
    );
  }

  if (project.visual === "travel") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-200/15 via-orange-500/10 to-black">
        <div className="absolute -right-16 -top-16 size-64 rounded-full border border-amber-200/10" />
        <div className="absolute left-8 top-10 text-[9px] font-mono uppercase tracking-[0.3em] text-amber-100/60">
          RAJASTHAN / 01
        </div>
        <div className="absolute bottom-8 left-8 max-w-xs">
          <div className="font-display text-4xl font-semibold tracking-tight text-white">
            Find the story.
          </div>
          <div className="mt-2 text-sm text-white/45">
            Personalised journeys across culture, heritage and place.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand/10 via-black to-white/[0.03] p-5">
      <div className="grid h-full grid-cols-[1fr_2fr] gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div className="h-2 w-12 rounded bg-white/20" />
          <div className="mt-6 space-y-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-7 rounded-lg bg-white/[0.05]" />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-28 rounded bg-white/20" />
            <div className="size-5 rounded-full bg-brand/30" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-16 rounded-xl bg-white/[0.05]" />
            ))}
          </div>
          <div className="mt-3 h-28 rounded-xl border border-brand/10 bg-brand/5" />
        </div>
      </div>
    </div>
  );
}

function ProjectLayer({
  project,
  index,
  progress,
  active,
  reducedMotion,
}: {
  project: Project;
  index: number;
  progress: ReturnType<typeof useSpring>;
  active: number;
  reducedMotion: boolean | null;
}) {
  const opacity = useTransform(
    progress,
    [index - 1.15, index - 0.45, index, index + 0.45, index + 1.15],
    [0, 0.18, 1, 0.18, 0]
  );
  const scale = useTransform(
    progress,
    [index - 1, index, index + 1],
    [0.88, 1, 0.88]
  );
  const y = useTransform(
    progress,
    [index - 1, index, index + 1],
    [42, 0, -42]
  );
  const leftX = useTransform(
    progress,
    [index - 1, index, index + 1],
    [-42, 0, 42]
  );
  const rightX = useTransform(
    progress,
    [index - 1, index, index + 1],
    [42, 0, -42]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity: reducedMotion ? (active === index ? 1 : 0) : opacity,
        pointerEvents: active === index ? "auto" : "none",
      }}
    >
      <div className="grid h-full items-center gap-8 lg:grid-cols-[0.78fr_1.7fr_0.78fr] lg:gap-10">
        <motion.div
          style={{ x: reducedMotion ? 0 : leftX }}
          className="order-2 lg:order-1"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35">
            {project.index}
          </div>
          <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {project.name}
          </h3>
          <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
            {project.eyebrow}
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-cta-ink transition-transform hover:-translate-y-0.5"
              >
                View product ↗
              </a>
            )}
            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5"
              >
                Detailed case study ↗
              </a>
            )}
          </div>
          <div className="mt-6 text-xs text-white/30">Role · {project.role}</div>
        </motion.div>

        <motion.div
          style={{
            scale: reducedMotion ? 1 : scale,
            y: reducedMotion ? 0 : y,
          }}
          className="order-1 flex min-h-0 items-center justify-center lg:order-2"
        >
          <div className="relative h-[42vh] min-h-[310px] max-h-[520px] w-full max-w-2xl md:h-[58vh]">
            <div className="absolute inset-10 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm md:p-4">
              <Visual project={project} />
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ x: reducedMotion ? 0 : rightX }}
          className="order-3"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/30">
            The product question
          </div>
          <p className="mt-4 text-base leading-7 text-white/75 md:text-lg md:leading-8">
            {project.problem}
          </p>
          <div className="mt-7 text-[10px] font-mono uppercase tracking-[0.22em] text-white/25">
            Scroll to continue
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function CinematicProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });
  const projectProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  useMotionValueEvent(projectProgress, "change", (latest) => {
    const next = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(latest))
    );
    setActive((current) => (current === next ? current : next));
  });

  const goToProject = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY;
    const scrollable = Math.max(0, section.offsetHeight - window.innerHeight);
    const ratio = projects.length === 1 ? 0 : index / (projects.length - 1);

    window.scrollTo({
      top: top + scrollable * ratio,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative h-[620vh] bg-ink text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.05),transparent_32%),linear-gradient(to_bottom,#090909,#050505)]" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-10 md:py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand">
                Selected work · scroll sequence
              </div>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-5xl">
                Products, systems & experiments.
              </h2>
            </div>
            <div className="hidden text-right text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 md:block">
              {String(active + 1).padStart(2, "0")} / 06
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            {projects.map((project, index) => (
              <ProjectLayer
                key={project.name}
                project={project}
                index={index}
                progress={projectProgress}
                active={active}
                reducedMotion={prefersReducedMotion}
              />
            ))}

            <div className="pointer-events-none absolute bottom-7 left-0 right-0 hidden items-end justify-between gap-8 md:flex">
              <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.25em] text-white/25">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                Scroll through the work
              </div>
              <div className="flex items-center gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.name}
                    onClick={() => goToProject(index)}
                    className="pointer-events-auto group flex items-center gap-2"
                    aria-label={"Go to " + project.name}
                    aria-current={index === active ? "step" : undefined}
                  >
                    <span
                      className={
                        "h-1 rounded-full transition-all duration-300 " +
                        (index === active
                          ? "w-9 bg-brand"
                          : "w-3 bg-white/15 group-hover:bg-white/35")
                      }
                    />
                    <span className="sr-only">{project.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <motion.div
                className="h-px origin-left bg-brand"
                style={{
                  scaleX: useTransform(
                    smoothProgress,
                    [0, 1],
                    [0.03, 1]
                  ),
                }}
              />
            </div>
            <div className="flex min-w-[86px] justify-between text-[9px] font-mono uppercase tracking-[0.22em] text-white/25">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span>06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
