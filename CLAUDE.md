# Ipsa — Frontend Asset & Design System Map

This document is the source of truth for **every visual token, asset, component,
and palette usage** in the Ipsa marketing site. It is intended to be imported
into a design tool (e.g. `claude design`) so the UI can be revamped end-to-end
without scanning the codebase first.

> **Project**: `ipsa-web` — Next.js 15 + React 19 marketing site for **Ipsa**
> ("Causal intelligence for modern advertising" — MMM platform for ad agencies).
> **Domain**: `getipsa.ai`.
> **Pages**: `/` (home), `/product`, `/about`.

---

## 1. Tech Stack

| Concern        | Tool / Version                                |
| -------------- | --------------------------------------------- |
| Framework      | Next.js `^15.1.0` (App Router)                |
| UI Runtime     | React `^19.0.0`                               |
| Styling        | Tailwind CSS `^3.4.14` + raw CSS variables    |
| Motion         | `framer-motion` `^11.11.17`                   |
| Smooth scroll  | `lenis` `^1.1.18` (via `LenisProvider`)       |
| Carousel       | `embla-carousel-react` + `embla-auto-scroll`  |
| Class merging  | `clsx`                                        |
| Type system    | TypeScript `^5.6.3`                           |

**Path alias**: `@/*` → repo root (see `tsconfig.json`).

---

## 2. Asset Inventory

### 2.1 Static binary assets

**There are none.** The repo has no `public/` directory. There are no logo
files, favicons, OG images, photographs, illustrations, fonts, videos, or
icons stored as files.

This means a redesign can introduce its own asset library from scratch
without conflict, but also means today's "logos" (Nike, Annalect, Omnicom,
Meta, Google, TikTok, GA4, Toast, DoorDash) are rendered as **plain text**
in `LogoMarquee` rather than real wordmarks.

### 2.2 Embedded SVG assets (inline in components)

| Asset                       | Location                                           | Purpose                                                          |
| --------------------------- | -------------------------------------------------- | ---------------------------------------------------------------- |
| Pipelines icon (`<svg>`)    | [components/sections/Features.tsx:7](components/sections/Features.tsx)            | Feature card 1 — flowing connector path                          |
| Explanations icon (`<svg>`) | [components/sections/Features.tsx:11](components/sections/Features.tsx)           | Feature card 2 — question / lightbulb bubble                     |
| Multi-client icon (`<svg>`) | [components/sections/Features.tsx:16](components/sections/Features.tsx)           | Feature card 3 — 2×2 grid of clients                             |
| Sticky orbit visualization  | [components/sections/HowItWorks.tsx:87](components/sections/HowItWorks.tsx)       | Two concentric circles + 4 dots colored with brand palette       |
| Saturation curve            | [components/sections/BudgetOptimizer.tsx:36](components/sections/BudgetOptimizer.tsx) | Animated `path` of an MMM saturation curve with green gradient   |
| Comparison Yes/No/Sometimes | [components/sections/Comparison.tsx:62-103](components/sections/Comparison.tsx)   | Three inline check / cross / dash glyphs                         |
| Logo "dot" mark             | [components/layout/Header.tsx:32](components/layout/Header.tsx) + [Footer.tsx:36](components/layout/Footer.tsx) | Provisional brand mark: navy circle with green dot inside |
| SVG noise texture           | [app/globals.css:84](app/globals.css)              | `data:image/svg+xml` turbulence used by `.noise::before` overlay |

### 2.3 External assets

| Asset    | Source                                          | Used in                       |
| -------- | ----------------------------------------------- | ----------------------------- |
| Inter    | `next/font/google` → CSS var `--font-inter`     | Body text (sans)              |
| Radley   | `next/font/google` → CSS var `--font-radley`    | Display headlines (`.font-display`, serif) |

---

## 3. Color Palette

### 3.1 Canonical brand tokens

Defined in **two synchronized places**:
[tailwind.config.ts:7-28](tailwind.config.ts) (Tailwind classes) and
[app/globals.css:5-28](app/globals.css) (CSS custom properties).

