import About from "@/components/About";
import { Contact } from "@/components/Contact";
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
    <main className="w-full max-w-screen-2xl mx-auto min-h-screen relative">
      <Navbar />
      <section className="py-20 md:py-10 sm:py-8 relative">
        <Hero />
      </section>
      <About />
      <Projects />
      <HireMe />
      <Contact />
      <Skills />
      <Footer />
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Page;
