import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { CinematicProjects } from "@/components/portfolio/CinematicProjects";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Experience } from "@/components/portfolio/Experience";
import { Thinking } from "@/components/portfolio/Thinking";
import { LinkedInPosts } from "@/components/portfolio/LinkedInPosts";
import { Frameworks } from "@/components/portfolio/Frameworks";
import { Lab } from "@/components/portfolio/Lab";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const sections = [
  { id: "hero", node: <Hero />, reveal: false },
  { id: "about", node: <About />, reveal: true },
  { id: "products", node: <CinematicProjects />, reveal: false },
  { id: "case-studies", node: <CaseStudies />, reveal: true },
  { id: "experience", node: <Experience />, reveal: true },
  { id: "thinking", node: <Thinking />, reveal: true },
  { id: "posts", node: <LinkedInPosts />, reveal: true },
  { id: "frameworks", node: <Frameworks />, reveal: true },
  { id: "lab", node: <Lab />, reveal: true },
  { id: "education", node: <Education />, reveal: true },
  { id: "contact", node: <Contact />, reveal: true },
];

function Index() {
  return (
    <div className="mac-desktop mac-desktop-noise min-h-dvh font-sans text-ink selection:bg-brand selection:text-white">
      <BackgroundFX />

      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main className="w-full">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="w-full scroll-mt-20"
            aria-label={s.id}
          >
            {s.reveal ? <Reveal>{s.node}</Reveal> : s.node}
          </section>
        ))}
      </main>
    </div>
  );
}
