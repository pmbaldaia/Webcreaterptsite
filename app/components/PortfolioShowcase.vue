<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import 'swiper/css/a11y'
import { WORK } from '~/utils/content'
import { imageSrcSet, imageUrl } from '~/utils/portfolioImages'

const modules = [Autoplay, A11y]
const hasMounted = ref(false)
const isPlaying = ref(false)
const reduceMotion = ref(false)
const instance = shallowRef<SwiperInstance | null>(null)
let motionPreference: MediaQueryList | null = null

function onMotionChange(event: MediaQueryListEvent) {
  reduceMotion.value = event.matches
  if (event.matches) {
    isPlaying.value = false
    instance.value?.autoplay?.stop()
  }
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = motionPreference.matches
  isPlaying.value = !reduceMotion.value
  motionPreference.addEventListener('change', onMotionChange)
  hasMounted.value = true
  // O Swiper pode já ter emitido @swiper antes deste onMounted.
  // Garantimos o arranque mesmo quando a preferência é conhecida mais tarde.
  if (isPlaying.value) instance.value?.autoplay?.start()
  else instance.value?.autoplay?.stop()
})

onBeforeUnmount(() => {
  motionPreference?.removeEventListener('change', onMotionChange)
  instance.value = null
})

function onSwiper(swiper: SwiperInstance) {
  instance.value = swiper
  if (isPlaying.value) swiper.autoplay?.start()
  else swiper.autoplay?.stop()
}

function togglePlayback() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) instance.value?.autoplay?.start()
  else instance.value?.autoplay?.stop()
}
</script>

<template>
  <div class="mt-11 sm:mt-12" aria-labelledby="showcase-title">
    <div class="mb-4 flex items-center justify-between gap-4 sm:mb-5">
      <div>
        <h2 id="showcase-title" class="text-base font-semibold text-white sm:text-lg">Alguns dos nossos trabalhos</h2>
        <p class="mt-1 text-sm text-white/65">Uma seleção de projetos recentes.</p>
      </div>
      <!-- Controlo acessível só com ícone: a etiqueta é anunciada pelo leitor de ecrã. -->
      <button v-if="hasMounted" type="button"
        :aria-label="isPlaying ? 'Pausar apresentação de projetos' : 'Retomar apresentação de projetos'"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        @click="togglePlayback">
        <svg v-if="isPlaying" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
        <svg v-else aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="m8 5 12 7-12 7z"/></svg>
      </button>
    </div>

    <!-- O fallback SSR mostra uma pré-visualização enquanto o Swiper é carregado no cliente. -->
    <ClientOnly>
      <Swiper
        :modules="modules"
        :slides-per-view="1.12"
        :space-between="16"
        :loop="true"
        :loop-additional-slides="3"
        :speed="6500"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: true }"
        :a11y="{ enabled: true, containerMessage: 'Galeria de pré-visualizações dos projetos', slideLabelMessage: 'Projeto {{index}} de {{slidesLength}}' }"
        :breakpoints="{ 640: { slidesPerView: 1.6, spaceBetween: 16 }, 900: { slidesPerView: 2.2, spaceBetween: 18 }, 1200: { slidesPerView: 3, spaceBetween: 18 } }"
        class="showcase-swiper"
        :class="{ 'is-playing': isPlaying }"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="item in WORK.works" :key="item.name" class="!h-auto">
          <!-- Apenas visual: sem links ou handlers de clique nas imagens. -->
          <figure class="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-[#111528]">
            <div class="flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0c1020]">
              <img :src="imageUrl(item.thumbnails, 480)" :srcset="imageSrcSet(item)"
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 55vw, 90vw"
                :width="item.imageWidth" :height="item.imageHeight"
                :alt="`Pré-visualização do website ${item.name}`"
                loading="lazy" decoding="async" draggable="false"
                class="block h-full w-full object-cover object-top" />
            </div>
            <figcaption class="flex min-h-[52px] items-center px-4 py-3 text-sm font-medium leading-snug text-white/90">{{ item.name }}</figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
      <template #fallback>
        <div class="grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-3" aria-label="Pré-visualizações de projetos">
          <figure v-for="(item, index) in WORK.works.slice(0, 3)" :key="item.name"
            class="min-w-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-[#111528]"
            :class="index === 0 ? 'flex' : index === 1 ? 'hidden sm:flex' : 'hidden lg:flex'">
            <div class="flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0c1020]">
              <img :src="imageUrl(item.thumbnails, 480)" :width="item.imageWidth" :height="item.imageHeight"
                :alt="`Pré-visualização do website ${item.name}`" class="block h-full w-full object-cover object-top" decoding="async" />
            </div>
            <figcaption class="flex min-h-[52px] items-center px-4 py-3 text-sm font-medium leading-snug text-white/90">{{ item.name }}</figcaption>
          </figure>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.showcase-swiper { overflow: hidden; }
.showcase-swiper :deep(.swiper-slide) { height: auto; }
/* Sem acelerações ou pausas entre projetos: movimento contínuo e linear. */
.showcase-swiper :deep(.swiper-wrapper) {
  align-items: stretch;
  transition-timing-function: linear !important;
}
@media (prefers-reduced-motion: reduce) {
  /* O autoplay só arranca se a preferência permitir movimento.
     Se o visitante clicar em reproduzir, respeitamos essa escolha. */
  .showcase-swiper.is-playing :deep(.swiper-wrapper) {
    transition-duration: 6500ms !important;
  }
}
</style>
