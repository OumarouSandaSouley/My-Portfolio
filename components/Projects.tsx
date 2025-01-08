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
      title: "GNDC Website",
      description: t("gndc.description"),
      image: "/projects/gndc.png",
      techStack: ["NextJS", "NextAuth", "Tailwind CSS", "Redux", "Shadcn"],
      livePreview: "https://www.gndc-website.onrender.com",
      githubLink: "",
      fullDescription: t("gndc.fullDescription"),
    },
    {
      id: 2,
      title: "WoilaTech website",
      description: t("woilatech.description"),
      image: "/projects/woilatech.png",
      techStack: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS", "WebSockets"],
      livePreview: "https://woilatech.com",
      githubLink: "",
      fullDescription: t("woilatech.fullDescription"),
    },
    {
      id: 3,
      title: "Light R Digital website",
      description: t("lightrdigital.description"),
      image: "/projects/lightrdigital.png",
      techStack: [
        "React Native",
        "GraphQL",
        "Node.js",
        "PostgreSQL",
        "TensorFlow Lite",
      ],
      livePreview: "https://lightrdigital.com",
      githubLink: "",
      fullDescription: t("lightrdigital.fullDescription"),
    },
    {
      id: 4,
      title: "40 Web Developer Projects",
      description: t("webDevProjects.description"),
      image: "/projects/base.jpg",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Various APIs",
      ],
      livePreview: "",
      githubLink:
        "https://github.com/OumarouSandaSouley/40-Web-Development-Projects",
      fullDescription: t("webDevProjects.fullDescription"),
    },
    {
      id: 5,
      title: "JavaScript Mastery Mobile App",
      description: t("jsMastery.description"),
      image: "/projects/jsm.png",
      techStack: ["React Native", "Expo", "Node.js", "Appwrite", "Clerk"],
      livePreview: "https://java-script-mastery-app-landing-page.vercel.app/",
      githubLink:
        "https://github.com/OumarouSandaSouley/JavaScript-Mastery-App-Landing-Page",
      fullDescription: t("jsMastery.fullDescription"),
    },
    {
      id: 6,
      title: "Penpot AI Bio Generator Plugin",
      description: t("penpot.description"),
      image: "/projects/penpotplugin.jpg",
      techStack: ["JavaScript", "Penpot API", "Gemini AI API", "React"],
      livePreview: "",
      githubLink: "",
      fullDescription: t("penpot.fullDescription"),
    },
  ];
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 z-50 relative" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
            {t("title")}
          </h2>
        </motion.div>
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-center">
          {t("featuredProjects")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-md text-center mb-4">
          {t("featuredProjectsDescription")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 dark:text-white text-center mt-4">
          {t("challengeProjects")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-md max-w-2xl mx-auto text-center mb-4">
          {t("challengeProjectsDescription")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3, 5).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
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
