// Zrcadlí budoucí Sanity dokument `technology`.
// TODO: aktuální seznam technologií a dodavatelů dodá klient.

export interface Technology {
  slug: string;
  name: string;
  partner: string;
  description: string;
  usedFor: string;
}

export const technologies: Technology[] = [
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
