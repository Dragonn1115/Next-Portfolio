// ---------------------------------------------------------------------------
// Portfolio content for Jinglong Zhao
// All copy lives here. Edit freely.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jinglong Zhao",
  role: "Technical Lead · Full-Stack Engineer",
  location: "Edmonton, Alberta",

  heroTitle: "I turn messy business problems into production software.",
  heroSubtitle:
    "Technical Lead / Full-Stack Engineer working across architecture, product, development, deployment, and production support.",
  heroSupport:
    "I build ERP platforms, internal tools, reporting systems, real-time dashboards, and workflow automation for real business operations.",
  heroPersonal:
    "Outside work, I climb, run, and keep looking for hard things to get better at.",

  // Right-column "command center" identity card
  currentFocus: "Owning a multi-client ERP platform end to end.",
  status: [
    "Open to engineering roles",
    "Open to builder conversations",
  ],

  links: {
    email: "mailto:zhaojinglong12@gmail.com",
    github: "https://github.com/Dragonn1115",
    linkedin: "https://www.linkedin.com/in/jinglong-zhao-266528228/",
    resume: "/resume.pdf",
  },

  stats: [
    { value: "6", label: "Engineers led", note: "rotating active team" },
    { value: "20+", label: "Engineers interviewed", note: "hiring & onboarding support" },
    { value: "End-to-end", label: "Production ownership", note: "architecture → release → support" },
    { value: "Multi-client", label: "ERP platform", note: "workflows · reporting · DevOps" },
  ],
};

// Identity tiles directly under the hero — quick "worlds" to jump into.
export const identityCards = [
  {
    id: "work",
    label: "Work",
    body: "Production systems, ERP platforms, internal tools, and technical leadership.",
    href: "#work",
    coord: "01",
  },
  {
    id: "projects",
    label: "Projects",
    body: "Case studies from reporting systems, real-time operations, deployment, and automation.",
    href: "#projects",
    coord: "02",
  },
  {
    id: "life",
    label: "Life",
    body: "Climbing, running, building, and learning outside work.",
    href: "#life",
    coord: "03",
  },
  {
    id: "now",
    label: "Now",
    body: "Open to technical lead roles, full-stack opportunities, and builder conversations.",
    href: "#open",
    coord: "04",
  },
];

// "About me" — short, human
export const about = [
  "I'm a Technical Lead and Full-Stack Engineer based in Edmonton. I like building software that gets used in real operations — ERP systems, internal tools, dashboards, workflow automation, integrations, and production platforms.",
  "My work usually starts with unclear requirements and messy business processes. I enjoy turning that into something structured: a system design, a build plan, a working product, and eventually a stable release.",
  "I work best where engineering, product, infrastructure, and business operations overlap. I like owning the full path from idea to production.",
  "Outside work, I climb, run, train, and keep looking for hard things to get better at.",
];

// "What I Do" — core areas of work
export const whatIDo = [
  {
    title: "Enterprise Platform Development",
    body: "Designing and building ERP modules, internal tools, workflow systems, and client-specific business applications on Frappe/ERPNext.",
  },
  {
    title: "Technical Leadership",
    body: "Leading architecture, sprint planning, code quality, release validation, hiring support, and small-team delivery.",
  },
  {
    title: "Reporting & Data Workflows",
    body: "Building configurable reports, metadata-driven data views, high-volume data workflows, and BI-style internal tools.",
  },
  {
    title: "Real-Time Operations",
    body: "Creating live dashboards, map-based interfaces, station controls, and realtime visibility for warehouse and production systems.",
  },
  {
    title: "Workflow Automation",
    body: "Automating manufacturing, assembly, inventory, purchasing, warehouse, and project management workflows.",
  },
  {
    title: "Production Ownership",
    body: "Managing deployment, server configuration, CI/CD, security, backups, debugging, and multi-environment releases.",
  },
];

