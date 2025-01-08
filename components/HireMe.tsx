"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Zap, Target, MessageCircle } from "lucide-react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";


const ReasonCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-10 h-10 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export const HireMe: React.FC = () => {
  const t = useScopedI18n("hireMe")
  const lang = useCurrentLocale()
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
    <section
      className="py-20 bg-gray-100 dark:bg-gray-900 relative z-50"
      id="hireMe"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ReasonCard {...reason} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={`/${lang}/#contact`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            {t("getInTouch")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
