<script setup lang="ts">
import { SERVICE } from '~/utils/content'
</script>

<template>
  <section id="service" class="container py-14 sm:py-20" aria-labelledby="service-heading">
    <p class="badge">{{ SERVICE.label }}</p>
    <h2 id="service-heading" class="section-title">{{ SERVICE.headline }}</h2>
    <p class="paragraph mt-4 max-w-2xl">{{ SERVICE.subline }}</p>
    <div class="mt-9 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <article v-for="item in SERVICE.services" :key="item.name"
        class="flex h-full min-w-0 flex-col items-start rounded-2xl border border-white/15 bg-[#111528] p-5 sm:p-6">
        <div class="inline-flex rounded-lg border border-white/15 bg-white/5 p-3 text-blue-200">
          <ServiceIcon :name="item.icon" />
        </div>
        <h3 class="mt-5 text-lg font-semibold leading-snug text-white">{{ item.name }}</h3>
        <p class="paragraph mt-3 text-sm">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