| Token name      | Hex       | Tailwind class      | CSS var                | Role                                                  |
| --------------- | --------- | ------------------- | ---------------------- | ----------------------------------------------------- |
| **Anchor**      | `#1C3829` | `anchor`            | `--color-anchor`       | Deep moss — primary dark background / body text       |
| **Forest**      | `#2E5E45` | `forest`            | `--color-forest`       | Secondary green, hover states, UI depth, secondary text |
| **Accent**      | `#B0FE76` | `accent`            | `--color-accent`       | Green-yellow — CTAs, highlights, key data labels      |
| **Coral**       | `#F38668` | `coral`             | `--color-coral`        | Warm accent, alerts, secondary CTAs, hover swap       |
| **Burnt**       | `#DE6854` | `burnt`             | `--color-burnt`        | Tertiary accent, charts, illustrations                |
| **Warm White**  | `#FFFBF5` | `warm-white`        | `--color-warm-white`   | Light-mode page background                            |
| **Surface**     | `#F0EDE6` | `surface`           | `--color-surface`      | Light-mode card / panel backgrounds                   |

### 3.2 Legacy aliases (kept for back-compat — many components still use these)

| Legacy class          | Resolves to                     | Notes                              |
| --------------------- | ------------------------------- | ---------------------------------- |
| `navy`                | `#1C3829` (= anchor)            | Most-used class for dark text      |
| `navy-caption`        | `#2E5E45` (= forest)            | Secondary text                     |
| `orange`              | `#B0FE76` (= accent)            | **Misleading name** — actually green |
| `orange-deep`         | `#F38668` (= coral)             | **Misleading name** — actually coral |
| `sky` / `off-blue` / `baby-blue` | `#F0EDE6` (= surface) | Three names for the same warm beige |
| `blue-tint`           | `#2E5E45` (= forest)            | Despite the name, it's green       |
| `dark-grey`           | `#A3A3A3`                       | Neutrals                           |
| `grey`                | `#E5E5E5`                       | Neutrals                           |

> ⚠️ A redesign should **rename `orange*` → `accent*`/`coral*`** and drop the
> `sky`/`baby-blue`/`blue-tint` aliases. The legacy names are vestigial from a
> prior blue-and-orange palette.

### 3.3 One-off colors (hardcoded in components, not tokenized)

| Hex                              | Where                          | What it is                        |
| -------------------------------- | ------------------------------ | --------------------------------- |
| `#0F1F17`                        | Hero gradient stop             | Pre-anchor near-black             |
| `#5A8870`, `#94B5A1`, `#CCDBD0`, `#F2EFE7` | Hero / Problem gradients | Mid-tones between forest and warm-white for vertical fades |
| `rgba(239, 201, 76, 0.25)` / `#B8860B` | Comparison "Sometimes" indicator | The only **yellow/gold** in the entire site — sits outside the palette |

### 3.4 Gradient compositions

Defined as Tailwind `backgroundImage` keys (`bg-gradient-{1..4}`) in
[tailwind.config.ts:36-49](tailwind.config.ts):

- **`gradient-1`** — Surface-toned: warm-white + faint coral + faint forest. Used as ambient light backdrop.
- **`gradient-2`** — Soft surface: warmer with a forest+coral wash. Used by `ClosingCTA`.
- **`gradient-3`** — Deep forest/anchor with accent + coral glows. For dark feature accents.
- **`gradient-4`** — Anchor base with accent + coral glows. For hero illustrations.

Plus two **inline page-level gradients** (not tokenized):
- Hero vertical fade `#0F1F17 → #1C3829 → #2E5E45 → #5A8870 → #94B5A1 → #CCDBD0 → #F2EFE7 → #FFFBF5` ([Hero.tsx:28](components/sections/Hero.tsx))
- Problem inverse fade `#FFFBF5 → … → #2E5E45` ([Problem.tsx:13](components/sections/Problem.tsx))

