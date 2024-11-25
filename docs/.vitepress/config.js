import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "HuRoo",
  description: "A fan site of all things judo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Kata', 
        items: [
          { text: 'Nage-no-kata', link: '/nage-no-kata/techniques' },
          { text: 'Katame-no-kata', link: '/katame-no-kata/techniques' },
        ],
      },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/nage/perform': {
        title: 'Test',
        items: [
          { text: 'Link 1', link: '/api-examples' },
        ]
      }
    },
    prev: false,
    next: false,
    docFooter: {
      next: false,
      prev: false
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'HuRoo Judo',
      short_name: 'HuRoo',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },
}))
