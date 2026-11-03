<script setup lang="ts">
import { PARTNERS } from '~/utils/content'
</script>

<template>
  <section id="partners" class="container py-12 sm:py-16" aria-labelledby="partners-heading">
    <p class="badge">{{ PARTNERS.label }}</p>
    <h2 id="partners-heading" class="section-title">{{ PARTNERS.headline }}</h2>
    <p class="paragraph mt-4 max-w-2xl">{{ PARTNERS.subline }}</p>

    <div class="mt-9 grid grid-cols-1 gap-5 sm:mt-12">
      <article
        v-for="partner in PARTNERS.items"
        :key="partner.name"
        class="overflow-hidden rounded-2xl border border-white/15 bg-[#111528]"
      >
        <div class="grid min-w-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <!-- A imagem é uma marca, não um banner: moldura compacta, sem área vazia. -->
          <div
            class="flex min-w-0 items-center justify-center border-b border-white/10 bg-[#0d1223] px-5 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-8"
          >
            <div class="w-full max-w-[480px] overflow-hidden rounded-xl bg-white p-3 shadow-lg shadow-black/15 sm:p-4">
              <img
                :src="partner.image"
                :alt="`Logótipo da ${partner.name}`"
                :width="partner.imageWidth"
                :height="partner.imageHeight"
                loading="lazy"
                decoding="async"
                class="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div class="flex min-w-0 flex-col justify-between p-5 sm:p-6">
            <div>
              <p class="text-sm font-medium uppercase tracking-[0.18em] text-blue-200">{{ partner.role }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-white">{{ partner.name }}</h3>
              <p class="paragraph mt-4 text-sm sm:text-base">{{ partner.description }}</p>

              <ul class="mt-5 flex flex-wrap gap-2" aria-label="Serviços do parceiro">
                <li
                  v-for="service in partner.services"
                  :key="service"
                  class="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 sm:text-sm"
                >
                  {{ service }}
                </li>
              </ul>
            </div>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                :href="partner.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                :aria-label="`Abrir o Instagram de ${partner.name} (abre numa nova janela)`"
              >
                Instagram · {{ partner.instagramHandle }}
              </a>
              <a
                :href="partner.phoneUrl"
                class="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5"
                :aria-label="`Ligar para ${partner.name}`"
              >
                {{ partner.phone }}
              </a>
              <a
                :href="partner.emailUrl"
                class="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 sm:col-span-2 break-all"
                :aria-label="`Enviar email para ${partner.name}`"
              >
                {{ partner.email }}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
