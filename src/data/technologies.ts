// Zrcadlí budoucí Sanity dokument `technology`.

export interface Technology {
  slug: string;
  name: string;
  partner: string;
  description: string;
  usedFor: string;
  category: 'technologie-domu' | 'materialy';
}

export const technologies: Technology[] = [
  {
    slug: 'rekuperace',
    name: 'Rekuperace',
    partner: 'Centrální i decentrální jednotky',
    description:
      'Využitím kombinace centrálních a decentrálních jednotek zajistí systémy rekuperace účinnou regulaci teploty a kvality vzduchu v celé budově. Čerstvý vzduch bez otevírání oken — a bez zbytečných tepelných ztrát.',
    usedFor: 'Novostavby i rekonstrukce',
    category: 'technologie-domu',
  },
  {
    slug: 'podomitkove-boxy',
    name: 'Podomítkové boxy',
    partner: 'Climax · motory Somfy',
    description:
      'Pro žaluzie a rolety používáme podomítkové boxy Climax s motory Somfy. Jsou navrženy tak, aby byla jejich instalace jednoduchá, a zároveň jsou pozoruhodně odolné — vydrží dlouhá léta. Po omítnutí z fasády nic nevyčnívá.',
    usedFor: 'Žaluzie a rolety',
    category: 'technologie-domu',
  },
  {
    slug: 'tepelna-cerpadla',
    name: 'Tepelná čerpadla',
    partner: 'LG — modely typu Split',
    description:
      'Jsme hrdí na to, že nabízíme ta nejlepší řešení v oblasti vytápění. U tepelných čerpadel proto používáme pouze nejnovější jednotky LG, především modely typu Split — úsporný provoz po celý rok.',
    usedFor: 'Vytápění a ohřev vody',
    category: 'technologie-domu',
  },
  {
    slug: 'klimatizace',
    name: 'Klimatizace',
    partner: 'Jednotky LG',
    description:
      'S jednotkami LG, které používáme, se můžete spolehnout na pohodlí v každém ročním období — aniž byste museli obětovat náklady na energie.',
    usedFor: 'Chlazení interiéru',
    category: 'technologie-domu',
  },
  {
    slug: 'fotovoltaika',
    name: 'Fotovoltaika',
    partner: 'Návrh, výpočet a instalace',
    description:
      'Výroba čisté a obnovitelné energie se stala nedílnou součástí moderní domácnosti. Zajistíme výpočet i instalaci fotovoltaických panelů na míru vaší spotřebě — od návrhu po připojení.',
    usedFor: 'Výroba vlastní energie',
    category: 'technologie-domu',
  },
  {
    slug: 'brousene-cihly',
    name: 'Broušené cihelné bloky',
    partner: 'Dodavatel zdiva',
    description:
      'Přesné broušené cihly zděné na tenkovrstvou maltu nebo pěnu. Rychlá a přesná výstavba s výbornými tepelnými parametry.',
    usedFor: 'Zděné rodinné domy',
  },
  {
    slug: 'kvh-bsh',
    name: 'Konstrukční dřevo KVH / BSH',
    partner: 'Dodavatel řeziva',
    description:
      'Certifikované sušené konstrukční dřevo pro dřevostavby, krovy a pohledové konstrukce. Tvarová stálost a garantovaná pevnost.',
    usedFor: 'Dřevostavby, krovy',
  },
  {
    slug: 'pvc-folie',
    name: 'Hydroizolační PVC fólie',
    partner: 'Systémový výrobce',
    description:
      'Fóliové hydroizolace plochých střech s životností přes 30 let. Jsme proškolení aplikátoři s materiálovou zárukou výrobce.',
    usedFor: 'Ploché střechy',
  },
  {
    slug: 'betonova-taska',
    name: 'Betonová střešní krytina',
    partner: 'Výrobce krytin',
    description:
      'Betonové tašky s dlouhou životností a kompletním systémem doplňků — hřebenáče, prostupy, sněhové zábrany.',
    usedFor: 'Šikmé střechy',
  },
  {
    slug: 'etics',
    name: 'Zateplovací systém ETICS',
    partner: 'Systémový výrobce',
    description:
      'Certifikovaný kontaktní zateplovací systém — polystyren nebo minerální vata, systémové lišty a omítky.',
    usedFor: 'Zateplení fasád',
  },
  {
    slug: 'cementovlaknite-desky',
    name: 'Cementovláknité fasádní desky',
    partner: 'Výrobce desek',
    description:
      'Velkoformátové desky pro provětrávané fasády. Odolné, barevně stálé, s minimální údržbou.',
    usedFor: 'Provětrávané fasády',
  },
  {
    slug: 'spadove-kliny',
    name: 'Spádové izolační klíny',
    partner: 'Výrobce izolací',
    description:
      'Spádové vrstvy plochých střech z EPS klínů — nízká hmotnost, přesný spád k vpustím bez mokrých procesů.',
    usedFor: 'Ploché střechy',
  },
];

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}
