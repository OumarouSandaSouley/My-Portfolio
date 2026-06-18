"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Zap, Target, MessageCircle, ArrowUpRight } from "lucide-react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

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

export const HireMe: React.FC = () => {
  const t = useScopedI18n("hireMe");
  const lang = useCurrentLocale();

  const reasons = [
    {
      icon: Calendar,
      title: t("availableNow"),
      description: t("availableNowDescription"),
    },
    {
      icon: Zap,
      title: t("fastTurnaround"),
      description: t("fastTurnaroundDescription"),
    },
    {
      icon: Target,
      title: t("tailoredSolutions"),
      description: t("tailoredSolutionsDescription"),
    },
    {
      icon: MessageCircle,
      title: t("clearCommunication"),
      description: t("clearCommunicationDescription"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white" id="hireMe">
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
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="rounded-2xl bg-neutral-50 p-6 lg:p-7"
            >
              <Icon className="h-5 w-5 text-neutral-900 mb-4" strokeWidth={1.5} />
              <h3 className="font-medium text-neutral-900 text-[15px] mb-2">
                {title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}

          {/* CTA - pleine largeur, cellule sombre comme dans About */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 rounded-2xl bg-neutral-900 p-7 lg:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                {t("title")}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-[15px] max-w-md">
                {t("subtitle")}
              </p>
            </div>
            <a href={`/${lang}/#contact`} className="shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-900 font-medium rounded-full px-6 h-11 text-[15px] transition-colors group w-fit">
                {t("getInTouch")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};