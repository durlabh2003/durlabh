import { Link } from "@tanstack/react-router";
import { useSection } from "@/lib/portfolio-content";
import { Apple, ChevronDown, Download } from "lucide-react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MenuItem = {
  label: string;
  to?: string;
  hash?: string;
  href?: string;
  download?: boolean;
  icon?: React.ReactNode;
};

type MenuCategory = {
  label: string;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    label: "Portfolio",
    items: [
      { label: "Work", to: "/", hash: "work" },
      { label: "Case Studies", to: "/", hash: "case-studies" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Posts", to: "/", hash: "posts" },
      { label: "Product Thinking", to: "/thinking" },
      { label: "Thoughts", to: "/thoughts" },
    ],
  },
  {
    label: "Lab",
    items: [{ label: "Lab", to: "/", hash: "lab" }],
  },
  {
    label: "About",
    items: [
      { label: "About me", to: "/", hash: "about" },
      { label: "Contact", to: "/", hash: "contact" },
      {
        label: "Download CV",
        href: "/Durlabh-Daryani-CV.pdf",
        download: true,
        icon: <Download className="size-3.5" />,
      },
    ],
  },
];

const menuContentClass =
  "min-w-[11rem] rounded-xl border border-border bg-elevated/95 p-1.5 text-ink shadow-2xl backdrop-blur-xl";

const menuItemClass =
  "cursor-pointer rounded-lg px-3 py-2 text-[13px] outline-none transition-colors hover:bg-brand/10 hover:text-brand focus:bg-brand/10 focus:text-brand data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

export function Nav() {
  const profile = useSection("profile");
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const [hidden, setHidden] = useState(false);
  const scrollStopTimer = useRef<number | null>(null);

  const clearScrollStopTimer = () => {
    if (scrollStopTimer.current !== null) {
      window.clearTimeout(scrollStopTimer.current);
      scrollStopTimer.current = null;
    }
  };

  useEffect(() => {
    return () => clearScrollStopTimer();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    clearScrollStopTimer();

    if (latest < previous) {
      setHidden(false);
    } else if (latest > previous && latest > 80) {
      setHidden(true);
    }

    scrollStopTimer.current = window.setTimeout(() => {
      if (latest > 80) {
        setHidden(true);
      }
    }, 1400);
  });

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center gap-2 rounded-full border border-border bg-elevated/70 px-3 py-2 shadow-2xl backdrop-blur-xl">

          <Link
            to="/"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-ink transition-colors hover:bg-white/5"
          >
            <Apple className="size-4" />
            <span className="font-semibold text-[13px]">
              {profile.name.split(" ")[0]}
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 text-[13px] text-ink/80 md:flex">
            {categories.map((cat) =>
              cat.items.length === 1 ? (
                <SingleNavLink key={cat.label} item={cat.items[0]}>
                  {cat.label}
                </SingleNavLink>
              ) : (
                <DropdownMenu key={cat.label}>
                  <DropdownMenuTrigger className="group flex items-center gap-0.5 rounded-full px-3 py-1.5 outline-none transition-colors hover:bg-white/5 hover:text-brand data-[state=open]:bg-white/5 data-[state=open]:text-brand">
                    {cat.label}
                    <ChevronDown className="size-3 transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className={menuContentClass}
                  >
                    {cat.items.map((item, idx) => (
                      <NavDropdownItem
                        key={item.label}
                        item={item}
                        withSeparator={
                          cat.label === "About" &&
                          idx === cat.items.length - 1 &&
                          cat.items.length > 2
                        }
                      />
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </div>

        </div>
      </motion.nav>


      <motion.div
        aria-hidden
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed bottom-0 left-0 z-50 h-[2px] w-full bg-brand/70"
      />
    </>
  );
}

function SingleNavLink({
  item,
  children,
}: {
  item: MenuItem;
  children: React.ReactNode;
}) {
  if (item.href) {
    return (
      <a
        href={item.href}
        download={item.download}
        className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-brand"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={item.to!}
      hash={item.hash}
      className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-brand"
    >
      {children}
    </Link>
  );
}

function NavDropdownItem({
  item,
  withSeparator,
}: {
  item: MenuItem;
  withSeparator?: boolean;
}) {
  return (
    <>
      {withSeparator && <DropdownMenuSeparator className="my-1 h-px bg-border" />}
      {item.href ? (
        <DropdownMenuItem asChild className={menuItemClass}>
          <a
            href={item.href}
            download={item.download}
            className="flex w-full cursor-pointer items-center gap-2"
          >
            {item.icon}
            {item.label}
          </a>
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem asChild className={menuItemClass}>
          <Link
            to={item.to!}
            hash={item.hash}
            className="flex w-full cursor-pointer items-center gap-2"
          >
            {item.icon}
            {item.label}
          </Link>
        </DropdownMenuItem>
      )}
    </>
  );
}
