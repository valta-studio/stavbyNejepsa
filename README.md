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

Data v `src/data/` zrcadlí budoucí Sanity content model (`service`, `project`, `technology`,
`branch`) — při napojení CMS se vymění jen zdroj dat, komponenty zůstávají.

## Co zbývá (mimo tento základ)

- Napojení Sanity CMS + webhook deploye na Netlify
- Skutečné fotografie realizací (nyní placeholdery) a vektorové logo
- Formulář: Netlify Function → Resend/SMTP + zápis do Sanity, Turnstile, rate limit
- `InstagramEmbed` komponenta (iframe + consent gate) — nyní statická sekce
- Anglická verze `/en/*` s lokalizovanými slugy (rozsah dořešit s klientem)
- GTM + GA4 + Consent Mode v2, cookie lišta
- Redirect mapa ze staré Tildy, sitemap, favicony a OG šablona
