"use client";

import { motion } from "motion/react";
import { images, proof } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/motion/Counter";
import { ImageReveal } from "@/components/motion/ImageReveal";

const ease = [0.22, 1, 0.36, 1] as const;
// Efeito "tinta": cada palavra surge desfocada e assenta no lugar
const word = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: (i: number) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: 0.2 + i * 0.07, duration: 0.8, ease } }),
};

function InkLine({ text, offset, className = "" }: { text: string; offset: number; className?: string }) {
  return (
    <span className={`block ${className}`}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} custom={offset + i} variants={word} initial="hidden" animate="show" className="inline-block pr-[0.25em]">
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="escritorio" className="container-page grid scroll-mt-24 items-center gap-16 py-16 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-24 lg:py-24">
      <div className="flex flex-col gap-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="overline text-gold-ink">
          Escritório boutique · São Paulo
        </motion.p>
        <h1 className="display-xl">
          <InkLine text="Direito é estratégia." offset={0} />
          <InkLine text="Nós cuidamos da sua." offset={3} className="text-gold-ink italic" />
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="max-w-xl text-lg leading-relaxed text-ink-soft">
          Advocacia empresarial, tributária e trabalhista para empresas e famílias que preferem prevenir a remediar.
          Atendimento de sócio do primeiro ao último contato.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8, ease }} className="flex flex-wrap gap-4">
          <Button href="#contato">Agende uma consulta</Button>
          <Button href="#areas" variant="outline" arrow={false}>Áreas de atuação</Button>
        </motion.div>
        <dl className="mt-4 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8">
          {proof.map((p) => (
            <div key={p.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-ink-soft">{p.label}</dt>
              <dd className="display-l"><Counter to={p.value} suffix={p.suffix} /></dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-[520px] pb-16 pl-8 lg:pl-0">
        {/* Moldura dourada deslocada que "desenha" ao carregar */}
        <motion.div aria-hidden initial={{ opacity: 0, x: -24, y: 24 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease }} className="absolute inset-0 top-8 right-8 -left-0 border border-gold lg:-left-8" />
        <ImageReveal src={images.team} alt="Sócios do escritório reunidos em mesa de trabalho" priority sizes="(min-width:1024px) 520px, 90vw" frameClassName="ml-auto aspect-[23/30] w-[92%]" />
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease }}
          className="absolute bottom-0 left-0 flex max-w-[320px] flex-col gap-4 bg-surface p-8 shadow-[0_24px_48px_rgb(14_33_28/0.14)]"
        >
          <blockquote className="font-serif text-2xl leading-snug italic">“Clareza vem antes de qualquer processo.”</blockquote>
          <figcaption className="text-sm text-ink-soft">Dra. Helena Moura — sócia-fundadora</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
