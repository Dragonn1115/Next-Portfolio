"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-4">
        {about.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`leading-relaxed ${
              i === 0 ? "text-lg text-fg" : "text-base text-muted"
            }`}
          >
            {para}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="gcard h-fit p-6"
      >
        <span className="mono-label text-accent">How I work</span>
        <ul className="mt-4 space-y-3">
          {[
            "I build for real users, not demos.",
            "I prefer maintainable systems over clever hacks.",
            "I turn repeated problems into reusable behavior.",
            "I own production, not just code.",
            "I communicate clearly with business stakeholders.",
          ].map((line) => (
            <li
              key={line}
              className="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
