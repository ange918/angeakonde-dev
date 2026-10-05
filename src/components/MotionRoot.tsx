"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutstand } from "@/lib/motion";

export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: easeOutstand }}>
      {children}
    </MotionConfig>
  );
}
