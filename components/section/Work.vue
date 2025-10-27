<template>
  <LayoutScrollSmooth>
    <section id="work" class="container">
      <p class="badge">{{ WORK.label }}</p>
      <h2 class="section-title">{{ WORK.headline }}</h2>
      <p class="paragraph mt-4 max-w-xl">{{ WORK.subline }}</p>

      <div class="grid md:grid-cols-2 gap-6 mt-16">
        <div
          v-for="item in WORK.works"
          :key="item.name"
          class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
        >
          <div class="overflow-hidden aspect-[4/3] rounded-lg">
            <img
              class="group-hover:scale-105 transition-all duration-500 w-full h-full object-cover"
              :src="'/images/work/' + item.thumbnails"
              :alt="'Thumbnail ' + item.name"
            />
          </div>

          <div
            class="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t from-black/90 to-black/30 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4"
          >
            <div>
              <div class="flex items-center justify-between">
                <div>
                  <h3
                    class="text-white text-lg lg:text-xl tracking-wide font-bold"
                  >
                    {{ item.name }}
                  </h3>
                  <p class="font-medium uppercase tracking-wide text-gray-600">
                    {{ item.type }}
                  </p>
                </div>
                <a
                  :href="item.live_demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VsxIcon
                    class="text-gray-400"
                    iconName="ExportSquare"
                    :size="24"
                    type="linear"
                  />
                </a>
              </div>

              <div
                class="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"
              ></div>

              <p class="paragraph text-gray-400">{{ item.description }}</p>
            </div>
          </div>

          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
