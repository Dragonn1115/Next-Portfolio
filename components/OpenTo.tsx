"use client";

import { motion } from "framer-motion";
import { Briefcase, Boxes, Rocket, MapPin } from "lucide-react";
import { openTo } from "@/lib/content";

const icons = [Briefcase, Boxes, Rocket, MapPin];

export default function OpenTo() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-base leading-relaxed text-muted"
      >
        I&apos;m open to software engineering and technical lead opportunities —
        full-stack product engineering, internal tools, ERP/workflow systems,
        production platforms, and small-team technical ownership. I&apos;m also
        happy to meet builders, founders, and operators working on practical
        software that automates messy real-world workflows.
      </motion.p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {openTo.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="gcard group p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
