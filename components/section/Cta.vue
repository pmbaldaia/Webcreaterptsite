<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#0b061a] text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img
              src="/images/profile.jpeg"
              alt="Logo"
              class="w-12 h-12 rounded-full object-cover"
            />
            <span class="font-bold text-lg">{{ PROFILE.fullname }}</span>
          </NuxtLink>
          <p class="text-sm text-white/60">{{ PROFILE.description }}</p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Navegação</h3>
          <ul class="space-y-2">
            <li v-for="link in NAVLINKS" :key="link.label">
              <NuxtLink
                :to="link.url"
                class="text-white/60 hover:text-white transition-colors duration-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Contacto</h3>
          <p class="text-sm text-white/60">
            Telefone:
            <a :href="`tel:${PROFILE.phone}`" class="hover:text-white">
              {{ PROFILE.phone }}
            </a>
          </p>
          <p class="text-sm text-white/60">
            Email:
            <a :href="`mailto:${PROFILE.email}`" class="hover:text-white">
              {{ PROFILE.email }}
            </a>
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Redes Sociais</h3>
          <div class="flex gap-4">
            <a
              href="https://facebook.com/webcreaterpt"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img src="/svg/facebook.svg" alt="Facebook" class="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/webcreaterpt"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img src="/svg/instagram.svg" alt="Instagram" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/30"
      >
        &copy; {{ currentYear }}
        <NuxtLink
          to="https://webcreaterpt.com"
          target="_blank"
          class="hover:text-white"
        >
          WebcreaterPT </NuxtLink
        >. Todos os direitos reservados.
      </div>
    </div>

    <div
      class="absolute -z-10 bottom-0 w-full h-40 bg-gradient-to-t from-[#0b50e5]/20 via-transparent to-transparent blur-2xl"
    ></div>
  </footer>
</template>
