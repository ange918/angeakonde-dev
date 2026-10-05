import type { Variants } from "framer-motion";

export const easeOutstand = [0.44, 0, 0.56, 1] as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutstand },
  },
};

export function stagger(staggerChildren = 0.06, delayChildren = 0.08): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

export const viewport = { once: true, amount: 0.25 } as const;

export const hoverCard = {
  y: -6,
  borderColor: "rgba(24,232,107,0.4)",
  boxShadow: "0 12px 40px rgba(24,232,107,0.12)",
  transition: { duration: 0.2, ease: easeOutstand },
};
