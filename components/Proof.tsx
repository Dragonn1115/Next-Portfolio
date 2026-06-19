"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { profile, achievements } from "@/lib/content";

// First two cards = compact, number-forward. Last two = wider, explanatory.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3"];
const wideSpans = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-4"];

export default function Proof() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-12">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`gcard ticked flex flex-col justify-center p-6 ${wideSpans[i] ?? spans[i]}`}
          >
            <dt className="font-mono text-3xl font-bold text-gradient sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-2 text-sm font-semibold text-fg">{s.label}</dd>
            <dd className="mt-1 text-xs text-faint">{s.note}</dd>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
            className="flex items-start gap-3 border-b border-line pb-3.5"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-cyan to-violet text-ink">
              <Check size={12} strokeWidth={3} />
            </span>
            <p className="text-sm leading-relaxed text-muted">{a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
