"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/lib/content";

function DetailColumn({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mono-label text-accent">{label}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      className="card card-hover overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col gap-4 p-6 text-left sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">{project.num}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            </div>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 shrink-0 text-faint"
          >
            <ChevronDown size={18} />
          </motion.span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.blurb}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-6 pb-7 pt-6 sm:px-7">
              <div>
                <h4 className="mono-label text-accent">The Problem</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>

              <div className="mt-7 grid gap-7 sm:grid-cols-3">
                <DetailColumn label="Technical Challenge" items={project.challenge} />
                <DetailColumn label="What I Built" items={project.built} />
                <DetailColumn label="Impact" items={project.impact} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
