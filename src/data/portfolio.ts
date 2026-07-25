// ⚠️ MOCK DATA — case studies illustrative.
// The numbers, metrics and links below are placeholders used to design the
// portfolio. Swap in real, verified numbers (and real live/PRD URLs) before
// this site goes fully public with Durlabh's name attached to unverifiable
// stats. Concept projects are explicitly flagged via `status: "concept"`
// and unavailable links via `linksLive: false`.

export const profile = {
  name: "Durlabh Daryani",
  role: "AI Product Manager",
  tagline: "Building and shipping real products before my first PM role.",
  location: "Jaipur, Rajasthan, India",
  coords: "JPR // 26.9124° N",
  email: "durlabh.daryani@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/durlabhdaryani" },
    { label: "Twitter", href: "https://twitter.com/durlabhdaryani" },
    { label: "GitHub", href: "https://github.com/durlabhdaryani" },
  ],
};

export const about = {
  paragraphs: [
    "I've built and shipped four products end-to-end — Kartify, CafeOS, Tapinfi and FinMate — before ever holding a Product Manager title. Each one ran through the full product loop: customer discovery, JTBD framing, prioritization, scoping, shipping, and post-launch measurement. The craft is already the work I do.",
    "My BA and QA background is not a side story — it's the same PM work under a different job title. Requirements gathering, acceptance criteria, stakeholder negotiation, bug triage and release validation are exactly what Product Managers do before a feature gets written. The self-initiated products are even stronger evidence: nobody assigned them, nobody paid me for them, and I still chose the problems, ran the research and shipped the builds. That kind of unprompted judgment is harder to teach than a title.",
    "I want to be one of the leading AI Product Managers of the next decade. Not for the title — because the products that matter will be the ones that explain their reasoning, not just their output, and that's the same principle I designed into Kartify. That's the trajectory I'm on.",
  ],
  stats: [
    { label: "Products Shipped", value: 4, suffix: "" },
    { label: "Case Studies", value: 6, suffix: "" },
    { label: "Frameworks Practiced", value: 5, suffix: "+" },
    { label: "AI Experiments", value: 20, suffix: "+" },
  ],
};

export type ProjectStatus = "shipped" | "concept";

export const featuredProducts = [
  {
    index: "01",
    kicker: "AI SHOPPING",
    name: "Kartify",
    role: "PM · UX · AI Workflow",
    status: "shipped" as ProjectStatus,
    description:
      "Conversational AI shopping assistant that researches products, compares options and recommends the best fit.",
    longDescription:
      "Kartify replaces 20 open tabs with one conversation. It asks clarifying questions, remembers your preferences, compares options in structured tables, and explains the reasoning behind every recommendation.",
    stack: ["Next.js", "Gemini", "Supabase", "n8n"],
    liveUrl: "https://kartify.ai",
    prdUrl: "https://kartify.ai/prd",
    linksLive: false,
    accent: "from-emerald-400/30 to-emerald-900/10",
  },
  {
    index: "02",
    kicker: "RESTAURANT SaaS",
    name: "CafeOS",
    role: "Product Owner",
    status: "shipped" as ProjectStatus,
    description:
      "Operating system for cafes — QR ordering, KDS, billing, CRM, inventory and loyalty in one workflow.",
    longDescription:
      "CafeOS collapses 4–6 disconnected tools into one operator dashboard. In a 3-cafe pilot, operators self-reported ~31% shorter kitchen ticket times and ~42% fewer order errors in the first month.",
    stack: ["React", "Node", "MongoDB"],
    liveUrl: "https://cafeos.app",
    prdUrl: "https://cafeos.app/prd",
    linksLive: false,
    accent: "from-lime-400/30 to-lime-900/10",
  },
  {
    index: "03",
    kicker: "AI FINTECH",
    name: "FinMate",
    role: "Founding PM",
    status: "shipped" as ProjectStatus,
    description:
      "Gen-Z focused AI financial assistant for budgeting, saving and building healthy money habits.",
    longDescription:
      "FinMate reframes personal finance from guilt to guidance. A weekly financial health score, plain-language coaching, and zero manual entry keep users engaged past week one.",
    stack: ["LLM", "Firebase", "React"],
    liveUrl: "https://finmate.app",
    prdUrl: "https://finmate.app/prd",
    linksLive: false,
    accent: "from-teal-400/30 to-teal-900/10",
  },
  {
    index: "04",
    kicker: "SaaS · FOUNDER",
    name: "Tapinfi",
    role: "Founder",
    status: "shipped" as ProjectStatus,
    description:
      "NFC-enabled digital business card platform with dynamic profiles, analytics and lead capture.",
    longDescription:
      "Tapinfi turns a business card into a memory hook. NFC + QR sharing, themed dynamic profiles, lead capture and CRM export — onboarding to first share in under 90 seconds.",
    stack: ["Next.js", "Supabase", "NFC"],
    liveUrl: "https://tapinfi.com",
    prdUrl: "https://tapinfi.com/prd",
    linksLive: false,
    accent: "from-cyan-400/30 to-cyan-900/10",
  },
];

