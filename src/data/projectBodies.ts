// Obsah detailů realizací ve struktuře zrcadlící Sanity Portable Text.
// `block` odpovídá standardnímu PT bloku (style + text), `bulletList` seznamu
// a `imageWithMeta` vlastnímu objektu z content modelu (alt, caption + layout).
// Po napojení Sanity se tento soubor nahradí dotazem na `project.body`
// a renderer RichText.astro zůstane beze změny.
// TODO: koncepty textů — finální znění, jména a čísla schválí klient.

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
      text: 'Klient za námi přišel s pozemkem, jaký se vidí jednou za pár let: vzrostlý borovicový les dvacet minut od Prahy a územní rozhodnutí, které dovolovalo jediný dům. Chtěl celoroční bydlení, které nebude s lesem soupeřit, ale splyne s ním — a dřevo jako hlavní materiál uvnitř i venku.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Pozemek s sebou nesl zásadní omezení: stavba se nesměla dotknout kořenových systémů vzrostlých borovic. To rozhodlo o technologii. Dřevostavba na základové desce znamenala lehčí založení, žádné hluboké výkopy v okolí kmenů a stavbu, kterou na místo dopravíme po částech bez těžké techniky mezi stromy.',
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
      text: 'Dům jsme založili na železobetonové desce s minimálním zásahem do terénu — výkopy jsme vedli ručně tam, kde hrozil střet s kořeny. Konstrukci stavěla naše vlastní tesařská parta systémem two-by-four z certifikovaného dřeva KVH. Difúzně otevřená skladba stěn nechává konstrukci dýchat a drží stabilní vlhkost interiéru po celý rok.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Harmonogram jsme postavili kolem počasí: hrubá stavba a opláštění proběhly v září a říjnu, aby byl dům uzavřený před prvními dešti. Zima patřila rozvodům, podlahám a interiéru — v době, kdy okolní stavby stály, se u nás pracovalo v suchu a teple.',
    },
    {
      _type: 'bulletList',
      items: [
        'Konstrukce z KVH hranolů, difúzně otevřená skladba',
        'Provětrávaná fasáda z tmavého modřínu',
        'Hliníková okna s trojskly na celou výšku podlaží',
        'Plochá střecha s fóliovou hydroizolací a atikou',
        'Tepelné čerpadlo a řízené větrání s rekuperací',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'gallery-villa-za-prahou-3',
      alt: 'Montáž dřevěného obkladu fasády',
      caption: 'Modřínový obklad jsme kladli na provětrávaný rošt — fasáda vydrží desítky let bez údržby.',
      layout: 'full',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'imageWithMeta',
      name: 'story-villa-za-prahou-2',
      alt: 'Detail tmavého modřínového obkladu u okna',
      caption: 'Napojení obkladu na rám okna — bez lišt, na spáru.',
      layout: 'left',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Tmavý modřín je krásný, ale neodpouští. Každé napojení na okno, atiku nebo sokl je vidět, protože ho nekryje žádná lišta. Tesaři proto obklad rozměřovali po jednotlivých fasádách tak, aby spáry navazovaly přes rohy budovy a prkna u oken končila vždy celá — fasáda díky tomu působí jako jeden kus materiálu.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Uvnitř se dřevo vrací na strop: pohledové smrkové palubky probíhají z obývacího pokoje přes zasklení ven až pod přesah střechy. Hranice mezi interiérem a lesem se tím opticky ztrácí — což bylo přesně to, co klient na začátku popsal jednou větou: „Chci sedět uvnitř a být venku."',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-villa-za-prahou-1',
      alt: 'Obývací pokoj s dřevěným stropem a prosklením do lesa',
      caption: 'Dřevěný strop probíhá přes zasklení ven — les je součástí interiéru.',
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
      text: 'Od předání základové desky po klíče uplynulo sedm měsíců. Dům plní parametry pasivního standardu, vytápění zajišťuje tepelné čerpadlo s rekuperací — a nepadla jediná vzrostlá borovice. Klientova rodina se stěhovala na jaře, první léto už trávila na terase pod stromy.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-villa-za-prahou-3',
      alt: 'Vila mezi borovicemi za soumraku',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Užitná plocha 168 m², terasa 42 m²',
        'Hrubá stavba 9 týdnů, celkem 7 měsíců',
        'Měrná potřeba tepla na vytápění pod 20 kWh/m² za rok',
        'Zachováno 100 % vzrostlých borovic na pozemku',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Uvažujete o podobném domě?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Domů jako tento stavíme jen několik do roka — záměrně. Individuální architektura si žádá tesaře, kteří u detailu zpomalí, a stavbyvedoucího, který má na vás čas, ne třicet rozestavěných projektů. Pokud hledáte dodavatele, který postaví tisící katalogový dům, nebudeme pro vás ta pravá volba.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Pokud ale máte pozemek s charakterem a představu, která si zaslouží víc než typový projekt, rádi se s vámi potkáme — klidně přímo na místě. Od první konzultace po předání klíčů jednáte s jedním člověkem, diskrétně a bez prostředníků. Reference z podobných staveb vám ukážeme osobně, včetně kontaktů na majitele, kteří o svém domě rádi mluví.',
    },
  ],

  'rodinny-dum-beroun': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Mladá rodina si přinesla vlastní projekt zděného domu 5+kk a jasnou představu: klasická stavba z cihel, sedlová střecha a termín nastěhování do čtrnácti měsíců — mladší dceři začínala školka a rodina chtěla začít školní rok už v novém. Naším úkolem byla kompletní realizace na klíč včetně zpevněných ploch a oplocení.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Svažitý pozemek na okraji Berouna vypadal na první pohled jednoduše, sondy ale odhalily navážku v místě plánované garáže. Se statikem jsme upravili založení — část základů jsme prohloubili na rostlý terén a přidali ztracené bednění. Klient o problému věděl dřív, než se kopla první rýha, včetně dopadu na rozpočet: žádná překvapení v průběhu.',
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
      text: 'Zdili jsme z broušených cihelných bloků na tenkovrstvou maltu, strop je skládaný systémový. Krov postavili naši tesaři, krytinu tvoří betonová taška v antracitu včetně kompletního systému doplňků — hřebenáče, větrací tašky, sněhové zábrany i prostupy pro odvětrání kanalizace jsou z jednoho systému, takže střecha funguje a stárne jako celek.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Fasádu jsme zateplili kontaktním systémem ETICS se silikonovou omítkou. Uvnitř běží podlahové topení v celém domě napojené na tepelné čerpadlo; obklady, dlažby a sanitu si klienti vybírali u našich dodavatelů se slevou z našich rámcových smluv.',
    },
    {
      _type: 'bulletList',
      items: [
        'Hrubá stavba dokončená za čtyři měsíce',
        'Betonová krytina se zárukou výrobce 30 let',
        'Zateplení ETICS, silikonová omítka',
        'Podlahové topení + tepelné čerpadlo',
        'Zpevněné plochy, terasa a oplocení v ceně díla',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'story-rodinny-dum-beroun-2',
      alt: 'Detail hřebene střechy s antracitovými taškami',
      caption: 'Systémové doplňky krytiny — detail, který rozhoduje o životnosti střechy.',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'block',
      style: 'normal',
      text: 'U zděného domu se kvalita pozná na věcech, které po dokončení nejsou vidět: překlady s přerušeným tepelným mostem nad okny, ostění zateplená až k rámu a parapety s okapničkou, která odvádí vodu od fasády. Všechny tyto detaily fotíme a předáváme klientovi v dokumentaci skutečného provedení.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-rodinny-dum-beroun-1',
      alt: 'Obytná kuchyně s jídelním stolem u okna do zahrady',
      caption: 'Srdce domu — obytná kuchyně s výhledem do zahrady.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'Předávali jsme třináct měsíců od výkopů — měsíc před termínem a se smluveným rozpočtem.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Vícepráce nakonec tvořila jediná položka, kterou si klienti objednali navíc: dlážděná terasa k jižní fasádě. Dcera nastoupila do školky už z nového domu a my máme v Berouně referenci, kterou rádi ukazujeme dalším zájemcům — i proto, že nás klienti doporučili sousedům.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-rodinny-dum-beroun-3',
      alt: 'Dokončený dům z ulice se zahradou',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Dispozice 5+kk, užitná plocha 142 m²',
        'Výstavba 13 měsíců od výkopů po předání',
        'Jediná vícepráce: terasa na přání klienta',
        'Energetická třída B',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Uvažujete o vlastním domě?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Nejdražší, co do stavby vložíte, nejsou peníze — je to váš čas a klid. Naši klienti jsou lidé, kteří řídí firmy a rodiny; nemají prostor dohadovat se s pěti subdodavateli a trávit soboty na kontrolních dnech. Proto dostávají jeden kontakt, jeden harmonogram a rozpočet, který na konci souhlasí s tím na začátku.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Zděný dům na klíč od nás není kompromis mezi cenou a kvalitou — je to kvalita s předem známou cenou. Přijeďte se podívat na rozestavěné i hotové domy; nejlépe se rozhoduje tam, kde si můžete na řemeslo sáhnout.',
    },
  ],

  'rekonstrukce-bytu-vinohrady': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Byt 4+1 v činžovním domě z první republiky se naposledy rekonstruoval v osmdesátých letech: umakartové jádro, zakryté parkety, rozvody na hraně životnosti. Klient chtěl moderní dispozici s velkou obytnou kuchyní — ale zachovat vše, co dává bytu charakter: výšku stropů, štukové fabiony a špaletová okna do klidného vnitrobloku.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Rekonstrukce v obydleném domě má svá pravidla. Před zahájením jsme obešli sousedy, domluvili časy hlučných prací a výtah i schodiště chránili zákrytem. Suť šla shozem přímo do kontejneru ve dvoře — za jedenáct týdnů prací nepřišla na dům jediná stížnost.',
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
      text: 'Po vybourání příček jsme do nosné stěny osadili ocelový průvlak a spojili kuchyni s obývacím pokojem do jednoho prostoru přes celou hloubku traktu. Kompletně nové jsou rozvody elektřiny, vody i odpadů, koupelna se stěhovala do bývalé komory — s novým napojením na stoupačky, které jsme koordinovali se správcem domu.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Podlahy dostaly vyrovnávací vrstvu a dubové vlysy kladené do stromečku — stejný vzor, jaký v bytě ležel původně, jen v novém provedení s podlahovým topením v koupelně a kuchyni. Všechny profese koordinoval náš stavbyvedoucí; klient řešil jediné rozhodnutí týdně, ne deset telefonátů denně.',
    },
    {
      _type: 'bulletList',
      items: [
        'Dispoziční změny včetně statického posouzení a průvlaku',
        'Nové rozvody elektřiny, vody a topení',
        'Dubové podlahy kladené do stromečku',
        'Repase původních dveří a špaletových oken',
        'Koupelna s podlahovým topením na novém místě',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'story-rekonstrukce-bytu-vinohrady-3',
      alt: 'Repasované špaletové okno s mosazným kováním',
      caption: 'Špaletová okna jsme repasovali včetně mosazného kování — nová jsou jen těsnění a skla.',
      layout: 'left',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Prvorepublikové truhlářské prvky se dnes už nevyrábí — proto jsme dveře, obložky i okna demontovali a poslali do dílny k repasi. Vrátily se s novými těsněními a izolačními skly v původních profilech. Štukové fabiony, které bourání poškodilo, dotáhl štukatér podle zachovaných vzorů v sousedním pokoji.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-rekonstrukce-bytu-vinohrady-2',
      alt: 'Nová koupelna s bílým obkladem a černými bateriemi',
      caption: 'Nová koupelna na místě bývalé komory — metro obklad, terrazzo dlažba.',
      layout: 'right',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Kontrast starého a nového je záměrný: koupelna a kuchyň jsou nekompromisně současné, zbytek bytu drží prvorepublikový charakter. Právě to napětí dělá z bytu domov, ne muzeum ani katalog.',
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
      style: 'blockquote',
      text: 'Byt má novou dispozici i všechny instalace — a pořád je to tentýž byt, kvůli kterému si ho klient kdysi koupil.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Kompletní rekonstrukce trvala jedenáct týdnů od předání klíčů po úklid. Součástí předání byla dokumentace skutečného provedení rozvodů — až klient za deset let zavěsí poličku, bude vědět, kudy vede elektřina.',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Dispozice 4+1 → 3+kk, 118 m²',
        '11 týdnů od předání klíčů po úklid',
        'Repase 9 dveří a 6 špaletových oken',
        'Nulový počet stížností v obydleném domě',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Vlastníte byt s historií?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Prvorepublikový byt není nemovitost, je to rodinné stříbro — a rekonstrukce je okamžik, kdy se dá znásobit, nebo nenávratně pokazit. Pracujeme pro klienty, kteří to vědí: právníky, lékaře, majitele firem, kteří kupují byty na Vinohradech, v Dejvicích či v Bubenči a chtějí řemeslo na úrovni adresy.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Celou rekonstrukci vedeme diskrétně a bez vašeho každodenního dohledu — dostanete jedno rozhodnutí týdně, fotoreport z průběhu a termín, který platí. Hodnotu, kterou do bytu vložíte, uvidíte v odhadu i v tom, jak se v něm bydlí.',
    },
  ],

  'plocha-strecha-kladno': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Do bytového domu ze sedmdesátých let zatékalo třemi místy a lokální opravy už nepomáhaly — každá velká voda znamenala kbelíky na chodbě nejvyššího patra. Společenství vlastníků poptalo kompletní novou skladbu střechy. Podmínky byly jasné: dům je obydlený, práce nesmí omezit provoz a střecha nesmí zůstat ani jednu noc otevřená.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Před nabídkou jsme udělali sondy do stávající skladby. Ukázaly, co jsme čekali: izolace nasáklá vodou, spád prakticky nulový a vpusti zanesené tak, že voda stála v kalužích týdny. Nemělo smysl opravovat — navrhli jsme kompletní výměnu včetně nového spádování.',
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
      text: 'Starou skladbu jsme snesli po etapách — každý den jen tolik plochy, kolik jsme stihli do večera zavřít provizorní hydroizolací. Nová skladba: parozábrana, spádové klíny z EPS a hydroizolace z PVC fólie mechanicky kotvené do nosné konstrukce. Meteorologickou situaci jsme sledovali denně a dvě etapy kvůli předpovědi posunuli.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Jsme proškolení aplikátoři použitého fóliového systému, takže na dílo běží plná materiálová záruka výrobce. Každý svar prošel kontrolou jehlou, kritické detaily zkouškou podtlakovým zvonem — protokoly jsou součástí předávací dokumentace.',
    },
    {
      _type: 'bulletList',
      items: [
        'Etapizace prací — střecha nikdy nezůstala otevřená',
        'Nové spádování, zateplení nad požadavek normy',
        'PVC fólie s životností přes 30 let',
        'Nové vpusti, prostupy a oplechování atiky',
        'Zkouška těsnosti s protokolem ke každé etapě',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'story-plocha-strecha-kladno-1',
      alt: 'Detail svařovaného spoje PVC fólie',
      caption: 'Horkovzdušný svar po kontrole jehlou — každý metr spoje je vyzkoušený.',
      layout: 'left',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Plochá střecha nezatéká plochou — zatéká detaily. Proto věnujeme největší péči vpustím, prostupům a napojení na atiku: fólie je v těchto místech vytažená a ukončená systémovými tvarovkami, ne ručně stříhanými záplatami. Nové vpusti jsou vyhřívané, aby fungovaly i při tání sněhu.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-plocha-strecha-kladno-2',
      alt: 'Hotová střecha se světlíky a novou fólií',
      caption: 'Nové světlíky prosvětlily schodiště — bonus, se kterým SVJ nepočítalo.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'Horní patra přestala v létě přehřívat a slovo „kbelík“ zmizelo ze zápisů schůzí SVJ.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Střecha je těsná, spádovaná a zateplená. Součástí předání byl protokol o zkoušce těsnosti a plán pravidelných revizí, které pro SVJ zajišťujeme — dvakrát ročně zkontrolujeme vpusti, spoje a oplechování, a drobnosti opravíme dřív, než se stanou problémem.',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Plocha střechy 640 m²',
        'Realizace 6 týdnů, bez omezení provozu domu',
        'Úspora na vytápění horních pater ~15 %',
        'Záruka: 5 let na práci, 30 let na materiál',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Spravujete nemovitost?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Střecha je pojistka hodnoty celého domu — a její selhání je nejdražší havárie, jaká vás může potkat. Pracujeme pro SVJ, rodinné investory i majitele činžovních domů, kteří nechtějí každé tři roky řešit další záplatu, ale jedno definitivní řešení s garancí a servisem.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Nabídku od nás dostanete postavenou na sondách, ne na odhadu z chodníku. A s ní i protokoly, revizní plán a jedno telefonní číslo, které platí i pět let po předání.',
    },
  ],

  'sikma-strecha-dobris': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Původní krov rodinného domu z třicátých let napadl dřevokazný hmyz a krytina dosluhovala — při silném větru majitel sbíral tašky ze zahrady. Chtěl střechu, která vydrží další generaci, a při jedné akci zateplit podkroví na dnešní standard s výhledem na budoucí vestavbu.',
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
      text: 'Napadené prvky krovu se ukázaly rozsáhlejší, než předpokládal statik z průzkumu — po odkrytí krytiny bylo zasaženo přes polovinu krokví. Svolali jsme kontrolní den přímo na střeše a s majitelem rozhodli o kompletně novém krovu z KVH hranolů. Cenový rozdíl oproti záplatování byl menší, než čekal, a výsledek je nová střecha bez kompromisů.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Následovala pojistná hydroizolace, kontralatě, laťování a betonová krytina v antracitu. Klempířské prvky — žlaby, svody, úžlabí i lemování komína — jsou z titanzinku, materiálu, který vydrží déle než krytina sama. Zateplení kombinuje nadkrokevní a mezikrokevní izolaci, takže krokve zevnitř zůstaly pohledové.',
    },
    {
      _type: 'bulletList',
      items: [
        'Kompletně nový krov z certifikovaného KVH',
        'Nadkrokevní + mezikrokevní zateplení podkroví',
        'Betonová krytina, titanzinkové klempířské prvky',
        'Dvě nová střešní okna',
        'Dům po celou dobu chráněný provizorním zakrytím',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'story-sikma-strecha-dobris-1',
      alt: 'Titanzinkové úžlabí na antracitové krytině',
      caption: 'Úžlabí z titanzinku — klempířina, která přežije krytinu.',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Střecha je systém, ne hromada materiálů. Větrací tašky sedí přesně tam, kde je spočítal projektant odvětrání, sněhové zábrany nad vstupem a terasou, a pojistná hydroizolace je přelepená v každém spoji. Tohle na hotové střeše nikdo nevidí — pozná se to až za dvacet let.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-sikma-strecha-dobris-2',
      alt: 'Zateplené podkroví s přiznanými krokvemi',
      caption: 'Podkroví připravené na vestavbu — krokve zůstaly pohledové.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'Z neobyvatelné půdy je zateplené podkroví — a majitel už kreslí, kam přijde pracovna.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Celá výměna včetně nového krovu trvala pět týdnů. Rodina bydlela celou dobu doma — dům chránilo provizorní zakrytí a hlučné práce jsme drželi v dohodnutých časech. Střechu předáváme s pravidelným servisem: jednou ročně projdeme krytinu, žlaby a prostupy.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-sikma-strecha-dobris-3',
      alt: 'Dům s novou střechou v Dobříši',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Plocha střechy 210 m², sklon 38°',
        'Nový krov postavený za 8 dní',
        'Celkem 5 týdnů od demontáže po úklid',
        'Bydlení bez přerušení po celou dobu prací',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Řešíte střechu nad hlavou — doslova?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Dobrá střecha se dědí. Ta naše v Dobříši přežije svého majitele i jeho děti — betonová krytina, titanzinek a krov z certifikovaného dřeva nejsou marketingová slova, ale materiály s životností přes padesát let. Pro dům, který má v rodině zůstat, je to nejrozumnější investice, jakou lze do nemovitosti vložit.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Posouzení stavu krovu a zaměření děláme zdarma a říkáme věci narovinu — i tehdy, když je levnější oprava lepší volbou než výměna. Právě proto se k nám klienti vracejí s dalším domem v rodině.',
    },
  ],

  'zatepleni-pribram': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Majitelé domu z devadesátých let platili za vytápění víc než sousedé v novostavbách — a fasáda s prasklinami a vybledlým nátěrem dělala domu ostudu. Zadání znělo jasně: snížit účty, omladit vzhled a stihnout podání žádosti o dotaci Nová zelená úsporám v běžícím kole.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Začali jsme u energetického specialisty, se kterým dlouhodobě spolupracujeme. Výpočet ukázal optimum: 160 mm šedého polystyrenu na stěny, výměna parapetů a dotažení detailů kolem oken. Tloušťku izolace jsme nevolili „co nejvíc“, ale tak, aby se investice potkala s dotací a návratností.',
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
      text: 'Zateplovali jsme certifikovaným systémem ETICS — lepení i hmoždinky podle kotevního plánu, systémové lišty, výztužná stěrka se sklotextilní mřížkou a silikonová omítka se zvýšenou odolností proti řasám. Celý systém je od jednoho výrobce; míchat komponenty „podle ceny“ znamená přijít o záruku i jistotu, že spolu vrstvy fungují.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-zatepleni-pribram-2',
      alt: 'Dům v lešení během zateplování',
      caption: 'Tři týdny v lešení — majitelé bydleli bez omezení.',
      layout: 'left',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Hlídali jsme detaily, které rozhodují o životnosti: založení soklu na zakládací lištu, zateplená ostění, nové hliníkové parapety s okapničkou a správné ukončení u střechy. Podklady pro dotaci — odborný posudek, fotodokumentaci i závěrečnou zprávu — jsme připravili společně s energetickým specialistou, majitelé jen podepisovali.',
    },
    {
      _type: 'bulletList',
      items: [
        'Certifikovaný systém ETICS, šedý EPS 160 mm',
        'Systémové řešení ostění a parapetů',
        'Silikonová omítka odolná řasám',
        'Kompletní podklady pro Novou zelenou úsporám',
        'Realizace za tři týdny včetně lešení',
      ],
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'imageWithMeta',
      name: 'story-zatepleni-pribram-3',
      alt: 'Nový hliníkový parapet na bílé fasádě',
      caption: 'Parapet s okapničkou drží vodu dál od omítky — fasáda zůstane čistá.',
      layout: 'right',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Zateplená fasáda stárne tam, kde na ni teče voda: pod parapety, u soklu a na korunní římse. Proto každý parapet přesahuje líc omítky s okapničkou, sokl je z nenasákavého XPS a omítka u terénu končí nad stříkající zónou. Jsou to centimetry, které rozhodují o tom, jak bude fasáda vypadat za deset let.',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'První zima potvrdila výpočet: spotřeba plynu klesla o dvě pětiny.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Dotace pokryla zhruba třetinu nákladů, zbytek se majitelům vrací na účtech za plyn. A dům, kterému sousedi říkali „ten šedivý“, je dnes nejsvětlejší v ulici — majitelé poslali fotku fasády i s vánočním osvětlením. Takové zprávy nás baví nejvíc.',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Zateplená plocha 240 m², EPS 160 mm',
        'Realizace 3 týdny včetně stavby lešení',
        'Spotřeba plynu −40 % první zimu',
        'Dotace NZÚ ≈ třetina nákladů',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Váš dům si zaslouží víc než nejlevnější nabídku' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Zateplení nabízí dnes každý, kdo unese kbelík lepidla. Rozdíl se pozná za deset let — na parapetech, soklu a rozích, tedy přesně tam, kde jsme v Příbrami strávili nejvíc času. Pokud vlastníte dům, který plánujete předat dětem, vybírejte firmu podle detailů, ne podle ceny za metr.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'K zateplení od nás dostanete výpočet návratnosti, vyřízenou dotaci a fasádu, za kterou se nebudete muset omlouvat ani sousedům, ani odhadci. Zaměření a konzultace s energetickým specialistou je u nás samozřejmost, ne příplatek.',
    },
  ],

  'provetravana-fasada-admin': [
    { _type: 'block', style: 'h2', text: 'Zadání' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Administrativní budova na Praze-západ potřebovala reprezentativní plášť s minimální údržbou — investor pronajímá kanceláře a fasáda je první, co nájemci i jejich klienti vidí. Volba padla na provětrávanou fasádu z velkoformátových cementovláknitých desek: technologii, kde o výsledku rozhoduje přesnost každé spáry.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Před realizací jsme s dodavatelem desek připravili kladečský plán celé fasády: každá deska má své číslo, spáry navazují přes rohy budovy a formáty jsou rozvržené tak, aby kolem oken nevznikaly úzké dořezy. Papírová příprava trvala tři týdny — a na fasádě pak bylo vidět každý den z ní.',
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
      text: 'Na nosnou stěnu jsme kotvili hliníkové konzoly s přerušeným tepelným mostem, mezi profily přišla minerální vata s černou větrozábranou. Desky jsme kladli na skrytý nýtovaný spoj s otevřenou spárou — vzduchová mezera za obkladem konstrukci trvale odvětrává a izolace zůstává suchá, což je celý smysl technologie.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Budova zůstala v provozu po celou dobu prací. Lešení jsme stavěli po etapách kolem fasád, hlučné kotvení drželi mimo jednací hodiny nájemců a vstup chránil zastřešený koridor — provoz kanceláří se nezastavil ani na den.',
    },
    {
      _type: 'bulletList',
      items: [
        'Hliníkový rošt s přerušením tepelných mostů',
        'Minerální izolace s černou větrozábranou',
        'Velkoformátové cementovláknité desky',
        'Kladečský plán — spáry navazují přes rohy budovy',
        'Budova v provozu po celou dobu realizace',
      ],
    },
    {
      _type: 'imageWithMeta',
      name: 'story-provetravana-fasada-admin-1',
      alt: 'Detail otevřené spáry mezi fasádními deskami',
      caption: 'Otevřená spára 8 mm — vizitka celé technologie.',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Detaily, na kterých záleží' },
    {
      _type: 'block',
      style: 'normal',
      text: 'U provětrávané fasády není kam schovat nepřesnost: spára 8 mm musí mít 8 mm v přízemí i pod atikou. Každou řadu desek jsme vyrovnávali laserem a kotvili přes šablony, aby rozteče nýtů byly stejné na celé budově. Ostění oken jsou z ohýbaných kompozitních profilů v barvě desek — žádné viditelné řezy, žádné silikonové tmelení.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-provetravana-fasada-admin-2',
      alt: 'Vstup do budovy s deskovou fasádou',
      caption: 'Vstupní partie — desky, sklo a beton bez kompromisů.',
      layout: 'full',
    },
    { _type: 'block', style: 'h2', text: 'Výsledek' },
    {
      _type: 'block',
      style: 'blockquote',
      text: 'Fasáda, která nepotřebuje údržbu a nestárne — cementovláknité desky drží barvu i po desítkách let.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Investor získal nižší provozní náklady, lepší tepelnou stabilitu kanceláří a plášť, za který se návštěvám nemusí omlouvat. Dvě kancelářské jednotky se pronajaly ještě během stavby — nový plášť byl podle makléře hlavní argument prohlídek.',
    },
    {
      _type: 'imageWithMeta',
      name: 'story-provetravana-fasada-admin-3',
      alt: 'Budova za modré hodiny s rozsvícenými okny',
      layout: 'right',
    },
    { _type: 'block', style: 'h3', text: 'Čísla projektu' },
    {
      _type: 'bulletList',
      items: [
        'Plocha fasády 980 m², 612 desek dle kladečského plánu',
        'Realizace 11 týdnů za plného provozu budovy',
        'Rovinnost pláště ±2 mm na 2m lati',
        'Údržba: oplach vodou jednou za několik let',
      ],
    },
    { _type: 'block', style: 'h2', text: 'Reprezentuje vaše budova vaši firmu?' },
    {
      _type: 'block',
      style: 'normal',
      text: 'Fasáda je oblek vaší nemovitosti — a nájemci i obchodní partneři ji čtou dřív, než vejdou do dveří. Provětrávaný plášť z cementovláknitých desek je volba pro vlastníky, kteří počítají hodnotu aktiva na desetiletí: neblednoucí materiál, nulová údržba a technický detail, který obstojí i před architektem protistrany.',
    },
    {
      _type: 'block',
      style: 'normal',
      text: 'Umíme realizovat za plného provozu budovy a s kladečským plánem, který schválíte dřív, než se dotkneme fasády. Výsledek si můžete prohlédnout osobně — rádi vás na referenční budovu vezmeme.',
    },
  ],
};

export function getProjectBody(slug: string): RichTextBlock[] {
  return bodies[slug] ?? [];
}
