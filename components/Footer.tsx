import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line pt-8 pb-12">
      <div className="flex flex-col gap-2 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span className="font-mono text-xs">
          Next.js · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  );
}
