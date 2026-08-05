# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000). Note: `next dev` regenerates the agent-files block referenced in AGENTS.md; commit that change with your work rather than reverting it.
- `npm run build` — production build.
- `npm run start` — serve the production build.
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`).

There is no test runner configured in this project.

## Architecture

Single-page portfolio site on **Next.js 16 App Router + React 19**, styled entirely with **styled-components v6**. There is no CSS-module or Tailwind styling — `app/globals.css` is minimal and real styling lives in styled-components. (The codebase was ported from a Gatsby/MUI project; helpers like `lib/scrollTo.ts` and `common/Container.ts` are hand-rolled replacements for that stack.)

### Styling system (the part most likely to trip you up)

- **styled-components needs SSR wiring, already in place — don't remove it.** `next.config.ts` sets `compiler.styledComponents: true`; `lib/registry.tsx` (`StyledComponentsRegistry`) flushes server-inserted styles; `app/layout.tsx` wraps the tree in it, then `app/providers.tsx` supplies `ThemeProvider` + `GlobalStyles` + `AosInit`.
- **Any file that uses styled-components or hooks must start with `"use client"`.** That covers nearly every component here. Server components can only compose already-client components (see `app/page.tsx`, `app/about/page.tsx`).
- **Theme is dark-mode-only**, defined in `styles/theme.ts` and typed by `styled.d.ts` (augments styled-components' `DefaultTheme`). Read colors via `${({ theme }) => theme.primaryColor}` — if you add a theme key, add it to `styled.d.ts` too or TypeScript will error.
- **Transient props use the `$` prefix** (e.g. `$open`, `$maxWidth`, `$primary`) so they aren't forwarded to the DOM.
- Global resets, scrollbar styling, and responsive `html` font-size live in `styles/globalStyles.ts`.

### Component conventions

- Components live in `components/<Name>/` as `index.tsx` (markup/logic) + `styles.ts` (styled-components). Nested item components follow the same pattern (e.g. `Services/Service/`).
- Shared primitives are in `components/common/`: `Section` (page section wrapper, `sectionId` + `primary` props), `Container` (`$maxWidth="md"|"lg"`), `Title`.
- Section IDs (`home`, `about`, `skills`, `services`, `projects`, `contact`) are the anchor targets for `lib/scrollTo.ts`, which the Navbar calls for smooth in-page scrolling.

### Content is data-driven

Page content is **not** hard-coded in components. It lives in `content/*.ts` (`about`, `projects`, `services`, `skills`) as typed arrays, with shapes defined in `types/content.ts`. Components import from `@/content/...` and `.map()` over the data. To change site copy, images, or add a project/skill/service, edit the `content/` file — not the component.

### Other notes

- Path alias: `@/*` maps to the repo root (see `tsconfig.json`).
- Animations use **AOS**; `components/AosInit.tsx` initializes it once on mount, and elements opt in via `data-aos` attributes / the `animation` field on project content. `aos` has no types (`types/aos.d.ts` stubs it).
- The **contact form emails submissions via a server action.** `components/ContactForm/` (client, Formik + Yup `validation.ts`) obtains a reCAPTCHA v3 token and calls `sendContact` in `app/actions/contact.ts` (`"use server"`). That action re-verifies the token, re-runs the shared Yup schema server-side, then sends the message with **Resend** (`emails/ContactEmail.tsx` is the React email template) and returns `{ ok }` for the toast. It relies on env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (a Resend-verified sender), `RECAPTCHA_SECRET_KEY`, and `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
