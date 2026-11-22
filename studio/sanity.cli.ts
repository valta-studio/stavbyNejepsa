import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xpi92g7z',
    dataset: 'production',
  },
  // `npm run deploy` → https://stavby-nejepsa.sanity.studio
  studioHost: 'stavby-nejepsa',
  deployment: {
    autoUpdates: true,
  },
})
