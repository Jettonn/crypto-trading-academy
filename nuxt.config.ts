export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  srcDir: 'app',
  
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
        { name: 'description', content: 'Master crypto trading fundamentals - Week 1' }
      ]
    }
  },

  ssr: false
})
