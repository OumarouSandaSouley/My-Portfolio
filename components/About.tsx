"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Code, Globe, Lightbulb } from "lucide-react";
import { Button } from "./ui/Button";
import { useScopedI18n } from "@/locales/client";

const SkillCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
    <div>
      <h3 className="font-semibold text-gray-200">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const t = useScopedI18n("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative z-50" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Column */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt={t("imageAlt")}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
              {t("badge")}
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <SkillCard
                icon={Code}
                title={t("skills.fullStack.title")}
                description={t("skills.fullStack.description")}
              />
              <SkillCard
                icon={Globe}
                title={t("skills.crossPlatform.title")}
                description={t("skills.crossPlatform.description")}
              />
              <SkillCard
                icon={Lightbulb}
                title={t("skills.problemSolving.title")}
                description={t("skills.problemSolving.description")}
              />
              <SkillCard
                icon={CheckCircle}
                title={t("skills.qualityAssurance.title")}
                description={t("skills.qualityAssurance.description")}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">
                {t("approach.title")}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t("approach.description")}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                {t("contactButton")}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
