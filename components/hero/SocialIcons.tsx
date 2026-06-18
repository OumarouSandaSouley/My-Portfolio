import { motion } from "framer-motion";
import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const SocialIcon = ({
  Icon,
  href,
  label,
  delay = 0,
  mounted = false,
}: {
  Icon: React.ElementType;
  href: string;
  label: string;
  delay?: number;
  mounted?: boolean;
}) => (
  <motion.div
    initial={mounted ? { opacity: 0, y: 20 } : false}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        "relative group rounded-full border border-slate-300 hover:border-slate-400 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm"
      )}
    >
      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  </motion.div>
);

export const SocialIcons = ({ mounted = false }: { mounted?: boolean }) => (
  <div className="flex items-center space-x-6">
    <SocialIcon
      Icon={Github}
      href="https://github.com/OumarouSandaSouley"
      label="GitHub"
      delay={0.1}
      mounted={mounted}
    />
    <SocialIcon
      Icon={Linkedin}
      href="https://www.linkedin.com/in/souley-oumarou-sanda-8506b0302"
      label="LinkedIn"
      delay={0.2}
      mounted={mounted}
    />
    <SocialIcon
      Icon={Twitter}
      href="https://x.com/OumarouSaSouley"
      label="Twitter"
      delay={0.3}
      mounted={mounted}
    />
    <SocialIcon
      Icon={Facebook}
      href="https://facebook.com/aajt.aajt.562"
      label="Facebook"
      delay={0.4}
      mounted={mounted}
    />
  </div>
);
