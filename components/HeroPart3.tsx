"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized code for lightning-fast load times",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces that users love",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Creative approaches to complex problems",
  },
];

const HeroPart3 = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Working Principles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <principle.icon className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {principle.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroPart3;
