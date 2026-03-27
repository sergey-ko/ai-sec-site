# AI-Sec Website

Product: AI-Sec (see [../../products/ai-sec/brief.md](../../products/ai-sec/brief.md))

## Tech Stack

- **Framework:** Astro 6 (static output)
- **Styling:** Tailwind CSS v4 via @tailwindcss/vite
- **Shared components:** @fce/shared (from github:sergey-ko/fce-website-shared)
- **Design:** Dark theme, green accent (#22C55E), Inter + JetBrains Mono fonts

## Dev Commands

```bash
npm run dev      # Start dev server
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Deployment

GitHub Pages via GitHub Actions (.github/workflows/deploy.yml). Deploys on push to main.

## Pages

1. `/` - Homepage (hero, problem, how-it-works, comparison, proof, pricing, FAQ, CTA)
2. `/free-scan` - Free scan form for public repos
3. `/open-source` - Open-source tools (CLI, GitHub Action, Claude Code skill)
4. `/pricing` - 3-tier consulting + self-service coming soon
5. `/case-study` - FCE audit case study (64+ findings)
6. `/contact` - Calendly embed + contact form

## Spec

Full website specification: [../../products/ai-sec/website-spec.md](../../products/ai-sec/website-spec.md)
