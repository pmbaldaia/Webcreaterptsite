<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isVisible.value = window.scrollY > 300;
  });
});
</script>

<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 z-[9999] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
    aria-label="Scroll to top"
    tabindex="0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>
