"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-10 sm:pt-44">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mono-label flex items-center gap-3"
      >
        <span className="inline-block h-px w-8 bg-accent-line" />
        {profile.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
      >
        I turn ambiguous business requirements into{" "}
        <span className="text-gradient">reliable enterprise software</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          View Projects <ArrowDown size={16} />
        </a>
        <a
          href={profile.links.resume}
          className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line"
        >
          <FileText size={16} /> Resume
        </a>
        <div className="ml-1 flex items-center gap-1">
          {[
            { href: profile.links.email, icon: Mail, label: "Email" },
            { href: profile.links.github, icon: Github, label: "GitHub" },
            { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-lg p-2.5 text-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Stat strip */}
      <motion.dl
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
      >
        {profile.stats.map((s) => (
          <div key={s.label} className="bg-ink-2 p-5">
            <dt className="font-mono text-3xl font-semibold text-accent">
              {s.value}
            </dt>
            <dd className="mt-1 text-sm font-medium text-fg">{s.label}</dd>
            <dd className="mt-0.5 text-xs text-faint">{s.note}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
