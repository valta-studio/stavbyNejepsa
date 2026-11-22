import {defineArrayMember, defineField, defineType} from 'sanity'

// Kategorie = `category` služeb v src/data/services.ts (filtr na /realizace, stránky služeb).
const categories = [
  {title: 'Rodinné domy na klíč', value: 'rodinne-domy'},
  {title: 'Dřevostavby', value: 'drevostavby'},
  {title: 'Zděné domy', value: 'zdene-domy'},
  {title: 'Rekonstrukce', value: 'rekonstrukce'},
  {title: 'Střechy', value: 'strechy'},
  {title: 'Ploché střechy', value: 'ploche-strechy'},
  {title: 'Šikmé střechy', value: 'sikme-strechy'},
  {title: 'Fasády', value: 'fasady'},
  {title: 'Zateplení fasád', value: 'zatepleni'},
  {title: 'Provětrávané fasády', value: 'provetravane-fasady'},
]

// Technologie = `slug` z src/data/technologies.ts.
const technologies = [
  {title: 'Rekuperace', value: 'rekuperace'},
  {title: 'Podomítkové boxy', value: 'podomitkove-boxy'},
  {title: 'Tepelná čerpadla', value: 'tepelna-cerpadla'},
  {title: 'Klimatizace', value: 'klimatizace'},
  {title: 'Fotovoltaika', value: 'fotovoltaika'},
  {title: 'Broušené cihelné bloky', value: 'brousene-cihly'},
  {title: 'Konstrukční dřevo KVH / BSH', value: 'kvh-bsh'},
  {title: 'Hydroizolační PVC fólie', value: 'pvc-folie'},
  {title: 'Betonová střešní krytina', value: 'betonova-taska'},
  {title: 'Zateplovací systém ETICS', value: 'etics'},
  {title: 'Cementovláknité fasádní desky', value: 'cementovlaknite-desky'},
  {title: 'Spádové izolační klíny', value: 'spadove-kliny'},
]

export const project = defineType({
  name: 'project',
  title: 'Realizace',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Adresa stránky',
      description: 'Část adresy za /realizace/ — vygenerujte tlačítkem z názvu.',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokalita',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Rok dokončení',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1990).max(2100),
    }),
    defineField({
      name: 'featured',
      title: 'Zobrazit na úvodní stránce',
      description: 'Na úvodní stránce se ukážou první tři označené realizace (nejnovější první).',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Hlavní fotografie',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Krátký popis',
      description: 'Jedna až dvě věty — úvod detailu a popis pro vyhledávače.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {list: categories},
    }),
    defineField({
      name: 'scope',
      title: 'Rozsah prací',
      description: 'Krátká hesla, např. „Dřevostavba na klíč“.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'technologies',
      title: 'Použité technologie',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {list: technologies},
    }),
    defineField({
      name: 'stages',
      title: 'Postup realizace',
      description: 'Fotky od začátku do konce stavby — ideálně čtyři.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'stage',
          title: 'Fáze',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Popisek',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'image', title: 'Fotografie', type: 'image'}),
          ],
          preview: {select: {title: 'title', media: 'image'}},
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Odstavec', value: 'normal'},
            {title: 'Nadpis', value: 'h2'},
            {title: 'Podnadpis', value: 'h3'},
            {title: 'Citace', value: 'blockquote'},
          ],
          lists: [{title: 'Odrážky', value: 'bullet'}],
          // Web vykresluje čistý text — tučné písmo a odkazy editor nenabízí.
          marks: {decorators: [], annotations: []},
        }),
        defineArrayMember({
          type: 'image',
          title: 'Fotografie',
          fields: [
            defineField({name: 'alt', title: 'Popis fotografie (pro nevidomé)', type: 'string'}),
            defineField({name: 'caption', title: 'Popisek pod fotografií', type: 'string'}),
            // Dočasná fotka ze src/assets/photos, dokud se v CMS nenahraje skutečná.
            defineField({name: 'placeholder', type: 'string', hidden: true}),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {title: 'Nejnovější', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', location: 'location', year: 'year', media: 'image'},
    prepare: ({title, location, year, media}) => ({
      title,
      subtitle: [location, year].filter(Boolean).join(' · '),
      media,
    }),
  },
})
