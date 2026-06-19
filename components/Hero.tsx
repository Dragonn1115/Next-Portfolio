"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const orbs = [
  { className: "left-[8%] top-[22%] h-3 w-3 bg-violet", dur: 7, dist: 22 },
  { className: "right-[14%] top-[30%] h-2 w-2 bg-cyan", dur: 9, dist: -28 },
  { className: "right-[26%] bottom-[24%] h-2.5 w-2.5 bg-magenta", dur: 8, dist: 18 },
  { className: "left-[20%] bottom-[30%] h-1.5 w-1.5 bg-cyan", dur: 11, dist: -16 },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-12 sm:pt-44">
      {/* floating orbs */}
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`orb ${o.className}`}
          animate={{ y: [0, o.dist, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3.5 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
        </span>
        <span className="font-mono text-xs text-accent">
          {profile.role} · {profile.location}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
      >
        Enterprise software,
        <br />
        <span className="text-gradient">owned end to end.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
      >
        {profile.hook}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
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
        className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {profile.stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -4 }}
            className="gcard p-5"
          >
            <dt className="font-mono text-4xl font-bold text-gradient">
              {s.value}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-fg">{s.label}</dd>
            <dd className="mt-0.5 text-xs text-faint">{s.note}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
