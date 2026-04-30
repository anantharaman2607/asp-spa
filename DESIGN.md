# Design Brief

## Direction
Premium luxury spa (ASP Spa — Unisex Salon & Bridal Studio) showcase website. Tone: sophisticated, refined, NOT generic wellness. Aesthetic: gold + deep charcoal + cream — luxury through restraint and white space.

## Palette
| Token | OKLCH (Light) | OKLCH (Dark) | Purpose |
|-------|---|---|---|
| background | 0.97 0.01 60 | 0.13 0.01 180 | Page bg, cream |
| foreground | 0.15 0.01 180 | 0.97 0.01 60 | Text, deep charcoal |
| primary | 0.65 0.10 70 | 0.72 0.12 70 | Gold accent, CTAs |
| secondary | 0.60 0.08 45 | 0.65 0.08 45 | Rose gold, muted |
| muted | 0.93 0.02 50 | 0.24 0.01 180 | Borders, dividers |
| accent | 0.65 0.10 70 | 0.72 0.12 70 | Highlights, gold |
| destructive | 0.55 0.22 25 | 0.65 0.19 22 | Error, warnings |

## Typography
- **Display (headings)**: Fraunces — elegant serif, luxury signal
- **Body (copy)**: GeneralSans — clean modern sans-serif, professional
- **Mono (code)**: GeistMono — consistent baseline

## Spacing & Rhythm
Generous whitespace. Mobile-first responsive: `sm:` (640px), `md:` (768px), `lg:` (1024px). Consistent padding: 1rem (mobile), 1.5rem (tablet), 2rem (desktop). Asymmetric layouts preferred over rigid grids.

## Structural Zones
| Zone | Background | Border | Details |
|------|---|---|---|
| Header/Nav | card (cream) | border (muted) | Sticky, bottom border, 2-column responsive |
| Hero Section | background (cream) | none | Full-width, elevated imagery, subtle gradient overlay |
| Content Cards | card (cream) | border (muted) | Soft shadows, generous padding, muted foreground |
| CTA Buttons | primary (gold) | none | Cream text, subtle hover lift via shadow-luxury |
| Footer | sidebar (charcoal) | border (muted) | 4-column grid, cream text, top border |

## Elevation & Depth
- `shadow-subtle`: 0 2px 8px rgba(0,0,0,0.04) — cards, inputs
- `shadow-luxury`: 0 10px 30px rgba(0,0,0,0.08) — elevated surfaces, buttons on hover
- No neon or glow effects. Depth through layering and composition.

## Component Patterns
- Buttons: gold primary, cream text, rounded-md, shadow-luxury on hover
- Cards: cream bg, muted border, shadow-subtle, padding-6 min
- Forms: input has muted bg, border-muted, focus ring-primary
- Gallery grid: 1 col (mobile), 3 cols (tablet), 4 cols (desktop)
- Service cards: minimal hierarchy via typography + spacing, not color

## Motion
- Transitions: `transition-smooth` (all 0.3s cubic-bezier)
- Hover states: shadow lift, subtle scale (1.02)
- No bouncy animations. Smooth entrance via opacity fade-in.

## Constraints
- Ban: generic wellness pastels, rainbow palettes, heavy shadows, bouncy animations
- Dark mode: intentional — charcoal bg, cream fg, gold remains bright
- Mobile-first: every element responsive by default, enhanced on larger screens

## Signature Detail
Gold accent paired with deep charcoal creates "luxury hotel lobby" aesthetic — sophisticated, calming, memorable. Every interface element has breathing room. Serif display font + clean body font = editorial professionalism.