export const caseStudies = [
  {
    slug: "kartify",
    name: "Kartify",
    tag: "AI Shopping Assistant",
    status: "shipped" as ProjectStatus,
    problem:
      "Shoppers waste hours comparing products across marketplaces with inconsistent specs, reviews and pricing.",
    research:
      "12 user interviews across three shopping personas; competitive teardown of Amazon, Perplexity Shopping and Google Shopping.",
    jtbd:
      "When I'm buying a considered product, I want a trusted advisor that asks the right questions, so I can decide confidently without opening 20 tabs.",
    prd:
      "Conversational search with clarifying follow-ups, memory of preferences, structured comparison and a recommendation with reasoning.",
    metrics: [
      "MVP shipped in 6 weeks",
      "Task-completion ~78% in an internal usability test (n=9, self-run)",
      "Avg. session depth ~6.4 turns in the same test",
    ],
    lessons:
      "Trust comes from showing reasoning, not just the answer. Comparison tables converted better than prose recommendations. Used JTBD to reframe the search box as a conversation.",
  },
  {
    slug: "cafeos",
    name: "CafeOS",
    tag: "Restaurant SaaS",
    status: "shipped" as ProjectStatus,
    problem:
      "Independent cafes juggle 4–6 disconnected tools for ordering, billing, inventory and loyalty — losing revenue to friction.",
    research:
      "Shadowed 4 cafes for a full day each; mapped 22 operational touchpoints and quantified time-loss per shift.",
    jtbd:
      "When it's a rush hour, I want one system that keeps orders, kitchen and payments in sync, so my team doesn't drop tickets.",
    prd:
      "Single-app KDS, QR ordering, POS, CRM and inventory with a unified operator dashboard.",
    metrics: [
      "Kitchen ticket time ↓ ~31% in a 3-cafe pilot (operator self-reported)",
      "Order errors ↓ ~42% in the same pilot (operator self-reported)",
      "3 cafes onboarded in beta",
    ],
    lessons:
      "Operators don't want features — they want fewer taps. Used the Opportunity Solution Tree to keep every screen tied to a measurable operator outcome.",
  },
  {
    slug: "tapinfi",
    name: "Tapinfi",
    tag: "Digital Business Cards",
    status: "shipped" as ProjectStatus,
    problem:
      "Paper business cards get lost; existing digital cards feel like static link-trees with no analytics.",
    research:
      "Surveyed 140 sales and creator-economy users; benchmarked HiHello, Popl and Blinq on onboarding and share-flow.",
    jtbd:
      "When I meet someone new, I want to share a rich profile in one tap, so I actually get remembered and followed up with.",
    prd:
      "NFC + QR sharing, themed dynamic profiles, lead capture forms, analytics on views/saves and CRM export.",
    metrics: [
      "Onboarding to first share < 90s (measured in internal QA runs)",
      "Target: 3+ leads per active user / month",
      "Target: 60% repeat share rate by month 3",
    ],
    lessons:
      "The product's job wasn't 'a card', it was 'get remembered'. Picked a North Star (repeat shares) that tracked actual reuse, not signups.",
  },
  {
    slug: "finmate",
    name: "FinMate",
    tag: "AI Personal Finance",
    status: "shipped" as ProjectStatus,
    problem:
      "Gen-Z users find traditional budgeting apps preachy and cluttered; they abandon within a week.",
    research:
      "8 diary studies over 14 days; identified guilt, opacity and manual entry as top drop-off drivers.",
    jtbd:
      "When I spend money, I want to know if I'm on track without judgement, so I feel in control instead of anxious.",
    prd:
      "Auto-categorisation, weekly financial health score, goal nudges and an AI coach that answers in plain language.",
    metrics: [
      "Target: 45% Day-7 retention in closed beta",
      "Time to first insight < 60s (measured in internal QA)",
      "Target: NPS 40+ in closed beta",
    ],
    lessons:
      "Framing matters more than accuracy — an empathetic score beat a precise number. Used the Kano model to sort 'financial health score' as a delighter, not a baseline.",
  },
  {
    slug: "ai-campus",
    name: "AI Campus Assistant",
    tag: "EdTech · Concept",
    status: "concept" as ProjectStatus,
    problem:
      "Students waste hours navigating fragmented campus info — timetables, deadlines, forms, faculty availability.",
    research:
      "Interviewed 20 students across 3 universities; catalogued 34 recurring 'where do I find X?' queries.",
    jtbd:
      "When something's due or unclear, I want one place to ask and get the right answer, so I don't miss deadlines.",
    prd:
      "RAG-based chat over campus docs, personalised timetable, deadline reminders and faculty office-hour booking.",
    metrics: [
      "Prototype answered ~87% of the top-30 queries in a self-graded eval set (concept-stage, not peer-reviewed)",
      "Avg. answer time ~2.4s in local benchmark",
      "Target: 60% weekly active use in a single-department pilot",
    ],
    lessons:
      "Grounding the model in campus-specific docs mattered more than model size. RICE helped park bigger features (voice input, LMS sync) until retrieval quality was solved.",
  },
  {
    slug: "verdify",
    name: "Verdify",
    tag: "Sustainability · Concept",
    status: "concept" as ProjectStatus,
    problem:
      "Consumers want to buy sustainably but can't verify brand claims; greenwashing erodes trust.",
    research:
      "Studied 30 D2C brands' sustainability claims; mapped 6 categories of vague vs. verifiable claims.",
    jtbd:
      "When I'm choosing a product, I want to know if the brand's claims are real, so my money supports actual impact.",
    prd:
      "Claim-verification score per brand, evidence linking, and a browser extension surfacing scores at checkout.",
    metrics: [
      "Scoring rubric reviewed by 3 sustainability practitioners (informal)",
      "Extension prototype walkthrough tested with 12 users (concept validation)",
      "Target: 30% checkout-time engagement in a pilot cohort",
    ],
    lessons:
      "Transparency beats certification. Chose a North Star (verified-claim rate) to keep the roadmap honest about depth vs. coverage.",
  },
];

