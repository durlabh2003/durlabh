# Durlabh Daryani — Portfolio

A premium, interactive, single-page portfolio for **Durlabh Daryani**, AI Product Manager. Built with TanStack Start, React 19, Tailwind v4, Framer Motion, and Lovable Cloud (Supabase) as the CMS backend.

Live: https://durlabh.lovable.app

---

## 1. Concept & Design Language

**Aesthetic:** Premium dark, glassmorphic, Apple/Stripe/Linear-inspired. A single distinctive direction — deep black surface (`#050505`), soft cyan/blue accents, refined glass panels, subtle grain, and GPU-accelerated ambient background animations that never block scroll.

**Design principles**
- One immersive dark theme (light mode deliberately removed).
- Glass surfaces with hairline top-edge highlights and layered shadows.
- Motion is expressive but disciplined — respects `prefers-reduced-motion`.
- Typography: **Instrument Sans** (display/body) + **SF Mono / JetBrains Mono** (accents).
- No fabricated FAANG credentials — the story centers on real startup product work and AI-native PM expertise.

---

## 2. Information Architecture

Single-page storytelling with dedicated deep-dive routes:

| Route | Purpose |
|---|---|
| `/` | Home — Hero, About, Experience, Featured Products, Case Studies, Frameworks, AI Lab, LinkedIn Posts, Education, Contact |
| `/projects` | Full grid of every product & case study |
| `/thinking` | Product-thinking essay archive |
| `/thinking/$slug` | Long-form essay reading view |
| `/thoughts` | LinkedIn post archive (latest always first) |
| `/sitemap.xml` | Dynamic sitemap |

Global chrome: floating glass **Nav** (smart header — hides on scroll-down, reappears on scroll-up, auto-hides after 1400ms idle) and a global **Footer**. Nav groups links into four dropdowns: **Portfolio · Insights · Lab · About**.

---

## 3. Tech Stack

- **Framework:** TanStack Start v1 (React 19, Vite 7, SSR-capable, edge runtime)
- **Styling:** Tailwind CSS v4 via `src/styles.css` (native `@import` + `@theme`)
- **Motion:** Framer Motion + Lenis smooth-scroll (disabled on snap layouts)
- **Forms:** react-hook-form + zod
- **Data / CMS:** Lovable Cloud (Supabase) — `portfolio_content` JSONB table
- **State/Fetching:** TanStack Query (in-router integration)
- **Fonts:** Google Fonts (Instrument Sans, JetBrains Mono) via `<link>` in `__root.tsx`

---

## 4. Backend (Lovable Cloud)

### 4.1 Philosophy: JSONB CMS in one table
The portfolio is intentionally managed as a **single-table JSONB CMS** rather than many normalized tables. The site has many distinct content sections (Hero, About, Products, Essays, LinkedIn posts, etc.), but each section's shape is small, stable, and owned by one page. A single table keeps migrations minimal: adding a new section is just a new row, not a new schema change.

### 4.2 Table: `portfolio_content`

```sql
CREATE TABLE public.portfolio_content (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section     text NOT NULL UNIQUE,
  data        jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at  timestamptz NOT NULL DEFAULT now(),
  created_at  timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.portfolio_content TO anon;
GRANT SELECT ON public.portfolio_content TO authenticated;
GRANT ALL ON public.portfolio_content TO service_role;

ALTER TABLE public.portfolio_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolio content is publicly readable"
  ON public.portfolio_content FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert portfolio content"
  ON public.portfolio_content FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update portfolio content"
  ON public.portfolio_content FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete portfolio content"
  ON public.portfolio_content FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
```

| Column | Type | Purpose |
|---|---|---|
| `id` | `uuid` | Primary key. Not used by the app. |
| `section` | `text` | Unique, stable identifier for each site section. The frontend selects rows by this key. |
| `data` | `jsonb` | The entire section payload — arrays, nested objects, strings, etc. Postgres validates it as JSON but does not enforce the internal shape (enforcement lives in TypeScript / the admin UI). |
| `updated_at` | `timestamptz` | Auto-updated via trigger; useful for cache busting and audit. |
| `created_at` | `timestamptz` | Original insertion time. |

### 4.3 `section` keys and their JSON shapes

