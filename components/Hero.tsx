"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { profile } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const orbs = [
  { className: "left-[6%] top-[24%] h-2.5 w-2.5 bg-cyan", dur: 7, dist: 22 },
  { className: "left-[40%] top-[12%] h-1.5 w-1.5 bg-violet", dur: 9, dist: -24 },
  { className: "left-[18%] bottom-[26%] h-2 w-2 bg-violet", dur: 11, dist: -16 },
];

function OrbitalAvatar() {
  return (
    <div className="relative mx-auto h-40 w-40 sm:h-44 sm:w-44">
      {/* static rings */}
      <span className="orbit-ring scale-100 opacity-60" />
      <span className="orbit-ring scale-[0.72] opacity-40" />
      {/* spinning rings, each carrying a node */}
      <span className="orbit-spin">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_2px_var(--color-cyan)]" />
      </span>
      <span className="orbit-spin-rev scale-[0.72]">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet shadow-[0_0_10px_2px_var(--color-violet)]" />
      </span>
      {/* monogram core */}
      <div className="absolute inset-0 m-auto flex h-[44%] w-[44%] items-center justify-center rounded-full border border-accent-line bg-gradient-to-br from-surface-2 to-ink">
        <span className="bg-gradient-to-br from-cyan to-violet bg-clip-text font-mono text-2xl font-bold tracking-tight text-transparent">
          JZ
        </span>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-line py-2.5">
      <span className="mono-label">{label}</span>
      <span className="text-right text-sm text-fg/90">{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-10 sm:pt-40">
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`orb ${o.className}`}
          animate={{ y: [0, o.dist, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        {/* ── Left: the person ───────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent-line bg-accent-soft px-3.5 py-1.5"
          >
            <span className="live-dot" />
            <span className="font-mono text-xs text-accent">
              {profile.role} · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-[3.4rem]"
          >
            Hi, I&apos;m Jinglong. <br className="hidden sm:block" />
            I turn messy business problems into{" "}
            <span className="text-gradient">production software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-fg/85 sm:text-lg"
          >
            {profile.heroSupport}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-muted"
          >
            {profile.heroPersonal}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
            >
              View My Work <ArrowDown size={16} />
            </a>
            <a
              href={profile.links.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line"
            >
              <FileText size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/5 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-line"
            >
              <MessageSquare size={16} /> Let&apos;s Talk
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.links.github, icon: Github, label: "GitHub" },
                { href: profile.links.email, icon: Mail, label: "Email" },
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
        </div>

        {/* ── Right: the command-center identity card ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="gcard ticked p-6 sm:p-7"
        >
          {/* console header bar */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint/50" />
            </div>
            <span className="font-mono text-[0.68rem] tracking-widest text-faint">
              ~/identity
            </span>
          </div>

          <div className="py-6">
            <OrbitalAvatar />
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold tracking-tight text-fg">
              {profile.name}
            </h2>
            <p className="mt-1 font-mono text-xs text-accent">{profile.role}</p>
          </div>

          <div className="mt-5">
            <Row label="Location">{profile.location}</Row>
            <Row label="Focus">{profile.currentFocus}</Row>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
            {profile.status.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-live" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
