"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useCurrentLocale } from "@/locales/client";

const socialLinks = [
  { icon: Github, href: "https://github.com/OumarouSandaSouley", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/souley-oumarou-sanda-8506b0302",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/OumarouSSouley", label: "Twitter" },
  { icon: Mail, href: "mailto:oumarousandasouleyofficial@gmail.com", label: "Email" },
];


const SocialIcon: React.FC<{
  Icon: React.ElementType;
  href: string;
  label: string;
}> = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon size={24} />
  </motion.a>
);

export const Footer: React.FC = () => {
    const lang = useCurrentLocale()
    const footerLinks = [
      { name: "Home", href: "/" + lang + "#home" },
      { name: "About", href: "/" + lang + "#about" },
      { name: "Projects", href: "/" + lang + "#projects" },
      { name: "Contact", href: "/" + lang + "#contact" },
    ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://www.facebook.com/aajt.aajt.562"
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              Oumarou Sanda Souley
            </Link>
          </motion.div>
          <motion.nav
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.label}
                Icon={link.icon}
                href={link.href}
                label={link.label}
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Oumarou Sanda Souley. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
