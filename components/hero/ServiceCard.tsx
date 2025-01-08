import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => (
  <motion.div
    className="p-6 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 group"
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors duration-300">
        <Icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);
export default ServiceCard