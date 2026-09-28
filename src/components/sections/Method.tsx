"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { method } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

/** Quatro etapas; a linha dourada é traçada conforme a rolagem. */
export function Method() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="metodo" aria-labelledby="metodo-title" className="scroll-mt-24 bg-forest text-paper">
      <div className="container-page flex flex-col gap-16 py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Reveal className="flex flex-col gap-4">
            <p className="overline text-gold">Nosso método</p>
            <h2 id="metodo-title" className="display-l">
              Quatro etapas.
              <br />
              <em>Nenhuma surpresa.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="self-end">
            <p className="max-w-lg text-lg leading-relaxed text-paper/75">
              Você sabe o que vai acontecer, quanto vai custar e quando — antes de assinar qualquer coisa.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute top-0 left-0 hidden h-px w-full bg-paper/15 md:block" />
          <motion.div aria-hidden style={{ scaleX: progress }} className="absolute top-0 left-0 hidden h-px w-full origin-left bg-gold md:block" />
          <ol ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {method.map((m, i) => (
              <Reveal as="li" key={m.step} delay={i * 0.12} className="flex flex-col gap-4 border-t border-gold pt-8 md:border-t-0">
                <span className="font-serif text-5xl text-gold">{m.step}</span>
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-paper/70">{m.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
