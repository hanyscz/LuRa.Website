# LuRa IT Develop — Brand & UI Guide
Version: 1.0
Direction: Dark + Turquoise

## 1. Source of truth
Use the supplied LuRa IT Develop logo SVG as the geometry source of truth.
Do not redraw, distort, stretch, rotate, add effects, change proportions, or alter the internal geometry.
Only recolor the approved logo variants described below.

## 2. Core palette

| Role | HEX | RGB | Approx. CMYK | Usage |
|---|---|---:|---:|---|
| Primary / Anthracite | `#1B242A` | 27, 36, 42 | 36, 14, 0, 84 | Main text, dark sections, header/footer, logo base |
| Secondary / Slate | `#5C7078` | 92, 112, 120 | 23, 7, 0, 53 | Secondary text, metadata, subdued UI |
| Accent / Turquoise | `#2CCFC8` | 44, 207, 200 | 79, 0, 3, 19 | CTA, icons, active states, highlights |
| Background / Ice | `#F3FAFA` | 243, 250, 250 | 3, 0, 0, 2 | Page background, large calm surfaces |
| Surface / White | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | Cards, forms, content surfaces |

CMYK values are approximate. For professional print, convert with the print house ICC profile and proof before production.

## 3. Supporting palette

| Token | HEX | Purpose |
|---|---|---|
| Accent 50 | `#EEFBFB` | Very soft turquoise background |
| Accent 100 | `#D5F5F4` | Hovered/light chips |
| Accent 200 | `#B5EEEC` | Decorative surfaces |
| Accent 300 | `#8BE5E1` | Charts/decorative accents |
| Accent 400 | `#61DBD6` | Secondary accent |
| Accent 500 | `#2CCFC8` | Main brand accent |
| Accent 600 | `#27B6B0` | Primary CTA hover |
| Accent 700 | `#219B96` | Active/pressed |
| Accent Text | `#1B7E7A` | Accessible textual links on white |
| Accent 900 | `#156360` | Strong textual accent |
| Border | `#DDE5E5` | Standard border |
| Border Strong | `#D0D8D9` | Stronger dividers |
| Primary Soft | `#2D363B` | Dark card hover / secondary dark surface |
| Primary Elevated | `#3B4348` | Elevated dark surface |

## 4. Color usage ratio
Target visual ratio:
- 65–75% light backgrounds and white surfaces.
- 15–25% Primary `#1B242A`.
- 5–10% Turquoise `#2CCFC8`.
- Secondary `#5C7078` is supporting only, mainly typography and metadata.

Turquoise is the visual signature, not the dominant page fill. The brand should feel technical, calm, premium, and modern — not neon or gaming-like.

## 5. Accessibility rules
Important contrast checks:
- `#1B242A` on `#FFFFFF`: 15.76:1 — excellent.
- `#1B242A` on `#F3FAFA`: 14.91:1 — excellent.
- `#5C7078` on `#F3FAFA`: 4.91:1 — acceptable for normal text.
- `#2CCFC8` on `#1B242A`: 8.16:1 — excellent.
- `#2CCFC8` on white: 1.93:1 — DO NOT use as normal text.
- `#1B7E7A` on white: suitable for textual links.

Primary CTA:
- Background: `#2CCFC8`
- Text: `#1B242A`
- Hover: `#27B6B0`
- Active: `#219B96`

Never use white text on `#2CCFC8` for normal-size text.

## 6. Logo color variants

### Standard light-background logo
- Dark/base elements: `#1B242A`
- Turquoise/accent elements: `#2CCFC8`
- Supporting text: `#1B242A` or `#5C7078`
- Background: transparent, white, or `#F3FAFA`

### Reversed logo for dark background
- Base/light elements: `#F3FAFA` or `#FFFFFF`
- Accent elements: `#2CCFC8`
- Supporting small text: `#D5E1E3`
- Dark background: `#1B242A`

### Monochrome
- Dark monochrome: `#1B242A`
- Light monochrome: `#FFFFFF`

