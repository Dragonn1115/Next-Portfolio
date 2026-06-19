import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
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
        <TechMarquee />

        <Section
          id="work"
          index="01"
          title="What I Do"
          subtitle="Enterprise web systems that connect real business operations with reliable software."
        >
          <WhatIDo />
        </Section>

        <Section
          id="projects"
          index="02"
          title="Selected Projects"
          subtitle="Seven engineering themes from owning a multi-client ERP platform. Tap any card for the full case study."
        >
          <Projects />
          <p className="mt-8 text-center text-xs leading-relaxed text-faint">
            {confidentialityNote}
          </p>
        </Section>

        <Section
          id="achievements"
          index="03"
          title="Selected Achievements"
        >
          <Achievements />
        </Section>

        <Section id="experience" index="04" title="Experience">
          <Experience />
        </Section>

        <Section
          id="skills"
          index="05"
          title="Technical Stack"
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
