"use client";

import { motion } from "framer-motion";
import { about, aboutIdentity } from "@/lib/content";

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

      <div className="grid h-fit grid-cols-2 gap-4">
        {aboutIdentity.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.06 * i }}
            className="gcard p-5"
          >
            <h3 className="text-sm font-semibold tracking-tight text-fg">
              {card.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
