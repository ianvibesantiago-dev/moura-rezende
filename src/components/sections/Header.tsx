"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { firm, nav } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_var(--color-line)]" : ""}`}>
      <div className={`container-page flex items-center justify-between gap-8 transition-all duration-300 ${scrolled ? "h-18" : "h-24"}`}>
        <a href="#" className="flex items-center gap-3" aria-label={`${firm.name} — início`}>
          <span aria-hidden className="grid size-11 place-items-center bg-forest font-serif text-[15px] text-gold">M&amp;R</span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl">{firm.name}</span>
            <span className="overline text-[10px] text-ink-soft">Advogados Associados</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex gap-10">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href="#contato">Agende uma consulta</Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="flex w-6 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Barra dourada de progresso de leitura */}
      <motion.div aria-hidden style={{ scaleX: scrollYProgress }} className="h-0.5 origin-left bg-gold" />

      <AnimatePresence>
        {open && (
          <motion.nav id="menu-mobile" aria-label="Menu móvel" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden xl:hidden">
            <ul className="container-page flex flex-col pb-6">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="display-m block border-b border-line py-4">{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
