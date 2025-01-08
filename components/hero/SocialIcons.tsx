import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
const SocialIcon = ({
  Icon,
  href,
  label,
  delay = 0,
}: {
  Icon: React.ElementType;
  href: string;
  label: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative inline-block"
    >
      <Button
        variant="outline"
        size="icon"
        className="relative group rounded-full border-2 border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
      >
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {label}
        </span>
      </Button>
    </a>
  </motion.div>
);

export const SocialIcons = () => (
  <div className="flex items-center space-x-6">
    <SocialIcon
      Icon={Github}
      href="https://github.com/OumarouSandaSouley"
      label="GitHub"
      delay={0.1}
    />
    <SocialIcon
      Icon={Linkedin}
      href="https://www.linkedin.com/in/souley-oumarou-sanda-8506b0302"
      label="LinkedIn"
      delay={0.2}
    />
    <SocialIcon
      Icon={Twitter}
      href="https://x.com/OumarouSSouley"
      label="Twitter"
      delay={0.3}
    />
    <SocialIcon
      Icon={Facebook}
      href="https://facebook.com/aajt.aajt.562"
      label="Facebook"
      delay={0.4}
    />
  </div>
);