### 3.5 Selection color

`::selection` → background `--color-accent` (`#B0FE76`), text `--color-anchor` (`#1C3829`). [globals.css:87](app/globals.css)

---

## 4. Typography

| Role             | Font                          | CSS                                     |
| ---------------- | ----------------------------- | --------------------------------------- |
| Sans (body)      | **Inter**                     | `var(--font-inter)`, weight 400/500/600 |
| Serif (display)  | **Radley** (italic-ready)     | `var(--font-radley)`, applied via `.font-display` |
| OpenType features | `ss01`, `cv11` enabled on `body` |                                       |
| Display tracking | `letter-spacing: -0.01em` on `.font-display` |                          |

**Headline scale used**:
- Hero H1: `text-4xl` → `md:text-7xl`
- Section H2: `text-4xl` → `md:text-5xl` (occasionally `md:text-6xl`)
- Card H3: `text-2xl` → `text-3xl`

---

## 5. Layout Tokens

| Token              | Value          | Purpose                              |
| ------------------ | -------------- | ------------------------------------ |
| `max-w-container`  | `1240px`       | Master content width                 |
| Standard h-padding | `px-6`         | Used at every container              |
| Section v-padding  | `py-24` → `py-40` | Generous vertical rhythm           |
| Border radius      | `rounded-2xl` (cards/panels), `rounded-3xl` (large cards/blobs), `rounded-full` (buttons, pills) | |
| Card border        | `border border-forest/20` | Light dividers throughout    |

---

## 6. Motion / Animation

- **`Reveal` + `RevealItem`** — wraps in-view animations with stagger. Container stagger `0.08s`, child `delayChildren: 0.05s`, transition `0.7s ease [0.22,1,0.36,1]`. ([SectionReveal.tsx](components/ui/SectionReveal.tsx))
- **Hero entrance** — manual framer-motion fade+slide on eyebrow, h1, sub, CTAs, dashboard. ([Hero.tsx](components/sections/Hero.tsx))
- **HowItWorks** — sticky-scroll using `useScroll` + `useTransform` to rotate orbit and fill progress bar. ([HowItWorks.tsx](components/sections/HowItWorks.tsx))
- **AnimatedDashboard** — `useAnimationFrame` loop drives KPI numbers and bar heights on a 5s sine. ([AnimatedDashboard.tsx](components/sections/AnimatedDashboard.tsx))
- **BudgetOptimizer chart** — animated `pathLength` from 0→1 on saturation curve (1.4s). ([BudgetOptimizer.tsx](components/sections/BudgetOptimizer.tsx))
- **LogoMarquee** — pure CSS `@keyframes marquee` 35s linear infinite. ([globals.css:68](app/globals.css))
- **Tabs** — `layoutId="tab-underline"` for shared-element underline. ([Tabs.tsx](components/ui/Tabs.tsx))
- **Lenis** — global smooth scroll with `lerp: 0.1`. ([LenisProvider.tsx](components/layout/LenisProvider.tsx))

---

## 7. Component Map

### 7.1 UI primitives (`components/ui/`)

| Component       | File                                       | Variants / Props                              | Palette usage                                                            |
| --------------- | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| `Button`        | [Button.tsx](components/ui/Button.tsx)     | `primary` \| `secondary` \| `ghost`           | primary: `bg-accent`/`text-anchor`, hover→`bg-coral`/`text-warm-white` with coral shadow |
| `Card`          | [Card.tsx](components/ui/Card.tsx)         | wraps any content                             | `bg-surface`, `border-forest/20`, hover `border-accent/60` + anchor shadow |
| `GradientBlob`  | [GradientBlob.tsx](components/ui/GradientBlob.tsx) | `variant: 1\|2\|3\|4`, `className`     | maps to `bg-gradient-{1..4}` with `blur-3xl`, `mix-blend-multiply`        |
| `LogoMarquee`   | [LogoMarquee.tsx](components/ui/LogoMarquee.tsx) | `logos: string[]` (text-only today)     | `text-navy/40` → hover `text-navy`                                       |
| `Reveal` / `RevealItem` | [SectionReveal.tsx](components/ui/SectionReveal.tsx) | children                          | n/a (motion only)                                                        |
| `Tabs`          | [Tabs.tsx](components/ui/Tabs.tsx)         | `tabs: {label,title,body}[]`                  | `border-navy/10`, active `text-navy`, underline `bg-orange` (= accent)   |

