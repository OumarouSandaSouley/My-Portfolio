import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "./types";
import { useScopedI18n } from "@/locales/client";

interface ModalProps {
  project: Project;
  onClose: () => void;
}
export const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const t = useScopedI18n("projects");

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            {project.title}
          </h2>
          <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            {t(project.fullDescription)}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mb-6">
            {project.livePreview && (
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-300 text-lg font-semibold"
              >
                {t("livePreview")}
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-full transition-colors duration-300 text-lg font-semibold"
              >
                {t("github")}
              </a>
            )}
          </div>
          <div className="w-full my-2 flex items-end justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-lg"
            >
              {t("close")}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
