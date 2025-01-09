import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "./types";
import { useScopedI18n } from "@/locales/client";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
}) => {
  const t = useScopedI18n("projects");

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md z-50 relative"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm line-clamp-2">
            {t(project.description as any)}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
