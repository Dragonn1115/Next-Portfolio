// ---------------------------------------------------------------------------
// Portfolio content for Jinglong Zhao
// Sourced from the personal portfolio material. Edit links + copy freely.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jinglong Zhao",
  role: "Technical Lead · Full-Stack Software Engineer",
  location: "Edmonton, Alberta",
  tagline:
    "I build production ERP systems, internal tools, and real-time business workflows.",
  intro:
    "Hands-on technical lead who takes ambiguous business requirements, designs the system, builds the product, leads a small engineering team, deploys to production, debugs real client environments, and keeps the platform maintainable over time.",
  links: {
    // TODO: replace with your public profiles before launch
    email: "mailto:jayden.z@frontech.ca",
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    resume: "/resume.pdf",
  },
  stats: [
    { value: "6", label: "Engineers led", note: "rotating active team" },
    { value: "10+", label: "Engineers interviewed", note: "hiring support" },
    { value: "4", label: "Environments owned", note: "dev · test · stage · live" },
    { value: "7", label: "Platform domains", note: "ERP · realtime · DevOps" },
  ],
};

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
  problem: string;
  challenge: string[];
  built: string[];
  impact: string[];
  stack: string[];
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Multi-Client ERP Platform Ownership",
    subtitle: "Architecture & technical leadership for a Frappe-based enterprise platform",
    blurb:
      "Became the technical owner of a complex ERP platform running across multiple client environments — driving architecture, delivery process, and production stability.",
    problem:
      "A growing set of ERP/client systems carried many custom business workflows. Requirements changed frequently, different clients needed different behavior, and the platform had to support multiple environments, releases, permissions, reports, automation, and integrations. The real problem wasn't writing features — it was making the platform maintainable, deployable, and scalable across client environments.",
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
      "Turned unclear business requirements into production-ready systems",
      "Improved release consistency across environments",
      "Reduced one-off work by pushing reusable, system-level modules",
      "Helped stabilize and scale a complex internal enterprise platform",
    ],
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "MariaDB", "CI/CD", "Leadership"],
    tags: ["Leadership", "Architecture"],
    featured: true,
  },
  {
    num: "02",
    title: "Configurable Multi-Doctype Report Builder",
    subtitle: "Metadata-driven reporting across ERP workflows",
    blurb:
      "Designed a configurable report system that replaced expensive, hardcoded reports with metadata-driven behavior usable across many DocTypes.",
    problem:
      "Business users needed flexible reports across different DocTypes and workflows. Existing reports were too hardcoded and expensive to customize — every new report or data view risked becoming a custom one-off implementation.",
    challenge: [
      "Multiple DocTypes with different underlying structures",
      "Reports needed filters, permissions, field selection, and export behavior",
      "Balancing flexibility against performance and predictable behavior",
      "Rendering and data workflows had to support high-volume business data",
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
      "Created a stronger foundation for ERP analytics and operational reporting",
    ],
    stack: ["Frappe", "Python", "JavaScript", "MariaDB", "Metadata", "Reporting"],
    tags: ["Data", "Architecture"],
    featured: true,
  },
  {
    num: "03",
    title: "Real-Time Map-Based Operations Interface",
    subtitle: "Live map editor & operations dashboard for warehouse and production",
    blurb:
      "Built a map-style operational view with editing, filtering, location display, and real-time updates so teams could understand warehouse and production state visually.",
    problem:
      "Users needed a visual way to understand warehouse, inventory, station, and operational state. A normal list/table interface wasn't enough — the system needed a map-style view with editing, filtering, location display, live updates, and usability improvements.",
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
    stack: ["JavaScript", "Frappe", "Python", "MariaDB", "Socket.io", "Realtime"],
    tags: ["Realtime", "Frontend"],
    featured: true,
  },
  {
    num: "04",
    title: "Assembly & Warehouse Workflow Automation",
    subtitle: "Station login, batch processing, serial items & inventory flows",
    blurb:
      "Automated stateful, error-prone production workflows — assembly stations, batch scanning, serial items, transfers, and receiving — into reliable software.",
    problem:
      "The platform needed real-world production and warehouse workflows: assembly stations, batch stations, serial items, inventory transfers, receiving, barcode scanning, worker logs, purchase orders, and packing slips. These workflows were stateful and error-prone — a wrong transition could corrupt inventory counts, batch logic, serial tracking, and downstream reporting.",
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
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "MariaDB", "Barcode"],
    tags: ["Workflow", "Domain"],
  },
  {
    num: "05",
    title: "Frappe / ERPNext System-Level Customization",
    subtitle: "Reusable platform behavior over per-DocType hacks",
    blurb:
      "Extended Frappe at the system level — permissions, child tables, triggers, and configuration patterns — so repeated problems became reusable platform behavior.",
    problem:
      "Many business requirements couldn't be solved cleanly by hardcoding behavior into every DocType. The platform needed reusable system-level behavior for permissions, child tables, workflow-dependent properties, UOM/digit display, custom fields, document triggers, and data flow.",
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
    stack: ["Frappe", "ERPNext", "Python", "JavaScript", "Permissions", "Metadata"],
    tags: ["Framework", "Architecture"],
  },
  {
    num: "06",
    title: "Production Deployment & Reliability Engineering",
    subtitle: "CI/CD, multi-environment releases, security & monitoring",
    blurb:
      "Improved production stability through deployment automation, server migration, fixture control, security hardening, backups, and monitoring across client environments.",
    problem:
      "The platform ran across multiple client environments with dev/test/stage/live deployments. Manual deployments, inconsistent environments, unstable releases, and weak documentation created real production risk.",
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
    stack: ["Linux", "Nginx", "fail2ban", "Docker", "Git", "CI/CD", "Grafana", "Redis"],
    tags: ["DevOps", "Reliability"],
    featured: true,
  },
  {
    num: "07",
    title: "QuickBooks & External API Integration",
    subtitle: "OAuth2, data mapping & production-grade synchronization",
    blurb:
      "Connected ERP workflows to external systems like QuickBooks and CompanyCam with secure OAuth2, reliable mapping, and error handling.",
    problem:
      "The business needed ERP workflows to communicate with external systems such as QuickBooks and other operational platforms — requiring secure authentication, field mapping, synchronization logic, and robust error handling.",
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
    stack: ["QuickBooks API", "OAuth2", "REST", "Python", "Frappe", "MariaDB"],
    tags: ["Integration", "Security"],
  },
];

