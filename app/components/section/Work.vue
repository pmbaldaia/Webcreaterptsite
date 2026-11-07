<script setup lang="ts">
import { WORK, UPCOMING_WORK } from '~/utils/content'
import { imageUrl, imageSrcSet } from '~/utils/portfolioImages'
</script>

<template>
  <section id="work" class="container py-12 sm:py-16" aria-labelledby="work-heading">
    <p class="badge">{{ WORK.label }}</p>
    <h2 id="work-heading" class="section-title">{{ WORK.headline }}</h2>
    <p class="paragraph mt-4 max-w-2xl">{{ WORK.subline }}</p>

    <div class="mt-9 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:gap-7">
      <article v-for="item in WORK.works" :key="item.name"
        class="portfolio-card flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111528] transition-colors duration-200 hover:border-white/30">
        <!-- A imagem é apenas demonstrativa. A ligação encontra-se abaixo do texto. -->
        <div class="flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0c1020]">
          <img :src="imageUrl(item.thumbnails, 960)" :srcset="imageSrcSet(item)"
            sizes="(min-width: 1280px) 610px, (min-width: 768px) 46vw, calc(100vw - 32px)"
            :alt="`Captura de ecrã do website ${item.name}`"
            :width="item.imageWidth" :height="item.imageHeight"
            loading="lazy" decoding="async" class="block h-full w-full object-cover object-top" />
        </div>

        <div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div class="flex min-w-0 flex-wrap items-start justify-between gap-3">
            <div class="min-w-0">
              <h3 class="text-lg font-semibold leading-snug text-white sm:text-xl">{{ item.name }}</h3>
              <p class="mt-1 text-xs font-medium uppercase tracking-wider text-blue-200">{{ item.type }}</p>
            </div>
            <span v-if="'status' in item && item.status"
              class="rounded-full border border-amber-300/35 bg-amber-100/5 px-3 py-1 text-xs font-medium text-amber-100">{{ item.status }}</span>
          </div>
          <p class="paragraph flex-1 text-sm sm:text-base">{{ item.description }}</p>
          <a :href="item.live_demo" target="_blank" rel="noopener noreferrer"
            :aria-label="`Visitar o site ${item.name} (abre numa nova janela)`"
            class="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
            Ver website
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </article>
    </div>

    <!-- Projetos em desenvolvimento ou pausa: sem ligação e fora do carrossel principal. -->
    <div class="mt-12 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12" aria-labelledby="upcoming-heading">
      <p class="badge">{{ UPCOMING_WORK.label }}</p>
      <h3 id="upcoming-heading" class="mt-4 text-xl font-semibold leading-tight text-white sm:text-2xl">
        {{ UPCOMING_WORK.headline }}
      </h3>
      <p class="paragraph mt-3 max-w-2xl text-sm sm:text-base">{{ UPCOMING_WORK.subline }}</p>

      <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
        <article
          v-for="item in UPCOMING_WORK.works"
          :key="item.name"
          class="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111528]"
        >
          <div class="flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0c1020]">
            <img
              :src="imageUrl(item.thumbnails, 960)"
              :srcset="imageSrcSet(item)"
              sizes="(min-width: 1280px) 610px, (min-width: 768px) 46vw, calc(100vw - 32px)"
              :alt="`Captura de ecrã do projeto ${item.name} (${item.status.toLowerCase()})`"
              :width="item.imageWidth"
              :height="item.imageHeight"
              loading="lazy"
              decoding="async"
              class="block h-full w-full object-cover object-top"
            />
          </div>
          <div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="min-w-0">
                <h4 class="text-lg font-semibold leading-snug text-white sm:text-xl">{{ item.name }}</h4>
                <p class="mt-1 text-xs font-medium uppercase tracking-wider text-blue-200">{{ item.type }}</p>
              </div>
              <span class="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                {{ item.status }}
              </span>
            </div>
            <p class="paragraph text-sm sm:text-base">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
