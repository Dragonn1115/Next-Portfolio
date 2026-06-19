"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const shown = featuredOnly ? projects.filter((p) => p.featured) : projects;

  return (
    <div>
      <div className="mb-6 flex items-center gap-2">
        <button
          onClick={() => setFeaturedOnly(false)}
          className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
            !featuredOnly
              ? "bg-accent-soft text-accent"
              : "text-muted hover:text-fg"
          }`}
        >
          All ({projects.length})
        </button>
        <button
          onClick={() => setFeaturedOnly(true)}
          className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
            featuredOnly
              ? "bg-accent-soft text-accent"
              : "text-muted hover:text-fg"
          }`}
        >
          Featured ({projects.filter((p) => p.featured).length})
        </button>
      </div>

      <div className="grid gap-5">
        {shown.map((p, i) => (
          <Reveal key={p.num} delay={Math.min(i * 0.04, 0.2)}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