export type Project = {
  num: string;
  title: string;
  subtitle: string;
  blurb: string;
  role: string;
  context: string;
  problem: string;
  challenge: string[];
  built: string[];
  impact: string[];
  whyItMattered: string;
  learned: string;
  stack: string[];
  tags: string[];
  flow?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Multi-Client ERP Platform Ownership",
    subtitle: "Architecture & technical leadership for a Frappe-based platform",
    blurb:
      "Became the technical owner of a complex ERP platform running across multiple client environments — driving architecture, delivery process, and production stability.",
    role: "Architecture, delivery process, release flow, team coordination, and production support.",
    context:
      "A growing set of ERP/client systems carried many custom business workflows, and the platform had to serve different clients from one codebase across multiple environments.",
    problem:
      "Requirements changed frequently, different clients needed different behavior, and the platform had to support multiple environments, releases, permissions, reports, automation, and integrations. The real problem wasn't writing features — it was making the platform maintainable, deployable, and scalable across client environments.",
    challenge: [
      "Frequent requirement changes across different client needs",
      "Multi-environment deployment: dev / test / stage / live",
      "Reducing one-off hardcoding in favor of reusable patterns",
      "Coordinating a small, rotating engineering team",
    ],
    built: [
      "Led architecture and overall technical direction",
      "Defined sprint structure and the delivery process",
      "Translated business needs into executable technical plans",
      "Reviewed implementation quality and release readiness",
      "Managed the dev/test/stage/live deployment flow",
      "Supported hiring, interviewing, and onboarding direction",
    ],
    impact: [
      "Turned unclear business requirements into working systems",
      "Improved release consistency across environments",
      "Reduced one-off work by pushing reusable, system-level modules",
      "Helped stabilize and scale a complex internal platform",
    ],
    whyItMattered:
      "It moved a fragile, client-by-client codebase toward a maintainable platform a small team could ship safely.",
    learned:
      "The hardest part of a platform isn't the features — it's the process and patterns that let a small team ship them repeatedly without breaking production.",
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "MariaDB", "CI/CD", "Leadership"],
    tags: ["Leadership", "Architecture"],
    flow: ["Business users", "Frappe modules", "MariaDB", "Reporting & integrations", "Dev / test / stage / live"],
  },
  {
    num: "02",
    title: "Configurable Multi-Doctype Report Builder",
    subtitle: "Metadata-driven reporting across ERP workflows",
    blurb:
      "Built a metadata-driven reporting system that let business users generate flexible reports across ERP workflows — without creating one-off hardcoded reports every time.",
    role: "Designed the metadata model, query/permission logic, and rendering behavior.",
    context:
      "Business users needed flexible reports across many DocTypes and workflows, but every new report tended to become a custom, hand-built implementation.",
    problem:
      "Existing reports were too hardcoded and expensive to customize. Every new report or data view risked becoming a one-off, and the system had to stay fast and predictable on high-volume business data.",
    challenge: [
      "Multiple DocTypes with different underlying structures",
      "Reports needed filters, permissions, field selection, and export behavior",
      "Balancing flexibility against performance and predictable behavior",
      "Rendering and data workflows had to support high-volume data",
    ],
    built: [
      "A multi-DocType report builder with metadata-driven behavior",
      "Configurable filters and field logic (link/select filters)",
      "Auto-refresh and read-only report modes",
      "Report-view re-adjustment and rendering improvements",
      "High-load report processing improvements and BI validation",
    ],
    impact: [
      "Reduced dependence on hardcoded report development",
      "Made reporting behavior reusable and configurable",
      "Improved data visibility for business workflows",
      "Created a stronger foundation for ERP analytics",
    ],
    whyItMattered:
      "It replaced an expensive per-report dev cycle with configuration, so the business could answer its own data questions.",
    learned:
      "A generic system is only worth it if the configuration stays simpler than the hardcoding it replaces — drawing that line is the real design work.",
    stack: ["Frappe", "Python", "JavaScript", "MariaDB", "Metadata", "Reporting"],
    tags: ["Data", "Architecture"],
    flow: ["DocTypes", "Metadata config", "Filters", "Query builder", "Permission check", "Report render"],
    featured: true,
  },
  {
    num: "03",
    title: "Real-Time Map-Based Operations Interface",
    subtitle: "Live map editor & operations dashboard",
    blurb:
      "Built a map-style operational view with editing, filtering, and real-time updates so teams could understand warehouse and production state visually instead of through tables.",
    role: "Owned map UI/UX, performance work, and the real-time update path.",
    context:
      "Operations teams needed to understand warehouse, inventory, station, and production state at a glance. A list/table interface couldn't show spatial state.",
    problem:
      "The map editor was slow, inventory/location data had to stay fresh, and users needed filtering and live updates that avoided stale operational data — all while handling barcode, station, and inventory edge cases.",
    challenge: [
      "Map editor performance was slow under real usage",
      "Inventory/location data had to be displayed visually and stay fresh",
      "Filters by customer/date and operational context were required",
      "Real-time updates had to avoid stale operational data",
      "Handling location, barcode, station, and inventory edge cases",
    ],
    built: [
      "Map overview and editor with rack/location logic",
      "Map performance and UI/UX upgrades",
      "Real-time map updates with alerts and station alerts",
      "Filtering by customer/date and a 'Find Me' location feature",
      "Assembly-station and parts-location display on the map",
      "Split map data between projects/modules; interior display fixes",
    ],
    impact: [
      "Improved operational visibility into live state",
      "Reduced friction in finding inventory/station state",
      "Made production/warehouse workflows easier to understand visually",
      "Improved speed and usability of map-heavy workflows",
    ],
    whyItMattered:
      "It turned operational state into something a worker could see and act on in seconds, not minutes.",
    learned:
      "For operational UI, perceived speed and trustworthy live data matter more than visual polish — people stop using a map the moment it feels stale.",
    stack: ["JavaScript", "Frappe", "Python", "MariaDB", "Socket.io", "Realtime"],
    tags: ["Realtime", "Frontend"],
    flow: ["Operational event", "Backend update", "Realtime event", "Map state", "User view"],
    featured: true,
  },
  {
    num: "04",
    title: "Assembly & Warehouse Workflow Automation",
    subtitle: "Station login, batch processing, serial items & inventory flows",
    blurb:
      "Automated stateful, error-prone production workflows — assembly stations, batch scanning, serial items, transfers, and receiving — into reliable software operators could trust.",
    role: "Built station state logic, scan/serial handling, and inventory movement rules.",
    context:
      "The platform needed to run real production and warehouse operations: assembly stations, batch stations, serial items, transfers, receiving, barcode scanning, and packing slips.",
    problem:
      "These workflows were stateful and error-prone. A wrong transition could corrupt inventory counts, batch logic, serial tracking, and downstream reporting.",
    challenge: [
      "Assembly stations needed login/logout and process state",
      "Batch stations needed scan logic and serial item handling",
      "Inventory had to move between locations correctly with validation",
      "Barcode and location logic had to work reliably for operators",
      "Edge cases: duplicate items, returned inventory, box counts, packing slips",
    ],
    built: [
      "Assembly station login logic and real-time station control",
      "Batch assembly stations with serial item handling and scan logic",
      "Worker logs and a dynamic assembly result page",
      "Receive / transfer buttons, fast transfer, and receiving filters",
      "Packing slip serial item logic and transfer location confirmation",
      "Inventory updates after station completion; stock warnings",
    ],
    impact: [
      "Reduced manual operational work",
      "Improved traceability across inventory, batch, serial, and station flows",
      "Helped stabilize production and warehouse processes",
      "Improved data consistency across assembly, transfer, and receiving",
    ],
    whyItMattered:
      "It made shop-floor work reliable enough to trust the numbers downstream — inventory, billing, and reporting all depend on it.",
    learned:
      "Domain edge cases are the product. Modeling returns, duplicates, and bad scans correctly mattered more than any happy-path feature.",
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "MariaDB", "Barcode"],
    tags: ["Workflow", "Domain"],
  },
  {
    num: "05",
    title: "Frappe / ERPNext System-Level Customization",
    subtitle: "Reusable platform behavior over per-DocType hacks",
    blurb:
      "Extended Frappe at the system level — permissions, child tables, triggers, and configuration patterns — so repeated problems became reusable platform behavior instead of copy-paste.",
    role: "Designed reusable system behavior and migrated ad-hoc customizations onto it.",
    context:
      "Many requirements couldn't be solved cleanly by hardcoding behavior into each DocType — the same patterns kept reappearing across modules.",
    problem:
      "The platform needed reusable system-level behavior for permissions, child tables, workflow-dependent properties, UOM/digit display, custom fields, document triggers, and data flow — without breaking standard Frappe behavior or upgrades.",
    challenge: [
      "Avoid repetitive hardcoding across many DocTypes",
      "Support configurable behavior across modules",
      "Keep Frappe upgrades and system behavior manageable",
      "Preserve permission/security rules while improving UI consistency",
    ],
    built: [
      "System-wide child table logic and CSS customization",
      "Workflow-dependent property manager behavior; rules on DocTypes",
      "Generic 'on status change' dataflow trigger and document trigger refactor",
      "Custom link fields, system-wide datetime and go-back behavior",
      "Per-DocType cache control and role/permission migrations",
    ],
    impact: [
      "Reduced repetitive customization",
      "Made platform behavior more consistent and maintainable",
      "Created reusable patterns for future development",
      "Evolved ad-hoc customizations into a systematic internal framework",
    ],
    whyItMattered:
      "It turned a pile of one-off hacks into platform behavior — cheaper to maintain and safer to upgrade.",
    learned:
      "Working with a framework means extending it along its own grain. Fighting Frappe's conventions costs you at every upgrade.",
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "Permissions", "Metadata"],
    tags: ["Framework", "Architecture"],
  },
  {
    num: "06",
    title: "Production Deployment & Reliability Engineering",
    subtitle: "CI/CD, multi-environment releases, security & monitoring",
    blurb:
      "Improved production stability through deployment automation, server migration, fixture control, security hardening, backups, and monitoring across multiple client environments.",
    role: "Owned the release pipeline, environment setup, and reliability/incident work.",
    context:
      "The platform ran across multiple client environments with dev/test/stage/live deployments, and releases were manual and inconsistent.",
    problem:
      "Manual deployments, inconsistent environments, unstable releases, and weak documentation created real production risk — plus recurring deadlocks, request floods, and cache overloads under load.",
    challenge: [
      "Multi-environment deployment and server migration",
      "App/module separation and license distribution",
      "Deadlocks, too-many-requests, and cache overload under load",
      "Security hardening, backups, and incident response",
    ],
    built: [
      "Setup automation and CI/CD + Git Actions review",
      "New server + modularized apps to migrate features cleanly",
      "Fixture control, version management, and deployment documentation",
      "Backup/restore from the application; backup restrictions",
      "Deadlock, too-many-requests, and cache-overload fixes",
      "Nginx + fail2ban hardening; Grafana panels; error notifications",
    ],
    impact: [
      "Improved production stability and made releases repeatable",
      "Reduced environment-specific deployment problems",
      "Improved security posture and incident response",
      "Supported long-term maintainability of client systems",
    ],
    whyItMattered:
      "Reliable releases are what let a small team support many client systems without firefighting every deploy.",
    learned:
      "Reliability is mostly removing variance — repeatable releases and documented environments prevent more incidents than any single fix.",
    stack: ["Linux", "Nginx", "fail2ban", "Docker", "Git", "CI/CD", "Grafana", "Redis"],
    tags: ["DevOps", "Reliability"],
    flow: ["Git branch", "CI/CD", "Fixtures & version", "Stage", "Validation", "Live release"],
    featured: true,
  },
  {
    num: "07",
    title: "QuickBooks & External API Integration",
    subtitle: "OAuth2, data mapping & reliable synchronization",
    blurb:
      "Connected ERP workflows to external systems like QuickBooks and CompanyCam with secure OAuth2, reliable field mapping, and error handling that holds up in production.",
    role: "Built the OAuth2 flow, mapping layer, and sync/error-handling logic.",
    context:
      "The business needed ERP workflows to exchange data with external systems like QuickBooks and CompanyCam.",
    problem:
      "Integration required secure authentication, field mapping between very different data models, and sync logic robust enough to avoid duplicate or broken financial and operational records.",
    challenge: [
      "OAuth2 authentication and token lifecycle management",
      "Mapping internal ERP data to external API structures",
      "Handling sync failures and inconsistent states",
      "Avoiding duplicate or broken financial/operational records",
    ],
    built: [
      "QuickBooks connection, validation, and OAuth2 auth flow",
      "Data mapping and synchronization logic with error handling",
      "Finance/ERP workflow connection",
      "CompanyCam data import and CRM quote → purchase order workflow",
      "Supplier chain module integration work",
    ],
    impact: [
      "Connected internal ERP workflows to external business systems",
      "Reduced manual data transfer",
      "Improved consistency between finance and operational records",
      "Created a foundation for future integrations",
    ],
    whyItMattered:
      "It removed manual double-entry between operations and finance — a constant source of errors and wasted time.",
    learned:
      "Integrations live or die on failure handling. The mapping is easy; making sync idempotent and recoverable is the actual job.",
    stack: ["QuickBooks API", "OAuth2", "REST", "Python", "Frappe", "MariaDB"],
    tags: ["Integration", "Security"],
    flow: ["ERP data", "Mapping layer", "OAuth2", "QuickBooks API", "Sync result", "Error handling"],
  },
];

