import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const email = profile.links.email.replace("mailto:", "");

  return (
    <Reveal>
      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative">
          <h3 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Hiring for a product-driven engineering team?
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m happy to talk about ERP platforms, real-time systems,
            workflow automation, and production ownership. The fastest way to
            reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
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
      </div>
    </Reveal>
  );
}
