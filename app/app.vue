<script setup lang="ts">
import { PROFILE } from '~/utils/content'

const route = useRoute()
useHead(() => ({
  htmlAttrs: { lang: 'pt-PT' },
  link: [{ rel: 'canonical', href: `https://www.webcreaterpt.pt${route.path}` }],
}))
useSeoMeta({
  title: 'WebCreaterPT | Lojas Shopify e Soluções Digitais',
  description: PROFILE.description,
  ogTitle: 'WebCreaterPT | Lojas Shopify e Soluções Digitais',
  ogDescription: PROFILE.description,
  ogType: 'website',
  ogLocale: 'pt_PT',
  twitterCard: 'summary',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
