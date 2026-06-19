"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/content";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.num}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25) }}
            className={`gcard group flex flex-col p-6 text-left ${
              p.featured && i === 0 ? "sm:col-span-2" : ""
            }`}
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
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {p.subtitle}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.tags.map((t) => (
                <span key={t} className="badge badge-accent">
                  {t}
                </span>
              ))}
              {p.stack.slice(0, 3).map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
