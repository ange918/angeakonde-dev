"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutstand } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      data-motion="page-transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutstand }}
    >
      {children}
    </motion.div>
  );
}
