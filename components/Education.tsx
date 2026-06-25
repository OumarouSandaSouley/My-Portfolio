"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, LucideIcon } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

type EducationItem = {
  key: "baccalaureat" | "licence" | "master";
  Icon: LucideIcon;
};

const educationItems: EducationItem[] = [
  { key: "baccalaureat", Icon: School },
  { key: "licence", Icon: BookOpen },
  { key: "master", Icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const DottedConnector = () => (
  <span className="flex flex-col items-center gap-[5px] py-2" aria-hidden>
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i} className="h-1 w-1 rounded-full bg-neutral-300" />
    ))}
  </span>
);

export const Education: React.FC = () => {
  const t = useScopedI18n("education");

  const Caption = ({ itemKey }: { itemKey: EducationItem["key"] }) => (
    <div className="text-center max-w-[240px] mx-auto">
      <h3 className="text-[15px] font-semibold text-neutral-900">
        {t(`items.${itemKey}.degree`)}
      </h3>
      <p className="text-[13px] text-neutral-500 leading-relaxed mt-1">
        {t(`items.${itemKey}.specialization`)}
      </p>
      <p className="text-[12px] text-neutral-400 mt-1.5">
        {t(`items.${itemKey}.school`)} · {t(`items.${itemKey}.location`)}
      </p>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-neutral-50" id="education">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-neutral-500 text-[17px] leading-relaxed mt-4">
            {t("description")}
          </p>
        </motion.div>

        {/* Timeline horizontale (desktop) */}
        <motion.div
          className="relative hidden lg:grid grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Ligne centrale horizontale */}
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-neutral-200"
            aria-hidden
          />

          {educationItems.map(({ key, Icon }, index) => {
            const isTop = index % 2 === 0;
            const isCurrent = key === "master";

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className="grid grid-rows-[1fr_auto_1fr] min-h-[420px]"
              >
                {/* Ligne du haut : légende (si isTop) sinon vide */}
                <div className="flex flex-col items-center justify-end">
                  {isTop && (
                    <>
                      <Caption itemKey={key} />
                      <DottedConnector />
                    </>
                  )}
                </div>

                {/* Ligne centrale : la bulle + badge */}
                <div className="relative flex items-center justify-center">
                  {/* Badge circulaire chevauchant le coin */}
                  <span
                    className={`absolute -top-6 left-4 z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-md ${
                      isCurrent ? "bg-neutral-900" : "bg-neutral-700"
                    }`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                      <Icon className="h-5 w-5 text-neutral-900" strokeWidth={1.6} />
                    </span>
                  </span>

                  {/* Bulle */}
                  <div
                    className={`relative w-full rounded-2xl border bg-white px-6 pt-9 pb-7 text-center shadow-sm ${
                      isCurrent ? "border-neutral-300" : "border-neutral-200"
                    }`}
                  >
                    <span className="block text-3xl font-semibold tracking-tight text-neutral-900">
                      {t(`items.${key}.period`)}
                    </span>
                    {isCurrent && (
                      <span className="mt-3 inline-block text-[11px] font-medium uppercase tracking-wide bg-neutral-900 text-white px-2.5 py-0.5 rounded-full">
                        {t("inProgress")}
                      </span>
                    )}
                    {/* pointe de la bulle vers la légende */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white border-neutral-200 ${
                        isTop
                          ? "-top-1.5 border-t border-l"
                          : "-bottom-1.5 border-b border-r"
                      }`}
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Ligne du bas : légende (si !isTop) sinon vide */}
                <div className="flex flex-col items-center justify-start">
                  {!isTop && (
                    <>
                      <DottedConnector />
                      <Caption itemKey={key} />
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline verticale (mobile / tablette) */}
        <motion.div
          className="lg:hidden relative pl-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-neutral-200" aria-hidden />
          <div className="flex flex-col gap-6">
            {educationItems
              .slice()
              .reverse()
              .map(({ key, Icon }) => (
                <motion.article
                  key={key}
                  variants={itemVariants}
                  className="relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <span className="absolute -left-[33px] top-5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 ring-4 ring-neutral-50">
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px] font-medium text-neutral-400">
                      {t(`items.${key}.period`)}
                    </span>
                    {key === "master" && (
                      <span className="text-[11px] font-medium uppercase tracking-wide bg-neutral-900 text-white px-2 py-0.5 rounded-full">
                        {t("inProgress")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-medium text-neutral-900">
                    {t(`items.${key}.degree`)}
                  </h3>
                  <p className="text-[14px] text-neutral-600 mt-1">
                    {t(`items.${key}.specialization`)}
                  </p>
                  <p className="text-[13px] text-neutral-400 mt-1.5">
                    {t(`items.${key}.school`)} · {t(`items.${key}.location`)}
                  </p>
                </motion.article>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
