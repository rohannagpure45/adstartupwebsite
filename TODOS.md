# TODOS

Tracking work that's intentionally deferred. Pick from here when ready.

## Lead capture / forms

- **Wire the closing CTA intake form to a real backend.**
  Today (`components/sections/ClosingCTA.tsx`) the form collects 8 fields
  (name, work email, agency, role, yearly ad spend, measurement method,
  biggest challenge, optional notes) and on submit just opens
  `https://getipsa.ai` in a new tab — the field values are dropped on the
  floor. Decide on a backend (Resend, Loops, HubSpot, Pipedrive, custom
  Next.js route handler) and `POST` the FormData to it before the redirect.
  Also wire a server-side email-domain check (the client-side denylist in
  `FREE_EMAIL_DOMAINS` is bypassable via curl).

## Legal

- **Replace the placeholder Privacy Policy and Terms of Service.**
  `app/privacy/page.tsx` and `app/terms/page.tsx` ship with reasonable
  starter language but should be reviewed by counsel before any real
  marketing or sales activity. Update the "Last updated" date when you do.

## Design system / cleanup

- **Drop the legacy color aliases.** `orange*`, `sky`, `off-blue`,
  `baby-blue`, `blue-tint` (see CLAUDE.md §3.2) are misleading — they all
  resolve to the new green/coral/surface palette. Sweep the codebase and
  rename usages to `accent*` / `coral*` / `surface`, then delete the
  aliases from `tailwind.config.ts` and `app/globals.css`.

- **Tokenize the Hero / Problem mega-gradients.** Both sections hand-roll
  an 8-stop vertical gradient. Move into `tailwind.config.ts` as
  `bg-gradient-hero` / `bg-gradient-problem` for consistency.
