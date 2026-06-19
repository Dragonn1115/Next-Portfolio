"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/content";
import ProjectModal from "./ProjectModal";

function FeaturedCard({
  p,
  onOpen,
  i,
}: {
  p: Project;
  onOpen: () => void;
  i: number;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.2) }}
      className="gcard group flex flex-col p-7 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-sm text-gradient">{p.num}</span>
        <span className="flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-widest text-faint transition-colors group-hover:text-accent">
          Case study
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
        {p.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>

      <div className="mt-4 border-t border-line pt-4">
        <span className="mono-label text-faint">What I owned</span>
        <p className="mt-1.5 text-sm leading-relaxed text-fg/80">{p.role}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {p.tags.map((t) => (
          <span key={t} className="badge badge-accent">
            {t}
          </span>
        ))}
        {p.stack.slice(0, 4).map((s) => (
          <span key={s} className="badge">
            {s}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function CompactCard({
  p,
  onOpen,
  i,
}: {
  p: Project;
  onOpen: () => void;
  i: number;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.2) }}
      className="gcard group flex flex-col p-5 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-gradient">{p.num}</span>
        <ArrowUpRight
          size={14}
          className="text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
      <h3 className="mt-3 text-base font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
        {p.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.subtitle}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {p.stack.slice(0, 3).map((s) => (
          <span key={s} className="badge">
            {s}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((p, i) => (
          <FeaturedCard key={p.num} p={p} i={i} onOpen={() => setActive(p)} />
        ))}
      </div>

      <h3 className="mt-14 mb-6 flex items-center gap-3 text-sm font-medium text-muted">
        <span className="mono-label">More Engineering Work</span>
        <span className="h-px flex-1 bg-line" />
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {more.map((p, i) => (
          <CompactCard key={p.num} p={p} i={i} onOpen={() => setActive(p)} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
