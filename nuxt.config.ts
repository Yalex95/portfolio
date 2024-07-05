// https://nuxt.com/docs/api/configuration/nuxt-config
// In nuxt.config.js or in a component
// import 'swiper/swiper-bundle.css';

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
    exclude: [
      /^\/200/,
      /^\/404/   // Exclude routes like /200 from being generated if it's not a real page
    ]  },
    build: {
      transpile: ['swiper']
    },
  // Public runtime configuration
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_APP_BASE_URL || "http://localhost:3000",
  },
  devtools: { enabled: true },
});
