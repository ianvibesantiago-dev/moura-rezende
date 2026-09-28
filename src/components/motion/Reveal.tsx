"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Direção de entrada. "up" (padrão), "left", "right" ou "none". */
  from?: "up" | "left" | "right" | "none";
  /** Use "li" dentro de <ul>/<ol> para manter o HTML válido. */
  as?: "div" | "li";
};

const offsets = { up: { y: 40 }, left: { x: -60 }, right: { x: 60 }, none: {} } as const;

/** Faz o conteúdo surgir quando entra na tela (uma única vez). */
export function Reveal({ delay = 0, from = "up", as = "div", ...props }: RevealProps) {
  const animation = {
    initial: { opacity: 0, ...offsets[from] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  if (as === "li") return <motion.li {...animation} {...(props as HTMLMotionProps<"li">)} />;
  return <motion.div {...animation} {...props} />;
}
