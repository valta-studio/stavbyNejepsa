// Zrcadlí budoucí Sanity dokument `service` — při napojení CMS se vymění jen zdroj dat.

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  path: string;
  title: string;
  menuTitle: string;
  label: string;
  lead: string;
  description: string[];
  bullets: string[];
  faq: Faq[];
  category: string;
  children?: string[];
  parent?: string;
}

export const services: Service[] = [
  {
    slug: 'rodinne-domy-na-klic',
    path: '/rodinne-domy-na-klic',
    title: 'Rodinné domy na klíč',
    menuTitle: 'Domy na klíč',
    label: 'Novostavby',
    lead: 'Zděné domy i dřevostavby od základové desky po předání klíčů. Stavbu převezmeme kompletně na klíč, nebo jako subdodavatel s plnou odpovědností za svou část.',
    description: [
      'Jsme rodinná stavební firma. Ke každé stavbě přistupujeme, jako bychom ji stavěli pro sebe — od prvních výkopů po finální úklid staveniště.',
      'Koordinujeme všechny profese, hlídáme rozpočet i termíny a průběžně vás informujeme o postupu prací.',
    ],
    bullets: [
      'Kompletní realizace od základů po dokončení',
      'Zděné domy i dřevostavby',
      'Pevný rozpočet a harmonogram před zahájením',
      'Jeden odpovědný stavbyvedoucí po celou dobu stavby',
    ],
    faq: [
      {
        q: 'Jak dlouho trvá stavba rodinného domu na klíč?',
        a: 'Zděný dům obvykle 10–14 měsíců, dřevostavba 6–9 měsíců od předání stavebního povolení. Přesný harmonogram dostanete před podpisem smlouvy.',
      },
      {
        q: 'Stavíte i podle vlastního projektu klienta?',
        a: 'Ano. Nejčastěji stavíme podle projektu, který si klient přinese. Projekt umíme zajistit i ve spolupráci s partnerskými projektanty.',
      },
      {
        q: 'Co znamená „na klíč“?',
        a: 'Předáváme dům připravený k nastěhování — včetně rozvodů, povrchů, obkladů a kompletace. Rozsah si přesně definujeme ve smlouvě o dílo.',
      },
    ],
    category: 'rodinne-domy',
    children: ['drevostavby', 'zdene-domy'],
  },
  {
    slug: 'drevostavby',
    path: '/rodinne-domy-na-klic/drevostavby',
    title: 'Dřevostavby',
    menuTitle: 'Dřevostavby',
    label: 'Rodinné domy na klíč',
    lead: 'Moderní difúzně otevřené i uzavřené konstrukce. Rychlá výstavba, výborné tepelné vlastnosti a zdravé vnitřní prostředí.',
    description: [
      'Dřevostavby realizujeme vlastní partou tesařů. Konstrukce stavíme systémem two-by-four i z připravených panelů podle projektu.',
      'Dřevo používáme i na pohledové konstrukce, přístřešky, pergoly a dřevěné fasády.',
    ],
    bullets: [
      'Výstavba hrubé stavby v řádu týdnů',
      'Certifikované konstrukční dřevo KVH/BSH',
      'Difúzně otevřené skladby stěn',
      'Vlastní tesařská parta',
    ],
    faq: [
      {
        q: 'Jaká je životnost dřevostavby?',
        a: 'Při správném návrhu a provedení detailů je srovnatelná se zděným domem — více než 100 let.',
      },
      {
        q: 'Je dřevostavba levnější než zděný dům?',
        a: 'Cenově vychází podobně, hlavní úspora je v rychlosti výstavby a nižších provozních nákladech.',
      },
    ],
    category: 'drevostavby',
    parent: 'rodinne-domy-na-klic',
  },
  {
    slug: 'zdene-domy',
    path: '/rodinne-domy-na-klic/zdene-domy',
    title: 'Zděné domy',
    menuTitle: 'Zděné domy',
    label: 'Rodinné domy na klíč',
    lead: 'Klasická zděná výstavba z cihelných bloků a pórobetonu. Ověřené technologie, dlouhá životnost a akumulace tepla.',
    description: [
      'Zdíme z broušených cihelných bloků i pórobetonu podle projektu. Hrubou stavbu i kompletní dokončení zajišťujeme vlastními lidmi.',
    ],
    bullets: [
      'Broušené cihly, pórobeton i ztracené bednění',
      'Monolitické stropy i skládané systémy',
      'Kompletní dokončení včetně profesí',
    ],
    faq: [
      {
        q: 'Z jakých materiálů stavíte?',
        a: 'Nejčastěji z broušených cihelných bloků a pórobetonu. Materiál doporučíme podle projektu a rozpočtu.',
      },
    ],
    category: 'zdene-domy',
    parent: 'rodinne-domy-na-klic',
  },
  {
    slug: 'rekonstrukce',
    path: '/rekonstrukce',
    title: 'Rekonstrukce domů a bytů',
    menuTitle: 'Rekonstrukce',
    label: 'Rekonstrukce',
    lead: 'Kompletní rekonstrukce rodinných domů a bytů včetně koordinace všech profesí. Od bourání po finální úklid.',
    description: [
      'Rekonstrukce řídíme tak, abyste se o nic nemuseli starat — elektřinu, vodu, topení, podlahy i povrchy koordinuje náš stavbyvedoucí.',
      'Před zahájením dostanete položkový rozpočet a harmonogram. Změny odsouhlasíme vždy předem.',
    ],
    bullets: [
      'Kompletní rekonstrukce bytů a domů',
      'Koordinace všech řemesel pod jednou smlouvou',
      'Položkový rozpočet předem',
      'Zaměření a posouzení stavu zdarma',
    ],
    faq: [
      {
        q: 'Jak dlouho trvá rekonstrukce bytu?',
        a: 'Kompletní rekonstrukce bytu 3+1 obvykle 8–12 týdnů podle rozsahu dispozičních změn.',
      },
      {
        q: 'Zajistíte i vyřízení stavebního povolení?',
        a: 'Ano, ve spolupráci s projektantem zajistíme ohlášku i stavební povolení, pokud je rekonstrukce vyžaduje.',
      },
    ],
    category: 'rekonstrukce',
  },
  {
    slug: 'strechy',
    path: '/strechy',
    title: 'Střechy',
    menuTitle: 'Střechy',
    label: 'Střechy',
    lead: 'Ploché i šikmé střechy — novostavby i rekonstrukce. Kompletně včetně klempířských prvků, izolací a odvodnění.',
    description: [
      'Střechy jsou naše silná disciplína. Realizujeme je vlastními lidmi, bez přeprodávání subdodávek.',
      'Používáme systémová řešení prověřených výrobců s plnou materiálovou zárukou.',
    ],
    bullets: [
      'Ploché střechy — fólie i asfaltové pásy',
      'Šikmé střechy — tašky, plech, krovy',
      'Klempířské a pokrývačské práce',
      'Zateplení střech a půdní vestavby',
    ],
    faq: [
      {
        q: 'Děláte i opravy a servis střech?',
        a: 'Ano, kromě kompletních realizací zajišťujeme i opravy, revize a pravidelný servis.',
      },
      {
        q: 'Jakou záruku na střechu dostanu?',
        a: 'Standardně 5 let na práci, na materiál běží záruky výrobců systémů (až 30 let).',
      },
    ],
    category: 'strechy',
    children: ['ploche-strechy', 'sikme-strechy'],
  },
  {
    slug: 'ploche-strechy',
    path: '/strechy/ploche-strechy',
    title: 'Ploché střechy',
    menuTitle: 'Ploché střechy',
    label: 'Střechy',
    lead: 'Hydroizolace plochých střech z PVC a TPO fólií i modifikovaných asfaltových pásů. Novostavby, rekonstrukce i havarijní opravy.',
    description: [
      'Plochou střechu navrhneme jako kompletní skladbu — parozábrana, spádová vrstva, izolace, hydroizolace a odvodnění.',
      'Jsme proškolení aplikátoři systémů, které používáme, takže na dílo běží plná materiálová záruka výrobce.',
    ],
    bullets: [
      'PVC a TPO fólie, asfaltové pásy',
      'Spádové klíny a zateplení',
      'Zelené a pochozí střechy',
      'Havarijní opravy a lokalizace zatékání',
    ],
    faq: [
      {
        q: 'Jaká je životnost ploché střechy z fólie?',
        a: 'Kvalitní PVC fólie při správné pokládce vydrží 30 a více let.',
      },
      {
        q: 'Umíte najít místo, kudy zatéká?',
        a: 'Ano, lokalizujeme poruchy a navrhneme opravu — od lokální záplaty po kompletní novou skladbu.',
      },
    ],
    category: 'ploche-strechy',
    parent: 'strechy',
  },
  {
    slug: 'sikme-strechy',
    path: '/strechy/sikme-strechy',
    title: 'Šikmé střechy',
    menuTitle: 'Šikmé střechy',
    label: 'Střechy',
    lead: 'Krovy, krytiny a klempířské prvky pro šikmé střechy. Betonové a pálené tašky, plechové krytiny, kompletní souvrství.',
    description: [
      'Šikmou střechu realizujeme včetně krovu — vlastní tesaři, pokrývači i klempíři pod jednou střechou.',
    ],
    bullets: [
      'Nové krovy i výměny poškozených prvků',
      'Betonové a pálené tašky, plech, šindel',
      'Nadkrokevní i mezikrokevní zateplení',
      'Střešní okna a klempířské prvky',
    ],
    faq: [
      {
        q: 'Vyměníte krytinu bez zásahu do krovu?',
        a: 'Ano, pokud je krov v pořádku. Stav posoudíme při zaměření zdarma.',
      },
    ],
    category: 'sikme-strechy',
    parent: 'strechy',
  },
  {
    slug: 'fasady',
    path: '/fasady',
    title: 'Fasády',
    menuTitle: 'Fasády',
    label: 'Fasády',
    lead: 'Zateplení fasád ETICS i provětrávané fasádní systémy. Kvalitní detaily, prověřené materiály a čistá realizace.',
    description: [
      'Fasáda rozhoduje o tom, jak dům vypadá a kolik stojí jeho provoz. Děláme ji pořádně — od soklu po atiku.',
    ],
    bullets: [
      'Kontaktní zateplení ETICS',
      'Provětrávané fasády — desky, dřevo, plech',
      'Silikonové a minerální omítky',
      'Sanace a nátěry stávajících fasád',
    ],
    faq: [
      {
        q: 'Kolik ušetří zateplení fasády?',
        a: 'U staršího domu běžně 30–50 % nákladů na vytápění, podle výchozího stavu.',
      },
    ],
    category: 'fasady',
    children: ['zatepleni', 'provetravane-fasady'],
  },
  {
    slug: 'zatepleni',
    path: '/fasady/zatepleni',
    title: 'Zateplení fasád ETICS',
    menuTitle: 'Zateplení',
    label: 'Fasády',
    lead: 'Certifikované kontaktní zateplovací systémy ETICS s polystyrenem nebo minerální vatou. Včetně zajištění dotace.',
    description: [
      'Zateplujeme certifikovanými systémy a podle montážních předpisů výrobce — jen tak platí záruka a tepelné parametry z projektu.',
    ],
    bullets: [
      'EPS i minerální vata',
      'Systémové řešení detailů (okna, sokl, atika)',
      'Podklady pro dotaci Nová zelená úsporám',
    ],
    faq: [
      {
        q: 'Polystyren, nebo vata?',
        a: 'Záleží na konstrukci a požární výšce. Doporučení dostanete při zaměření spolu s cenovým srovnáním.',
      },
    ],
    category: 'zatepleni',
    parent: 'fasady',
  },
  {
    slug: 'provetravane-fasady',
    path: '/fasady/provetravane-fasady',
    title: 'Provětrávané fasády',
    menuTitle: 'Provětrávané fasády',
    label: 'Fasády',
    lead: 'Provětrávané fasádní systémy s obkladem z desek, dřeva nebo plechu. Dlouhá životnost a prémiový vzhled.',
    description: [
      'Provětrávaná fasáda odděluje izolaci od obkladu vzduchovou mezerou — konstrukce zůstává suchá a fasáda drží desítky let bez údržby.',
    ],
    bullets: [
      'Cementovláknité a kompaktní desky',
      'Dřevěné obklady — modřín, thermowood',
      'Hliníkové nosné rošty',
    ],
    faq: [
      {
        q: 'V čem je provětrávaná fasáda lepší než ETICS?',
        a: 'Delší životnost, odolnost proti mechanickému poškození a prémiový vzhled. Je ale dražší na pořízení.',
      },
    ],
    category: 'provetravane-fasady',
    parent: 'fasady',
  },
];

export const mainServices = services.filter((s) => !s.parent);

export function getService(slug: string): Service {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Service not found: ${slug}`);
  return s;
}
