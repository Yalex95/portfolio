

export default defineNuxtConfig({
  // target: "static",

  // router: {
  //   base: "/portfolio/",
  // },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  css: ["~/assets/css/style.css"],
  nitro: {
    firebase: {
      gen: 2
    }
  },
  // generate: {
  //   fallback: true,
  //   exclude: [
  //     /^\/200/,
  //     /^\/404/, // Exclude routes like /200 from being generated if it's not a real page
  //   ],
  // },
  // build: {
  //   publicPath: "/portfolio/_nuxt/",
  // },
  devtools: { enabled: true },
});
