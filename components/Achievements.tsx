"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {achievements.map((a, i) => (
        <motion.div
          key={a}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
          className="flex items-start gap-3 border-b border-line pb-4"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-violet to-cyan text-ink">
            <Check size={12} strokeWidth={3} />
          </span>
          <p className="text-sm leading-relaxed text-muted">{a}</p>
        </motion.div>
      ))}
    </div>
  );
}
