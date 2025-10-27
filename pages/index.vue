<template>
  <SectionHero />
  <LayoutLine />

  <div class="relative">
    <div
      class="bg-blue-700 top-0 -right-52 w-80 h-[40rem] absolute blur-[200px]"
    ></div>
    <SectionAbout />
  </div>

  <LayoutLine />
  <SectionService />
  <LayoutLine />

  <div class="relative">
    <div
      class="bg-blue-700 top-0 -left-52 w-80 h-[40rem] absolute blur-[200px]"
    ></div>
    <SectionWork />
  </div>

  <LayoutLine />
  <SectionContactUs />

  <WhatsAppIcon class="fixed z-[9999]" />
  <ScrollToTop class="fixed z-[9999]" />
</template>
