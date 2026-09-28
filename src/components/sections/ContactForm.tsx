"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { firm, practiceAreas } from "@/content/site";

type Status = "idle" | "sent";

/**
 * Formulário com validação nativa (required/type=email) e acessível.
 * Sem backend: ao enviar, abre o e-mail do escritório com a mensagem preenchida.
 * Para produção, troque por uma rota /api ou um serviço como Resend/Formspree.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Nome: ${data.get("nome")}`,
      `E-mail: ${data.get("email")}`,
      `Telefone: ${data.get("telefone")}`,
      `Área: ${data.get("area")}`,
      "",
      String(data.get("mensagem")),
    ].join("\n");
    window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent("Consulta pelo site")}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  const field = "peer w-full border-b border-forest bg-transparent pt-6 pb-3 outline-none transition-colors placeholder:text-transparent focus:border-gold";
  const label = "pointer-events-none absolute top-6 left-0 text-ink-soft transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold-ink peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <div className="relative bg-surface p-8 text-ink md:p-12">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[420px] flex-col justify-center gap-4" role="status">
            <p className="font-serif text-4xl text-gold-ink italic">Obrigado.</p>
            <p className="text-ink-soft">Seu e-mail foi aberto com a mensagem pronta. Respondemos em até 1 dia útil.</p>
            <button type="button" onClick={() => setStatus("idle")} className="label mt-4 w-fit border-b border-forest pb-1">Enviar outra mensagem</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6" aria-labelledby="form-title">
            <h3 id="form-title" className="display-m">Agende uma consulta</h3>
            {[
              { name: "nome", label: "Nome completo", type: "text", auto: "name" },
              { name: "email", label: "E-mail", type: "email", auto: "email" },
              { name: "telefone", label: "Telefone", type: "tel", auto: "tel" },
            ].map((f) => (
              <div key={f.name} className="relative">
                <input id={f.name} name={f.name} type={f.type} autoComplete={f.auto} required placeholder={f.label} className={field} />
                <label htmlFor={f.name} className={label}>{f.label}</label>
              </div>
            ))}
            <div className="relative">
              <label htmlFor="area" className="text-xs text-ink-soft">Área de interesse</label>
              <select id="area" name="area" required defaultValue="" className="w-full cursor-pointer border-b border-forest bg-transparent py-3 outline-none focus:border-gold">
                <option value="" disabled>Selecione</option>
                {practiceAreas.map((a) => <option key={a.title}>{a.title}</option>)}
              </select>
            </div>
            <div className="relative">
              <textarea id="mensagem" name="mensagem" rows={3} required placeholder="Conte brevemente o seu caso" className={`${field} resize-none`} />
              <label htmlFor="mensagem" className={label}>Conte brevemente o seu caso</label>
            </div>
            <label className="flex items-start gap-3 text-sm text-ink-soft">
              <input type="checkbox" required className="mt-1 accent-forest" />
              Concordo com o uso dos meus dados para retorno do escritório, conforme a LGPD.
            </label>
            <button type="submit" className="label group mt-2 inline-flex w-fit items-center gap-3 bg-forest px-8 py-4 text-paper transition-colors hover:bg-forest-deep">
              Enviar mensagem <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
