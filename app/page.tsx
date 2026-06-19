import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Section from "@/components/Section";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import BeyondWork from "@/components/BeyondWork";
import OpenTo from "@/components/OpenTo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
          title="Featured Case Studies"
          subtitle="Three projects that show the depth — tap any card for context, the technical challenge, an abstract flow diagram, and what I learned."
        >
          <Projects />
        </Section>

        <Section id="achievements" index="03" title="Selected Achievements">
          <Achievements />
        </Section>

        <Section id="experience" index="04" title="Experience">
          <Experience />
        </Section>

        <Section
          id="skills"
          index="05"
          title="Technical Stack"
          subtitle="The tools I use, and where I actually use them."
        >
          <Skills />
        </Section>

        <Section id="about" index="06" title="About Me">
          <About />
        </Section>

        <Section
          id="life"
          index="07"
          title="Beyond Work"
          subtitle="The same things I value in engineering: consistency, problem-solving, patience, and controlled risk."
        >
          <BeyondWork />
        </Section>

        <Section
          id="open"
          index="08"
          title="What I'm Open To"
          subtitle="Not only for a job — also for building something."
        >
          <OpenTo />
        </Section>

        <Section id="contact" index="09" title="Contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </>
  );
}
