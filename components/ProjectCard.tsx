"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  subtitle,
  impact,
  stack,
  tags,
}: {
  title: string;
  subtitle: string;
  impact: string[];
  stack: string[];
  tags: string[];
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group rounded-2xl glass p-6 hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-300">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-zinc-200">
        {impact.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 text-xs text-zinc-400">
        Tip: Add screenshots + a short write-up link for maximum credibility.
      </div>
    </motion.article>
  );
}