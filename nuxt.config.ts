// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/aos@next/dist/aos.js' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos']
})