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

1. `/` - Homepage (Pyramid narrative: hero → 3 tier sections → flywheel → proof → founder → CTA)
2. `/free-scan` - SaaS platform waitlist (not an active scan — SaaS is wave 2)
3. `/open-source` - Open-source tools (Claude Code skill, 6 agents, examples)
4. `/pricing` - 3-col pricing (Free / $299mo coming soon / Consulting from $3,500) + consulting detail tiers
5. `/case-study` - 3 public audits with 98 verified findings across 108K+ GitHub stars
6. `/contact` - Calendly embed (skaskapro/30min) + contact form

## Narrative

The site tells a 3-tier "Pyramid" story:
- **Open Source** (green) — gift to the ecosystem, real tool, ~60-70% coverage
- **SaaS** (violet) — coming soon, $299/mo, multi-step hardened workflows
- **Consulting** (blue) — from $3,500, AI-powered red team + expert review

Tier accent colors are used consistently across all pages.

## Spec

Full website specification: [../../products/ai-sec/website-spec.md](../../products/ai-sec/website-spec.md)
