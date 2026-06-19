"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mountain, Radar, SquareTerminal, FolderGit2 } from "lucide-react";
import { identityCards } from "@/lib/content";

const icons: Record<string, typeof Radar> = {
  work: SquareTerminal,
  projects: FolderGit2,
  life: Mountain,
  now: Radar,
};

export default function IdentityCards() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {identityCards.map((card, i) => {
        const Icon = icons[card.id] ?? Radar;
        return (
          <motion.a
            key={card.id}
            href={card.href}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="gcard group flex flex-col p-5"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                <Icon size={18} />
              </span>
              <span className="font-mono text-[0.7rem] tracking-widest text-faint">
                {card.coord}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h3 className="text-base font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                {card.label}
              </h3>
              <ArrowUpRight
                size={14}
                className="text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.body}</p>
          </motion.a>
        );
      })}
    </div>
  );
}
