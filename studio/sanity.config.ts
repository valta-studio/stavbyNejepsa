import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {csCZLocale} from '@sanity/locale-cs-cz'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Stavby Nejepsa',

  projectId: 'xpi92g7z',
  dataset: 'production',

  plugins: [structureTool(), csCZLocale()],

  schema: {
    types: schemaTypes,
  },
})
