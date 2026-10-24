# Espai Estudi — website

Astro + Tailwind CSS v4. Design system from `../docs/BRAND.md`, copy from `../docs/copy/`.
Homepage available in Catalan (`/`), Spanish (`/es/`) and English (`/en/`).

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| Path | What |
|------|------|
| `src/styles/global.css` | Design tokens (`@theme`), fonts, base type, `.btn`, `.label`, reveal animation |
| `src/i18n/ca.ts` · `es.ts` · `en.ts` | All text and contact details per language (same shape; `es`/`en` are type-checked against `ca`) |
| `src/i18n/index.ts` | `getT(Astro.currentLocale)` returns the right dictionary; language list and home URLs |
| `src/data/media.ts` | Which photo goes where |
| `src/assets/photos/` | Source photos (optimised and resized at build time by `astro:assets`) |
| `src/components/home/HomePage.astro` | Homepage, shared by `src/pages/index.astro`, `es/index.astro`, `en/index.astro` |
| `src/components/BeforeAfter.astro` | Draggable before/after comparison |
| `src/components/Photo.astro` | Photo with gradient fallback when no image exists yet |

## Fonts

The brand font is **Gopher** (commercial). The site uses **Outfit** (free) as a stand-in; the CSS stacks already
list Gopher first. To switch, load a licensed Gopher webfont (self-hosted `@font-face` or an Adobe Fonts kit link in
`BaseLayout.astro`). Nothing else needs to change.

## Placeholders still to replace

- `[brackets]` in the i18n files: phone, WhatsApp number, email, address, figures, warranty years
- **Photos:** the current three (Caydence Photography) are sample images, not Espai Estudi projects. Replace them with the studio's own photos before launch, plus "before" photos for the comparison slider
- The three example projects (titles and specs are format examples)
- Logo: text wordmark until the real logo arrives
- Testimonials: `home.testimonials` is empty, so the section stays hidden
