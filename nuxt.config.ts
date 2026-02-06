export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/icon'],

  ui: {
    icons: ['heroicons', 'lucide']
  },

  colorMode: {
    preference: 'dark'
  },

  app: {
    head: {
      title: 'Crypto Trading Academy',
      meta: [
        { name: 'description', content: 'Master crypto trading fundamentals - Week 1: Risk Management & Foundations' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  ssr: false
})
