"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass hairline-glow" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent-line bg-accent-soft font-mono text-xs font-bold text-accent">
            JZ
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
            Jinglong Zhao
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === id
                  ? "text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-line-strong bg-white/5 px-4 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent-line hover:text-accent"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
