"use client";
import React, { useState } from "react";
import { Globe2 } from "lucide-react";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const t = useI18n();

  const handleLanguageChange = async (langCode: string) => {
    await changeLocale(langCode as "fr" | "en");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe2 className="w-4 h-4" />
        <span>
          {languages.find((lang) => lang.code === currentLocale)?.name}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
                  role="menuitem"
                >
                  {language.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
