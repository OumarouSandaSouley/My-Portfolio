import { motion } from "framer-motion";

const Stat = ({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) => (
  <motion.div
    className="group cursor-pointer relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
  >
    <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent group-hover:to-blue-300 transition-colors duration-300">
      {value}
    </h3>
    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {label}
    </p>
    <div className="absolute -inset-4 rounded-lg bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

export default Stat