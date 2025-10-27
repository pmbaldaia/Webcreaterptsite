<script setup lang="ts"></script>

<template>
  <LayoutScrollSmooth>
    <section id="about" class="container py-12 sm:py-16">
      <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Content -->
        <div>
          <p class="badge">{{ ABOUT.label }}</p>
          <h2 class="section-title">
            {{ PROFILE.fullname }}
          </h2>

          <p class="paragraph mt-4" v-for="intro in ABOUT.introduce">
            {{ intro }}
          </p>

          <Button
            class="mt-8"
            label="Connect Me"
            to="#contact"
            variant="btn-dark"
          />
        </div>

        <div
          class="p-3 border bg-[#0b061a]/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
        >
          <p class="absolute top-4 text-white/20 font-medium p-2">
            Logo da Webcreaterpt
          </p>
          <div>
            <div>
              <img
                class="rounded-lg"
                :src="PROFILE.avatar"
                :alt="`${PROFILE.fullname} - ${PROFILE.role}`"
              />
            </div>
          </div>
          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>
          <div
            class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] blur-2xl h-40 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
