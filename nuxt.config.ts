// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  css: ["~/assets/css/style.css"],
  // plugins: ["~/plugins/scroll.ts"],
target:'static',
  router: {
    base: "/<portfolio>/",
  },

  generate: {
    fallback: true,
  },
  // Public runtime configuration
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_APP_BASE_URL || 'http://localhost:3000'
  }
});
