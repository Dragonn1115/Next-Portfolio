"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-cyan to-transparent sm:left-[9px]" />

      <div className="space-y-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.role + e.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative pl-8 sm:pl-10"
          >
            <span
              className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full sm:h-[18px] sm:w-[18px] ${
                e.current
                  ? "bg-gradient-to-br from-violet to-magenta shadow-[0_0_0_4px_var(--color-accent-soft)]"
                  : "border border-line-strong bg-surface"
              }`}
            />
            <div className="gcard p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                  {e.education ? (
                    <GraduationCap size={16} className="text-accent" />
                  ) : null}
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {e.role}
                  </h3>
                </div>
                <span className="font-mono text-xs text-faint">{e.time}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                <span className="text-gradient font-medium">{e.company}</span>
                <span className="text-faint">·</span>
                <span className="text-faint">{e.place}</span>
              </div>
              {e.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
