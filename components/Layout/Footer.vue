<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#0b061a] text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 px-2 sm:px-0">
        <div class="flex flex-col">
          <h3 class="text-white font-semibold mb-2">Perfil</h3>
          <div class="text-sm text-white/60 leading-relaxed space-y-1">
            <p>{{ PROFILE.fullname }}</p>
            <p>
              Criamos soluções digitais inteligentes e elegantes, transformando
              ideias em experiências online envolventes e memoráveis para cada
              negócio.
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <h3 class="text-white font-semibold mb-2">Navegação</h3>
          <ul class="space-y-2 text-sm text-white/60">
            <li v-for="link in NAVLINKS" :key="link.label">
              <NuxtLink
                :to="link.url"
                class="hover:text-white transition-colors duration-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h3 class="text-white font-semibold mb-2">Contacto</h3>
          <div class="text-sm text-white/60 space-y-1">
            <p>
              Telefone:
              <a :href="`tel:${PROFILE.phone}`" class="hover:text-white">{{
                PROFILE.phone
              }}</a>
            </p>
            <p>
              Email:
              <a :href="`mailto:${PROFILE.email}`" class="hover:text-white">{{
                PROFILE.email
              }}</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <h3 class="text-white font-semibold mb-2">Redes Sociais</h3>
          <div class="flex gap-4 mb-4">
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
        class="mt-8 sm:mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/30 px-2 sm:px-0"
      >
        <div class="flex flex-wrap justify-center items-center gap-4">
          <span>&copy; {{ currentYear }} Todos os direitos reservados</span>
          <span>|</span>
          <NuxtLink
            to="/policy/privacy"
            class="hover:text-white transition-colors duration-300"
          >
            Política de Privacidade
          </NuxtLink>
          <span>|</span>
          <NuxtLink
            to="/policy/terms"
            class="hover:text-white transition-colors duration-300"
          >
            Termos de Uso
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="absolute -z-10 bottom-0 w-full h-40 bg-gradient-to-t from-[#0b50e5]/20 via-transparent to-transparent blur-2xl"
    ></div>
  </footer>
</template>
