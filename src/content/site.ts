// Conteúdo do site — mesmo do Figma (Moura & Rezende Advogados — Site).

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const firm = {
  name: "Moura & Rezende",
  legalName: "Moura & Rezende Advogados Associados",
  oab: "OAB/SP 12.345",
  address: "Av. Brigadeiro Faria Lima, 3.144 — 12º andar, Itaim Bibi, São Paulo",
  phone: "(11) 3000-8400",
  email: "contato@mourarezende.adv.br",
  since: 2004,
} as const;

export const nav = [
  { href: "#escritorio", label: "O escritório" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#metodo", label: "Método" },
  { href: "#socios", label: "Sócios" },
  { href: "#contato", label: "Contato" },
] as const;

export const images = {
  team: unsplash("1551135049-8a33b5883817"),
  office: unsplash("1571055931484-22dce9d6c510"),
} as const;

export const proof = [
  { value: 20, suffix: "", label: "anos de atuação" },
  { value: 1800, suffix: "+", label: "casos conduzidos" },
  { value: 97, suffix: "%", label: "de clientes recorrentes" },
] as const;

export const recognitions = ["Análise Advocacia 500", "Leaders League", "Chambers Brazil", "OAB/SP"] as const;

export const practiceAreas = [
  { title: "Direito Empresarial", description: "Contratos, societário e reestruturações para empresas que querem crescer com segurança." },
  { title: "Tributário", description: "Planejamento fiscal, recuperação de créditos e defesa em autuações." },
  { title: "Trabalhista Patronal", description: "Prevenção de passivos, compliance e defesa em reclamações." },
  { title: "Família & Sucessões", description: "Inventários, holdings familiares e planejamento sucessório." },
  { title: "Imobiliário", description: "Due diligence, incorporação e contratos de compra e locação." },
  { title: "Contencioso Cível", description: "Estratégia processual e negociação para resolver com agilidade." },
] as const;

export const method = [
  { step: "I", title: "Diagnóstico", description: "Reunião com o sócio para entender o cenário e os riscos." },
  { step: "II", title: "Estratégia", description: "Plano de ação por escrito, com prazos e honorários claros." },
  { step: "III", title: "Execução", description: "Acompanhamento semanal e acesso direto ao responsável." },
  { step: "IV", title: "Prevenção", description: "Revisões periódicas para o problema não voltar." },
] as const;

export const partners = [
  { name: "Dra. Helena Moura", role: "Sócia-fundadora · Empresarial", oab: "OAB/SP 123.456", photo: unsplash("1585240975858-7264fd020798") },
  { name: "Dr. Ricardo Rezende", role: "Sócio-fundador · Tributário", oab: "OAB/SP 234.567", photo: unsplash("1560250097-0b93528c311a") },
  { name: "Dra. Camila Duarte", role: "Sócia · Família & Sucessões", oab: "OAB/SP 345.678", photo: unsplash("1573496359142-b8d87734a5a2") },
  { name: "Dr. André Lins", role: "Sócio · Trabalhista", oab: "OAB/SP 456.789", photo: unsplash("1519085360753-af0119f7cbe7") },
] as const;
