import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IdentityCards from "@/components/IdentityCards";
import TechMarquee from "@/components/TechMarquee";
import Section from "@/components/Section";
import Proof from "@/components/Proof";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
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
        <IdentityCards />
        <TechMarquee />

        <Section
          id="proof"
          index="01"
          title="Proof of Ownership"
          subtitle="Signals from real production work — not vanity metrics. What I've actually been responsible for."
        >
          <Proof />
        </Section>

        <Section
          id="work"
          index="02"
          title="What I Build"
          subtitle="I build the kind of software that sits between business operations and engineering: ERP modules, internal tools, reporting systems, real-time dashboards, workflow automation, and the deployment work needed to keep them running."
        >
          <WhatIDo />
        </Section>

        <Section
          id="projects"
          index="03"
          title="Featured Case Studies"
          subtitle="Three projects that show the depth — tap any card for context, the technical challenge, an abstract flow diagram, and what I learned."
        >
          <Projects />
        </Section>

        <Section id="experience" index="04" title="Experience">
          <Experience />
        </Section>

        <Section id="about" index="05" title="About Me">
          <About />
        </Section>

        <Section
          id="life"
          index="06"
          title="Beyond Work"
          subtitle="The same things I value in engineering: consistency, problem-solving, patience, and controlled risk."
        >
          <BeyondWork />
        </Section>

        <Section
          id="skills"
          index="07"
          title="Technical Stack"
          subtitle="The tools I use, and where I actually use them."
        >
          <Skills />
        </Section>

        <Section
          id="open"
          index="08"
          title="Now"
          subtitle="What I'm open to — not only a job, also building something."
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
