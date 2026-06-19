const tech = [
  "Frappe / ERPNext",
  "Python",
  "TypeScript",
  "React",
  "Vue",
  "MariaDB",
  "Socket.io",
  "Redis",
  "Docker",
  "Nginx",
  "Linux",
  "CI/CD",
  "OAuth2",
  "QuickBooks API",
  "Django",
  "Express.js",
];

export default function TechMarquee() {
  const items = [...tech, ...tech];
  return (
    <div className="marquee-mask relative mt-20 overflow-hidden border-y border-line py-5">
      <div className="marquee-track gap-3">
        {items.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-sm text-faint"
          >
            <span className="text-accent">/</span> {t}
            <span className="ml-3 text-line-strong">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