export const experience = [
  {
    company: "Greenfinch Global Consultancy",
    role: "Business Analyst & QA Intern",
    period: "Recent",
    active: true,
    summary:
      "Gathered requirements, wrote BRDs and PRDs, ran QA cycles and validated user flows alongside developers and clients.",
    highlights: [
      "Owned requirement clarity across sprints",
      "Bug triage and regression coverage",
      "Client discussions and acceptance criteria",
    ],
  },
  {
    company: "Assert InfoTech",
    role: "Business Analyst",
    period: "Earlier",
    active: false,
    summary:
      "Stakeholder communication, workflow analysis and functional specifications across product discussions and testing support.",
    highlights: [
      "Requirement gathering and documentation",
      "Feature validation and acceptance criteria",
      "Process improvement across teams",
    ],
  },
];

export const startups = [
  {
    name: "Tapinfi",
    role: "Founder",
    tag: "Digital Business Card SaaS",
    summary:
      "Built a SaaS platform enabling professionals to instantly share digital profiles using NFC-enabled smart cards.",
    responsibilities: [
      "Product Vision",
      "Pricing Strategy",
      "GTM & Growth",
      "Roadmap",
    ],
  },
  {
    name: "Bharat Svarga",
    role: "Founder",
    tag: "AI Tourism Platform",
    summary:
      "AI-powered travel platform focused on spiritual and heritage circuits in Rajasthan — starting with Jaipur–Pushkar–Ajmer — that pairs personalised itineraries with a curated network of local vendors (homestays, guides, transport). Onboarded ~25 pilot vendors in Jaipur before scaling into a second circuit.",
    responsibilities: [
      "Product Discovery (traveller + vendor interviews across Jaipur)",
      "Business Model (commission + vendor subscription tiers)",
      "AI itinerary engine (LLM + regional POI knowledge base)",
      "Service Design for offline vendor onboarding",
    ],
  },
];

