import { queryOptions, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type {
  Article,
  LinkedInPost,
} from "@/data/portfolio";

/**
 * Portfolio content is stored in a single Supabase table `portfolio_content`
 * with one row per section. Each row has:
 *   - section: string (unique key, e.g. "profile", "featuredProducts")
 *   - data:    jsonb   (the section's payload — shape defined below)
 *
 * The admin page can edit `data` for any section without schema changes.
 */

// ---------- Section payload types ----------

export type ProfileSection = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  coords: string;
  email: string;
  socials: { label: string; href: string }[];
};

export type AboutSection = {
  paragraphs: string[];
  stats: { label: string; value: number; suffix: string }[];
};

export type ProjectStatus = "shipped" | "concept";

export type FeaturedProduct = {
  index: string;
  kicker: string;
  name: string;
  role: string;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl: string;
  prdUrl: string;
  linksLive: boolean;
  accent: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tag: string;
  status: ProjectStatus;
  problem: string;
  research: string;
  jtbd: string;
  prd: string;
  metrics: string[];
  lessons: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  active: boolean;
  summary: string;
  highlights: string[];
};

export type StartupItem = {
  name: string;
  role: string;
  tag: string;
  summary: string;
  responsibilities: string[];
};

export type Framework = { name: string; tag: string; desc: string; usedIn?: string };
export type LabItem = { name: string; desc: string };
export type SkillsSection = Record<string, string[]>;
export type EducationSection = {
  degree: string;
  specialization: string;
  school: string;
};

// Section key -> payload type
export type PortfolioSectionMap = {
  profile: ProfileSection;
  about: AboutSection;
  featuredProducts: FeaturedProduct[];
  caseStudies: CaseStudy[];
  experience: ExperienceItem[];
  startups: StartupItem[];
  frameworks: Framework[];
  articles: Article[];
  aiLab: LabItem[];
  skills: SkillsSection;
  education: EducationSection;
  linkedinPosts: LinkedInPost[];
  certifications: string[];
};

export type PortfolioSectionKey = keyof PortfolioSectionMap;

export type PortfolioContentRow = {
  id: string;
  section: string;
  data: unknown;
  updated_at: string;
  created_at: string;
};

// ---------- Fetchers ----------

export async function fetchAllPortfolioContent(): Promise<
  Partial<PortfolioSectionMap>
> {
  const { data, error } = await (supabase as unknown as {
    from: (t: string) => {
      select: (c: string) => Promise<{ data: PortfolioContentRow[] | null; error: unknown }>;
    };
  })
    .from("portfolio_content")
    .select("section, data");

  if (error) throw error;

  const out: Record<string, unknown> = {};
  for (const row of data ?? []) out[row.section] = row.data;
  return out as Partial<PortfolioSectionMap>;
}

export async function fetchPortfolioSection<K extends PortfolioSectionKey>(
  section: K
): Promise<PortfolioSectionMap[K] | null> {
  const { data, error } = await (supabase as unknown as {
    from: (t: string) => {
      select: (c: string) => {
        eq: (col: string, val: string) => {
          maybeSingle: () => Promise<{
            data: { data: unknown } | null;
            error: unknown;
          }>;
        };
      };
    };
  })
    .from("portfolio_content")
    .select("data")
    .eq("section", section)
    .maybeSingle();

  if (error) throw error;
  return (data?.data as PortfolioSectionMap[K]) ?? null;
}

// ---------- React Query helpers ----------

export const portfolioContentQueryOptions = queryOptions({
  queryKey: ["portfolio_content", "all"],
  queryFn: fetchAllPortfolioContent,
  staleTime: 0,
  refetchOnWindowFocus: true,
});

export function sectionQueryOptions<K extends PortfolioSectionKey>(section: K) {
  return queryOptions({
    queryKey: ["portfolio_content", section] as const,
    queryFn: () => fetchPortfolioSection(section),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
}

export function usePortfolioSection<K extends PortfolioSectionKey>(section: K) {
  return useQuery(sectionQueryOptions(section));
}

export function usePortfolioContent() {
  return useQuery(portfolioContentQueryOptions);
}

// ---------- Admin mutation helper (for the future admin page) ----------
// Requires the caller to be signed in AND have the 'admin' role
// (enforced by RLS policies on the portfolio_content table).
export async function upsertPortfolioSection<K extends PortfolioSectionKey>(
  section: K,
  data: PortfolioSectionMap[K]
) {
  const { error } = await (supabase as unknown as {
    from: (t: string) => {
      upsert: (
        row: { section: string; data: unknown },
        opts: { onConflict: string }
      ) => Promise<{ error: unknown }>;
    };
  })
    .from("portfolio_content")
    .upsert(
      { section, data: data as unknown },
      { onConflict: "section" }
    );

  if (error) throw error;
}

// ---------- Static-fallback hook ----------
import * as staticData from "@/data/portfolio";

const FALLBACK: PortfolioSectionMap = {
  profile: staticData.profile,
  about: staticData.about,
  featuredProducts: staticData.featuredProducts,
  caseStudies: staticData.caseStudies,
  experience: staticData.experience,
  startups: staticData.startups,
  frameworks: staticData.frameworks,
  articles: staticData.articles,
  aiLab: staticData.aiLab,
  skills: staticData.skills,
  education: staticData.education,
  linkedinPosts: staticData.linkedinPosts,
  certifications: staticData.certifications,
};

/** Returns DB content for a section, falling back to the static bundled data. */
export function useSection<K extends PortfolioSectionKey>(
  key: K
): PortfolioSectionMap[K] {
  const { data } = usePortfolioSection(key);
  return (data as PortfolioSectionMap[K] | null) ?? FALLBACK[key];
}
