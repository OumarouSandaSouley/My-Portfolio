"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "./types";
import { useScopedI18n } from "@/locales/client";
import { TechIcon } from "./TechIcons";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const t = useScopedI18n("projects");

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72 w-full bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            aria-label={t("close")}
            className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-neutral-700 hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="p-6 lg:p-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-3 tracking-tight">
            {project.title}
          </h2>

          <p className="text-neutral-600 text-[15px] leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <TechIcon name={tech} className="h-4 w-4 shrink-0" />
                <span className="text-[13px] text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-200">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {(project.livePreview || project.githubLink) && (
            <div className="flex flex-wrap gap-3">
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full transition-colors duration-200 text-[14px] font-medium"
                >
                  {t("livePreview")}
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-50 hover:bg-neutral-100 text-neutral-700 px-6 py-2.5 rounded-full border border-neutral-200 transition-colors duration-200 text-[14px] font-medium"
                >
                  {t("github")}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};