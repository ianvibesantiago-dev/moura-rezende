import { partners } from "@/content/site";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";

// Espelha o componente AttorneyCard do Figma.
export function Partners() {
  return (
    <section id="socios" aria-labelledby="socios-title" className="container-page flex scroll-mt-24 flex-col gap-14 py-24 lg:py-32">
      <Reveal className="flex flex-col gap-4">
        <p className="overline text-gold-ink">Sócios</p>
        <h2 id="socios-title" className="display-l">Quem vai cuidar do seu caso.</h2>
      </Reveal>
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p, i) => (
          <li key={p.name} className="group flex flex-col gap-4">
            <ImageReveal
              src={p.photo}
              alt={`Retrato de ${p.name}`}
              sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
              frameClassName="aspect-[30/38]"
              className="grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              delay={i * 0.12}
            />
            <Reveal delay={0.2 + i * 0.12} className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-ink-soft">{p.role}</p>
              <p className="label mt-1 text-xs text-gold-ink">{p.oab}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