| `section` key | TypeScript type | What it renders |
|---|---|---|
| `profile` | `ProfileSection` | Hero: name, role, tagline, location, email, social links. |
| `about` | `AboutSection` | About block: paragraphs + stat grid. |
| `featuredProducts` | `FeaturedProduct[]` | Home product cards that open the ProjectModal. |
| `caseStudies` | `CaseStudy[]` | Deep-dive case studies on the home page and `/projects`. |
| `experience` | `ExperienceItem[]` | Career timeline. |
| `startups` | `StartupItem[]` | Startup / founder projects list. |
| `frameworks` | `Framework[]` | PM framework library grid. |
| `articles` | `Article[]` | Long-form essays shown in `Thinking.tsx` and `/thinking`. |
| `aiLab` | `LabItem[]` | AI experiment / side-project cards. |
| `skills` | `SkillsSection` | Grouped skills map (e.g. `Product: [...], AI: [...]`). |
| `education` | `EducationSection` | Degree, specialization, school. |
| `linkedinPosts` | `LinkedInPost[]` | Embedded LinkedIn posts; latest 3 on home, full archive at `/thoughts`. |
| `certifications` | `string[]` | Cert list in Education section. |

These types are declared in `src/lib/portfolio-content.ts` as `PortfolioSectionMap`, and the `PortfolioSectionKey` union is derived from its keys. This gives the frontend compile-time guarantees when reading or writing any section.

### 4.4 Example JSON payloads

#### `profile` (single object)
```json
{
  "name": "Durlabh Daryani",
  "role": "AI Product Manager",
  "tagline": "Building AI-first products that solve real customer problems...",
  "location": "Jaipur, Rajasthan, India",
  "coords": "JPR // 26.9124° N",
  "email": "durlabh.daryani@gmail.com",
  "socials": [
    { "label": "LinkedIn", "href": "https://linkedin.com/in/durlabhdaryani" },
    { "label": "Twitter", "href": "https://twitter.com/durlabhdaryani" },
    { "label": "GitHub", "href": "https://github.com/durlabhdaryani" }
  ]
}
```

#### `featuredProducts` (array of objects)
```json
[
  {
    "index": "01",
    "kicker": "AI SHOPPING",
    "name": "Kartify",
    "role": "PM · UX · AI Workflow",
    "description": "Conversational AI shopping assistant...",
    "longDescription": "Kartify replaces 20 open tabs with one conversation...",
    "stack": ["Next.js", "Gemini", "Supabase", "n8n"],
    "liveUrl": "https://kartify.ai",
    "prdUrl": "https://kartify.ai/prd",
    "accent": "from-emerald-400/30 to-emerald-900/10"
  }
]
```

#### `articles` (array of objects used by `/thinking/$slug`)
```json
[
  {
    "slug": "windsurf-vs-cursor",
    "title": "Windsurf vs Cursor: an AI PM's take",
    "tag": "AI",
    "date": "2026-07-20",
    "readTime": "7 min",
    "excerpt": "...",
    "body": ["Paragraph 1", "Paragraph 2", "Paragraph 3"]
  }
]
```

#### `skills` (grouped object)
```json
{
  "Product": ["Discovery", "Prioritization", "Roadmapping", "User Research"],
  "AI & Data": ["Prompt Engineering", "LLM Evaluation", "RAG", "n8n"],
  "Engineering": ["React", "TypeScript", "Next.js", "Supabase"]
}
```

### 4.5 Security: roles + RLS
- The `user_roles` table stores one role per row via the `app_role` enum (`admin`, `moderator`, `user`).
- The `has_role(user_id, role)` function is a `SECURITY DEFINER` SQL function so RLS policies can read `user_roles` without creating recursive policy loops.
- Public visitors can read all portfolio content. Only authenticated users with the `admin` role can insert, update, or delete rows.
- Admin UI writes should use `upsertPortfolioSection` from the browser client; RLS rejects the request automatically if the caller is not an admin.

### 4.6 Client helper — `src/lib/portfolio-content.ts`
- `PortfolioSectionMap` — maps each `section` key to its TypeScript payload type.
- `fetchPortfolioSection(key)` / `usePortfolioSection(key)` — fetches one section.
- `fetchAllPortfolioContent()` / `usePortfolioContent()` — fetches every section in one request.
- `useSection(key)` — **DB-first with automatic fallback** to `src/data/portfolio.ts` while the query is loading or if it fails. This keeps the site instant on first load and resilient if the DB is temporarily unreachable.
- `upsertPortfolioSection(key, data)` — admin write path; performs `INSERT ... ON CONFLICT (section) DO UPDATE`, so creating and editing a section use the same function.

### 4.7 Adding or editing a section

1. **Without a code change:** insert or update the JSONB row directly. The frontend will read the new data on the next load. If the JSON shape is wrong, the component will render empty or fallback fields; no crash because the component reads through `useSection`.

2. **With a code change (new section):**
   - Add the type to `PortfolioSectionMap` in `src/lib/portfolio-content.ts`.
   - Add fallback data to `src/data/portfolio.ts`.
   - Insert a row into `portfolio_content` with the same key and JSON shape.
   - Build the UI component that consumes `useSection('newKey')`.

3. **For the future admin page:** a form component can render fields based on the selected section key and call `upsertPortfolioSection(key, payload)`. The same `has_role` RLS policy protects it, so the page only needs to handle auth and the form UI.

