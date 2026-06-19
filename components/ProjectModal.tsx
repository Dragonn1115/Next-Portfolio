"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/lib/content";

function Column({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="mono-label text-accent">{label}</h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="gcard relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-b-none rounded-t-3xl sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 rounded-full border border-line bg-ink/60 p-2 text-muted backdrop-blur transition-colors hover:border-accent-line hover:text-fg"
            >
              <X size={18} />
            </button>

            <div className="p-7 sm:p-10">
              <span className="font-mono text-sm text-gradient">
                {project.num} / 07
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-accent">{project.subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="badge badge-accent">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-line bg-ink/40 p-5">
                <h4 className="mono-label text-accent">The Problem</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>

              <div className="mt-7 grid gap-7 sm:grid-cols-3">
                <Column label="Challenge" items={project.challenge} />
                <Column label="What I Built" items={project.built} />
                <Column label="Impact" items={project.impact} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
