<script setup lang="ts">
import { HERO, WHATSAPP_QUOTE_URL } from '~/utils/content'
</script>

<template>
  <section id="hero" class="container relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40" aria-labelledby="hero-heading">
    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <p class="badge">{{ HERO.badge }}</p>
      <h1 id="hero-heading" class="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-tight leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
        {{ HERO.headline }}
      </h1>
      <p class="paragraph mx-auto mt-5 max-w-2xl text-base sm:text-lg">{{ HERO.subline }}</p>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a :href="WHATSAPP_QUOTE_URL" target="_blank" rel="noopener noreferrer"
          class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3a60e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto">
          Falar sobre um projeto
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </a>
        <NuxtLink to="/#work" class="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto">
          Ver portefólio
        </NuxtLink>
      </div>
    </div>
    <PortfolioShowcase />
  </section>
</template>
