// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt3-leaflet",
  ],
  components: [{ path: "~/components", pathPrefix: false }],

  css: ["assets/css/main.css", "leaflet/dist/leaflet.css"],

  tailwindcss: {
    configPath: "~/tailwind.config.cjs",
    cssPath: "assets/css/main.css",
  },
});
