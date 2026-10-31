<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"
       fill="none" stroke="#5584FF" stroke-width="1.7" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'ShoppingCart'">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </template>
    <template v-else-if="name === 'Settings'">
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42" />
      <circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </template>
    <template v-else>
      <path d="M4.4 19a10 10 0 1 1 15.2 0" />
      <path d="m12 13 5-5" /><circle cx="12" cy="14" r="1.5" />
      <path d="M8 19h8" />
    </template>
  </svg>
</template>
