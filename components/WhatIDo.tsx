"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Layers,
  Server,
  Users,
  Workflow,
} from "lucide-react";
import { whatIDo } from "@/lib/content";

const icons = [Layers, Users, BarChart3, Activity, Workflow, Server];

export default function WhatIDo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {whatIDo.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="gcard group p-6"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
              <Icon size={20} />
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-fg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
