<script setup lang="ts">
const whatsappNumber = "351915970882";
const whatsappLink = `https://wa.me/${whatsappNumber}`;
</script>

<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300 animate-pulse cursor-pointer"
    aria-label="Contactar pelo WhatsApp"
  >
    <img src="/svg/whatsapp.svg" alt="WhatsApp" class="w-7 h-7" />
  </a>
</template>
