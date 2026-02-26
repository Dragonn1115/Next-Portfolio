import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { projects, profile } from "@/lib/content";

export default function Home() {
  return (
    <main className="noise bg-hero">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Hero />

        <Section
          title="Selected Projects"
          subtitle="Proof over claims. Decisions, trade-offs, and outcomes. Add screenshots + links to make this bulletproof."
          id="projects"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section
          title="Experience"
          subtitle="Ownership, delivery, and real-world system constraints."
        >
          <Timeline />
        </Section>

        <Section
          title="Skills"
          subtitle="Fewer words. More signal."
        >
          <Skills />
        </Section>

        <Section
          title="Contact"
          subtitle="If you’re hiring for product-driven teams, I’m happy to chat."
        >
          <div className="rounded-2xl glass p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-zinc-200">
              <div className="text-sm text-zinc-400">Email</div>
              <a className="hover:underline" href={profile.links.email}>
                {profile.links.email.replace("mailto:", "")}
              </a>
            </div>
            <div className="flex gap-3">
              <a className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="rounded-xl bg-white px-4 py-2 font-semibold text-black hover:opacity-90" href={profile.links.resume}>
                Resume
              </a>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}