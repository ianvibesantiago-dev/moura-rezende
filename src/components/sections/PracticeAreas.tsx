import { practiceAreas } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function PracticeAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="container-page flex scroll-mt-24 flex-col gap-14 py-24 lg:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="flex flex-col gap-4">
          <p className="overline text-gold-ink">Áreas de atuação</p>
          <h2 id="areas-title" className="display-l">
            Especialistas no que
            <br />
            move o seu negócio.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-ink-soft">Cada área é conduzida por um sócio, não por um estagiário.</p>
        </Reveal>
      </div>

      {/* Espelha o componente PracticeCard do Figma: padding 48, "Saiba mais" no rodapé */}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((a, i) => (
          <Reveal as="li" key={a.title} delay={(i % 3) * 0.1} className="h-full">
            <a href="#contato" className="group relative flex h-full min-h-[400px] flex-col gap-6 overflow-hidden border border-line bg-surface p-12 transition-colors duration-500 hover:border-forest">
              {/* Preenchimento verde que sobe no hover */}
              <span aria-hidden className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-forest transition-transform duration-700 ease-[var(--ease-classic)] group-hover:scale-y-100" />
              <span className="relative font-serif text-3xl text-gold-ink italic transition-colors duration-500 group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display-m relative transition-colors duration-500 group-hover:text-paper">{a.title}</h3>
              <p className="relative text-ink-soft transition-colors duration-500 group-hover:text-paper/75">{a.description}</p>
              <span className="relative mt-auto flex flex-col gap-6">
                <span aria-hidden className="h-px w-10 bg-gold transition-all duration-700 group-hover:w-full" />
                <span className="label flex items-center gap-2 transition-colors duration-500 group-hover:text-gold">
                  Saiba mais <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
