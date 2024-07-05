// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // plugins: ["~/plugins/scroll.ts"],
  target: "static",

  router: {
    base: "/portfolio/",
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  css: ["~/assets/css/style.css"],
  generate: {
    fallback: true,
  },
  // Public runtime configuration
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_APP_BASE_URL || "http://localhost:3000",
  },
  devtools: { enabled: true },
});
