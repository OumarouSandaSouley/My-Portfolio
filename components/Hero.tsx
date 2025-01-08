"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Layers, Palette, LineChart, Download, UserPlus } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import { SocialIcons } from "./hero/SocialIcons";
import ServiceCard from "./hero/ServiceCard";
import Stat from "./hero/Stat";
import { useScopedI18n } from "@/locales/client";

const Hero = () => {
  const t = useScopedI18n("hero");

  return (
    <section className="min-h-screen flex items-center text-white overflow-hidden py-16 lg:py-0 relative" id="home">
      <div className="absolute inset-0 bg-gradient-to-br" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-400/10 text-blue-400 text-sm font-medium">
                  <span className="animate-pulse mr-2">●</span>{" "}
                  {t("availableForHire")}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    {t("name")}
                  </span>
                  <p className="text-gray-100 mt-4 text-3xl md:text-4xl lg:text-5xl">
                    {t("title")} {" "}
                    <ReactCountryFlag
                      countryCode="CM"
                      svg
                      title="Cameroon's flag"
                      className="w-8 h-8 rounded shadow-lg"
                    />
                  </p>
                </h1>
              </motion.div>

              <motion.p
                className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {t("description")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-4"
            >
              <h5 className="text-md font-bold text-gray-200">
                {t("connectWithMe")}
              </h5>
              <SocialIcons />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="/docs/resume.pdf" download="CV Oumarou Sanda Souley" className="inline-block" target="_blank">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Download className="mr-2 h-4 w-4" /> {t("downloadResume")}
                </Button>
              </a>
              <a href="#hireMe" className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-700 hover:border-blue-400/50 text-gray-200 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                >
                  <UserPlus className="mr-2 h-4 w-4" /> {t("hireMe")}
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Stat value="95%" label={t("clientSatisfaction")} delay={0.2} />
              <Stat value="200+" label={t("completedProjects")} delay={0.4} />
              <Stat value="50+" label={t("eventsParticipated")} delay={0.6} />
            </motion.div>
          </motion.div>

          {/* Image & Services Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-75" />
              <Image
                src="/myPhoto.png"
                alt={t("imageAlt")}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="absolute right-0 top-1/3 -translate-y-1/2 w-full max-w-[320px] space-y-6 z-20">
              <ServiceCard
                icon={Layers}
                title={t("webDevelopment")}
                description={t("webDevelopmentDescription")}
                delay={0.2}
              />
              <ServiceCard
                icon={Palette}
                title={t("mobileDevelopment")}
                description={t("mobileDevelopmentDescription")}
                delay={0.4}
              />
              <ServiceCard
                icon={LineChart}
                title={t("techCommunityEngagement")}
                description={t("techCommunityEngagementDescription")}
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
