export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Webcreaterpt | Shopify Partner",
      meta: [
        {
          name: "google-site-verification",
          content: "3O2YIPvOwdjbvZ--rL92eCjFs8y6GsPtUpcrmEsrI80",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
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
    hostname: "https://www.webcreaterpt.pt",
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
