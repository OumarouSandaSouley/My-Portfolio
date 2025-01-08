"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroPart2 = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col md:flex-row items-center justify-between mb-16"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/myPhoto.png"
            alt="Developer at work"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Years of Experience
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPart2;