// Only the frameworks I actually reference in case-study `lessons` fields.
// Each links back to the specific case study where I applied it.
export const frameworks = [
  {
    name: "JTBD",
    tag: "Discovery",
    desc: "Understand the underlying job customers hire your product to do — beyond features.",
    usedIn: "kartify",
  },
  {
    name: "Opportunity Solution Tree",
    tag: "Discovery",
    desc: "Teresa Torres' tree connecting outcomes → opportunities → solutions → experiments.",
    usedIn: "cafeos",
  },
  {
    name: "North Star",
    tag: "Strategy",
    desc: "The one metric that captures the value you deliver to customers.",
    usedIn: "tapinfi",
  },
  {
    name: "Kano",
    tag: "Feature Strategy",
    desc: "Classify features into basics, performance and delighters to avoid feature bloat.",
    usedIn: "finmate",
  },
  {
    name: "RICE",
    tag: "Prioritization",
    desc: "Score initiatives by Reach × Impact × Confidence ÷ Effort to make trade-offs explicit.",
    usedIn: "ai-campus",
  },
];

export type Article = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "windsurf-vs-cursor",
    title: "Windsurf vs Cursor: an AI PM's take",
    tag: "AI",
    date: "2026-07-20",
    readTime: "7 min",
    excerpt:
      "Both Windsurf and Cursor are strong AI-native IDEs, but they optimise for different product jobs. Here's how I'd choose between them as an AI PM shipping real product.",
    body: [
      "Windsurf and Cursor look similar on the surface — VS Code fork, chat sidebar, inline completions, agent mode. Underneath, they're solving two different jobs.",
      "Cursor's core job is 'make me faster at code I'm already writing'. Its strengths are tight inline completions, an excellent Cmd-K rewrite loop, and predictable context selection. For senior engineers who want to stay in the driver's seat, Cursor's ergonomics are hard to beat.",
      "Windsurf's core job is 'run the loop for me'. Cascade, its agent, plans, edits across files, runs commands, and iterates on failures with less babysitting. For PM-adjacent work — prototyping, spike branches, wiring integrations — the autonomy compounds.",
      "As an AI PM I use both. Cursor for surgical edits inside a codebase I understand, Windsurf for greenfield spikes where I care about outcome more than every keystroke. The right question isn't which is 'better' — it's which loop matches the job you're hiring the IDE to do.",
      "Evaluate them on your own workflow: how often you review vs write, how large your typical change is, and how much context lives outside the current file. Those three answers pick the tool for you.",
    ],
  },
  {

    slug: "mvp-in-6-weeks",
    title: "How I build MVPs in 6 weeks",
    tag: "Playbook",
    date: "2025-05-12",
    readTime: "6 min",
    excerpt:
      "A repeatable operating cadence for going from a fuzzy problem to a working, validated product in six weeks — without heroics.",
    body: [
      "Most MVPs fail because the team optimises for output instead of learning. My 6-week loop flips that: week 1 is customer discovery, week 2 is scoping, weeks 3–5 are build-in-public, and week 6 is measurement.",
      "The trick is to define the single riskiest assumption up front and design the entire MVP as an experiment that either validates or kills it. Every feature that doesn't serve that assumption is deferred, no exceptions.",
      "I keep a shared 'kill list' next to the roadmap. Anything on it is a feature we agreed is nice-to-have. It removes 80% of scope debates.",
      "By week 6 the product either has a signal — retention, willingness-to-pay, or unprompted referrals — or it doesn't. Both outcomes are wins because we learn cheaply.",
    ],
  },
  {
    slug: "ai-product-development-2025",
    title: "AI Product Development in 2025",
    tag: "AI",
    date: "2025-04-02",
    readTime: "8 min",
    excerpt:
      "Building AI-native products is less about the model and more about the loops around it — evals, prompts-as-spec, and human-in-the-loop.",
    body: [
      "The model is a commodity. What's not a commodity is your eval set, your prompt library, and the feedback loop that improves both over time.",
      "Treat prompts as product specs. Version them, review them like code, and attach evals to every change. If you can't measure regressions, you don't have a product — you have a demo.",
      "Design for graceful failure. LLMs will hallucinate; your UX has to make that recoverable. Show sources, allow edits, and never hide the model's uncertainty behind confident copy.",
      "The winning AI PMs in 2025 will be the ones who can hold model, product, and data-flywheel context in their head simultaneously.",
    ],
  },
  {
    slug: "customer-discovery-solo",
    title: "Customer discovery without a research team",
    tag: "Discovery",
    date: "2025-02-20",
    readTime: "5 min",
    excerpt:
      "You don't need a UXR org to do great discovery. You need 5 interviews a week and the discipline to write the notes.",
    body: [
      "The single highest-leverage habit I've built as a PM is running five 30-minute customer conversations a week. No script gymnastics, no NPS surveys — just curious questions and a note-taking template.",
      "I use a simple four-column doc: quote, behaviour, workaround, emotion. Patterns emerge by interview 15. By interview 30 you're rediscovering the same objections and that's your signal to ship.",
      "The trap is talking to people who can't buy. Always screen for the person with the pain, the budget, and the authority to fix it.",
    ],
  },
  {
    slug: "north-star-metric",
    title: "Choosing a North Star metric",
    tag: "Strategy",
    date: "2025-01-15",
    readTime: "4 min",
    excerpt:
      "A good North Star is a leading indicator of retained value, not a lagging vanity number the CEO likes on a slide.",
    body: [
      "Revenue is a lagging outcome. Signups are vanity. A North Star sits in between: it measures the moment a user gets the value they came for, at a cadence that predicts retention.",
      "For Kartify it was 'shopping decisions completed'. For CafeOS it was 'orders processed per active outlet'. Both correlate tightly with revenue but are 4–6 weeks ahead of it.",
      "If your North Star can be gamed by a growth stunt without moving retention, it's the wrong metric.",
    ],
  },
  {
    slug: "prompts-as-product-design",
    title: "Prompt engineering as product design",
    tag: "AI",
    date: "2024-12-10",
    readTime: "6 min",
    excerpt:
      "The system prompt is your product's constitution. Treat it like the most important UX artefact you own.",
    body: [
      "Every LLM product is downstream of a system prompt. That prompt encodes tone, boundaries, refusal behaviour, format contracts, and safety posture. It IS the product experience.",
      "I keep prompts in a git repo alongside evals. Every change ships with a diff, a rationale, and a benchmark run. PRs on prompts are the highest-leverage code review I do.",
      "Great prompts read like great product briefs: role, goal, constraints, examples, output contract. If you can't fit yours on one page, you don't understand what you're asking the model to do yet.",
    ],
  },
  {
    slug: "retention-loops",
    title: "Retention loops that actually compound",
    tag: "Growth",
    date: "2024-11-04",
    readTime: "5 min",
    excerpt:
      "Acquisition without retention is a leaky bucket with a fancier faucet. Design the loop before you turn on ads.",
    body: [
      "A retention loop is a self-reinforcing cycle: a user takes an action, gets value, and that value increases the probability they come back. Most 'features' don't do this — they just delay churn.",
      "The highest-compounding loops I've seen combine content, data, and social proof: your usage generates artefacts that make the product better for you the next time you show up.",
      "Instrument the loop before you scale traffic. If cohort retention is flat after week 4, more acquisition just accelerates the loss.",
    ],
  },
  {
    slug: "startup-analytics",
    title: "Product analytics on a startup budget",
    tag: "Analytics",
    date: "2024-10-01",
    readTime: "4 min",
    excerpt:
      "You don't need Amplitude on day one. You need three events, a spreadsheet, and a weekly cohort review.",
    body: [
      "Track three things: activation, the core action, and a retention proxy. That's it. Adding more events on day one just creates dashboards nobody reads.",
      "Every Monday I export the last 4 weekly cohorts into a spreadsheet and eyeball the shape. If W2 retention drops, that's the meeting we have this week.",
      "Upgrade tooling only when the cost of manual analysis exceeds the tool's price. For most seed-stage products, that's month 9, not month 1.",
    ],
  },
  {
    slug: "decisions-under-ambiguity",
    title: "Decision-making under ambiguity",
    tag: "Leadership",
    date: "2024-09-08",
    readTime: "6 min",
    excerpt:
      "Most PM decisions aren't right or wrong — they're reversible or expensive. Treat them accordingly.",
    body: [
      "Jeff Bezos's one-way vs two-way door framework is the single most useful decision heuristic I know. Two-way doors: decide fast, low ceremony, revisit if wrong. One-way doors: slow down, gather evidence, get disagreement in the room.",
      "The failure mode I watch for on my own teams is applying one-way rigor to two-way decisions. It's expensive and it teaches the team that shipping is scary.",
      "When I'm genuinely stuck, I write a one-page memo: what I'd do if I had to decide today, what I'd change if I had a week, and what evidence would flip me. The act of writing usually resolves it.",
    ],
  },
];

