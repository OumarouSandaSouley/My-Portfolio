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
  { icon: Twitter, href: "https://x.com/OumarouSaSouley", label: "Twitter" },
  { icon: Mail, href: "mailto:oumarousandasouleyofficial@gmail.com", label: "Email" },
];

const SocialIcon: React.FC<{
  Icon: React.ElementType;
  href: string;
  label: string;
}> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
    aria-label={label}
  >
    <Icon size={18} strokeWidth={1.5} />
  </a>
);

export const Footer: React.FC = () => {
  const lang = useCurrentLocale();
  const footerLinks = [
    { name: "Home", href: "/" + lang + "#home" },
    { name: "About", href: "/" + lang + "#about" },
    { name: "Projects", href: "/" + lang + "#projects" },
    { name: "Contact", href: "/" + lang + "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href={`/${lang}#home`}
            className="text-[15px] font-medium text-neutral-900"
          >
            Oumarou Sanda Souley
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.label}
                Icon={link.icon}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-[13px] text-neutral-400">
          © {new Date().getFullYear()} Oumarou Sanda Souley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};