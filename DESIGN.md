---
name: Stavby Nejepsa
description: Prezentační web rodinné stavební firmy — beton, grafit a stavební žlutá, ostré hrany bez stínů
colors:
  zluta: "#f7d048"
  zluta-dark: "#735800"
  grafit: "#111111"
  beton: "#e4e2dd"
  papir: "#ffffff"
  smrk: "#f4f2ed"
  grafika: "#5b5e57"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.15em"
rounded:
  none: "0px"
  full: "9999px"
components:
  button-solid:
    backgroundColor: "{colors.zluta}"
    textColor: "{colors.grafit}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-solid-hover:
    backgroundColor: "{colors.grafit}"
    textColor: "{colors.papir}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.grafit}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.zluta}"
    textColor: "{colors.grafit}"
  button-dark:
    backgroundColor: "{colors.grafit}"
    textColor: "{colors.papir}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-dark-hover:
    backgroundColor: "{colors.zluta}"
    textColor: "{colors.grafit}"
  input-field:
    backgroundColor: "{colors.papir}"
    textColor: "{colors.grafit}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Stavby Nejepsa

## Overview

**Creative North Star: "Stavba podle výkresu"**

Web se chová jako technický výkres položený na stavební materiály. Barvy nejsou dekorace, ale materiály: beton jako podklad stránky, papír jako karty a formuláře, grafit jako text a tmavé sekce, stavební žlutá jako značení akce. Obrysové display titulky přes fotografie jsou čáry z výkresu, číslované karty a tabulární číslice jsou položky z rozpočtu. Všechno sedí na přesném rastru, nic se nevznáší — žádné stíny, žádné zaoblení, žádná výplň navíc.

Tón je poctivý, přímý a pracovní, zároveň sebevědomý, ostrý a moderní. Hierarchii nesou velké tučné titulky Poppins se záporným prostrkáním a fotografie realizací přes celou šířku; drobné verzálkové štítky s širokým prostrkáním fungují jako razítka na výkresu. Interakce jsou pevné a přímé: celá plocha prvku je klikací a při hoveru kontrastně přepne barvy (žlutá ↔ grafit), šipka → se posune. Žádné jemné přechody průhlednosti, žádné nadnášení.

Vizuální anti-reference (potvrzeno): generická korporátní stavební šablona (modrá/šedá, stock fotky, kulaté karty) a přeplácanost (badge, ikonkové gridy, carousely s tečkami, dekorativní ilustrace).

**Key Characteristics:**
- Materiálová paleta: beton, papír, grafit, smrk — a stavební žlutá jen pro akci a zvýraznění
- Striktně plochý systém: nulové stíny, hloubka jen vrstvením barevných ploch a fotografií
- Ostré hrany všude; jediná výjimka jsou kruhová ikonová tlačítka
- Obrysové display titulky (2px stroke) přes fotografie
- Celá plocha prvku reaguje na hover kontrastním přepnutím barev
- Šipka → jako jednotný ukazatel akce, verzálkové štítky s prostrkáním jako razítka

## Colors

Paleta jsou materiály ze stavby: teplé neutrály podkladu, grafitový text a jedna signální žlutá.