### 7.2 Section components (`components/sections/`)

| Section                | File                                                                  | Background                                                       | Highlight palette                                            |
| ---------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| `Hero`                 | [Hero.tsx](components/sections/Hero.tsx)                              | Multi-stop dark→light vertical gradient + accent/coral radial glows | text on dark: `text-warm-white`, accent dot, italic accent in sub |
| `Problem`              | [Problem.tsx](components/sections/Problem.tsx)                        | Inverse vertical gradient warm-white → forest                    | eyebrow `text-forest`, body `text-forest`, headline `text-anchor` |
| `Features`             | [Features.tsx](components/sections/Features.tsx)                      | white                                                            | icon chip `bg-orange/10` + `text-orange-deep`                |
| `HowItWorks`           | [HowItWorks.tsx](components/sections/HowItWorks.tsx)                  | `bg-off-blue/40` (= surface 40%)                                 | step number `text-orange` (= accent green), sticky `bg-surface` |
| `BudgetOptimizer`      | [BudgetOptimizer.tsx](components/sections/BudgetOptimizer.tsx)        | white                                                            | curve fill `#B0FE76`@40%→0%, stroke `#2E5E45`, dot `#F38668`, "Recommended" pill `bg-orange/5` |
| `Comparison`           | [Comparison.tsx](components/sections/Comparison.tsx)                  | `bg-warm-white`                                                  | Indicators: yes=`bg-accent/40` w/ accent ring, no=`bg-coral/25` w/ coral ring, sometimes=gold `#B8860B` (outlier) |
| `SocialProof`          | [SocialProof.tsx](components/sections/SocialProof.tsx)                | `bg-warm-white`                                                  | text-only logos via `LogoMarquee`                            |
| `ClosingCTA`           | [ClosingCTA.tsx](components/sections/ClosingCTA.tsx)                  | `bg-gradient-2` + central white radial glow                      | accent button with coral-on-hover                            |
| `AnimatedDashboard`    | [AnimatedDashboard.tsx](components/sections/AnimatedDashboard.tsx)    | `bg-surface` card                                                | 5-channel bars: accent / coral / forest / burnt / anchor; chart panel `bg-off-blue/40` |
| `VisionMissionPromise` | [VisionMissionPromise.tsx](components/sections/VisionMissionPromise.tsx) | white                                                         | navy text + 65% opacity for body                             |

### 7.3 Layout (`components/layout/`)

| Component       | File                                       | Notes                                                                                                             |
| --------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `Header`        | [Header.tsx](components/layout/Header.tsx) | Fixed top, transparent → on scroll `bg-warm-white/85` + `backdrop-blur-xl` + `border-forest/15`. Logo = navy circle with accent dot. |
| `Footer`        | [Footer.tsx](components/layout/Footer.tsx) | `bg-warm-white`, three link columns + brand block. Logo repeats Header's circle-dot mark.                         |
| `MegaMenu`      | [MegaMenu.tsx](components/layout/MegaMenu.tsx) | Currently disabled in `nav.ts` (`hasMenu: false`) — Product is a direct link. Still rendered when re-enabled.    |
| `LenisProvider` | [LenisProvider.tsx](components/layout/LenisProvider.tsx) | Mounts global smooth-scroll.                                                                          |

---

## 8. Page Composition

### `/` → [app/page.tsx](app/page.tsx)
`Hero` → `Problem` → `Features` → `HowItWorks` → `BudgetOptimizer` → `Comparison` → `SocialProof` → `ClosingCTA`