Do not apply shadows, outer glows, bevels, 3D effects, or gradients to the official logo unless a separate decorative campaign asset explicitly calls for it.

Logo clear space: keep at least 0.25× the logo mark width around the complete lockup.
For very small usage, prefer the LR monogram rather than the complete wordmark.

## 7. Typography
Recommended web and digital pairing:
- Headings: **Manrope**, weights 700–800
- Body/UI: **Inter**, weights 400–600
- Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`

Suggested scale:
- H1: `clamp(2.5rem, 5vw, 4rem)`, line-height 1.05–1.12
- H2: `clamp(2rem, 4vw, 3rem)`, line-height 1.12
- H3: `1.5rem–1.75rem`
- Lead text: `1.125rem`, line-height 1.65
- Body: `1rem`, line-height 1.65
- Small/meta: `0.875rem`, line-height 1.5

Headings: Primary `#1B242A`.
Body: Primary for important text, Secondary for supportive text.
Avoid thin font weights.

## 8. Layout system
- Desktop content max-width: 1200–1280 px.
- Use a 12-column grid for desktop layouts.
- Base spacing unit: 8 px.
- Common spacing: 8, 16, 24, 32, 48, 64, 96 px.
- Card radius: 16 px.
- Button radius: 10–12 px.
- Small chips: 999 px only for pill elements.
- Standard border: 1 px solid `#DDE5E5`.
- Standard shadow: `0 12px 32px rgba(27, 36, 42, 0.08)`.
- Hover shadow: `0 16px 40px rgba(27, 36, 42, 0.12)`.

Do not over-round every element. Use rounded cards, but keep the overall visual language technical and structured.

## 9. Website visual language

### Header
Light/white header with dark logo and turquoise active navigation indicator.
Sticky header is acceptable, but keep it compact.
Primary CTA in turquoise.

### Hero
Preferred structure:
- Strong dark headline.
- One or two words may be highlighted with turquoise.
- Supporting copy in Secondary.
- Turquoise primary CTA with dark text.
- Secondary CTA as outline/text button.
- Visual: real software/IT/workspace imagery, product UI, code, devices, or abstract technical graphics.

### Cards
- Background: white.
- Border: `#DDE5E5`.
- Heading: Primary.
- Copy: Secondary.
- Icon: Turquoise or Primary.
- Hover: modest elevation + optional turquoise top/side accent.
Do not fill all cards with turquoise.

### Dark sections
Use `#1B242A` as background.
Text: `#F3FAFA`.
Muted text: `#B7C5C9`.
Accent: `#2CCFC8`.
Dark sections are ideal for CTA, technology lists, testimonials, footer, or closing sections.

### Links
Normal textual link on light background: `#1B7E7A`.
Hover: `#156360`.
Do not use raw `#2CCFC8` for body-size text on white.

### Forms
- White surface.
- Border `#DDE5E5`.
- Focus ring: `0 0 0 3px rgba(44, 207, 200, 0.20)`.
- Focus border: `#2CCFC8`.
- Labels: Primary.
- Placeholder: Secondary at reduced opacity.

## 10. Buttons

### Primary
- BG: `#2CCFC8`
- Text: `#1B242A`
- Hover: `#27B6B0`
- Active: `#219B96`
- Border: none

### Secondary
- BG: transparent or white
- Text: `#1B242A`
- Border: `#D0D8D9`
- Hover BG: `#EEFBFB`

### Dark-context button
- BG: `#2CCFC8`
- Text: `#1B242A`
- Hover: `#61DBD6`

Minimum target size: 44×44 px.

## 11. Decorative graphics
Preferred:
- Thin turquoise lines.
- Small dot grids.
- Subtle wave or network patterns.
- Turquoise glow only as a very soft background decoration.
- Abstract technical geometry.
- 1–2 px line icons.

Optional decorative gradient for non-logo graphics:
`linear-gradient(135deg, #2CCFC8 0%, #1B9E99 100%)`

Do not use rainbow gradients, bright purple/blue competing accents, heavy glassmorphism, or cyberpunk neon styling.

