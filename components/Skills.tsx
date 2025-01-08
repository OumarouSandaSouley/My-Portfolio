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
  CircleSlashed,
} from "lucide-react";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";



const JavaScriptLogo: React.FC = () => (
  <motion.div
    className="w-64 h-64 relative"
    animate={{
      rotate: [0, 10, -10, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1],
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  >
    <Image
      src="/javascript.svg"
      alt="JavaScript Logo"
      layout="fill"
      objectFit="contain"
    />
  </motion.div>
);

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
    const t = useScopedI18n("skills")
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center">
              <JavaScriptLogo />
              <motion.p
                className="text-xl font-bold mt-4 text-yellow-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {t("javaScript")}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
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
