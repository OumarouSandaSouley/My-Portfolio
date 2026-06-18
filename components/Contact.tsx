"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { toast } from "react-toastify";

const EMAILJS_SERVICE_ID = "service_hqh6l7k";
const EMAILJS_TEMPLATE_ID = "template_5fsocvq";
const EMAILJS_PUBLIC_KEY = "ODliIIToK3nyFsqod";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormField = keyof FormData;

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Contact() {
  const t = useScopedI18n("contact");
  const lang = useCurrentLocale();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    if (lang === "en") {
      setSuccessMessage("Message sent successfully");
      seterrorMessage("An error occurred. Try again later!");
    } else {
      setSuccessMessage("Message envoyé avec succès !");
      seterrorMessage("Une erreur est survenue. Réessayez plus tard !");
    }
  }, [lang]);

  const success = () => toast.success(successMessage);
  const errorNotification = () => toast.error(errorMessage);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.name ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Oumarou Sanda Souley",
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        success();
        setFormData(initialFormData);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
      errorNotification();
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.email && formData.name && formData.subject && formData.message;

  const formFields: FormField[] = ["name", "email", "subject", "message"];

  return (
    <section className="py-24 lg:py-32 bg-white" id="contact">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
            {t("getInTouch")}
          </h2>
          <p className="text-neutral-500 text-[17px] leading-relaxed mt-4">
            {t("subHeader")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Formulaire - cellule principale */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 rounded-2xl bg-neutral-50 p-6 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-[13px] font-medium text-neutral-500 mb-1.5 capitalize"
                  >
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition-colors duration-200 resize-none text-[15px]"
                      placeholder={`${t("your")} ${field}`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition-colors duration-200 text-[15px]"
                      placeholder={`${t("your")} ${field}`}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`w-full py-3.5 px-6 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-200 text-[15px] ${
                  isSubmitting || !isFormValid
                    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t("sendMessage")}
                  </>
                )}
              </button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 text-[14px] ${
                    submitStatus === "success"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span>{t(`${submitStatus}Message`)}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-neutral-50 p-6 lg:p-7 flex flex-col gap-5"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-medium text-neutral-400">
                  {t("location")}
                </p>
                <p className="text-[15px] text-neutral-800 mt-0.5">Dougoy</p>
                <p className="text-[15px] text-neutral-800">Maroua, Cameroun</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-medium text-neutral-400">
                  {t("phone")}
                </p>
                <p className="text-[15px] text-neutral-800 mt-0.5">
                  +237 690 72 69 25
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-medium text-neutral-400">
                  {t("email")}
                </p>
                <p className="text-[15px] text-neutral-800 mt-0.5 break-all">
                  oumarousandasouleyofficial@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carte - pleine largeur */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 rounded-2xl bg-neutral-50 overflow-hidden p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.6690363668604!2d14.32962707502438!3d10.60502846233182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111d9fdf2fb0840b%3A0xc244a6db2ec3f5c6!2sMosqu%C3%A9e%20March%C3%A9%20centrale!5e0!3m2!1sfr!2scm!4v1731608058212!5m2!1sfr!2scm"
              width="100%"
              height="280"
              loading="lazy"
              className="w-full h-[280px] rounded-xl grayscale-[40%]"
              title={t("mapAlt")}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}