### `/product` → [app/product/page.tsx](app/product/page.tsx)
Custom hero (eyebrow + h1 + sub + `AnimatedDashboard`) → `Tabs` (4 tabs: Pipelines, Causal models, Multi-client, Optimizer) → `HowItWorks` → `BudgetOptimizer` → `ClosingCTA`

### `/about` → [app/about/page.tsx](app/about/page.tsx)
Custom hero with `GradientBlob` variant 2 → `VisionMissionPromise` → "Questions agencies asked us" 4-card grid sourced from `sampleCopy` → `ClosingCTA`

### Global chrome — [app/layout.tsx](app/layout.tsx)
`<LenisProvider>` wraps `<Header /> <main>{children}</main> <Footer />`. Loads Inter + Radley via `next/font/google`. Sets metadata (title/description/`metadataBase: getipsa.ai`).

---

## 9. Content Source

All marketing copy is centralized in [content/copy.ts](content/copy.ts):
`brand`, `hero`, `problem`, `features`, `howItWorks`, `socialProof`,
`budgetOptimizer`, `closingCTA`, `visionMissionPromise`, `sampleCopy`.

Navigation is in [content/nav.ts](content/nav.ts): `mainNav` and `productMenu`.

A redesign that swaps visual treatment can leave these files alone.

---

## 10. Known Gaps / Things a Redesign Should Address

1. **No `public/` directory.** No favicon, no OG image, no real logo file. The current "logo" is a procedural circle-with-dot. A redesign should ship a real logo set (SVG + PNG @1x/@2x) and an OG image.
2. **Logos in `SocialProof` are plain text.** Nike, Annalect, Omnicom, Meta, Google, TikTok, GA4, Toast, DoorDash render as Radley text in `LogoMarquee`. Would benefit from either real logo SVGs or an intentional typographic treatment.
3. **Legacy color aliases.** `orange*`, `sky`, `off-blue`, `baby-blue`, `blue-tint` are misleading — they all map to the new green/coral/surface palette. Consider a sweep that deletes the aliases and migrates classnames.
4. **One off-palette color.** The "sometimes" indicator in `Comparison` uses gold `#B8860B` — the only yellow in the system. A redesign should either tokenize it (`--color-warning`) or replace it.
5. **Mega-menu disabled.** Product link is a direct route; `MegaMenu` exists but isn't reachable. Decide: ship it or delete it.
6. **Two inline mega-gradients.** Hero and Problem hand-roll an 8-stop vertical gradient. Worth tokenizing (`bg-gradient-hero`, `bg-gradient-problem`) for consistency.
7. **No dark mode.** Site is light-only; dark variants don't exist for any component despite the deep-anchor brand color suggesting they could.
8. **`.noise::before` overlay** is defined in `globals.css` but **not currently applied anywhere** — it's dormant grain noise waiting to be opted into.

---

## 11. Quick Reference — Drop-in Token Cheatsheet

```css
/* Light backgrounds */    #FFFBF5  warm-white      (page bg)
                           #F0EDE6  surface         (cards)

/* Dark backgrounds/text */ #1C3829  anchor         (primary text + dark sections)
                           #2E5E45  forest          (secondary text + hover)

/* Action colors */         #B0FE76  accent         (CTAs, key labels, "yes")
                           #F38668  coral           (warm accent, "no", hover swap)
                           #DE6854  burnt           (charts only)

/* Neutrals */             #A3A3A3  dark-grey
                           #E5E5E5  grey

/* Outlier (in Comparison only) */ #B8860B + rgba(239,201,76,0.25)  gold "sometimes"
```

```ts
// Typography
font-display  → Radley (serif, -0.01em tracking)
font-sans     → Inter (with ss01, cv11)
```

```ts
// Layout
max-w-container → 1240px
Standard section → py-24 md:py-32 (range: py-20 → py-40)
Standard padding → px-6
```

---

*Last verified against repo at clone time: 2026-04-29.*

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
