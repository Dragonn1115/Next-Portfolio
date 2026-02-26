import { skills } from "@/lib/content";

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl glass p-6">
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Group title="Core" items={skills.core} />
      <Group title="Systems" items={skills.systems} />
      <Group title="Patterns" items={skills.patterns} />
    </div>
  );
}