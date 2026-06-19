import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { confidentialityNote } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />

        <Section
          id="work"
          index="01"
          title="What I Do"
          subtitle="I build enterprise web systems that connect real business operations with reliable software."
        >
          <WhatIDo />
        </Section>

        <Section
          id="projects"
          index="02"
          title="Selected Projects"
          subtitle="Seven engineering themes from owning a multi-client ERP platform — expand any card for the problem, technical challenge, and impact."
        >
          <Projects />
          <p className="mt-8 rounded-xl border border-line bg-ink-2 p-4 text-xs leading-relaxed text-faint">
            {confidentialityNote}
          </p>
        </Section>

        <Section
          id="achievements"
          index="03"
          title="Selected Achievements"
          subtitle="Ownership and outcomes across architecture, delivery, and production."
        >
          <Achievements />
        </Section>

        <Section
          id="experience"
          index="04"
          title="Experience"
          subtitle="From full-stack intern to hands-on technical lead."
        >
          <Experience />
        </Section>

        <Section
          id="skills"
          index="05"
          title="Technical Stack"
          subtitle="The tools I use to ship and maintain production systems."
        >
          <Skills />
        </Section>

        <Section id="contact" index="06" title="Contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </>
  );
}
