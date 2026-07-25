import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { ArrowUpRight, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Thinking", to: "/thinking" },
  { label: "Thoughts", to: "/thoughts" },
];

export function Footer() {
  const profile = useSection("profile");
  return (
    <footer className="w-full border-t border-border bg-surface/60 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link to="/" className="font-display text-2xl font-medium tracking-tight text-ink hover:text-brand transition-colors">
              {profile.name}
            </Link>
            <p className="mt-2 max-w-md text-sm text-muted">
              {profile.role} based in {profile.location}. Building AI-first products through research, rapid experimentation, and data-driven decisions.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink hover:text-brand transition-colors"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-sm text-ink hover:text-brand transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-ink hover:text-brand transition-colors"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Durlabh-Daryani-CV.pdf"
                  download
                  className="group inline-flex items-center gap-1 text-sm text-ink hover:text-brand transition-colors"
                >
                  Download CV
                  <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            {profile.coords} · built with React + TanStack
          </p>
        </div>
      </div>
    </footer>
  );
}
