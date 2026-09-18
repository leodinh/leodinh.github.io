# Agent rules

Personal Next.js App Router site for Leo Dinh, shipped to GitHub Pages. Product contract: `PRODUCT.md`.

## Product

- Routes: `/`, `/about`, `/photography`. Do not add Photography to primary nav.
- Work proof lives on About. Do not invent employers, metrics, testimonials, or product claims. Copy and jobs come from existing constants (`constants/experience.js`, `utils/aboutPage.js`).
- Do not replace factual copy without asking.
- Paper editorial identity is shipped. Preserve it. No CRT/phosphor language.
- Respect `prefers-reduced-motion` for intro and Home motion.
- Mascot is tu-an. Binding Home copy: “Hey, I’m Leo.” / “I like figuring things out.”

## Code

- Logic that can be tested without a browser lives in `utils/` or `constants/`. Page components stay thin.
- Keep `'use client'` on the smallest interactive leaf that needs state, effects, or browser APIs. Pages and static sections stay Server Components.
- Tests: `node --test` files next to that logic (`utils/*.test.js`, `constants/*.test.js`). Run `npm test`.
- Use `node:test` + `node:assert/strict`. Test observable behavior, not file layout or imports.
- TDD for new behavior, bugfixes, and refactors: failing test first, then the smallest pass.
- No new dependencies for something a few lines or an existing util already does.

## UI

- Style with Tailwind utilities and existing theme tokens (`styles/theme.css`, `--font-display` / `--font-body` / `--font-mono`). Do not add a CSS module for what a utility already covers.
- Reuse the scale for type, color, size, spacing, radius, duration, and font. No arbitrary `[…]` values, hex, rem, px, or new font families. Missing token → add it in the theme once.
- Verify user-visible UI in the browser, not from a single screenshot. Check the other routes that share the changed state.
- Accessibility basics stay: keyboard, reduced motion, real labels.