export const aiLab = [
  { name: "Prompt Engineering", desc: "Structured prompt libraries, evals and prompt-as-spec workflows." },
  { name: "AI Agents", desc: "Tool-using agents with planning, memory and reflection loops." },
  { name: "Multi-Agent Systems", desc: "Coordinated agents for research, comparison and synthesis tasks." },
  { name: "MCP", desc: "Model Context Protocol tooling to give assistants safe access to real systems." },
  { name: "n8n Automation", desc: "Product-ops workflows: research, outreach, monitoring and triage." },
  { name: "RAG + Vector DBs", desc: "Grounding LLMs in private knowledge with retrieval-quality evals." },
];

export const skills = {
  Product: [
    "Discovery", "Strategy", "Roadmapping", "PRDs", "Business Analysis",
    "User Interviews", "Personas", "JTBD", "Journey Mapping",
    "Prioritization (RICE / Kano / MoSCoW)", "North Star", "A/B Testing", "Analytics",
  ],
  "AI & Automation": [
    "LLMs", "Prompt Engineering", "AI Agents", "MCP", "RAG", "n8n", "No-Code",
  ],
  "Design & Tools": [
    "Figma", "Wireframing", "UI/UX",
  ],
  Technical: [
    "SQL", "Firebase", "Supabase", "Next.js", "React", "Node.js", "MongoDB", "GitHub",
  ],
  Delivery: [
    "Agile", "Scrum", "Sprint Planning", "Stakeholder Management", "Cross-functional Collaboration",
  ],
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  specialization: "Artificial Intelligence & Data Science",
  school: "Vivekananda Global University, Jaipur",
};

