// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "vuetify-nuxt-module"],
  css: ['primevue/resources/themes/lara-light-pink/theme.css']
})