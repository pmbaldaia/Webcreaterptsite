<template>
  <LayoutScrollSmooth>
    <section id="service" class="container py-12 sm:py-16">
      <p class="badge">{{ SERVICE.label }}</p>
      <h2 class="section-title">{{ SERVICE.headline }}</h2>
      <p class="paragraph mt-4 max-w-xl">{{ SERVICE.subline }}</p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 sm:mt-16"
      >
        <div
          v-for="(item, index) in SERVICE.services"
          :key="index"
          class="relative flex flex-col items-start p-8 bg-[#0b061a]/40 backdrop-blur-sm border border-white/10 rounded-2xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
          tabindex="0"
        >
          <div
            class="absolute inset-0 -z-10 rounded-2xl bg-[#0b50e5]/20 animate-pulse"
          ></div>

          <div
            class="inline-flex p-3 rounded-lg border border-primary shadow-[0px_0px_15px_-3px_rgba(85,_132,_255,_0.5)] bg-[#0b061a]/60"
          >
            <VsxIcon
              :iconName="item.icon"
              :size="28"
              color="#5584FF"
              type="linear"
            />
          </div>

          <h4 class="mt-5 text-xl font-semibold tracking-wide text-white">
            {{ item.name }}
          </h4>
          <p class="text-white/50 mt-2">{{ item.description }}</p>

          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
