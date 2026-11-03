<script setup lang="ts">
import { ABOUT, PROFILE } from '~/utils/content'
</script>

<template>
  <section id="about" class="container py-12 sm:py-16" aria-labelledby="about-heading">
    <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <p class="badge">{{ ABOUT.label }}</p>
        <h2 id="about-heading" class="section-title">{{ PROFILE.fullname }}</h2>
        <p v-for="intro in ABOUT.introduce" :key="intro" class="paragraph mt-4 max-w-xl">{{ intro }}</p>
      </div>
      <div class="flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#111528] p-4 sm:p-6">
        <img :src="PROFILE.avatar" :alt="`Identidade visual da ${PROFILE.fullname}`"
          width="500" height="500" loading="lazy" decoding="async"
          class="h-auto max-h-72 w-auto max-w-full rounded-lg object-contain sm:max-h-80" />
      </div>
    </div>
  </section>
</template>
