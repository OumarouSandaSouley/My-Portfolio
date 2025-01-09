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
    <section
      className="relative bg-white dark:bg-gray-900 py-20 overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            {t("getInTouch")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("subHeader")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder={`${t("your")} ${field}`}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all duration-200 ${
                  isSubmitting || !isFormValid
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t("sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("sendMessage")}
                  </>
                )}
              </button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 ${
                    submitStatus === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{t(`${submitStatus}Message`)}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium dark:text-white">
                      {t("location")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">Dougoy</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Maroua, Cameroon
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium dark:text-white">{t("phone")}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +237 690 72 69 25
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium dark:text-white">{t("email")}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      oumarousandasouleyofficial@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.6690363668604!2d14.32962707502438!3d10.60502846233182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111d9fdf2fb0840b%3A0xc244a6db2ec3f5c6!2sMosqu%C3%A9e%20March%C3%A9%20centrale!5e0!3m2!1sfr!2scm!4v1731608058212!5m2!1sfr!2scm"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-[300px] rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
