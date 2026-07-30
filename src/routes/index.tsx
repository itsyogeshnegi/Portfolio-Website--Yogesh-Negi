import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yogesh Negi — Full Stack Developer · React, Next.js, MERN" },
      { name: "description", content: "Retro-futuristic portfolio of Yogesh Negi — full stack developer building premium web experiences with React, Next.js, Node.js and MongoDB. 1M+ users supported, 20+ projects shipped." },
      { property: "og:title", content: "Yogesh Negi — Full Stack Developer" },
      { property: "og:description", content: "Retro-futuristic developer portfolio: React, Next.js, MERN, and AI automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [palette, setPalette] = useState(false);
  return (
    <>
      <Loader />
      <CustomCursor />
      <BackgroundFX />
      <div className="relative z-10">
        <Nav onOpenPalette={() => setPalette(true)} />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
      <CommandPalette open={palette} onOpenChange={setPalette} />
    </>
  );
}
