<script setup lang="ts">
import { FAQ } from '~/utils/content'
</script>

<template>
  <section
    id="faq"
    class="container py-12 sm:py-16"
    aria-labelledby="faq-heading"
  >
    <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
      <div>
        <p class="badge">{{ FAQ.label }}</p>
        <h2 id="faq-heading" class="section-title">{{ FAQ.headline }}</h2>
        <p class="paragraph mt-4 max-w-lg">{{ FAQ.subline }}</p>
      </div>

      <div class="space-y-3">
        <details
          v-for="item in FAQ.items"
          :key="item.question"
          class="faq-item group overflow-hidden rounded-xl border border-white/15 bg-[#111528] transition-colors hover:border-white/30"
        >
          <summary
            class="faq-question flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold leading-relaxed text-white outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-blue-300 sm:px-6 sm:text-base"
          >
            <span>{{ item.question }}</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-blue-200 transition-transform duration-200 group-open:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p class="px-5 pb-5 text-sm leading-relaxed text-white/80 sm:px-6 sm:pb-6 sm:text-base">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-question::-webkit-details-marker { display: none; }
.faq-question::marker { content: ''; }
@media (prefers-reduced-motion: reduce) {
  .faq-question svg { transition: none; }
}
</style>
