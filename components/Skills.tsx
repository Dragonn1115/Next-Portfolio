import { skillGroups } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={(i % 4) * 0.05}>
          <div className="card h-full p-5">
            <h3 className="mono-label text-faint">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