export const achievements = [
  "Became the primary technical owner for a multi-client enterprise ERP platform.",
  "Led a rotating engineering team of up to 6 active developers.",
  "Supported hiring and technical interviews for 20+ engineers.",
  "Designed platform architecture for Frappe/ERPNext modules, reporting, workflow automation, and deployment.",
  "Built configurable reporting, real-time operations tools, warehouse automation, and external integrations.",
  "Improved production delivery through release validation, CI/CD, server migration, and reliability work.",
  "Worked hands-on across frontend, backend, database, infrastructure, and production support.",
];

export const experience = [
  {
    role: "Technical Lead / Full-Stack Software Engineer",
    company: "Frontech Solutions Inc.",
    time: "Sep 2023 — Present",
    place: "Edmonton, Alberta",
    bullets: [
      "Primary technical owner for ERP customizations, workflow systems, reporting, deployment automation, and production support across multiple client environments.",
      "Led architecture, sprint planning, release validation, and production delivery.",
      "Led a rotating team of up to 6 developers; supported hiring 20+ engineers.",
    ],
    current: true,
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Media Shaker",
    time: "May 2023 — Aug 2023",
    place: "Edmonton, Alberta",
    bullets: [
      "Built React UI components and Express.js APIs for a project/workflow management platform.",
      "Supported task tracking and project data management with REST APIs and MySQL.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "NSTEP Organization",
    time: "Sep 2022 — Dec 2022",
    place: "Edmonton, Alberta",
    bullets: [
      "Built Django REST Framework and React features for questionnaire submissions.",
      "Implemented media recording and structured user-data workflows.",
    ],
  },
  {
    role: "B.Sc. in Computer Science",
    company: "University of Alberta",
    time: "Sep 2018 — Dec 2022",
    place: "Edmonton, Alberta",
    bullets: [],
    education: true,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
    usedFor: "Backend logic, frontend workflows, ERP customization, reporting, and data processing.",
  },
  {
    title: "Frontend",
    items: ["React", "Vue", "Frappe UI", "Data-heavy tables", "Map / editor UI", "PWA"],
    usedFor: "Dashboards, workflow-heavy internal tools, report views, map editors, and operational interfaces.",
  },
  {
    title: "Backend",
    items: ["Frappe / ERPNext", "Django", "Express.js", "REST APIs", "Background jobs", "Workflow triggers"],
    usedFor: "ERP customization, business workflow automation, API integration, and backend process logic.",
  },
  {
    title: "Data",
    items: ["MariaDB", "MySQL", "Redis", "Report queries", "Data migration", "Batch processing"],
    usedFor: "ERP data modeling, reporting, caching, realtime workflows, and high-volume data handling.",
  },
  {
    title: "DevOps & Infrastructure",
    items: ["Linux", "Nginx", "Supervisor", "Docker", "CI/CD", "Oracle Cloud", "fail2ban"],
    usedFor: "Server setup, deployment, release validation, production support, and security hardening.",
  },
  {
    title: "Integrations",
    items: ["QuickBooks API", "OAuth2", "CompanyCam", "External sync", "API mapping"],
    usedFor: "Finance integration, external data import, secure sync, and operational system connections.",
  },
  {
    title: "Quality & Reliability",
    items: ["Cypress", "Release validation", "Production debugging", "Code review", "Permission testing"],
    usedFor: "Testing, release confidence, regression prevention, and production troubleshooting.",
  },
];

// Identity cards for the About section (right column)
export const aboutIdentity = [
  { title: "Builder", body: "I ship real software that gets used in production." },
  { title: "Technical owner", body: "Architecture, delivery, releases, and production support." },
  { title: "Active outside work", body: "Climbing, running, and long-term training goals." },
  { title: "Open to collaboration", body: "Jobs, builder conversations, and practical software." },
];

export const openTo = [
  {
    title: "Technical Lead / Full-Stack Roles",
    body: "Hands-on engineering roles involving architecture, product delivery, production systems, and team ownership.",
  },
  {
    title: "Internal Tools & ERP Systems",
    body: "ERP platforms, workflow automation, reporting systems, integrations, and business operations software.",
  },
  {
    title: "Builder / Founder Conversations",
    body: "Open to practical software ideas, automation products, AI workflow tools, and real-world business systems.",
  },
  {
    title: "Remote / Alberta / Canada",
    body: "Based in Edmonton and open to remote or Alberta-based opportunities.",
  },
];

export const beyondWorkIntro =
  "Outside of work, I stay active through climbing, running, and long-term training goals. I like activities that reward consistency, problem-solving, patience, and controlled risk — the same things I value in engineering.";

export const beyondWork = [
  {
    title: "Climbing",
    body: "Bouldering and climbing keep me close to problem-solving in physical form: observe, attempt, fail, adjust, repeat.",
  },
  {
    title: "Running",
    body: "Training for long-distance running and marathon goals. It builds discipline, consistency, and patience.",
  },
  {
    title: "Building",
    body: "Always exploring side projects, automation ideas, and ways to turn messy workflows into useful tools.",
  },
  {
    title: "Learning",
    body: "Constantly improving across software, systems, product thinking, business, and communication.",
  },
];

export const confidentialityNote =
  "Internal implementation details and client-specific information are abstracted. These case studies focus on architecture, engineering approach, and technical decision-making.";
