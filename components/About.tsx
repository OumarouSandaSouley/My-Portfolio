"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Code, Globe, Lightbulb } from "lucide-react";
import { Button } from "./ui/Button";
import { useScopedI18n } from "@/locales/client";

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

const About = () => {
  const t = useScopedI18n("about");

  return (
    <section className="py-24 lg:py-32 bg-white" id="about">
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Photo - grande cellule, 2 lignes */}
          <motion.div
            variants={itemVariants}
            className="relative lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden bg-neutral-100 min-h-[320px]"
          >
            <Image
              src="/oumarousandasouley.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover object-top grayscale"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 text-neutral-900 py-2 px-4 rounded-full text-[13px] font-medium">
              {t("badge")}
            </div>
          </motion.div>

          {/* Description - large cellule */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 rounded-2xl bg-neutral-50 p-7 lg:p-9 flex items-center"
          >
            <p className="text-[17px] sm:text-lg text-neutral-700 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* 4 skill cards en sous-grille */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-neutral-50 p-6 flex flex-col gap-3"
          >
            <Code className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
            <h3 className="font-medium text-neutral-900 text-[15px]">
              {t("skills.fullStack.title")}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {t("skills.fullStack.description")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-neutral-50 p-6 flex flex-col gap-3"
          >
            <Globe className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
            <h3 className="font-medium text-neutral-900 text-[15px]">
              {t("skills.crossPlatform.title")}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {t("skills.crossPlatform.description")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-neutral-50 p-6 flex flex-col gap-3"
          >
            <Lightbulb className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
            <h3 className="font-medium text-neutral-900 text-[15px]">
              {t("skills.problemSolving.title")}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {t("skills.problemSolving.description")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-neutral-50 p-6 flex flex-col gap-3"
          >
            <CheckCircle className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
            <h3 className="font-medium text-neutral-900 text-[15px]">
              {t("skills.qualityAssurance.title")}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {t("skills.qualityAssurance.description")}
            </p>
          </motion.div>

          {/* Approche + CTA - cellule large en bas */}
          
        </motion.div>
        <motion.div
            variants={itemVariants}
            className="w-full mt-8 rounded-2xl bg-neutral-900 p-7 lg:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                {t("approach.title")}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-[15px] max-w-md">
                {t("approach.description")}
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white hover:bg-neutral-100 text-neutral-900 font-medium rounded-full px-6 h-11 text-[15px] shrink-0 w-fit"
            >
              {t("contactButton")}
            </Button>
          </motion.div>
      </div>
    </section>
  );
};

export default About;