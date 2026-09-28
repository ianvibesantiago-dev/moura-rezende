# Moura & Rezende Advogados — Escritório de advocacia

> Site sóbrio e editorial para escritório boutique de advocacia, com formulário de contato acessível.

**🔗 Demo:** _em breve_ · **Nicho:** Jurídico · Advocacia empresarial

> ⚠️ Projeto **conceitual de portfólio**. Empresa, pessoas, endereços e números são fictícios.

## ✨ Destaques

- Formulário com validação nativa, labels flutuantes e consentimento LGPD
- Barra de progresso de leitura no header
- Cards de áreas de atuação com o "Saiba mais" alinhado no rodapé
- Conteúdo centralizado em `src/content/site.ts`

## 🎬 Animações

- Título com efeito "tinta" (palavras surgem desfocadas)
- Cards que se preenchem de verde no hover
- Linha do método traçada conforme a rolagem
- Fotos dos sócios de P&B para colorido no hover
- Todas respeitam a preferência de **"reduzir movimento"** do sistema operacional

## 🧱 Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) + React + TypeScript |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com) com design tokens (`@theme`) |
| Animações | [Motion](https://motion.dev) |
| Fontes | Libre Caslon Text (títulos) + Manrope (texto) via `next/font` |
| Imagens | `next/image` (otimização automática, lazy loading) |

**Paleta:** Papel `#F6F3EC`, verde-garrafa `#16302A`, dourado `#B08D57`

## 🎨 Design

O layout foi desenhado primeiro no **Figma**, com variáveis (cores, espaçamentos, raios), estilos de texto e componentes. Os tokens do código em `src/app/globals.css` têm os mesmos nomes das variáveis do Figma.

**Seções:** Hero · Reconhecimentos · Áreas de atuação · Método · Sócios · Manifesto · Contato

## ✅ Boas práticas

- HTML semântico e acessível (landmarks, `aria-*`, foco visível, textos alternativos)
- Conteúdo separado do layout — trocar de cliente = editar `src/content/site.ts`
- Componentes pequenos e reutilizáveis (`src/components/ui`, `sections`, `motion`)
- Metadados de SEO e Open Graph em pt-BR
- Lint (ESLint) e checagem de tipos (TypeScript strict) sem erros

## 📁 Estrutura

```
src/
  app/            layout, página e tokens (globals.css)
  content/        todo o conteúdo editável do site
  components/
    motion/       animações reutilizáveis (Reveal, Counter…)
    sections/     seções da página
    ui/           componentes base (Button, Card…)
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## 📸 Créditos

Fotos de [Unsplash](https://unsplash.com) (Unsplash License), usadas como placeholder.

---

Desenvolvido por **Ian Santiago** — sites e automações para pequenos negócios.
