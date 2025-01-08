"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone } from "lucide-react";
import { Button } from "./ui/Button"; 

const HeroPart1 = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
        Crafting Digital Experiences in Cameroon
      </h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
        Passionate JavaScript developer specializing in web and mobile solutions
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          View Projects <ArrowRight className="ml-2" size={20} />
        </Button>
        <Button size="lg" variant="outline">
          Get in Touch
        </Button>
      </div>
      <div className="flex justify-center items-center mt-8 space-x-8">
        <div className="flex items-center">
          <Code className="text-blue-600 mr-2" size={24} />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Web Dev
          </span>
        </div>
        <div className="flex items-center">
          <Smartphone className="text-blue-600 mr-2" size={24} />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Mobile Apps
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPart1;
