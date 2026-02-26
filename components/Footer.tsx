import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-zinc-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js • Tailwind • Framer Motion</span>
      </div>
    </footer>
  );
}