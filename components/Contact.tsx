"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export default function Contact() {
  const email = profile.links.email.replace("mailto:", "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="gcard relative overflow-hidden p-8 text-center sm:p-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet/25 blur-3xl"
      />
      <div className="relative">
        <h3 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something that <span className="text-gradient">ships</span>.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Hiring for a product-driven engineering team? The fastest way to
          reach me is email.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.links.email}
            className="btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
          >
            <Mail size={16} /> {email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
