export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Webcreaterpt | Shopify Partner",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
  sitemap: {
    gzip: true,
    routes: [
      "/",
      "/#about",
      "/#work",
      "/#services",
      "/#contact",
      "/policy/privacy",
      "/policy/terms",
    ],
  },
});
