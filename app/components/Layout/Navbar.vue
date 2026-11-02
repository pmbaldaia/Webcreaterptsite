<script setup lang="ts">
import { ref, watch } from 'vue'
import { NAVLINKS, WHATSAPP_QUOTE_URL } from '~/utils/content'

const isOpen = ref(false)
const route = useRoute()
const activeLink = computed(() => route.hash || (route.path === '/' ? '#hero' : ''))
watch(() => route.fullPath, () => { isOpen.value = false })
function closeMenu() { isOpen.value = false }
function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b1b]/95 shadow-lg shadow-black/20 backdrop-blur-md" @keydown="handleEscape">
    <div class="container mx-auto flex min-h-[76px] items-center justify-between gap-3 py-2 sm:min-h-[88px]">
      <NuxtLink to="/#hero" class="flex shrink-0 items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300" aria-label="WebCreaterPT — voltar à página inicial" @click="closeMenu">
        <img src="/images/new-logowhite.png" alt="WebCreaterPT" width="500" height="500"
              class="h-16 w-auto object-contain sm:h-20 lg:h-24" fetchpriority="high" decoding="async" />
      </NuxtLink>

      <nav id="menu-principal" aria-label="Navegação principal"
        :class="[
          'absolute inset-x-4 top-[calc(100%+0.5rem)] rounded-xl border border-white/15 bg-[#111528] p-4 shadow-2xl lg:static lg:flex lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none',
          isOpen ? 'block' : 'hidden lg:flex',
        ]"
      >
        <NuxtLink v-for="link in NAVLINKS" :key="link.label" :to="`/${link.url}`"
          class="block rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 lg:py-2 lg:text-sm xl:text-base"
          :aria-current="activeLink === link.url && route.path === '/' ? 'location' : undefined"
          @click="closeMenu">{{ link.label }}</NuxtLink>
        <div class="mt-3 flex flex-wrap gap-3 border-t border-white/10 pt-3 lg:hidden">
          <a href="https://facebook.com/webcreaterpt" target="_blank" rel="noopener noreferrer" aria-label="Facebook da WebCreaterPT" class="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"><img src="/svg/facebook.svg" alt="" class="h-6 w-6" /></a>
          <a href="https://instagram.com/webcreaterpt" target="_blank" rel="noopener noreferrer" aria-label="Instagram da WebCreaterPT" class="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"><img src="/svg/instagram.svg" alt="" class="h-6 w-6" /></a>
        </div>
      </nav>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <a :href="WHATSAPP_QUOTE_URL" target="_blank" rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:px-4"
          aria-label="Contactar a WebCreaterPT por WhatsApp (abre numa nova janela)">
          <img src="/svg/whatsapp.svg" alt="" width="20" height="20" class="h-5 w-5 brightness-0 invert" />
          <span class="hidden sm:inline">WhatsApp</span>
        </a>
        <button type="button" class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/25 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 lg:hidden"
          :aria-expanded="isOpen" aria-controls="menu-principal" :aria-label="isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
          @click="isOpen = !isOpen">
          <img :src="isOpen ? '/svg/ic-close.svg' : '/svg/ic-hamburger.svg'" alt="" width="24" height="24" />
        </button>
      </div>
    </div>
  </header>
</template>
