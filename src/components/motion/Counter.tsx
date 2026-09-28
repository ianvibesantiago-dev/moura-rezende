"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = { to: number; decimals?: number; prefix?: string; suffix?: string; duration?: number };

const format = (v: number, decimals: number) =>
  v.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** Número que conta de 0 até `to` quando aparece na tela. */
export function Counter({ to, decimals = 0, prefix = "", suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const final = `${prefix}${format(to, decimals)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = `${prefix}${format(v, decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, to, decimals, prefix, suffix, duration]);

  // Valor final no HTML (SEO / sem JS); a animação reescreve ao entrar na tela.
  return <span ref={ref}>{final}</span>;
}
