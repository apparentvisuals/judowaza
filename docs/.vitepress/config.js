import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "HuRoo",
  description: "A fan site of all things judo",
  lang: "en-CA",
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png', size: '150x150' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/favicon.png', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/huroo-192.png', sizes: '192x192' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: "HuRoo" }],
    ['meta', { name: 'keywords', content: 'Judo, IJF, Kata' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Kata', 
        items: [
          { text: 'Nage-no-kata', 
            items: [
              { text: 'Techniques', link: '/nage-no-kata/techniques' },
            ],
          },
          { text: 'Katame-no-kata', 
            items: [
              { text: 'Techniques', link: '/katame-no-kata/techniques' },
              { text: 'Judging', link: '/katame-no-kata/judging' },
            ],
          }
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
      icons: [
        {
          src: 'huroo-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'huroo-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'huroo-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
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
