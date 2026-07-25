import { useSection } from "@/lib/portfolio-content";
import { Reveal } from "./Reveal";

export function Education() {
  const education = useSection("education");
  const certifications = useSection("certifications");
  return (
    <section id="education" className="">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-muted">
              Education & Certifications
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <Reveal>
              <div className="border border-border rounded-2xl p-8">
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand mb-2">
                  Degree
                </div>
                <div className="font-display text-2xl font-medium">
                  {education.degree}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {education.specialization} · {education.school}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted mb-4">
                  Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <span
                      key={c}
                      className="text-sm rounded-full border border-border px-3 py-1 bg-surface"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
