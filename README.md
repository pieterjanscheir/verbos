# Verbos

A fast, browsable reference for **Brazilian Portuguese verb conjugations**. Search a verb, pick a type, and see it conjugated across five tenses with example sentences in Portuguese and English.

Built with Next.js (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Features

- **40 common verbs** — regular `-ar`/`-er`/`-ir` plus the high-frequency irregulars.
- **Five tenses** per verb: present, preterite, imperfect, future, and conditional, for `eu`, `você/ele/ela`, `nós`, and `vocês/eles/elas`.
- **Auto-generated example sentences** in PT + EN, driven by per-verb data (no hand-maintained translation tables).
- **Search** by infinitive or English meaning.
- **Filter** by verb type: all / `-ar` / `-er` / `-ir` / irregular.
- **Keyboard navigation** — `/` focuses search, `↑`/`↓` move through the list, `Esc` clears search.
- **Deep links** — the selected verb is stored in the URL hash (e.g. `/#falar`), so links are shareable and back/forward works.
- **Light & dark mode**, persisted across visits, with a responsive layout for mobile and desktop.

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Start the development server         |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build           |

## Project structure

```
app/
  layout.tsx              App shell: header, theme toggle, footer
  page.tsx                State + search/filter/keyboard/deep-link orchestration
  globals.css             Theme tokens and adaptive background
components/
  VerbList.tsx            Sidebar: search box, type filters, verb list
  VerbDetail.tsx          Selected verb header + grid of tense cards
  ConjugationCard.tsx     A single tense card with example sentences
  ThemeToggle.tsx         Dark-mode toggle (+ no-flash init script)
lib/
  config.ts               Verb data, types, tense templates, helpers
```

## Adding a verb

Add an entry to the `verbs` array in [`lib/config.ts`](lib/config.ts). Each verb provides its `tenses` and a compact `en` block (`present`, `past`, `gerund`, optional `base`) used to generate the English example sentences:

```ts
{
  infinitive: 'falar',
  translation: 'to speak',
  type: 'regular -ar',
  en: { present: 'speak', past: 'spoke', gerund: 'speaking' },
  tenses: {
    present: { eu: 'falo', você: 'fala', nós: 'falamos', vocês: 'falam' },
    // ...preterite, imperfect, future, conditional
  },
}
```

## Deploy

Deploy on [Vercel](https://vercel.com/new) or any host that supports Next.js.
