# Durlabh Daryani — AI Product Manager Portfolio

> Turning ambiguous AI product problems into researched, scoped, and testable MVPs with disciplined JTBD framing, structured PRDs, prompt/eval workflows, and measurable retention metrics.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154.svg)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38bdf8.svg)](https://tailwindcss.com/)

---

## 🎯 Positioning & Core Philosophy

This portfolio is built specifically for hiring teams evaluating **AI Product Manager** and **Technical PM** candidates.

Unlike generic portfolios, this site is structured around evidence and product hygiene:

- **PM-First Case Studies:** Every case study follows a strict product framework: `Problem` → `Research` → `JTBD` → `PRD` → `Evidence & Signals` → `Lessons Learned`.
- **Credibility & Honest Proof:** All projects are labeled with verifiable statuses (`Shipped`, `Pilot`, or `Concept`). Pilot metrics and lab usability benchmarks are visually separated from forward-looking targets to prevent overclaiming.
- **AI Workflows & Prototyping:** Demonstrates hands-on fluency in prompt engineering, LLM evaluation sets, structured JSON schemas, and acceptance testing.

---

## 🚀 Featured Product Builds

| Product     | Role                  | Focus                                | Core Signal / Outcome                                                           |
| :---------- | :-------------------- | :----------------------------------- | :------------------------------------------------------------------------------ |
| **Kartify** | PM · UX · AI Workflow | Conversational AI Shopping Assistant | ~78% task completion in internal usability benchmarks; 6-week MVP delivery.     |
| **CafeOS**  | Product Owner         | Modular Operating System for Cafes   | ~31% drop in ticket times & ~42% drop in order errors across 3-cafe beta pilot. |
| **FinMate** | Founding PM           | Gen-Z AI Personal Finance Coach      | <60s time to first insight; closed-beta retention experiments.                  |
| **Tapinfi** | Founder               | NFC & Dynamic Digital Identity SaaS  | <90s onboarding-to-first-share in internal QA benchmarks.                       |

---

## 🛠️ Tech Stack & Tooling

- **Framework:** [TanStack Start](https://tanstack.com/start) with TanStack Router
- **Language:** TypeScript 5.8
- **UI & Animation:** React 19, Tailwind CSS v4, Framer Motion, Radix UI primitives
- **Data & CMS:** Supabase (with static fallback content layer)
- **Quality & Hygiene:** ESLint, Prettier, strict TypeScript type checking

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (v20+ recommended)
- npm or bun

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/durlabhdaryani/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Run lint and formatting checks
npm run lint
npm run format
```

The application will be running locally at `http://localhost:3000`.

---

## 📂 Project Structure

```text
├── public/                     # Static assets & public documents
│   ├── Durlabh-Daryani-CV.pdf  # Generated executive resume PDF
│   └── placeholders/           # Mock proof packs & PRD specs for pilot projects
├── src/
│   ├── components/
│   │   ├── portfolio/          # PM Portfolio sections (Hero, CaseStudies, Products, etc.)
│   │   └── ui/                 # Reusable UI component primitives
│   ├── data/
│   │   └── portfolio.ts        # Structured data for products, case studies, and frameworks
│   ├── lib/
│   │   └── portfolio-content.ts# Unified content types and Supabase query hooks
│   └── routes/                 # TanStack Start file-based routing
```

---

## 📬 Contact & Connect

- **Portfolio:** [durlabh.lovable.app](https://durlabh.lovable.app)
- **LinkedIn:** [linkedin.com/in/durlabhdaryani](https://linkedin.com/in/durlabhdaryani)
- **Email:** [durlabh.daryani@gmail.com](mailto:durlabh.daryani@gmail.com)
