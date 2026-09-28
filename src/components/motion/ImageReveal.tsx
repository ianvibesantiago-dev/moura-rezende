"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ImageRevealProps = Omit<ImageProps, "fill"> & {
  /** Classe do contêiner (define tamanho/proporção). */
  frameClassName?: string;
  /** Intensidade do parallax em % (0 desliga). */
  parallax?: number;
  delay?: number;
};

/**
 * Foto que "abre como cortina" (clip-path) ao entrar na tela, com leve zoom-out
 * e parallax opcional durante o scroll. Efeito editorial típico de sites de luxo.
 */
export function ImageReveal({ frameClassName = "", parallax = 0, delay = 0, className = "", alt, ...img }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${frameClassName}`}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-[-8%]"
        style={parallax ? { y } : undefined}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image fill alt={alt} className={`object-cover ${className}`} {...img} />
      </motion.div>
    </motion.div>
  );
}
