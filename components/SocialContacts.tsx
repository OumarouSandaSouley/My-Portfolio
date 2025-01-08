"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yourusername" },
  { icon: Twitter, href: "https://twitter.com/yourusername" },
  { icon: Mail, href: "mailto:your.email@example.com" },
];

const SocialContacts = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-8 left-8 z-10"
    >
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <link.icon size={24} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialContacts;
