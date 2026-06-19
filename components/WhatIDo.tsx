import { whatIDo } from "@/lib/content";
import Reveal from "./Reveal";

export default function WhatIDo() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {whatIDo.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <div className="group h-full bg-ink-2 p-6 transition-colors hover:bg-surface">
            <span className="mono-label text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
