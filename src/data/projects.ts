// Zrcadlí budoucí Sanity dokument `project` (realizace).
// Fotografie dodá klient — zatím placeholdery.

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  categories: string[];
  scope: string[];
  technologies: string[]; // slugy z technologies.ts
  featured: boolean;
  description: string;
  galleryCount: number;
  /** Popisky fází výstavby — fotky `gallery-<slug>-1..4` v src/assets/photos */
  stages: [string, string, string, string];
}

export const defaultStages: [string, string, string, string] = [
  'Základy a příprava',
  'Hrubá stavba',
  'Dokončovací práce',
  'Hotová stavba',
];

export const projects: Project[] = [
  {
    slug: 'villa-za-prahou',
    title: 'Villa za Prahou',
    location: 'Praha-východ',
    year: 2024,
    categories: ['rodinne-domy', 'drevostavby'],
    scope: ['Dřevostavba na klíč', 'Plochá střecha', 'Dřevěná fasáda'],
    technologies: ['kvh-bsh', 'pvc-folie'],
    featured: true,
    description:
      'Moderní dřevostavba s plochou střechou a modřínovou provětrávanou fasádou. Kompletní realizace na klíč od základové desky po terénní úpravy.',
    galleryCount: 6,
    stages: ['Základová deska', 'Montáž dřevostavby', 'Fasáda a interiéry', 'Hotová vila'],
  },
  {
    slug: 'rodinny-dum-beroun',
    title: 'Rodinný dům Beroun',
    location: 'Beroun',
    year: 2023,
    categories: ['rodinne-domy', 'zdene-domy'],
    scope: ['Zděný dům na klíč', 'Šikmá střecha', 'Zateplení ETICS'],
    technologies: ['brousene-cihly', 'betonova-taska', 'etics'],
    featured: true,
    description:
      'Zděná novostavba 5+kk z broušených cihelných bloků se sedlovou střechou z betonové krytiny a kontaktním zateplením.',
    galleryCount: 6,
    stages: ['Základy', 'Hrubá stavba zdiva', 'Střecha a omítky', 'Hotový dům'],
  },
  {
    slug: 'rekonstrukce-bytu-vinohrady',
    title: 'Rekonstrukce bytu Vinohrady',
    location: 'Praha 2',
    year: 2024,
    categories: ['rekonstrukce'],
    scope: ['Kompletní rekonstrukce', 'Dispoziční změny', 'Nové rozvody'],
    technologies: [],
    featured: true,
    description:
      'Kompletní rekonstrukce bytu 4+1 v činžovním domě — nové dispozice, rozvody, podlahy, koupelny i truhlářské prvky na míru.',
    galleryCount: 5,
    stages: ['Bourací práce', 'Nové rozvody a příčky', 'Povrchy a podlahy', 'Hotový byt'],
  },
  {
    slug: 'plocha-strecha-kladno',
    title: 'Plochá střecha bytového domu',
    location: 'Kladno',
    year: 2023,
    categories: ['strechy', 'ploche-strechy'],
    scope: ['Nová skladba ploché střechy', 'Zateplení', 'PVC fólie'],
    technologies: ['pvc-folie', 'spadove-kliny'],
    featured: false,
    description:
      'Rekonstrukce ploché střechy bytového domu — nová spádová vrstva, zateplení a hydroizolace z PVC fólie včetně odvodnění.',
    galleryCount: 4,
    stages: ['Demontáž staré skladby', 'Spádové klíny a izolace', 'Pokládka PVC fólie', 'Hotová střecha'],
  },
  {
    slug: 'sikma-strecha-dobris',
    title: 'Šikmá střecha RD Dobříš',
    location: 'Dobříš',
    year: 2022,
    categories: ['strechy', 'sikme-strechy'],
    scope: ['Nový krov', 'Betonová krytina', 'Klempířské prvky'],
    technologies: ['betonova-taska', 'kvh-bsh'],
    featured: false,
    description:
      'Výměna krovu a kompletní nová střecha rodinného domu — betonová krytina, nadkrokevní izolace a klempířské prvky z titanzinku.',
    galleryCount: 4,
    stages: ['Demontáž a krov', 'Fólie a laťování', 'Pokládka krytiny', 'Hotová střecha'],
  },
  {
    slug: 'zatepleni-pribram',
    title: 'Zateplení RD Příbram',
    location: 'Příbram',
    year: 2024,
    categories: ['fasady', 'zatepleni'],
    scope: ['Zateplení ETICS', 'Silikonová omítka', 'Nový sokl'],
    technologies: ['etics'],
    featured: false,
    description:
      'Kontaktní zateplení rodinného domu šedým polystyrenem se silikonovou omítkou, včetně soklu a nových parapetů.',
    galleryCount: 4,
    stages: ['Založení systému', 'Lepení izolantu', 'Stěrka a omítka', 'Hotová fasáda'],
  },
  {
    slug: 'provetravana-fasada-admin',
    title: 'Provětrávaná fasáda administrativní budovy',
    location: 'Praha-západ',
    year: 2023,
    categories: ['fasady', 'provetravane-fasady'],
    scope: ['Provětrávaná fasáda', 'Cementovláknité desky', 'Hliníkový rošt'],
    technologies: ['cementovlaknite-desky'],
    featured: false,
    description:
      'Opláštění administrativní budovy provětrávanou fasádou z cementovláknitých desek na hliníkovém roštu.',
    galleryCount: 5,
    stages: ['Nosný rošt', 'Izolace a fólie', 'Montáž desek', 'Hotová fasáda'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function projectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}