export const achievements = [
  "Acted as primary technical owner for a multimillion-dollar enterprise software platform.",
  "Led a rotating engineering team of up to 6 active developers.",
  "Contributed to hiring and interviewing more than 10 engineers.",
  "Designed architecture and technical standards for Frappe/ERPNext enterprise applications.",
  "Built a configurable multi-DocType report builder for ERP workflows.",
  "Built map-based operational tools with real-time updates and editor workflows.",
  "Developed assembly, warehouse, inventory, and production workflow automation.",
  "Integrated QuickBooks using OAuth2 and secure data synchronization logic.",
  "Improved deployment reliability across dev/test/stage/live environments.",
  "Extended Frappe framework behavior through system-level customizations.",
  "Owned production debugging, performance, security hardening, and reliability fixes.",
];

export const experience = [
  {
    role: "Technical Lead / Full-Stack Software Engineer",
    company: "Frontech Solutions Inc.",
    time: "Sep 2023 — Present",
    place: "Edmonton, Alberta",
    bullets: [
      "Primary technical owner for web-based internal tools, ERP customizations, enterprise workflow systems, reporting modules, deployment automation, and production support across multiple client environments.",
      "Led architecture and technical direction for Frappe/ERPNext-based business systems.",
      "Owned sprint planning, technical scoping, release validation, and production delivery.",
      "Led a rotating engineering team of up to 6 developers; supported hiring 10+ engineers.",
      "Worked directly with stakeholders to turn unclear requirements into executable plans.",
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
  },
  {
    title: "Frontend",
    items: ["React", "Vue", "Frappe UI", "Data-heavy tables", "Map / editor UI", "PWA"],
  },
  {
    title: "Backend",
    items: ["Frappe / ERPNext", "Django", "Express.js", "REST APIs", "Background jobs", "Workflow triggers"],
  },
  {
    title: "Database",
    items: ["MariaDB", "MySQL", "Data modeling", "Report queries", "Migration", "Batch processing"],
  },
  {
    title: "Realtime",
    items: ["Socket.io", "Frappe realtime", "Redis", "Live dashboards"],
  },
  {
    title: "DevOps & Infra",
    items: ["Linux", "Nginx", "Supervisor", "Docker", "CI/CD", "Oracle Cloud", "AWS", "fail2ban"],
  },
  {
    title: "Integrations",
    items: ["QuickBooks API", "OAuth2", "CompanyCam", "External sync", "API mapping"],
  },
  {
    title: "Quality",
    items: ["Cypress", "Release validation", "Production debugging", "Code review", "Permission testing"],
  },
];

export const confidentialityNote =
  "Due to client and company confidentiality, screenshots and internal implementation details are abstracted. These case studies focus on architecture, engineering approach, and technical decision-making.";
