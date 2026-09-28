import { firm, images } from "@/content/site";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  return (
    <section aria-label="Princípio do escritório" className="relative isolate overflow-hidden text-paper">
      <ImageReveal src={images.office} alt="" sizes="100vw" frameClassName="!absolute inset-0 -z-20" parallax={10} />
      <div className="absolute inset-0 -z-10 bg-forest-deep/85" />
      <figure className="container-page flex flex-col items-center gap-8 py-32 text-center lg:py-44">
        <Reveal>
          <blockquote className="display-l max-w-4xl italic">
            “Um bom advogado resolve o problema. Um ótimo advogado impede que ele aconteça.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <figcaption className="overline text-gold">Princípio do escritório desde {firm.since}</figcaption>
        </Reveal>
      </figure>
    </section>
  );
}
