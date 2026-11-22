// Zrcadlí budoucí Sanity dokument `service` — při napojení CMS se vymění jen zdroj dat.

export interface Faq {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  text: string[];
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
  /** Volitelný postup realizace — číslované kroky na stránce služby */
  processTitle?: string;
  highlightsLabel?: string;
  highlightsTitle?: string;
  highlights?: string[];
  process?: ProcessStep[];
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
      'Nejpoužívanějším typem dřevostavby, především v oblasti rodinných domů, je dřevostavba rámová — systém Two By Four. Hlavním důvodem vzniku systému a jeho rychlého rozvoje byla automatizace výroby hřebíků, které se do té doby vyráběly ručním kováním. Prudký cenový pokles spojovacích prostředků znamenal masivní nárůst jejich používání.',
      'Rozměry sloupků jsou dnes ovlivněny zejména tepelně technickými a statickými požadavky (v USA se proto u obvodových stěn setkáte spíše s průřezem two by six). Koordinační modul dřevostavby (rastr) je převážně 625 nebo 417 mm kvůli navazujícím rozměrům velkoplošných materiálů.',
      'Celá výstavba systémem Two By Four se odehrává přímo na staveništi (letmá montáž). Materiál navážíme podle aktuální potřeby a co nejrychleji ho zpracováváme.',
      'Dřevostavby realizujeme vlastní partou tesařů. Konstrukce stavíme systémem Two By Four i z připravených panelů podle projektu. Dřevo používáme i na pohledové konstrukce, přístřešky, pergoly a dřevěné fasády.',
    ],
    bullets: [
      'Přímý dohled při samotné montáži',
      'Možnost úprav stavby i v průběhu výstavby',
      'Založení na desce, pásech i pilotách — vhodné i pro oblasti s radonem',
      'Bez těžké techniky — stavíme i tam, kam se nedostane jeřáb ani kamion',
      'Difúzně otevřené i uzavřené skladby stěn',
      'Certifikované konstrukční dřevo KVH/BSH',
      'Vlastní tesařská parta',
    ],
    processTitle: 'Postup výstavby systémem Two By Four',
    process: [
      {
        title: 'Hydroizolace a spodní práh',
        text: [
          'Na základovou desku položíme vrstvy hydroizolace. Dřevěný materiál je naimpregnován, zejména spodní práh obvodových stěn.',
          'Práh umístíme v místě budoucí obvodové stěny či příčky pomocí závitových tyčí a chemické kotvy a vyrovnáme ho do roviny.',
        ],
      },
      {
        title: 'Nosný rám',
        text: [
          'K prahu pomocí spojovacích prostředků v pravidelném rastru kotvíme sloupky, na které z horní části nasedá pásnice.',
        ],
      },
      {
        title: 'Zavětrování',
        text: [
          'Rám dřevostavby zavětrujeme úhlopříčným uložením z vnější strany obvodových stěn — nejprve pomocí prken.',
          'Po vytvoření kompaktního obvodového rámového systému diagonály nahradíme velkoplošným konstrukčním materiálem ze sádrovláknitých desek.',
        ],
      },
      {
        title: 'Strop a střecha',
        text: [
          'Na horní pásnici uložíme stropní nosník a stejným způsobem pokračujeme dalším podlažím.',
          'Případně zde rovnou uložíme střešní konstrukci, například příhradového typu, kterou zaizolujeme a zastřešíme.',
        ],
      },
      {
        title: 'Tepelná izolace',
        text: [
          'Prostor mezi sloupky vyplníme tepelnou izolací a z vnější strany domu provedeme kontaktní zateplovací systém.',
        ],
      },
      {
        title: 'Vnitřní vrstvy',
        text: [
          'Z vnitřní strany obvodových stěn a stropů umístíme parozábranu nebo parobrzdu. Roštem vytvořeným před parotěsnou vrstvou vedeme rozvody inženýrských sítí.',
          'Poslední vrstvou na stěnách a stropech je nejčastěji sádrokarton, a to z důvodu požárně bezpečnostních opatření. Stěny dřevostavby jsou buď difuzně otevřené, nebo difuzně uzavřené.',
        ],
      },
    ],
    faq: [
      {
        q: 'Co je systém Two By Four?',
        a: 'Rámová dřevostavba stavěná přímo na staveništi (letmá montáž). Na impregnovaný spodní práh se v pravidelném rastru 625 nebo 417 mm kotví sloupky s horní pásnicí, rám se zavětruje a vyplní tepelnou izolací.',
      },
      {
        q: 'Na jakém základu může dřevostavba stát?',
        a: 'Na základové desce, na základových pásech i jen na pilotech, na které se uloží nosné trámy, záklop, izolace a podlahová vrstva. Založení na pilotech umožní dokonalé větrání pod objektem, což se hodí zejména v oblastech se zvýšenou koncentrací radonu.',
      },
      {
        q: 'Dá se dřevostavba postavit i na špatně dostupném pozemku?',
        a: 'Ano. Systém Two By Four se obejde téměř bez těžké techniky, takže stavíme i na místech, kam se nedostane jeřáb ani kamion — což je u prefabrikovaných dřevostaveb často podmínkou.',
      },
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
    lead: 'Zděné domy stavíme zásadně z pálených cihel Porotherm. Ověřená technologie, dlouhá životnost, akumulace tepla a zdravé mikroklima.',
    description: [
      'Se zlepšující se technologií výroby zdicích materiálů se používání pálených cihel začalo rozšiřovat a vytlačovat méně odolné stavebniny.',
      'Přírodní materiál v podobě pálených cihel Porotherm dává domu na klíč výborné vlastnosti a odolnost. Zároveň stavbě poskytuje komfortní vlastnosti, jako je propustnost vodních par či tepelná akumulační schopnost. Uvnitř domu umožní udržet mikroklima příznivé pro zdravý životní styl.',
      'V současné době lze pálený střep využít jako vnější, vnitřní, tepelněizolační, vysokopevnostní či akustické zdivo. Nezklame ani ve vodorovných překladech, stropech či střešních krytinách.',
      'Hrubou stavbu i kompletní dokončení zajišťujeme vlastními lidmi.',
    ],
    bullets: [
      'Osvědčený formát cihel',
      'Ideální spojení na pero a drážku',
      'Jednoduché a rychlé zdění',
      'Vysoká pevnost',
      'Minimální spotřeba malty',
      'Ideální podklad pod omítku',
      'Nízký odpor proti difuzi vodních par',
      'Hygienická nezávadnost',
      'Rozměry v modulovém systému — snadné navrhování a stavění v systému Porotherm',
      'Kompletní dokončení včetně profesí',
    ],
    processTitle: 'Jak stavíme zděné domy',
    process: [
      {
        title: 'Příprava staveniště',
        text: [
          'Po převzetí staveniště zajistíme vytyčení stavby geodetem, sejmeme ornici a připravíme zařízení staveniště — přípojku elektřiny a vody, skládku materiálu a příjezd pro techniku.',
        ],
      },
      {
        title: 'Základy a hydroizolace',
        text: [
          'Vykopeme a vybetonujeme základové pasy, vyzdíme ztracené bednění a vylijeme základovou desku vyztuženou ocelovou výztuží. Předem do ní osadíme ležatou kanalizaci a chráničky pro přípojky.',
          'Na desku položíme hydroizolaci proti zemní vlhkosti, případně i proti radonu podle výsledku radonového průzkumu.',
        ],
      },
      {
        title: 'Zdivo Porotherm',
        text: [
          'Nejpoužívanější cihly jsou Porotherm 30 Profi nebo 24 Profi. Nabízejí jednoduchou a čistou technologii zdění.',
          'První řadu cihel založíme do vyrovnávací malty přesně do roviny. Zdivo je broušené, a tudíž se další řady zdí na tenkovrstvou maltu (lepidlo) nebo na pěnu.',
        ],
      },
      {
        title: 'Překlady a věnec',
        text: [
          'Nad okenní a dveřní otvory osadíme keramické překlady podle projektu. Obvodové zdivo v úrovni stropu ztužíme železobetonovým věncem, který spojí stěny se stropní konstrukcí.',
        ],
      },
      {
        title: 'Strop',
        text: [
          'Na druhé podlaží používáme stropní systém z trámů POT a vložek MIAKO, který se po montáži zalije betonovou zálivkou podle projektové dokumentace.',
        ],
      },
      {
        title: 'Krov a střecha',
        text: [
          'Krov nebo příhradové vazníky postaví naši tesaři, následuje střešní plášť z pálené, betonové nebo plechové krytiny včetně klempířských prvků. Uzavřením střechy je hrubá stavba chráněná před počasím.',
        ],
      },
      {
        title: 'Okna a dveře',
        text: [
          'Osadíme okna a vchodové dveře a připojovací spáry utěsníme páskami, aby napojení na zdivo bylo vzduchotěsné a nevznikaly v něm tepelné mosty.',
        ],
      },
      {
        title: 'Rozvody instalací',
        text: [
          'Do zdiva a podlah vedeme rozvody elektřiny, vody, kanalizace a vytápění. Vše probíhá před omítkami, aby rozvody zůstaly skryté a nebylo nutné do hotových povrchů zasahovat.',
        ],
      },
      {
        title: 'Vnitřní omítky',
        text: [
          'Zevnitř se zdivo omítá jádrovou nebo sádrovou omítkou. Omítka zároveň zajistí vzduchotěsnost obvodových stěn.',
        ],
      },
      {
        title: 'Podlahy',
        text: [
          'Na tepelnou a kročejovou izolaci vylijeme betonový nebo anhydritový potěr, do kterého lze uložit i podlahové topení.',
        ],
      },
      {
        title: 'Fasáda a zateplení',
        text: [
          'Zvenku se na zdivo lepí kontaktní zateplovací systém z materiálů Cemix. Fasádu dokončíme finální probarvenou omítkou.',
        ],
      },
      {
        title: 'Dokončení a předání',
        text: [
          'Následují obklady, dlažby, malby, osazení dveří, sanity a kompletace elektroinstalace. Po finálním úklidu vám dům předáme připravený k nastěhování.',
        ],
      },
    ],
    faq: [
      {
        q: 'Z jakých cihel stavíte?',
        a: 'Zděné domy stavíme zásadně z pálených cihel Porotherm, nejčastěji 30 Profi nebo 24 Profi. Broušené zdivo se zdí na tenkovrstvou maltu (lepidlo) nebo na pěnu.',
      },
      {
        q: 'Jaký strop ve zděném domě používáte?',
        a: 'Stropní systém z trámů POT a vložek MIAKO, který se po montáži zalije betonovou zálivkou podle projektové dokumentace.',
      },
      {
        q: 'Jak se zděný dům zatepluje?',
        a: 'Zvenku se na zdivo lepí kontaktní zateplovací systém, zevnitř se omítá jádrovou nebo sádrovou omítkou.',
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
      'Jednou ze základních úloh střechy je ochrana objektu proti srážkové a provozní vodě v kapalném i tuhém skupenství. Hydroizolační vrstva je zpravidla částí stavby nejvíce namáhanou klimatickými vlivy (deštěm, sněhem, kroupami, prudkými teplotními změnami, ozónem, UV zářením, větrem atd.) a musí všem těmto vlivům dlouhodobě odolávat.',
      'Dům, stejně jako každé jiné těleso, ztrácí a získává teplo přes svůj povrch. Nejslabším místem jsou přitom střechy — vnitřní teplo uniká střechou více než stěnami, protože teplý vzduch neustále stoupá vzhůru.',
      'Střechy jsou slabým místem i z hlediska tepelných zisků, protože na ně dopadá převážná většina energie ze slunce. Rozdíl mezi interiérovou a exteriérovou teplotou je zde většinou největší. Střecha navíc nesmí být zbytečně těžká, a má proto i nízkou schopnost akumulovat teplo či chlad — o to důležitější je kvalitní tepelná izolace.',
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
      {
        q: 'Proč je zateplení střechy tak důležité?',
        a: 'Střecha je nejslabším místem obálky domu — teplý vzduch stoupá vzhůru, takže střechou uniká víc tepla než stěnami, a v létě na ni zase dopadá většina slunečního záření.',
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
      'Hydroizolační fólie s PVC v materiálové bázi jsou v současné době nejpoužívanějším typem hydroizolací plochých střech na českém i evropském trhu. Jsou jedním z nejstarších typů umělohmotných povlakových hydroizolací a patří do skupiny termoplastických fólií spolu s fóliemi polyolefinickými a fóliemi s nízkým obsahem asfaltů (POCB, ECB).',
      'PVC je tvrdý a nepoddajný materiál. Potřebné ohebnosti a tvárnosti fólií se dosahuje měkčením pomocí monomerních nebo polymerních tekutých změkčovadel, případně kopolymerizací či legováním PVC s etylen-vinyl-acetátem (PVC/EVA).',
      'Většina fólií má nízký difuzní odpor, což je předurčuje jako vynikající materiál pro tzv. nedestruktivní sanace havarijních plochých střech — překrytí poškozené krytiny bez jejího odstranění. Stávající živičný plášť se případně jen perforuje, aby vlhkost ze souvrství mohla odcházet celou plochou nové fólie do venkovního prostředí.',
    ],
    bullets: [
      'PVC a TPO fólie, asfaltové pásy',
      'Spádové klíny a zateplení',
      'Zelené a pochozí střechy',
      'Havarijní opravy a lokalizace zatékání',
      'Nedestruktivní sanace bez strhávání staré krytiny',
    ],
    highlightsLabel: 'Hydroizolační fólie',
    highlightsTitle: 'Charakteristiky hydroizolačních fólií',
    highlights: [
      'Ohebnost a tvárnost za nízkých teplot — pokládka i v zimním období bez omezení',
      'Vysoká průtažnost a tvárnost pro tvarově náročné detaily a přenos pohybů a deformací spodních vrstev souvrství',
      'Běžná šířka pásů 2 m, a tím menší počet svárů v ploše',
      'Pokládka jako jednovrstvá izolace',
      'Odolnost vůči běžným průmyslovým zplodinám',
      'Odolnost vůči UV záření a klimatickým vlivům bez dalších ochranných vrstev, posypů či nátěrů',
      'Odolnost vůči teplotám od −40 °C do +130 °C',
      'Svařování horkým vzduchem — bez plamene, s výrazně nižším rizikem požáru',
      'Nízká plošná hmotnost do cca 3 kg/m²',
      'U většiny typů fólií bez omezení sklonu střechy',
      'Široká paleta barev, kompletačních a tvarových prvků pro příznivý estetický výsledek',
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
      {
        q: 'Musí se stará asfaltová střecha strhnout?',
        a: 'Často ne. Díky nízkému difuznímu odporu fólií lze provést nedestruktivní sanaci — poškozenou krytinu překryjeme novou fólií a stávající živičný plášť případně jen perforujeme, aby vlhkost mohla odcházet do exteriéru.',
      },
      {
        q: 'Dá se fólie pokládat i v zimě?',
        a: 'Ano. Fólie si zachovává ohebnost i za nízkých teplot a sváry se provádějí horkým vzduchem bez plamene, takže pokládka v zimním období není omezená.',
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
      'Střešní systém se skládá ze střešního pláště a dřevěné konstrukce. Dřevěnou konstrukci děláme buď jako krov, nebo jako příhradové vazníky, na které si sami zpracujeme statický projekt a kladečský plán.',
      'Střešní plášť může být z pálené, betonové nebo plechové krytiny. Pálenou krytinu používáme od tradičního výrobce Tondach, betonové krytiny KM Beta, Terran a Bramac — tito výrobci jsou prověřeni dlouholetou tradicí. Plechové krytiny mohou mít podobu falcovaného nebo vlnitého plechu podle požadavku; používáme je od výrobce Lindab, který je jedničkou na trhu.',
      'Správná volba izolace podkroví je klíčová pro tepelný komfort a úspory energií. Optimální tepelné ochrany dosáhnete při součiniteli prostupu tepla U ≤ 0,10 W/(m²·K), což je doporučená hodnota pro pasivní domy a odpovídá tloušťce izolace až 430 mm (podle druhu materiálu může být i menší). Náklady na tepelnou izolaci činí jen asi 3–5 % investice do vestavby podkroví a vrátí se během několika let díky nižším nákladům na vytápění.',
      'Realizujeme také nadkrokevní izolaci — tento systém používáme od výrobce Isover.',
    ],
    bullets: [
      'Krovy i příhradové vazníky včetně statického projektu',
      'Nové krovy i výměny poškozených prvků',
      'Pálené tašky Tondach, betonové KM Beta, Terran a Bramac',
      'Plechové krytiny Lindab — falc i vlna',
      'Nadkrokevní i mezikrokevní zateplení',
      'Střešní okna a klempířské prvky',
    ],
    highlightsLabel: 'Nadkrokevní izolace Isover',
    highlightsTitle: 'Proč si pořídit nadkrokevní izolaci',
    highlights: [
      'Větší spolehlivost parotěsnosti a vzduchotěsnosti konstrukce',
      'Vyloučení tepelných mostů — úspora 10 až 20 % oproti pod- a mezikrokevnímu zateplení',
      'Minimalizace akustických mostů — už při 200 mm izolace vzduchová neprůzvučnost Rw 52 dB',
      'Úspora prostoru v interiéru',
      'Otevřený prostor s přiznanou dřevěnou konstrukcí bez zbytečných vrstev',
      'Rychlejší a snazší montáž — odpadá instalace pomocných konstrukcí podhledů pod krokvemi',
      'Snížení rizika poničení parozábrany',
      'Eliminace chyb při instalaci izolace a parozábrany u tvarově složitých prvků krovu',
      'Možnost kombinace se zateplením mezi a pod krokvemi',
    ],
    faq: [
      {
        q: 'Vyměníte krytinu bez zásahu do krovu?',
        a: 'Ano, pokud je krov v pořádku. Stav posoudíme při zaměření zdarma.',
      },
      {
        q: 'Jaké krytiny používáte?',
        a: 'Pálené tašky Tondach, betonové krytiny KM Beta, Terran a Bramac a plechové krytiny Lindab ve variantě falcovaného nebo vlnitého plechu.',
      },
      {
        q: 'Kolik izolace dát do podkroví?',
        a: 'Pro optimální tepelnou ochranu doporučujeme U ≤ 0,10 W/(m²·K), tedy hodnotu pro pasivní domy. To odpovídá tloušťce izolace až 430 mm podle použitého materiálu. Izolace tvoří jen asi 3–5 % nákladů na vestavbu podkroví a vrátí se za několik let.',
      },
      {
        q: 'Jaký je rozdíl mezi nadkrokevní a mezikrokevní izolací?',
        a: 'Nadkrokevní izolace se klade nad krokve, takže vylučuje tepelné i akustické mosty, šetří 10–20 % tepla oproti zateplení pod a mezi krokvemi a dovoluje nechat dřevěnou konstrukci přiznanou v interiéru. Oba systémy lze kombinovat.',
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
      'Kontaktní zateplovací systém (ETICS) je v podmínkách České republiky nejpoužívanějším způsobem zateplení objektů. Tato technologie umožňuje jednoduchým způsobem vytvářet sendvičové stěny vynikajících parametrů.',
      'Výhodou kontaktního zateplení je, že jeho přednosti lze rychle a účinně využít jak u novostaveb, tak u rekonstrukcí (dodatečného zateplování). Doplněním kvalitní tepelné izolace z minerální vlny či EPS ke stávající stěně získáte mimořádně účinnou konstrukci se souvislou tepelnou izolací.',
      'Na kontaktní zateplovací systém používáme výhradně výrobky značky Cemix, která nám podle projektu navrhne veškerý použitý materiál. Zateplujeme podle montážních předpisů výrobce — jen tak platí záruka a tepelné parametry z projektu.',
    ],
    bullets: [
      'EPS i minerální vata',
      'Novostavby i dodatečné zateplení při rekonstrukci',
      'Materiály Cemix navržené podle projektu',
      'Systémové řešení detailů (okna, sokl, atika)',
      'Podklady pro dotaci Nová zelená úsporám',
    ],
    highlightsLabel: 'Výhody',
    highlightsTitle: 'Výhody kontaktního zateplení',
    highlights: [
      'Tradiční, dobře známý a ověřený způsob zateplení',
      'Levnější varianta než provětrávané fasádní systémy',
      'Souvislé zateplení po celé ploše fasády bez tepelných mostů',
      'Ochrana objektu před teplotními výkyvy — v zimě se konstrukce neprochlazuje, v létě se nepřehřívá',
      'Zachování tepelné akumulace zdiva pro stabilní tepelnou pohodu v interiéru',
      'Vhodné pro novostavby i rekonstrukce',
    ],
    faq: [
      {
        q: 'Polystyren, nebo vata?',
        a: 'Záleží na konstrukci a požární výšce. Doporučení dostanete při zaměření spolu s cenovým srovnáním.',
      },
      {
        q: 'Jaký je rozdíl mezi kontaktním zateplením a provětrávanou fasádou?',
        a: 'Kontaktní zateplovací systém je levnější a izolace je souvislá po celé ploše fasády, takže nevznikají tepelné mosty. Provětrávaná fasáda je dražší, nabízí ale delší životnost, vyšší odolnost proti poškození a prémiový vzhled.',
      },
      {
        q: 'Dá se kontaktní zateplení udělat i na starší dům?',
        a: 'Ano. Kontaktní zateplení je vhodné jak pro novostavby, tak pro dodatečné zateplení při rekonstrukci — izolace z minerální vlny nebo EPS se doplní ke stávající stěně.',
      },
      {
        q: 'Jaké materiály používáte?',
        a: 'Výhradně systémové výrobky značky Cemix, která nám podle projektu navrhne veškerý použitý materiál.',
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
      'Větrané fasády jsou stále na vzestupu, a to především díky svým nesporným výhodám a architektonickému působení.',
      'Tyto systémy mají buď samostatnou předvěšenou část na nosném roštu fasády, který je mechanicky přikotven pomocí kotev k hlavní nosné konstrukci, nebo samonosnou předvěšenou část, nejčastěji z pohledových cihel či panelových bloků.',
      'Na nosné konstrukci je aplikována tepelná izolace z důvodu požadavků na dodatečné zateplení v souladu se současnou normou ČSN 73 0540, ke které se vztahují i předpisy zakotvené v zákoně 177/2006 Sb.',
    ],
    bullets: [
      'Klesající difuzní odpor směrem do exteriéru',
      'Trvalá ochrana interiéru před přehříváním',
      'Možnost libovolné tloušťky izolace',
      'Zajištění stálého vysušování izolace',
      'Možnost suché celoroční montáže',
      'Estetické vlastnosti',
    ],
    processTitle: 'Postup montáže',
    process: [
      {
        title: 'Osazení kotevních prvků',
        text: [
          'Nejprve začneme osazením kotevních prvků budoucího roštu na nosnou podkladní konstrukci. Při použití ocelových prvků kotvení se doporučuje použít speciální podložky snižující tepelné mosty.',
          'Fasádní konzoly používáme zásadně od firmy Hilti, která navrhne typ konzol včetně výpočtu jejich hustoty a následně zpracuje montážní projekt.',
        ],
      },
      {
        title: 'Vkládání tepelné izolace',
        text: [
          'Do větrané fasády se používají středně tuhé desky většinou čedičové izolace, například ISOVER Fassil či ISOVER Fassil NT.',
          'Obvykle by měla být deska tepelné izolace zhruba o 1 cm širší než samotný rošt. V případě dodatečného kotvení pevnějších desek stačí šíře o 0,5 cm větší.',
        ],
      },
      {
        title: 'Ochrana tepelné izolace',
        text: [
          'Použití difuzních fólií na tepelnou izolaci je doporučené u větraných stěn, kde vrchní plášť fasády není celistvý a hrozí zafoukání vody či sněhu do prostoru větrané mezery.',
          'Všechny desky tepelné izolace do větraných fasád jsou ale hydrofobizované, takže při jejich dočasném povrchovém smáčení je jejich funkce zachována a mezerami zafoukaná vlhkost vždy velmi rychle vyschne.',
        ],
      },
      {
        title: 'Pohledová vrstva',
        text: [
          'V současné době je na českém trhu nepřeberné množství materiálů a výrobků pro dokončení fasády.',
          'Kromě standardních vláknocementových desek je možné použít dřevěné obklady, tenké kamenné desky, plech nebo některé „nové“ materiály, jako je dřevoplast.',
        ],
      },
      {
        title: 'Řešení detailů větrané mezery',
        text: [
          'Větraná mezera by měla mít minimální šíři 2 cm, doporučujeme ale 4 cm — tepelná izolace se může někdy boulit a v zúžené mezeře proudí vzduch hůře.',
          'Důležitou součástí větrané mezery jsou také ochranné mřížky u nasávacího a výstupního otvoru. Slouží jako ochrana před drobnými hlodavci a ptáky, kteří by mohli do mezery zalézat.',
        ],
      },
      {
        title: 'Příprava vymezovacího roštu',
        text: [
          'Základem většiny větraných fasád je nosný rošt. Montuje se k nosné konstrukci svisle či vodorovně.',
          'Obvykle se používá hliníkový rošt, lze ale použít také dřevěný, který lze udělat dvojitě křížem přes sebe. U halových objektů je rošt pevnou součástí obvodového pláště.',
        ],
      },
    ],
    faq: [
      {
        q: 'V čem je provětrávaná fasáda lepší než ETICS?',
        a: 'Delší životnost, odolnost proti mechanickému poškození a prémiový vzhled. Je ale dražší na pořízení.',
      },
      {
        q: 'Jak široká má být větraná mezera?',
        a: 'Minimálně 2 cm, doporučujeme ale 4 cm. V zúžené mezeře proudí vzduch hůře, protože se tepelná izolace může mírně boulit.',
      },
      {
        q: 'Jaký obklad lze na provětrávanou fasádu použít?',
        a: 'Vláknocementové desky, dřevěné obklady, tenké kamenné desky, plech nebo novější materiály, jako je dřevoplast.',
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
