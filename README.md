# 🖤 Davi Batista — Portfólio

Portfólio pessoal one-page com tema **dark tech** — uma vibe de terminal/editor de código que combina com o perfil **Backend Java · DevOps · Dados**.

> Feito com React + Vite + TypeScript, sem libs de UI. Toda a "personalidade" (partículas, tilt 3D, glow, parallax, cursor de terminal) é CSS e JavaScript puro.

## ✨ Destaques

- 🖥️ **Estilo terminal/dev** — cabeçalhos de seção como editor de código (`// 01. sobre` + file tabs `about.ts`), cursor piscando no hero, prompt `$`
- 🖱️ **Interações no cursor** — tilt 3D e glow que seguem o mouse nos cards de projetos, parallax sutil no hero
- 🎆 **Fundo animado** — partículas subindo em dois tons (accent + neutro), com pausa inteligente fora da viewport
- 📜 **Scroll reveal** — seções e cards entram suavemente conforme a rolagem
- 🌐 **PT/EN** — troca de idioma instantânea, sem reload
- ♿ **Acessível** — respeita `prefers-reduced-motion`, foco visível, nada depende só de hover
- ⚡ **Leve e rápido** — ~70 kB gzip de JS, tudo em `transform`/`opacity` (sem jank)

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite 8](https://vite.dev) |
| Linguagem | TypeScript (strict) |
| Estilos | CSS Modules (`*.module.css`) |
| Lint | [oxlint](https://oxc.rs) |
| Fontes | Space Grotesk · JetBrains Mono |
| Ícones | SVG inline (sem lib de ícones) |

## 🚀 Rodando localmente

```bash
# instala as dependências
npm install

# servidor de dev com hot reload
npm run dev

# build de produção (tsc + vite)
npm run build

# preview do build
npm run preview

# lint
npm run lint
```

## 📁 Estrutura

```
├── src/
│   ├── components/      # Hero, About, Experience, Skills, Projects, Contact, Footer
│   ├── hooks/           # useRevealOnScroll, useCardTilt, useParallax
│   ├── data/            # conteúdo estruturado (projetos, experiência)
│   ├── i18n/            # dicionários PT/EN
│   └── styles/          # design tokens (cores, fontes)
├── index.html
└── package.json
```

## 🎨 Paleta

| Cor | Uso |
|---|---|
| `#1a1a2e` | fundo principal |
| `#4a4a6a` | fundo elevado / superfícies |
| `#e94560` | accent (destaques, glow) |

## 📄 Licença

MIT © [Davi Batista](https://github.com/Davi-s-Brain)
