<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NAVLINKS } from "~/utils/content";

const router = useRouter();
const route = useRoute();
const isActive = ref(false);
const activeLink = ref("#hero");

function toggleMenu() {
  isActive.value = !isActive.value;
}

async function navigate(link: string) {
  isActive.value = false;

  const hash = link.startsWith("#")
    ? link
    : link.includes("#")
    ? "#" + link.split("#")[1]
    : "";
  activeLink.value = hash;

  // Se já não estivermos na página inicial, redireciona para "/"
  if (route.path !== "/") {
    await router.push("/");
    // Espera o DOM renderizar
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  if (hash) {
    const element = document.querySelector(hash);
    const headerOffset = 100;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  if (link.startsWith("http")) {
    window.open(link, "_blank");
  }
}

onMounted(() => {
  const currentHash = window.location.hash;
  if (currentHash) activeLink.value = currentHash;
});
</script>

<template>
  <header
    class="max-w-[1480px] px-4 mx-auto fixed inset-x-0 top-0 mt-4 lg:mt-10 z-50"
  >
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <NuxtImg
          src="/images/logoSemFundo.png"
          alt="Logo"
          class="h-14 w-auto sm:h-24 md:h-20 lg:h-24 xl:h-28 transition-all duration-300"
        />
      </NuxtLink>

      <nav
        :class="[
          'absolute top-16 inset-x-4 lg:inset-0 lg:relative flex flex-col lg:flex-row gap-8 items-center px-7 py-8 lg:py-0 transition-all duration-300',
          isActive
            ? 'block bg-black/80 backdrop-blur-md rounded-lg'
            : 'hidden lg:flex',
        ]"
      >
        <NuxtLink
          v-for="link in NAVLINKS"
          :key="link.label"
          class="text-white relative text-xl lg:text-base cursor-pointer"
          @click.prevent="navigate(link.url)"
        >
          <span class="relative z-10">{{ link.label }}</span>
          <span
            class="absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300"
            :class="
              activeLink === '#' + link.url.split('#')[1] ? 'w-full' : 'w-0'
            "
          ></span>
        </NuxtLink>

        <div v-if="isActive" class="mt-6 flex gap-4 justify-center lg:hidden">
          <a
            href="https://facebook.com/webcreaterpt"
            target="_blank"
            class="text-white cursor-pointer"
          >
            <img src="/svg/facebook.svg" alt="Facebook" class="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/webcreaterpt"
            target="_blank"
            class="text-white cursor-pointer"
          >
            <img src="/svg/instagram.svg" alt="Instagram" class="h-6 w-6" />
          </a>
        </div>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden lg:flex gap-4">
          <a
            href="https://facebook.com/webcreaterpt"
            target="_blank"
            class="cursor-pointer"
          >
            <img src="/svg/facebook.svg" alt="Facebook" class="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/webcreaterpt"
            target="_blank"
            class="cursor-pointer"
          >
            <img src="/svg/instagram.svg" alt="Instagram" class="h-6 w-6" />
          </a>
        </div>

        <button @click="toggleMenu" class="lg:hidden px-4 py-2 cursor-pointer">
          <img
            class="transition-transform duration-300"
            :src="isActive ? '/svg/ic-close.svg' : '/svg/ic-hamburger.svg'"
            alt="Menu"
          />
        </button>
      </div>
    </div>
  </header>
</template>
