"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start space-x-3 text-gray-300"
    >
      <Icon className="w-6 h-6 text-yellow-400" />
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
