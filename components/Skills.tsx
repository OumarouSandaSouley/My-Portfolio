"use client";

import React, { useState, useEffect } from "react";
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

const TechStack: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    { name: "JavaScript", color: "#F7DF1E", abbr: "JS" },
    { name: "React", color: "#61DAFB", abbr: "RE" },
    { name: "Next.js", color: "#000000", abbr: "NX" },
    { name: "Vue.js", color: "#4FC08D", abbr: "VU" },
    { name: "Python", color: "#3776AB", abbr: "PY" },
    { name: "Django", color: "#092E20", abbr: "DJ" },
    { name: "FastAPI", color: "#009688", abbr: "FA" },
    { name: "Node.js", color: "#339933", abbr: "ND" },
    { name: "Express", color: "#000000", abbr: "EX" },
    { name: "TypeScript", color: "#3178C6", abbr: "TS" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          initial={
            mounted ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: mounted ? index * 0.1 : 0,
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.3 },
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs mb-2"
            style={{ backgroundColor: tech.color }}
          >
            {tech.abbr}
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const ProfessionalSkill: React.FC<{
  skill: { name: string; Icon: React.ElementType };
}> = ({ skill }) => (
  <motion.div
    className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-10 h-10 flex items-center justify-center text-blue-500">
      <skill.Icon size={24} />
    </div>
    <span className="text-gray-800 dark:text-gray-200 font-medium">
      {skill.name}
    </span>
  </motion.div>
);

export const Skills: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const t = useScopedI18n("skills");

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <section
      className="py-20 bg-gray-100 dark:bg-gray-900 relative z-50"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {t("title")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
              {t("technicalSkills")}
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full">
              <TechStack />
              <motion.p
                className="text-xl font-bold mt-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={
                  mounted
                    ? {
                        scale: [1, 1.05, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {t("modernTechStack")}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-center">
                {t("description")}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
              {t("professionnalSkills")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalSkills.map((skill) => (
                <ProfessionalSkill key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
