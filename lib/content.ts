export const profile = {
  name: "Jinglong Zhao",
  title: "Product-oriented Full-Stack Engineer",
  location: "Edmonton, AB • Remote Canada",
  summary:
    "I turn ambiguous requirements into production systems — from scoping and architecture to deployment and reliability. Strong in Frappe/ERP systems, real-time dashboards, performance optimization, and integrations (Shopify/QBO).",
  links: {
    email: "mailto:your.email@example.com",
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    resume: "/resume.pdf",
  },
  highlights: [
    { label: "Delivery", value: "MVP → Production" },
    { label: "Systems", value: "Real-time + ERP" },
    { label: "Strength", value: "Performance & Integrations" },
    { label: "Stack", value: "Python • TS • React • SQL" },
  ],
};

export const projects = [
  {
    title: "Factory Real-time Production Dashboard",
    subtitle: "Live monitoring & control panel for production lines",
    impact: [
      "Designed socket-driven real-time UI to monitor pipeline status and react immediately to anomalies.",
      "Built event schema + client state sync to avoid UI drift under high frequency updates.",
      "Improved operational visibility and reduced manual coordination overhead.",
    ],
    stack: ["TypeScript", "Socket", "Frappe", "Nginx", "Linux"],
    tags: ["Real-time", "Reliability", "Operations"],
  },
  {
    title: "High-performance Map System (Custom Algorithm)",
    subtitle: "Fast rendering + search + alerting for complex indoor maps",
    impact: [
      "Implemented custom rendering/interaction algorithm to speed up map performance (≈35% faster in real usage).",
      "Integrated search + alert workflow to shorten time-to-locate critical items and respond faster.",
      "Delivered layered indoor structure navigation for large facilities.",
    ],
    stack: ["Python", "JS", "Frappe", "MariaDB"],
    tags: ["Performance", "UX", "Algorithms"],
  },
  {
    title: "ERP + E-commerce Loop (Inventory → Online Orders)",
    subtitle: "Connected warehouse data to online ordering to close purchase loop",
    impact: [
      "Built a web storefront connected to internal inventory for real-time product availability.",
      "Reduced ordering friction and created a clean end-to-end flow from browsing to purchase.",
      "Improved maintainability via modular components and clear data contracts.",
    ],
    stack: ["React", "Node", "Python", "SQL"],
    tags: ["Product", "Integration", "Revenue"],
  },
  {
    title: "PWA Offline Document Access (Static PDFs)",
    subtitle: "App-like experience with offline access for key documents",
    impact: [
      "Implemented PWA install + caching strategy so users can access selected static PDFs offline.",
      "Improved mobile experience while keeping the web-first delivery model.",
      "Reduced dependency on network availability for field usage.",
    ],
    stack: ["PWA", "Service Worker", "Cache API"],
    tags: ["Offline", "Mobile", "DX"],
  },
  {
    title: "QuickBooks / Shopify Integration Work",
    subtitle: "Secure sync, mapping, and operational tooling",
    impact: [
      "Implemented OAuth2 + mapping for reliable sync flows (customers/vendors/products/inventory patterns).",
      "Designed idempotent update behavior to prevent duplicates and reduce support load.",
      "Built admin-friendly tooling for operations to diagnose issues faster.",
    ],
    stack: ["Python", "REST", "OAuth2", "SQL"],
    tags: ["Integrations", "Security", "Ops"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer (Acting Tech Lead)",
    company: "Frontech Solution",
    time: "2023 — Present",
    bullets: [
      "Owned end-to-end delivery across ERP modules: warehouse, orders, procurement, customer service, and production workflows.",
      "Led scope breakdown, estimates, and collaboration with PM/clients; delegated tasks to junior devs and reviewed output.",
      "Worked across deployment architecture (Nginx, VM management, environments) and improved reliability of releases.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Media Shaker",
    time: "2022 — 2023",
    bullets: [
      "Built RESTful APIs and improved backend reliability and maintainability.",
      "Worked on authentication, performance, and API integration patterns.",
    ],
  },
];

export const skills = {
  core: ["Python", "TypeScript", "JavaScript", "SQL", "React", "Node.js"],
  systems: ["Frappe/ERPNext", "Nginx", "Linux", "Redis", "Docker (basic)"],
  patterns: ["API design", "OAuth2", "Real-time", "Performance tuning", "CI/CD mindset"],
};