## 12. Photography / imagery
Use:
- Clean modern workspaces.
- Real laptops, monitors, code, infrastructure, devices, hardware.
- Neutral/cool color grading.
- White, gray, charcoal, natural wood.
- Plants are acceptable but should not become a competing green brand color.

Avoid:
- Generic handshake stock photos.
- Oversaturated cyan/blue imagery.
- Busy backgrounds behind text.
- Fake “hacker” neon imagery.

## 13. Icons
- Prefer one icon family across the whole system.
- Line icons, 1.75–2 px stroke.
- Default: `#1B242A`.
- Accent icons: `#2CCFC8`.
- On dark surfaces: white or turquoise.
- Do not mix filled, outline, 3D, and emoji icon styles.

## 14. Business cards
Recommended EU/CZ format: 90 × 50 mm.
- Bleed: 3 mm.
- Safe area: minimum 4 mm.
- 300 DPI for raster assets.
- Prefer vector logo.

Front option:
- Background `#1B242A`.
- Reversed logo in white + turquoise.
- Minimal tagline or service statement.

Back option:
- Background `#FFFFFF` or `#F3FAFA`.
- Name/title in Primary.
- Contact details in Secondary.
- Icons/short divider in Turquoise.

Do not make the entire card turquoise.

## 15. Email signature
Email signatures must prioritize compatibility over visual effects.
- Max width: 560–600 px.
- Use HTML tables and inline CSS.
- Do not rely on webfonts.
- Avoid CSS backgrounds and complex positioning.
- Use PNG logo for maximum Outlook compatibility; keep SVG for web/print.
- Logo width: approx. 120–150 px.
- Main text: `#1B242A`.
- Secondary info: `#5C7078`.
- Icons / divider: `#2CCFC8`.
- No turquoise body text.
- Avoid oversized banners, animations, and background images.

## 16. Social / marketing templates
Recommended base sizes:
- Square: 1080 × 1080 px.
- Portrait social: 1080 × 1350 px.
- Link/Facebook/LinkedIn: 1200 × 628 px.
- Story: 1080 × 1920 px.

Use dark or light backgrounds with one turquoise focal point.
Keep logo away from edges and preserve clear space.
Prefer short headlines, large typography, and one visual message per asset.

## 17. Favicon / app icon
Use the LR monogram only.
Prepare:
- favicon.ico: 16, 32, 48 px
- Apple touch: 180 × 180 px
- PWA: 192 × 192 and 512 × 512 px

Preferred:
- Transparent or `#1B242A` background.
- Monogram in white + turquoise.
At tiny sizes remove fine wordmark text.

## 18. Optional dark mode
- Page BG: `#12191D`
- Surface: `#1B242A`
- Elevated surface: `#2D363B`
- Main text: `#F3FAFA`
- Secondary text: `#B7C5C9`
- Accent: `#2CCFC8`
- Border: `#3B4348`

Do not simply invert the light theme.

## 19. Functional colors
Functional status colors are separate from the brand palette and must be used only when semantics require them:
- Success: green
- Warning: amber
- Error: red
- Information: blue

Do not repurpose the turquoise brand accent to mean “success” everywhere.

## 20. Agent implementation rules
The agent should treat these rules as non-negotiable:
1. Use the supplied logo asset as the source of truth.
2. Use turquoise as an accent, not a full-page dominant fill.
3. Default content text to `#1B242A`.
4. Use `#2CCFC8` mainly for CTA, icons, active states, diagrams, and decorative accents.
5. Do not use `#2CCFC8` for normal-size text on white/light backgrounds.
6. Preserve generous whitespace.
7. Prefer flat, clean, structured surfaces over glassmorphism.
8. Keep one consistent icon style.
9. Keep animations subtle: 150–250 ms for standard UI, 300–500 ms for larger reveal motion.
10. Respect `prefers-reduced-motion`.
11. Use responsive layouts and accessible focus states.
12. Do not introduce extra brand colors without explicit approval.
