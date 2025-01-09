"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const t = useScopedI18n("navbar");
  const lang = useCurrentLocale();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const navItems = [
    { name: t('home'), link: "#home" },
    { name: t('about'), link: "#about" },
    { name: t('projects'), link: "#projects" },
    { name: t('contact'), link: "#contact" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-between space-x-4",
            className
          )}
        >
          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className="sm:hidden p-2 text-neutral-600 dark:text-neutral-300"
          >
            <Menu size={20} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={`/${lang}/${navItem.link}`}
                className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm"
              >
                <span>{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Always Visible Elements */}
          <div className="flex items-center space-x-4">
            <Link
              href={`/${lang}/#hireMe`}
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
            >
              <span>{t("hireMe")}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </Link>
            <LanguageSwitcher />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black/50 z-[4999]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-[5001] shadow-xl"
            >
              <div className="p-4">
                <button
                  onClick={toggleDrawer}
                  className="absolute top-4 right-4 p-2 text-neutral-600 dark:text-neutral-300"
                >
                  <X size={20} />
                </button>

                <nav className="mt-12 space-y-4">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`drawer-link-${idx}`}
                      href={`/${lang}/${navItem.link}`}
                      onClick={toggleDrawer}
                      className="block py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};