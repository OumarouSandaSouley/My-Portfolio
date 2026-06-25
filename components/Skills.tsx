"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  GitMerge,
  FolderKanban,
  Code2,
  FileEdit,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import { TechIcon } from "./TechIcons";

const skillGroups = [
  {
    label: "Langages",
    items: ["JavaScript", "TypeScript", "Python", "Dart"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "Flutter", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "Django", "PostgreSQL"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const Skills: React.FC = () => {
  const t = useScopedI18n("skills");

  const professionalSkills = [
    { name: t("ProblemSolving"), Icon: Brain },
    { name: t("TeamCollaboration"), Icon: Users },
    { name: t("AgileMethodologies"), Icon: GitMerge },
    { name: t("ProjectManagement"), Icon: FolderKanban },
    { name: t("CodeReview"), Icon: Code2 },
    { name: t("TechnicalWriting"), Icon: FileEdit },
    { name: t("Mentoring"), Icon: GraduationCap },
    { name: t("ContinuousLearning"), Icon: BookOpen },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white" id="skills">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-neutral-500 text-[17px] leading-relaxed mt-4">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Stack technique - groupée par catégorie, avec vrais logos */}
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={itemVariants}
              className="rounded-2xl bg-neutral-50 p-6 lg:p-7"
            >
              <h3 className="text-[13px] font-medium text-neutral-400 tracking-wide uppercase mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[14px] text-neutral-700 bg-white px-3 py-1.5 rounded-full border border-neutral-200"
                  >
                    <TechIcon name={item} className="h-4 w-4 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Compétences professionnelles - pleine largeur */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 rounded-2xl bg-neutral-50 p-6 lg:p-7"
          >
            <h3 className="text-[13px] font-medium text-neutral-400 tracking-wide uppercase mb-5">
              {t("professionnalSkills")}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {professionalSkills.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 bg-white rounded-xl border border-neutral-200 px-3.5 py-3"
                >
                  <Icon className="h-4 w-4 text-neutral-500 shrink-0" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-neutral-700 leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};