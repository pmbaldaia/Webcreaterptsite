export default defineNuxtConfig({
  compatibilityDate: '2026-10-31',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false,
  },
  site: {
    url: 'https://www.webcreaterpt.pt',
    name: 'WebCreaterPT',
  },
  app: {
    head: {
      title: 'WebCreaterPT | Lojas Shopify e Soluções Digitais',
      meta: [{ name: 'google-site-verification', content: '3O2YIPvOwdjbvZ--rL92eCjFs8y6GsPtUpcrmEsrI80' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },
  // As quatro páginas existentes são estáticas e podem ser servidas sem SSR por pedido.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/policy/privacy', '/policy/terms', '/policy/resolution', '/sitemap.xml'],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/policy/**': { prerender: true },
  },
  typescript: { typeCheck: false },
});
