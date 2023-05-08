import { defineConfig, presetUno } from 'unocss'
import { presetIcons } from '@unocss/preset-icons'
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        bxl: () => import('@iconify-json/bxl/icons.json').then(i => i.default)
      }
    })
  ]
})
