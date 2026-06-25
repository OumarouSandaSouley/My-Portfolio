import About from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { HireMe } from "@/components/HireMe";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";

const Page = async () => {
  return (
    <main className="w-full min-h-screen relative bg-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
      <FloatingCTA />
      <BackToTop />
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Page;