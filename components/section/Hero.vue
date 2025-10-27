<script setup lang="ts">
import { ref } from "vue";

const headerOffset = 100;

function navigate(link: string) {
  const element = document.querySelector(link);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
</script>

<template>
  <div
    id="hero"
    class="container relative pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16"
  >
    <div class="z-10 relative flex flex-col items-center">
      <div class="badge flex items-center gap-2">
        <div class="animate-pulse w-2 h-2 rounded-full bg-green-500"></div>
        <p class="text-center">{{ HERO.badge }}</p>
      </div>

      <h1
        class="max-w-4xl mx-auto text-center text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 !leading-snug"
      >
        {{ HERO.headline }}
      </h1>

      <p class="paragraph mt-4 text-center max-w-xl mx-auto">
        {{ HERO.subline }}
      </p>

      <div class="flex gap-4 items-center mt-8 flex-wrap justify-center">
        <button
          @click="navigate('#work')"
          class="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Ver Trabalhos
        </button>
      </div>
    </div>

    <div class="w-full inline-flex flex-nowrap relative overflow-hidden mt-16">
      <div
        class="h-full w-24 bg-gradient-to-r from-dark to-transparent left-0 inset-y-0 absolute z-10"
      ></div>
      <div
        class="h-full w-24 bg-gradient-to-l from-dark to-transparent right-0 inset-y-0 absolute z-10"
      ></div>

      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll hover:animate-pause"
      >
        <li
          v-for="item in WORK.works"
          :key="item.name + '-scroll1'"
          class="overflow-hidden group"
        >
          <img
            class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"
            :src="'/images/work/' + item.thumbnails"
            :alt="item.name"
          />
        </li>
        <li
          v-for="item in WORK.works"
          :key="item.name + '-scroll2'"
          class="overflow-hidden group"
          aria-hidden="true"
        >
          <img
            class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"
            :src="'/images/work/' + item.thumbnails"
            :alt="item.name"
          />
        </li>
      </ul>
    </div>

    <div
      class="absolute -top-40 right-40 rotate-45 w-14 h-[800px] bg-blue-700 blur-[100px]"
    ></div>
    <div class="absolute top-0 left-0 w-screen h-screen index-bg">
      <div class="h-0">
        <div class="star"></div>
        <div
          class="star"
          style="top: 80px; left: 800px; animation-delay: 3s"
        ></div>
        <div
          class="star"
          style="top: 40px; left: 646px; animation-delay: 2s"
        ></div>
        <div
          class="star"
          style="top: 120px; left: 395px; animation-delay: 4s"
        ></div>
        <div
          class="star"
          style="top: 160px; left: 765px; animation-delay: 1s"
        ></div>
        <div
          class="star"
          style="top: 170px; left: 1200px; animation-delay: 2s"
        ></div>
        <div
          class="star"
          style="top: 200px; left: 1000px; animation-delay: 1s"
        ></div>
      </div>
    </div>
  </div>
</template>
