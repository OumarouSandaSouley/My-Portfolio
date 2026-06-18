"use client";
import React, { useState } from "react";
import { Globe2 } from "lucide-react";
import { useCurrentLocale } from "@/locales/client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
] as const;

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = useCurrentLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (langCode: string) => {
    if (langCode === currentLocale) {
      setIsOpen(false);
      return;
    }

    const newPath = pathname.replace(`/${currentLocale}`, `/${langCode}`);
    router.push(newPath);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="border text-sm font-medium relative border-neutral-200 text-slate-800 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-slate-50 transition-colors"
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
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-slate-200"
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
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
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