// ⚠️ SWAP: replace with real embedUrls before launch.
// Right now `embedUrl` values are placeholder URNs (urn:li:share:000...) and
// would render a blank/broken LinkedIn iframe if embedded. Until real
// embed URLs are pasted in, the UI renders a static card and links out via
// `url` (currently the profile URL) — do NOT wire this data into a live
// LinkedIn <iframe> yet.
// To get a real `embedUrl`: open your LinkedIn post → "..." menu →
// "Embed this post" → copy the src URL from the <iframe>. It looks like:
//   https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890
// `url` is the public post URL (used as fallback / "View on LinkedIn" link).
// Newest first — the top item shows first on home.
export type LinkedInPost = {
  id: string;
  date: string;   // ISO yyyy-mm-dd, used for sorting
  tag: string;
  excerpt: string;
  cover?: string;
  url: string;
  embedUrl: string; // placeholder — not yet used by the UI (see comment above)
};

export const linkedinPosts: LinkedInPost[] = [
  {
    id: "post-1",
    date: "2026-07-15",
    tag: "AI",
    excerpt:
      "The best AI PMs I know spend 80% of their time on evals and 20% on prompts. Here's the loop I run every week…",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    url: "https://www.linkedin.com/in/durlabhdaryani",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:0000000000000000001",
  },
  {
    id: "post-2",
    date: "2026-07-02",
    tag: "Discovery",
    excerpt:
      "Customer discovery without a research team: 5 interviews, one spreadsheet, and the JTBD you actually ship against.",
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    url: "https://www.linkedin.com/in/durlabhdaryani",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:0000000000000000002",
  },
  {
    id: "post-3",
    date: "2026-06-20",
    tag: "Playbook",
    excerpt:
      "How I ship an MVP in 6 weeks — the exact week-by-week breakdown for Kartify.",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    url: "https://www.linkedin.com/in/durlabhdaryani",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:0000000000000000003",
  },
  {
    id: "post-4",
    date: "2026-06-05",
    tag: "Growth",
    excerpt:
      "Retention loops that actually compound — a teardown of the three loops powering CafeOS.",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "https://www.linkedin.com/in/durlabhdaryani",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:0000000000000000004",
  },
];

export const certifications = [
  "Google Product Management",
  "AI Product Management",
  "Scrum Foundations",
  "Agile Practitioner",
  "Prompt Engineering",
  "Generative AI",
  "Product Analytics",
  "UX Fundamentals",
];
