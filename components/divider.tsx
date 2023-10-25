'use client';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="h-16 hidden w-1 bg-gray-200 my-24 sm:block rounded-full"
    ></motion.div>
  );
}
