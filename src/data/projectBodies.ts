// Obsah detailů realizací ve struktuře zrcadlící Sanity Portable Text.
// `block` odpovídá standardnímu PT bloku (style + text), `imageWithMeta`
// vlastnímu objektu z content modelu (alt, caption + layout pro zalomení).
// Po napojení Sanity se tento soubor nahradí dotazem na `project.body`
// a renderer RichText.astro zůstane beze změny.
// TODO: koncepty textů — finální znění schválí klient.

export type RichTextBlock =
  | { _type: 'block'; style: 'h2' | 'h3' | 'normal' | 'blockquote'; text: string }
  | { _type: 'bulletList'; items: string[] }
  | { _type: 'imageWithMeta'; name: string; alt: string; caption?: string; layout: 'full' | 'left' | 'right' };

const bodies: Record<string, RichTextBlock[]> = {
  'villa-za-prahou': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Klient chtěl celoroční bydlení uprostřed borovicového lesa — dům, který nebude s okolím soupeřit, ale splyne s ním. Podmínkou byla nízká energetická náročnost, zdravé vnitřní prostředí a dřevo jako hlavní materiál uvnitř i venku. Pozemek s sebou nesl i omezení: stavět se muselo šetrně ke kořenovým systémům vzrostlých borovic.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-villa-za-prahou-2',
      alt: 'Montáž dřevěné konstrukce vily',
      caption: 'Hrubá stavba systémem two-by-four trvala devět týdnů.',
      layout: 'right',
    },
    { _type: 'block', style: 'h2', text: 'Průběh stavby' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Dům jsme založili na železobetonové desce s minimálním zásahem do terénu. Konstrukci stavěla naše vlastní tesařská parta systémem two-by-four z certifikovaného dřeva KVH — difúzně otevřená skladba stěn nechává konstrukci dýchat a drží stabilní vlhkost interiéru po celý rok.',
    },
    {
      _type: 'bulletList',
      items: [
        'Konstrukce z KVH hranolů, difúzně otevřená skladba',
        'Provětrávaná fasáda z tmavého modřínu',
        'Hliníková okna s trojskly na celou výšku podlaží',
        'Plochá střecha s fóliovou hydroizolací a atikou',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-villa-za-prahou-3',
      alt: 'Montáž dřevěného obkladu fasády',
      caption: 'Modřínový obklad jsme kladli na provětrávaný rošt — fasáda vydrží desítky let bez údržby.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'Tmavé dřevo nechalo dům zmizet mezi kmeny borovic — večer ho prozradí jen teplé světlo z oken.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Od předání základové desky po klíče uplynulo sedm měsíců. Dům plní parametry pasivního standardu, vytápění zajišťuje tepelné čerpadlo s rekuperací a klient bydlí v lese, aniž by padla jediná vzrostlá borovice.',
    },
  ],

  'rodinny-dum-beroun': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Mladá rodina si přinesla vlastní projekt zděného domu 5+kk a jasnou představu: klasická stavba z cihel, sedlová střecha a termín nastěhování do čtrnácti měsíců. Naším úkolem byla kompletní realizace na klíč včetně zpevněných ploch a oplocení.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-rodinny-dum-beroun-2',
      alt: 'Hrubá stavba z broušených cihel',
      caption: 'Broušené cihelné bloky zděné na tenkovrstvou maltu — přesně a rychle.',
      layout: 'left',
    },
    { _type: 'block', style: 'h2', text: 'Průběh stavby' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Zdili jsme z broušených cihelných bloků na tenkovrstvou maltu, strop je skládaný systémový. Krov postavili naši tesaři, krytinu tvoří betonová taška v antracitu včetně kompletního systému doplňků. Fasádu jsme zateplili kontaktním systémem ETICS se silikonovou omítkou.',
    },
    {
      _type: 'bulletList',
      items: [
        'Hrubá stavba dokončená za čtyři měsíce',
        'Betonová krytina se zárukou výrobce 30 let',
        'Zateplení ETICS, silikonová omítka',
        'Podlahové topení v celém domě',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Předávali jsme ve smluveném termínu a se smluveným rozpočtem — vícepráce tvořily jediná položka, kterou si klient objednal navíc: dlážděnou terasu k jižní fasádě. Rodina se stěhovala třináct měsíců od zahájení výkopů.',
    },
  ],

  'rekonstrukce-bytu-vinohrady': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Byt 4+1 v činžovním domě z první republiky se naposledy rekonstruoval v osmdesátých letech. Klient chtěl moderní dispozici s velkou obytnou kuchyní, ale zachovat vše, co dává bytu charakter — výšku stropů, štukové fabiony a špaletová okna.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-rekonstrukce-bytu-vinohrady-1',
      alt: 'Byt po vybourání původních konstrukcí',
      caption: 'Bourací práce odhalily původní cihelné klenby — zůstaly přiznané.',
      layout: 'right',
    },
    { _type: 'block', style: 'h2', text: 'Průběh rekonstrukce' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Po vybourání příček jsme do nosné stěny osadili ocelový průvlak a spojili kuchyni s obývacím pokojem. Kompletně nové jsou rozvody elektřiny, vody i odpadů, podlahy dostaly vyrovnávací vrstvu a dubové vlysy kladené do stromečku. Všechny profese koordinoval náš stavbyvedoucí — klient řešil jen výběr materiálů.',
    },
    {
      _type: 'bulletList',
      items: [
        'Dispoziční změny včetně statického posouzení',
        'Nové rozvody elektřiny, vody a topení',
        'Dubové podlahy kladené do stromečku',
        'Repase původních dveří a špaletových oken',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-rekonstrukce-bytu-vinohrady-4',
      alt: 'Dokončený interiér s dubovou podlahou',
      caption: 'Nová dispozice, původní charakter — výška stropů zůstala hlavním tématem bytu.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Kompletní rekonstrukce trvala jedenáct týdnů. Byt má novou dispozici i všechny instalace, a přitom si zachoval prvorepublikový charakter, kvůli kterému si ho klient kdysi koupil.',
    },
  ],

  'plocha-strecha-kladno': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Do bytového domu ze sedmdesátých let zatékalo třemi místy a lokální opravy už nepomáhaly. Společenství vlastníků poptalo kompletní novou skladbu střechy — a protože dům je obydlený, musely práce proběhnout bez omezení provozu a za každého počasí pod kontrolou.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-plocha-strecha-kladno-2',
      alt: 'Pokládka spádových klínů z EPS',
      caption: 'Spádové klíny vyřešily letité kaluže — voda nyní odtéká ke vpustím.',
      layout: 'right',
    },
    { _type: 'block', style: 'h2', text: 'Průběh realizace' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Starou skladbu jsme snesli po etapách tak, aby žádná část střechy nezůstala přes noc otevřená. Nová skladba: parozábrana, spádové klíny z EPS, a hydroizolace z PVC fólie kotvené do nosné konstrukce. Jsme proškolení aplikátoři použitého systému, takže na dílo běží plná materiálová záruka výrobce.',
    },
    {
      _type: 'bulletList',
      items: [
        'Etapizace prací — střecha nikdy nezůstala otevřená',
        'Nové spádování, zateplení nad normu',
        'PVC fólie s životností přes 30 let',
        'Nové vpusti, prostupy a oplechování atiky',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Střecha je těsná, spádovaná a zateplená — horní patra přestala v létě přehřívat. Součástí předání byl protokol o zkoušce těsnosti a plán pravidelných revizí, které pro SVJ zajišťujeme.',
    },
  ],

  'sikma-strecha-dobris': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Původní krov rodinného domu z třicátých let napadl dřevokazný hmyz a krytina dosluhovala. Majitel chtěl střechu, která vydrží další generaci — a při jedné akci i zateplit podkroví na dnešní standard.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-sikma-strecha-dobris-2',
      alt: 'Nový krov z KVH hranolů',
      caption: 'Nový krov z KVH hranolů postavili naši tesaři za osm dní.',
      layout: 'left',
    },
    { _type: 'block', style: 'h2', text: 'Průběh realizace' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Napadené prvky krovu se ukázaly rozsáhlejší, než čekal statik — rozhodli jsme se proto s majitelem pro kompletně nový krov z KVH hranolů. Následovala pojistná hydroizolace, kontralatě, laťování a betonová krytina v antracitu. Klempířské prvky jsou z titanzinku, zateplení kombinuje nadkrokevní a mezikrokevní izolaci.',
    },
    {
      _type: 'bulletList',
      items: [
        'Kompletně nový krov z certifikovaného KVH',
        'Nadkrokevní + mezikrokevní zateplení podkroví',
        'Betonová krytina, titanzinkové klempířské prvky',
        'Dvě nová střešní okna',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Z neobyvatelné půdy je zateplené podkroví připravené na budoucí vestavbu. Celá výměna včetně krovu trvala pět týdnů a dům byl po celou dobu chráněný provizorním zakrytím.',
    },
  ],

  'zatepleni-pribram': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Majitelé domu z devadesátých let platili za vytápění víc než sousedé v novostavbách. Zadání znělo jasně: snížit účty, omladit fasádu a stihnout podání žádosti o dotaci Nová zelená úsporám.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-zatepleni-pribram-2',
      alt: 'Lepení izolačních desek na fasádu',
      caption: 'Šedý EPS s lepším izolačním výkonem dovolil menší tloušťku izolantu.',
      layout: 'right',
    },
    { _type: 'block', style: 'h2', text: 'Průběh realizace' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Zateplovali jsme certifikovaným systémem ETICS — šedý polystyren, systémové lišty, výztužná stěrka se sklotextilní mřížkou a silikonová omítka. Hlídali jsme detaily, které rozhodují o životnosti: založení soklu, ostění oken, parapety i prostupy. Podklady pro dotaci jsme připravili společně s energetickým specialistou.',
    },
    {
      _type: 'bulletList',
      items: [
        'Certifikovaný systém ETICS, šedý EPS 160 mm',
        'Systémové řešení ostění a parapetů',
        'Silikonová omítka odolná řasám',
        'Kompletní podklady pro Novou zelenou úsporám',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'První zima potvrdila výpočet: spotřeba plynu klesla o dvě pětiny. Dotace pokryla zhruba třetinu nákladů a dům vypadá jako novostavba.',
    },
  ],

  'provetravana-fasada-admin': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Administrativní budova potřebovala reprezentativní plášť s minimální údržbou. Investor zvolil provětrávanou fasádu z velkoformátových cementovláknitých desek — technologii, kde o výsledku rozhoduje přesnost každé spáry.',
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-provetravana-fasada-admin-1',
      alt: 'Hliníkový nosný rošt na fasádě',
      caption: 'Hliníkový rošt jsme rektifikovali laserem — rovina fasády drží na milimetry.',
      layout: 'left',
    },
    { _type: 'block', style: 'h2', text: 'Průběh realizace' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Na nosnou stěnu jsme kotvili hliníkové konzoly s přerušeným tepelným mostem, mezi profily přišla minerální vata s černou větrozábranou. Desky jsme kladli na skrytý nýtovaný spoj s otevřenou spárou — vzduchová mezera za obkladem konstrukci trvale odvětrává.',
    },
    {
      _type: 'bulletList',
      items: [
        'Hliníkový rošt s přerušením tepelných mostů',
        'Minerální izolace s větrozábranou',
        'Velkoformátové cementovláknité desky',
        'Otevřené spáry s přesností na milimetry',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-provetravana-fasada-admin-3',
      alt: 'Montáž fasádních desek na rošt',
      caption: 'Každá řada desek se vyrovnávala podle laseru — spáry na sebe navazují přes celou fasádu.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Budova dostala plášť, který nepotřebuje údržbu a nestárne — cementovláknité desky drží barvu i po desítkách let. Investor získal nižší provozní náklady a fasádu, za kterou se návštěvám nemusí omlouvat.',
    },
  ],
};

export function getProjectBody(slug: string): RichTextBlock[] {
  return bodies[slug] ?? [];
}
