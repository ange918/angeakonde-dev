export const easeOutstand = [0.44, 0, 0.56, 1] as const;

export const revealViewport = { once: true, margin: "-80px" } as const;

export function revealInitial(reduce: boolean | null, from: { opacity: number; x?: number; y?: number } = { opacity: 0, y: 20 }) {
  if (reduce) return false as const;
  return from;
}

export function revealTransition(reduce: boolean | null, delay = 0) {
  if (reduce) return { duration: 0 };
  return { duration: 0.7, ease: easeOutstand, delay };
}
