import { experience } from "@/lib/content";

export default function Timeline() {
  return (
    <div className="grid gap-4">
      {experience.map((e) => (
        <div key={e.role} className="rounded-2xl glass p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <div className="text-sm text-zinc-400">{e.company}</div>
              <div className="text-lg font-semibold">{e.role}</div>
            </div>
            <div className="text-sm text-zinc-400">{e.time}</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-200">
            {e.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}