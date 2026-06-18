"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SocialIcons } from "./hero/SocialIcons";
import { useScopedI18n } from "@/locales/client";

const Hero = () => {
  const t = useScopedI18n("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center py-28 lg:py-0 bg-white"
      id="home"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={mounted ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-1 ring-neutral-200 shrink-0 z">
            <Image
              src="/oumarousandasouley.jpg"
              alt={t("imageAlt")}
              fill
              priority
              className="object-cover object-[50%_15%] grayscale"
              sizes="80px"
            />
          </div>
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-500 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {t("availableForHire")}
          </div>
        </motion.div>

        <motion.h1
          className="text-[2.75rem] sm:text-7xl lg:text-[6.5rem] font-semibold leading-[0.98] text-neutral-900 tracking-tight max-w-5xl"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("name")}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-neutral-500 font-medium leading-snug mt-5 max-w-2xl"
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("title")}
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-10 pt-10 border-t border-neutral-100"
          initial={mounted ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <p className="text-[17px] text-neutral-600 leading-relaxed max-w-md">
            {t("description")}
          </p>

          <div className="flex flex-col gap-5 lg:items-end shrink-0">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/docs/CV_Oumarou_Sanda_Souley.pdf"
                download="CV Oumarou Sanda Souley"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full px-7 h-12 text-[15px] transition-colors"
                )}
              >
                <Download className="mr-2 h-4 w-4" /> {t("downloadResume")}
              </a>
              <a
                href="#hireMe"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "text-neutral-900 font-medium rounded-full px-5 h-12 text-[15px] hover:bg-neutral-100 group"
                )}
              >
                {t("hireMe")}
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <SocialIcons mounted={mounted} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;