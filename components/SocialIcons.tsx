import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/Button";

const SocialIcon = ({
  Icon,
  href,
  label,
}: {
  Icon: React.ElementType;
  href: string;
  label: string;
}) => (
  <Button
    variant="outline"
    size="icon"
    className="rounded-full border-gray-700 hover:border-blue-400/50 text-gray-400 hover:text-blue-400 transition-all duration-300"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon className="h-5 w-5" />
    </a>
  </Button>
);

export const SocialIcons = () => (
  <div className="flex space-x-4">
    <SocialIcon
      Icon={Github}
      href="https://github.com/OumarouSandaSouley"
      label="GitHub"
    />
    <SocialIcon
      Icon={Linkedin}
      href="https://linkedin.com/in/yourusername"
      label="LinkedIn"
    />
    <SocialIcon
      Icon={Twitter}
      href="https://twitter.com/yourusername"
      label="Twitter"
    />
    <SocialIcon
      Icon={Facebook}
      href="https://facebook.com/aajt.aajt.562"
      label="Facebook"
    />
  </div>
);