### Primary
- **Stavební žlutá** (`zluta`, #f7d048): žlutá jeřábů a strojní techniky. Značí akci a klíčovou informaci: CTA tlačítka, štítky realizací, podtrhávací lišty (4px), levé linky seznamů (2px), akcent v logu a sekční štítky na tmavém podkladu. Na žluté ploše je vždy grafitový text.
- **Okrová** (`zluta-dark`, #735800): žlutý akcent přeložený do textu na světlém pozadí — hover odkazů v menu, titulky outline karet. Existuje kvůli kontrastu ≥ 4,5:1; čistá žlutá jako text na betonu/papíru je nečitelná.

### Neutral
- **Grafit** (`grafit`, #111111): hlavní text, tmavé sekce (patička, CTA pás), hover plocha tlačítek, gradientní ztmavení fotografií (grafit/60 → transparent).
- **Beton** (`beton`, #e4e2dd): hlavní pozadí stránky (`body`), barva `theme-color` prohlížeče.
- **Papír** (`papir`, #ffffff): karty, formuláře, menu panel, tlačítko Menu; text a obrysy na tmavém podkladu (s průhlednostmi /80, /70, /50 pro sekundární text v patičce).
- **Smrk** (`smrk`, #f4f2ed): světlé alternativní pozadí sekcí pro odlišení od betonu.
- **Grafika** (`grafika`, #5b5e57): sekundární text a popisky na světlém podkladu (lokalita · rok, meta údaje, pomocné texty formulářů).

### Named Rules
**Pravidlo černé na žluté.** Na žluté ploše je vždy grafitový text, nikdy bílý. Žlutá jako text smí jen na grafit nebo fotografii; na světlém podkladu ji vždy nahrazuje okrová (#735800).

**Pravidlo značení.** Žlutá značí akci nebo klíčovou informaci (CTA, štítek, linka, akcent) — nikdy není výplňové pozadí celé sekce.

## Typography

**Display Font:** Poppins (s fallbackem ui-sans-serif, system-ui)
**Body Font:** Poppins — jediné písmo celého webu, self-hosted přes Fontsource ve vahách 400/500/600/700

**Character:** Geometrický grotesk s technickým, sebevědomým výrazem. Velké titulky jsou tučné a těsné (záporné prostrkání, line-height ~1), drobné štítky verzálkové s širokým prostrkáním — kontrast výkresové přesnosti a razítka.

### Hierarchy
- **Display** (700, clamp(2.75rem, 7vw, 6rem), 1.02, -0.02em): H1 stránek a hero titulky. Přes fotografii se celý nebo zčásti sází obrysově (`text-outline-papir`).
- **Headline** (700, clamp(2rem, 4.5vw, 3.5rem), 1.08, -0.01em): H2 sekcí (token `text-h2`).
- **Title** (1.75rem, 1.25): token `text-h3` — tučně (700) jako titulek bloku, ve váze 500 jako zvýrazněný lead odstavec pod hero.
- **Body** (400, 1.125rem, 1.6): běžný text (token `text-body`); delší texty drží šířku přes `max-w-xl`/`max-w-3xl`.
- **Label** (600, 0.75rem, 0.15em, VERZÁLKY): štítky, popisky formulářů, meta údaje. Prostrkání se odstupňovává kontextem: 0.1–0.12em na tlačítkách a štítcích (text-sm), 0.15em na popiscích, 0.2em na sekčních štítcích.

### Named Rules
**Pravidlo obrysu.** Obrysový titulek (průhledná výplň, 2px stroke papír/grafit) patří výhradně na display velikost přes fotografii; na plném barevném podkladu se nepoužívá.

**Pravidlo tabulárních číslic.** Pořadová čísla (karty, štítky realizací) se sází ve váze 300–400 s `tabular-nums`, vždy světlejší než titulek vedle nich.

## Layout

Obsah drží centrovaný kontejner `max-w-7xl` (80 rem) s okraji 20px na mobilu a 32px od `lg`. Fotografie a tmavé pásy jdou na plnou šířku okna; hero sekce na plnou výšku (`min-h-svh` na homepage, `min-h-[85svh]` na detailech) s fotkou přes celou plochu, grafitovým gradientem a obsahem zarovnaným k dolní hraně.

Rytmus sekcí je velkorysý: vertikální odstupy 64–96px (`py-16` až `py-24`), uvnitř sekcí mezery 40–56px. Mřížky jsou mobile-first: jeden sloupec na mobilu, přepínají se převážně na `lg` (1024px) do dvou sloupců (text + obsah, formulář 1fr/1.2fr) nebo čtyř (patička, servisní karty na hero). Hlavní zlom je `lg`; `sm`/`md` řeší jen mezikroky (2→4 sloupce karet).

Hlavička je fixní a minimální: logo vlevo, tlačítko „Menu" vpravo jako papírový blok; navigace je overlay panel zprava (`max-w-md`, papír) přes grafitové zatmavení. Obsahové stránky odsazují obsah `pt-24`/`pt-28` pod fixní logo; stránky s hero fotkou nechávají header překrýt fotografii.

## Elevation & Depth

Systém je striktně plochý: žádný prvek nemá `box-shadow` a nikdy mít nebude. Hloubku tvoří výhradně vrstvení barevných ploch (papírová karta na betonu, grafitový pás, žlutý štítek na fotce) a fotografie s grafitovým gradientem (od `grafit/60` dolů k průhledné) kvůli čitelnosti textu. Jediné rozostření je funkční `backdrop-blur` kruhového tlačítka Zpět nad fotografií a ztmavení `grafit/60` pod menu overlay — obojí vrstva, ne stín.

### Named Rules
**Pravidlo bez stínů.** Žádné stíny, nikdy. Pokud prvek potřebuje oddělit od podkladu, dostane jinou materiálovou barvu (papír na betonu, grafit na papíru), ne stín.

## Shapes

Tvarová řeč je ostrá a výkresová: všechny plochy (tlačítka, karty, inputy, štítky, menu panel) mají nulový rádius. Jedinou povolenou křivkou je plný kruh (`rounded-full`) pro ikonová tlačítka — 44px kruh tlačítka Zpět nad fotografií.

Linky jsou tenké a přesné: 1px obrysy (outline tlačítko `border-grafit`, inputy `border-grafit/20`), 2px žluté levé linky u seznamů kontaktů a bulletů (`border-l-2 border-zluta`), 4px žlutá podtrhávací lišta u servisních karet na hero (`h-1 bg-zluta`), 2px stroke obrysových titulků. Fotografie se ořezávají tvrdě (`overflow-hidden`) bez rámečků.

## Components

Chování komponent je pevné a přímé: celá plocha je klikací, hover kontrastně přepne barvy celé plochy (žlutá ↔ grafit, papír ↔ grafit) za 200ms a šipka → se posune o 4–6px doprava. Žádné nadzvedávání, žádné změny průhlednosti.

### Buttons
- **Shape:** ostré rohy (0px), verzálky, prostrkání 0.12em, váha 600, text-sm (0.875rem)
- **Solid (primární):** stavební žlutá plocha, grafitový text, padding 14px 28px; hover → grafitová plocha, papírový text
- **Dark:** grafitová plocha, papírový text; hover → žlutá plocha, grafitový text (pro světlé podklady vedle solid variant)
- **Outline:** 1px grafitový obrys, průhledné pozadí; hover → žlutá výplň i obrys
- **Šipka:** volitelný sufix `→` (gap 12px); u velkých CTA bloků se při hoveru posouvá `translate-x-1.5`
- **Focus:** výchozí focus ring prohlížeče (zatím bez vlastního stylu)

### Chips / Labels
- **Sekční štítek (SectionLabel):** text-xs, váha 600, VERZÁLKY, prostrkání 0.2em; žlutý na grafitu a fotografiích, na světlém podkladu patří okrová (#735800)
- **Meta údaje** (lokalita · rok): text-xs, váha 500, verzálky, prostrkání 0.15em, barva grafika

### Cards / Containers
- **Corner Style:** ostré rohy (0px)
- **Background:** papír na betonu (výchozí), žlutá (zvýrazněná), průhledná s 1px grafitovým obrysem (outline)
- **Shadow Strategy:** žádné stíny (Pravidlo bez stínů)
- **Internal Padding:** 28px (`p-7`)
- **Číslovaná karta (NumberedCard):** velké pořadové číslo (text-3xl, váha 300, tabular-nums), titulek text-xl tučně, text text-sm s opacity 80 %, šipka → přišpendlená k dolní hraně přes `mt-auto`; hover přepne celou kartu do grafitu s papírovým textem

### Inputs / Fields
- **Style:** papírové pozadí, 1px obrys `grafit/20`, ostré rohy, padding 12px 16px, text-body; popisek nad polem ve stylu Label (text-xs, 600, verzálky, 0.15em)
- **Focus:** obrys ztmavne na plný grafit (`focus:border-grafit`), bez outline
- **Formulář:** sedí na papírové ploše (p-8 až p-10) položené na betonu

### Navigation
- **Hlavička:** fixní, bez podkladového pruhu — logo (verzálky, tučně, dvouřádkové) vlevo, na fotce papírové s žlutým akcentem, na betonu celé grafitové; tlačítko „Menu" vpravo jako papírový blok (padding 24px/20px) s třemi linkami, hover → žlutá
- **Overlay menu:** papírový panel zprava (max-w-md, 300ms translate), zarovnaný vpravo; skupiny služeb text-2xl tučně s odsazenými podpoložkami (text-base, grafika); hover → okrová; dole CTA tlačítko a sociální odkazy
- **Přechod mezi stránkami:** nativní cross-document View Transitions — nová stránka se položí přes starou ostrým stíracím řezem zdola nahoru (560ms, `cubic-bezier(0.76, 0, 0.24, 1)`), na hraně řezu jede 4px žlutá lišta; navigace zpět v historii stírá shora dolů. Žádné prolínání průhlednosti; při `prefers-reduced-motion` a v prohlížečích bez podpory přechod okamžitý. Styly v `global.css`, směr „zpět" nastavuje skript v `Layout.astro`.
- **Patička:** grafitová, 4 sloupce, papírový text s průhlednostmi (/80 odkazy, /50 popisky), hover → žlutá

### Štítek realizace (signature)
Žlutý štítek přišpendlený k levému dolnímu rohu fotografie (`bottom-0 left-6`): pořadové číslo ve váze 300 + název verzálkami (text-sm, 600, prostrkání 0.1em, padding 12px 20px). Hover celé karty přepne štítek do grafitu s papírovým textem. Je to podpis systému — „popiska na výkresu" připnutá k realizaci.

## Do's and Don'ts

### Do:
- **Do** používej materiálové vrstvení místo stínů: papír na betonu, grafit na papíru, smrk jako alternativní pás.
- **Do** dávej na žlutou plochu vždy grafitový text a žlutý text na světlém podkladu vždy překládej do okrové (#735800); drž kontrast ≥ 4,5:1.
- **Do** nech celou plochu prvku reagovat na hover kontrastním přepnutím barev (žlutá ↔ grafit) za 200ms.
- **Do** sázej akci se šipkou → a štítky verzálkami s prostrkáním 0.1–0.2em.
- **Do** pokládej fotografie na plnou šířku s grafitovým gradientem a obrysovým display titulkem.

### Don't:
- **Don't** nepřidávej stíny, zaoblené rohy (mimo kruhová ikonová tlačítka) ani gradientní dekorace — systém je striktně plochý a ostrý.
- **Don't** nesklouzávej ke generické korporátní stavební šabloně: žádná firemní modrá, stock fotografie ani kulaté karty s ikonkami.
- **Don't** nepřeplácávej: žádné badge, ikonkové gridy, carousely s tečkami ani dekorativní ilustrace; výraz nesou fotografie, typografie a žlutá.
- **Don't** nepoužívej žlutou jako výplňové pozadí celých sekcí ani jako text na betonu či papíru.
- **Don't** nezaváděj druhé písmo ani systémový display font — celý web mluví jen Poppinsem.
