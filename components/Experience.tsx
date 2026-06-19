import { GraduationCap } from "lucide-react";
import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <div className="relative">
      {/* vertical rail */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" />

      <div className="space-y-8">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.company} delay={i * 0.05}>
            <div className="relative pl-8 sm:pl-10">
              {/* node */}
              <span
                className={`absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full sm:h-[18px] sm:w-[18px] ${
                  e.current
                    ? "bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]"
                    : "border border-line-strong bg-surface"
                }`}
              />
              <div className="card card-hover p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-center gap-2">
                    {e.education ? (
                      <GraduationCap size={16} className="text-accent" />
                    ) : null}
                    <h3 className="text-lg font-semibold tracking-tight text-fg">
                      {e.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-faint">{e.time}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-accent">
                  <span>{e.company}</span>
                  <span className="text-faint">·</span>
                  <span className="text-faint">{e.place}</span>
                </div>
                {e.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
