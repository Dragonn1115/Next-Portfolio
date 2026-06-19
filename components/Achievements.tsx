import { Check } from "lucide-react";
import { achievements } from "@/lib/content";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {achievements.map((a, i) => (
        <Reveal key={a} delay={(i % 2) * 0.05}>
          <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-ink-2 p-4 transition-colors hover:border-line-strong">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
              <Check size={12} strokeWidth={3} />
            </span>
            <p className="text-sm leading-relaxed text-muted">{a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
