"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/lib/content";

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {text}
    </span>
  );
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl glass glow shine p-10"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {profile.highlights.map((h) => (
            <Pill key={h.label} text={`${h.label}: ${h.value}`} />
          ))}
        </div>

        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
            <span className="block text-zinc-300">{profile.title}</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">{profile.location}</p>
        </div>

        <p className="max-w-3xl text-zinc-200/90 leading-relaxed">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href={profile.links.resume}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Resume <FileText size={16} />
          </a>
        </div>

        <div className="flex gap-4 text-zinc-300">
          <a className="hover:text-white" href={profile.links.email} aria-label="Email">
            <Mail size={18} />
          </a>
          <a className="hover:text-white" href={profile.links.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a className="hover:text-white" href={profile.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
    </motion.section>
  );
}