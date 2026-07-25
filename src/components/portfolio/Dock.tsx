import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Home,
  Briefcase,
  Folder,
  FileText,
  Lightbulb,
  Library,
  FlaskConical,
  GraduationCap,
  Mail,
  LayoutGrid,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

type DockItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  /** Which in-page section id this dock item represents (for scrollspy on "/"). */
  sectionId?: string;
};

const dockItems: DockItem[] = [
  { id: "top", label: "Home", icon: Home, href: "/", sectionId: "hero" },
  { id: "work", label: "Work", icon: Briefcase, href: "/#work", sectionId: "work" },
  { id: "case-studies", label: "Case Studies", icon: Folder, href: "/#case-studies", sectionId: "case-studies" },
  { id: "posts", label: "Posts", icon: FileText, href: "/#posts", sectionId: "posts" },
  { id: "thinking", label: "Thinking", icon: Lightbulb, href: "/#thinking", sectionId: "thinking" },
  { id: "frameworks", label: "Frameworks", icon: Library, href: "/#frameworks", sectionId: "frameworks" },
  { id: "lab", label: "Lab", icon: FlaskConical, href: "/#lab", sectionId: "lab" },
  { id: "education", label: "Education", icon: GraduationCap, href: "/#education", sectionId: "education" },
  { id: "contact", label: "Contact", icon: Mail, href: "/#contact", sectionId: "contact" },
  { id: "projects", label: "Projects", icon: LayoutGrid, href: "/projects" },
  { id: "thoughts", label: "Thoughts", icon: BookOpen, href: "/thoughts" },
];

const sectionIds = dockItems
  .map((i) => i.sectionId)
  .filter((s): s is string => !!s);

function DockButton({
  item,
  active,
}: {
  item: DockItem;
  active: boolean;
}) {
  const content = (
    <div
      className={cn(
        "group relative flex size-11 items-center justify-center rounded-xl border border-border/50 bg-elevated/80 transition-all duration-200 hover:scale-110 hover:bg-elevated hover:shadow-lg",
        active && "bg-elevated shadow-md ring-1 ring-brand/40",
      )}
    >
      <item.icon
        className={cn(
          "size-5 transition-colors",
          active ? "text-brand" : "text-ink/70 group-hover:text-brand",
        )}
      />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-elevated px-2 py-1 text-[11px] font-medium text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
        {item.label}
      </span>
      {active && (
        <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
      )}
    </div>
  );

  // Home button scrolls to top when already on "/"
  if (item.id === "top") {
    return (
      <Link
        to="/"
        aria-label={item.label}
        aria-current={active ? "page" : undefined}
        className="block"
        onClick={(e) => {
          if (typeof window !== "undefined" && window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        {content}
      </Link>
    );
  }

  // Hash-anchor items use <a> so browser handles smooth-scroll to id
  if (item.href.includes("#")) {
    return (
      <a
        href={item.href}
        aria-label={item.label}
        aria-current={active ? "true" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
      className="block"
    >
      {content}
    </Link>
  );
}

export function Dock() {
  const location = useLocation();
  const pathname = location.pathname;
  const onHome = pathname === "/";
  const activeSection = useActiveSection(onHome ? sectionIds : []);

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 max-w-[calc(100vw-1rem)]">
      <nav
        aria-label="Section navigation"
        className="mac-dock flex items-center gap-2 overflow-x-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {dockItems.map((item) => {
          let active = false;
          if (item.sectionId && onHome) {
            active = activeSection === item.sectionId;
          } else if (!item.sectionId) {
            active = pathname === item.href;
          }
          return <DockButton key={item.id} item={item} active={active} />;
        })}
      </nav>
    </div>
  );
}
