# Durlabh Daryani — AI Product Manager Portfolio

Single-page premium portfolio built on the selected "Precision engineering" direction: white surface with `#2D5BFF` brand blue, dark `#0A0A0B` sections, Instrument Sans display + Inter body, mono accents, subtle motion.

Positioned as an early-career AI PM. No fabricated FAANG history — only the real companies, startups, and products provided.

## Sections (single scrolling page at `/`)

1. **Sticky nav** — Durlabh Daryani mark + Work / Thinking / Lab / Contact + Jaipur coord chip
2. **Hero** — "AI Product Manager" pill, headline "Building AI-first products that solve real customer problems.", subtitle, CTA pair (View Work / Get in touch)
3. **About** — narrative + 3 counters (products shipped, case studies, frameworks used)
4. **Featured Products** (dark section) — 4-card grid: Kartify, CafeOS, FinMate, Tapinfi with role, tech chips, key feature line
5. **Case Studies** — cards for Kartify, CafeOS, Tapinfi, FinMate, AI Campus Assistant, Verdify with Problem → Research → JTBD → PRD → Metrics → Lessons preview structure (expandable in-place)
6. **Career Trajectory + sidebar** — timeline (Greenfinch BA/QA Intern, Assert InfoTech BA) alongside Frameworks + AI Stack aside; Startups (Tapinfi founder, Bharat Svarga founder) as a second timeline block
7. **Product Thinking** — article list (How I build MVPs, AI Product Development, Customer Discovery, etc.)
8. **Framework Library** — interactive grid of RICE, ICE, MoSCoW, Kano, HEART, AARRR, North Star, JTBD, Double Diamond, WSJF, Opportunity Solution Tree, Hook Model — click to expand definition + when-to-use
9. **AI Experiments / Lab** — Prompt Engineering, AI Agents, MCP, n8n, RAG, Multi-agent — as tagged cards
10. **Education + Certifications** — BCA (AI & Data Science), Vivekananda Global University + certifications list
11. **Contact footer** (dark) — big italic CTA, email, LinkedIn, GitHub, Twitter, © line

## Motion

- Section fade-up on enter (Framer Motion `whileInView`)
- Card hover lift + border glow on Featured Products
- Counter tick-up in About
- Magnetic-ish CTA hover (subtle scale)
- Smooth scroll via Lenis
- No 3D / R3F — skipped as not needed

## Tech / stack decisions

- Adapts the spec to the existing TanStack Start + React 19 + Vite + Tailwind v4 + shadcn stack (no Next.js migration).
- Add: `framer-motion`, `lenis`.
- Fonts: Instrument Sans + Inter + JetBrains Mono via `<link>` in `__root.tsx`.
- Design tokens: extend `src/styles.css` with `--color-brand` (#2D5BFF), `--color-ink` (#0A0A0B), `--font-display`, keep existing shadcn tokens intact.
- Content lives in a single typed `src/data/portfolio.ts` file so it's easy to edit.
- All sections as components under `src/components/portfolio/*`.
- Rewrite `src/routes/index.tsx` to render the full portfolio (replaces placeholder). Update root `head()` with real title/description/OG.
- Accessibility: semantic landmarks, one `<main>`, aria-labels on icon buttons, `h-dvh` where full-height, focus-visible rings.
- SEO: title "Durlabh Daryani — AI Product Manager", meta description, OG tags on root; no og:image yet (hosting injects screenshot).

## Out of scope for v1

- Detailed per-case-study routes (case studies are inline previews with full structure — dedicated `/case-studies/$slug` routes can be added later)
- Backend / contact form submission (mailto link only)
- Speaking + Testimonials sections (not enough real content; skipping to avoid fabrication)
