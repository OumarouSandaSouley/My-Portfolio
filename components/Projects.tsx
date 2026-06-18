"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Modal } from "./ProjectModal";
import { Project } from "./types";
import { useScopedI18n } from "@/locales/client";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = useScopedI18n("projects");

  const projects: Project[] = [
    {
      id: 1,
      title: "SARO",
      description: t("saro.description"),
      image: "/projects/saro.png",
      techStack: ["Next.js", "React Native", "Supabase", "CamPay"],
      livePreview: "https://saro.saaretech.com/",
      githubLink: "",
      fullDescription: t("saro.fullDescription"),
    },
    {
      id: 2,
      title: "The Project Valentine",
      description: t("valentine.description"),
      image: "/projects/valentine.png",
      techStack: ["React Native", "Stripe", "OpenAI Realtime API", "WebRTC", "PostgreSQL"],
      livePreview: "https://theprojectvalentine.com",
      githubLink: "",
      fullDescription: t("valentine.fullDescription"),
    },
    {
      id: 3,
      title: "Famla AI",
      description: t("famla.description"),
      image: "/projects/famla-ai.png",
      techStack: ["FastAPI", "Python", "AI Voice", "PostgreSQL", "Docker", "MongoDB"],
      livePreview: "https://famla.com",
      githubLink: "",
      fullDescription: t("famla.fullDescription"),
    },
    {
      id: 4,
      title: "GNDC Website",
      description: t("gndc.description"),
      image: "/projects/gndc.png",
      techStack: ["Next.js", "NextAuth", "Tailwind CSS", "Redux", "Shadcn"],
      livePreview: "https://gndc.tech",
      githubLink: "",
      fullDescription: t("gndc.fullDescription"),
    },
    {
      id: 5,
      title: "Light R Digital website",
      description: t("lightrdigital.description"),
      image: "/projects/lightrdigital.png",
      techStack: ["Next.js", "Tailwind CSS"],
      livePreview: "https://lightrdigital.com",
      githubLink: "",
      fullDescription: t("lightrdigital.fullDescription"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white" id="projects">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-neutral-500 text-[17px] leading-relaxed mt-4">
            {t("featuredProjectsDescription")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* SARO - cellule principale, plus grande */}
          <motion.div
            variants={{
              hidden: { y: 16, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="lg:col-span-2 lg:row-span-1 rounded-2xl bg-neutral-50 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(projects[0])}
          >
            <div className="relative h-56 lg:h-72 bg-neutral-100 overflow-hidden">
              <img
                src={projects[0].image}
                alt="SARO"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 lg:p-7">
              <h3 className="text-xl font-medium text-neutral-900 mb-2">SARO</h3>
              <p className="text-[15px] text-neutral-600 leading-relaxed mb-4">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Famla - cellule verticale à droite */}
          <motion.div
            variants={{
              hidden: { y: 16, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="lg:row-span-1 rounded-2xl bg-neutral-900 overflow-hidden group cursor-pointer flex flex-col"
            onClick={() => setSelectedProject(projects[2])}
          >
            <div className="relative h-40 bg-neutral-800 overflow-hidden">
              <img
                src={projects[2].image}
                alt="Famla AI"
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-medium text-white mb-2">Famla AI</h3>
              <p className="text-[14px] text-neutral-400 leading-relaxed mb-4">
                {projects[2].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {projects[2].techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-neutral-300 bg-white/10 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Valentine - pleine largeur, format horizontal */}
          <motion.div
            variants={{
              hidden: { y: 16, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="lg:col-span-3 rounded-2xl bg-neutral-50 overflow-hidden group cursor-pointer flex flex-col sm:flex-row"
            onClick={() => setSelectedProject(projects[1])}
          >
            <div className="relative h-56 sm:h-auto sm:w-2/5 bg-neutral-100 overflow-hidden shrink-0">
              <img
                src={projects[1].image}
                alt="The Project Valentine"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 lg:p-7 flex flex-col justify-center">
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                The Project Valentine
              </h3>
              <p className="text-[15px] text-neutral-600 leading-relaxed mb-4 max-w-xl">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[1].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GNDC */}
          <motion.div
            variants={{
              hidden: { y: 16, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="rounded-2xl bg-neutral-50 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(projects[3])}
          >
            <div className="relative h-44 bg-neutral-100 overflow-hidden">
              <img
                src={projects[3].image}
                alt="GNDC Website"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                GNDC Website
              </h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed mb-4">
                {projects[3].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[3].techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Light R Digital */}
          <motion.div
            variants={{
              hidden: { y: 16, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="lg:col-span-2 rounded-2xl bg-neutral-50 overflow-hidden group cursor-pointer flex flex-col sm:flex-row"
            onClick={() => setSelectedProject(projects[4])}
          >
            <div className="relative h-44 sm:h-auto sm:w-2/5 bg-neutral-100 overflow-hidden shrink-0">
              <img
                src={projects[4].image}
                alt="Light R Digital website"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Light R Digital website
              </h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed mb-4">
                {projects[4].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[4].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}