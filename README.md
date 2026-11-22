# Stavby Nejepsa — web

Nový web stavební firmy podle projektového kontextu (`stavby-nejepsa-projekt-kontext.md`).
Design tokeny (barvy, typografie Poppins, komponenty) vychází z dodaného design boardu.

## Stack

- **Astro 5** — plně statický výstup (`output: 'static'`)
- **Tailwind CSS 4** — design tokeny v `src/styles/global.css` (`@theme`)
- **Poppins** self-hosted přes `@fontsource/poppins` (žádný Google Fonts CDN)

## Příkazy

```sh
npm install
npm run dev      # vývojový server
npm run build    # statický build do dist/
npm run preview  # náhled buildu
npm run studio   # Sanity Studio na http://localhost:3333 (poprvé: npm --prefix studio install)
```

## Design tokeny

| Token | Hodnota | Použití |
|---|---|---|
| `beton` | `#e8e6e1` | hlavní pozadí stránky |
| `papir` | `#ffffff` | karty, formuláře, menu |
| `grafit` | `#111111` | text, linky, tmavé sekce |
| `cihla` | `#b84f31` | CTA, akce, hover (kontrast 5,0:1 na bílé) |
| `cihla-dark` | `#a03e20` | hover, textové akcenty na betonu |
| `smrk` | `#f4f2ed` | světlé alternativní pozadí |
| `grafika` | `#5b5e57` | sekundární text, popisky |

Cihlová z boardu (`#C2593B`) má na bílé kontrast jen 4,39:1, proto je pro plochy s bílým
textem ztmavena — přesně podle pokynu v projektovém kontextu (ověřit 4,5:1).

## Struktura obsahu

**Realizace** se spravují v Sanity Studiu (`studio/`, jediný typ dokumentu `project`) a web si je
stahuje při buildu (`src/lib/sanity.ts` → `src/data/projects.ts`). Po publikování změny v Studiu
je proto potřeba nový build webu. Služby, technologie a kontakty zůstávají v `src/data/`.

- Schéma: `studio/schemaTypes/project.ts`. Seznamy kategorií a technologií v něm odpovídají
  `src/data/services.ts` a `src/data/technologies.ts` — při změně upravit na obou místech.
- Fotky: dokud realizace nemá fotku nahranou v Sanity, použije se lokální ze `src/assets/photos`
  (`project-<slug>`, `gallery-<slug>-<n>`).
- Video: `public/videos/<slug>.mp4` (mimo CMS).
- `studio/seed.json` — výchozí obsah; do prázdného projektu se nahraje z `studio/` příkazem
  `npx sanity documents create seed.json --replace`.
- Nasazení Studia: `npm --prefix studio run deploy` → `https://stavby-nejepsa.sanity.studio`.

## Co zbývá (mimo tento základ)

- Webhook Sanity → build na Netlify (automatický build po publikování)
- Skutečné fotografie realizací (nyní placeholdery) a vektorové logo
- Formulář: Netlify Function → Resend/SMTP + zápis do Sanity, Turnstile, rate limit
- `InstagramEmbed` komponenta (iframe + consent gate) — nyní statická sekce
- Anglická verze `/en/*` s lokalizovanými slugy (rozsah dořešit s klientem)
- GTM + GA4 + Consent Mode v2, cookie lišta
- Redirect mapa ze staré Tildy, sitemap, favicony a OG šablona
