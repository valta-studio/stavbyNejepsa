# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primárně soukromí majitelé domů a bytů (Praha a Středočeský kraj), kteří plánují novostavbu, rekonstrukci nebo opravu/realizaci střechy. Hledají spolehlivou stavební firmu, chtějí si ověřit kvalitu podle hotových realizací a rychle najít přímý kontakt pro nezávaznou poptávku.

## Product Purpose

Prezentační web stavební firmy Stavby Nejepsa s.r.o. (nahrazuje původní web www.stavbynejepsa.cz). Úkolem webu je představit služby a realizace, vybudovat důvěru a přivést návštěvníka k poptávce (formulář `/poptavka`, telefon, e-mail). Úspěch = odeslané poptávky a telefonáty.

## Positioning

Potvrzeno uživatelem (výběr z možností):

- **Komplexnost od A do Z** — kompletní realizace staveb, rekonstrukce i střechy pod jednou firmou.
- **Rodinná firma, osobní přístup** — jednatel Jaroslav Nejepsa je přímo kontaktní osoba.
- **Kvalita doložená realizacemi** — reference a fotodokumentace hotových projektů jsou hlavní důkazní materiál.

## Operating Context

Zákazník typicky porovnává více stavebních firem, prohlíží realizace a reference na mobilu i desktopu, a poptává nezávazně telefonem nebo formulářem. Firma je aktivní na Instagramu a Facebooku (odkazy v patičce).

## Capabilities and Constraints

- Plně statický web: Astro 5 (`output: 'static'`), Tailwind CSS 4, Poppins self-hosted přes `@fontsource/poppins` (žádné CDN fonty).
- Data v `src/data/` (service, project, technology) zrcadlí budoucí Sanity content model — při napojení CMS se mění jen zdroj dat, komponenty zůstávají.
- Jazyk webu: čeština.
- Otevřené body: odkaz na Google Business Profile (TODO v `src/data/site.ts`), pozice Marka Beňa (na původním webu neuvedena).

## Brand Commitments

- Název: Stavby Nejepsa s.r.o. (zkráceně Stavby Nejepsa), claim „Kompletní realizace staveb, rekonstrukce a střechy".
- Design tokeny vychází z dodaného design boardu (barvy beton/papír/grafit/cihla/smrk/grafika, typografie Poppins) — viz README.md. Cihlová z boardu byla ztmavena na `#b84f31` kvůli kontrastu 4,5:1, dle pokynu projektového kontextu.
- Hlavní akcentní barva aktuálně žlutá dle poslední iterace (commit „Žlutá hlavní barva").

## Evidence on Hand

- Skutečné kontakty a identifikace firmy: IČO 18013392, DIČ CZ18013392, adresa Ke Strouze 118, Vonoklasy; kontakty Jaroslav Nejepsa (jednatel) a Marek Beňo — převzato z původního webu (`src/data/site.ts`).
- Sociální sítě: Instagram `stavby_nejepsa_sro`, Facebook `StavbyNejepsa`.
- Fotky v `src/assets/photos/` jsou **mix**: část skutečné realizace, část placeholdery, které klient později nahradí. Budoucí práce nesmí placeholdery vydávat za doložené reference ani vymýšlet nové „realizace", testimonials či čísla.

## Product Principles

1. Důvěra se staví na doložitelném: skutečné realizace, skuteční lidé, skutečné kontakty — nic nevymýšlet.
2. Každá stránka vede k poptávce: telefon a formulář musí být vždy na dosah.
3. Obsah je připraven na CMS: data oddělená od komponent, žádný obsah natvrdo v šablonách.
4. Web slouží domácnostem: srozumitelná čeština bez stavařského žargonu, mobil na prvním místě.

## Accessibility & Inclusion

Barevný kontrast textu minimálně 4,5:1 (WCAG AA) — již vynuceno úpravou cihlové barvy; držet i u dalších barevných změn.
