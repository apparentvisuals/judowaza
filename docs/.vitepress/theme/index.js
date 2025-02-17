// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import './tailwind.css'
import './style.css'
import './custom.css'

import RegisterSW from './components/RegisterSW.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(RegisterSW)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
