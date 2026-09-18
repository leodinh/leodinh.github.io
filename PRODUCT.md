# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and recruiters who land on Home while scanning whether Leo is someone they might work with. Other visitors exist; they are not the default read.

## Product Purpose

A personal site for Leo Dinh: a first impression on `/`, work and biography on `/about`, photography as a hobby on `/photography`. Success on Home is that a hiring reader understands who Leo is and continues to About for proof of work.

## Positioning

Leo as a full-stack developer who likes figuring things out, building thoughtful web products, and sometimes photographing — work is the job, photography is a hobby, not a third primary destination.

## Operating Context

Next.js App Router site (GitHub Pages). Shared shell: header (Home, About only), main, footer. Load curtain with mascot + wordmark, then page content. Theme toggle. Work evidence lives on About, not on Home.

## Capabilities and Constraints

-   Routes: `/`, `/about`, `/photography`. Do not add Photography to primary nav.
-   Do not invent employers, metrics, or product claims. Work copy comes from existing experience data.
-   Do not replace factual copy without asking.
-   Home primary next step: About / work proof. Email and résumé may remain present but are not the job of the first viewport.
-   Mascot (tu-an) is the Home icon / greeting face.
-   Paper editorial identity is already shipped; preserve it (no new CRT/phosphor language).
-   Accessibility: respect `prefers-reduced-motion` for intro and Home motion.

## Brand Commitments

-   Name: Leo (Leo Tuan Dinh / Leo Dinh). Voice: plain, first person, no CRT jargon.
-   Binding Home copy to honor: “Hey, I’m Leo.” / “I like figuring things out.” / “Full-stack developer building thoughtful web products.” / “Sometimes I wander around with a camera, too.”
-   Mascot is the `[Icon]` in that lockup.

## Evidence on Hand

-   Résumé: `public/resume.pdf`
-   Contact: `leo.atdinh@gmail.com`
-   Experience entries in `constants/experience.js`
-   Photographs on `/photography`; About portraits in `constants/aboutPortraits.js`
-   Mascot sheets: `public/mascots/tu-an-glasses-directions.webp`, `tu-an-glasses-reactions.webp`
-   Do not fabricate product UI stills, testimonials, or metrics.

## Product Principles

-   Hiring-readable in one viewport; proof lives on About.
-   Photography is a hobby: reachable, never a header peer of Home/About.
-   Only real claims and real assets.
-   Greeting personality (mascot + first-person copy) without costume chrome.
