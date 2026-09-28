import { recognitions } from "@/content/site";

export function Recognitions() {
  return (
    <section aria-label="Reconhecimentos" className="bg-muted">
      <div className="container-page flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="overline text-ink-soft">Reconhecido por</p>
        <ul className="flex flex-wrap gap-x-12 gap-y-3">
          {recognitions.map((r) => (
            <li key={r} className="font-serif text-xl text-ink-soft italic transition-colors hover:text-forest">{r}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