### 4.8 Caching
TanStack Query caches portfolio content for 60 seconds (`staleTime: 1000 * 60`). After that, background refetches keep the page fresh without blocking render. Because every section is a JSONB object, the payload is small and fits comfortably in a single query.


---

## 5. Directory Map

```
src/
├── routes/
│   ├── __root.tsx              SEO, fonts, providers, Footer
│   ├── index.tsx               Home — stacked sections + Reveal
│   ├── projects.tsx            All products & case studies grid
│   ├── thinking.tsx            Essay archive
│   ├── thinking.$slug.tsx      Essay reader
│   ├── thoughts.tsx            LinkedIn archive
│   └── sitemap[.]xml.ts        Dynamic sitemap
├── components/portfolio/
│   ├── Nav.tsx                 Smart-header glass pill w/ scroll progress
│   ├── Footer.tsx              Global footer
│   ├── Hero.tsx                Centered impact hero, magnetic CTAs
│   ├── About.tsx               Story + values
│   ├── Experience.tsx          Career timeline
│   ├── FeaturedProducts.tsx    Cards → ProjectModal
│   ├── ProjectModal.tsx        Glass modal w/ Live + PRD links
│   ├── CaseStudies.tsx         Deep dives
│   ├── Frameworks.tsx          PM framework library
│   ├── Thinking.tsx            Essay teasers
│   ├── Lab.tsx                 AI experiments
│   ├── LinkedInPosts.tsx       Latest 3 posts
│   ├── PostCard.tsx            Post cell
│   ├── Education.tsx           Degrees + certs
│   ├── Contact.tsx             react-hook-form + zod
│   ├── Reveal.tsx              Scroll-in stagger
│   ├── Magnetic.tsx            Cursor-magnet buttons
│   └── BackgroundFX.tsx        GPU-only ambient CSS keyframes
├── hooks/
│   ├── use-active-section.ts
│   └── use-prefers-reduced-motion.ts
├── lib/
│   └── portfolio-content.ts    Types + Query hooks + fallback
├── data/portfolio.ts           Static content (fallback + seed source)
└── styles.css                  Tokens, glass utilities, grain, keyframes
```

---

## 6. Key Interactions

- **Smart Nav:** hides on scroll-down, shows on scroll-up, disappears after ~1.4s idle. Scroll-progress bar across the top.
- **Reveal:** staggered fade+lift as sections enter viewport (skipped under reduced-motion).
- **Magnetic buttons:** cursor-follow spring on primary CTAs.
- **ProjectModal:** click any featured product → glass modal with cover, description, **Live** + **PRD** buttons.
- **CV download:** button in Hero + Nav pointing to `public/Durlabh-Daryani-CV.pdf`.
- **Contact form:** validated with zod, terminal-inspired feedback states.

---

## 7. SEO

- Unique `head()` per route: title (<60), description (<160), `og:title`, `og:description`, `og:type`, `twitter:card`. Leaf routes with hero imagery set `og:image` + `twitter:image`.
- Semantic HTML — one `<h1>` per page, `<h2>` section headings, aria labels on nav/landmarks.
- `public/robots.txt`, `public/llms.txt`, dynamic `/sitemap.xml`.
- JSON-LD, lazy images, canonical, responsive viewport.

---

## 8. Performance & Accessibility

- Background FX uses only `transform` + `opacity`, `will-change: transform`, `contain: strict` — no layout thrash while scrolling.
- Lenis smooth scroll on standard routes; disabled where snap or modals need control.
- All animations short-circuit for `prefers-reduced-motion`.
- Focus rings preserved; native cursor; keyboard-navigable dropdowns.

---

## 9. Content Highlights (Real, Non-Fabricated)

- **Startups:** Greenfinch, Assert InfoTech, Tapinfi.
- **Role:** AI Product Manager — 0→1 product work, AI-native workflows, PRDs, growth loops.
- **Frameworks:** original PM playbooks covering discovery, prioritization, AI eval, and shipping.
- **Essays:** 8 long-form pieces on PM + AI.
- **LinkedIn feed:** newest post always pinned first; latest 3 on home, full archive at `/thoughts`.

---

## 10. Development

```bash
bun install
bun run dev        # Vite dev server on :8080
```

- Never edit `src/routeTree.gen.ts` or `src/integrations/supabase/*` (auto-generated).
- Add new sections by inserting a row in `portfolio_content` and extending `PortfolioSectionMap`.
- Admin UI (future): auth flow → grant self `admin` role → form calling `upsertPortfolioSection`.

---

## 11. Roadmap

- `/admin` UI to edit every section via the `upsertPortfolioSection` API.
- ⌘K command palette for global navigation.
- Per-essay OG image generation.
- MDX support for long-form thinking pieces.

---

**Built by Durlabh Daryani** · AI Product Manager
