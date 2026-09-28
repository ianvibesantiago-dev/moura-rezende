import { firm } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  const info = [
    { k: "Endereço", v: firm.address },
    { k: "Telefone", v: firm.phone, href: `tel:+55${firm.phone.replace(/\D/g, "")}` },
    { k: "E-mail", v: firm.email, href: `mailto:${firm.email}` },
  ];
  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-24 bg-forest-deep text-paper">
      <div className="container-page grid gap-16 py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="overline text-gold">Contato</p>
            <h2 id="contato-title" className="display-l">
              Vamos conversar
              <br />
              <em>sobre o seu caso.</em>
            </h2>
          </div>
          <dl className="flex flex-col gap-6">
            {info.map((i) => (
              <div key={i.k} className="flex flex-col gap-1">
                <dt className="label text-xs text-gold">{i.k}</dt>
                <dd className="text-lg">{i.href ? <a href={i.href} className="hover:text-gold">{i.v}</a> : i.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
      <footer className="container-page flex flex-col gap-2 border-t border-paper/10 py-8 text-sm text-paper/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {firm.legalName} · {firm.oab}</p>
        <p>LinkedIn · Instagram · Política de privacidade</p>
      </footer>
    </section>
  );
}
