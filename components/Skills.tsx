"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
          className="gcard h-full p-5"
        >
          <h3 className="mono-label text-accent">{group.title}</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.items.map((s) => (
              <span key={s} className="badge">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
