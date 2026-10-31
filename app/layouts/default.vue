<template>
  <a href="#conteudo" class="skip-to-content">Saltar para o conteúdo principal</a>
  <LayoutNavbar />
  <main id="conteudo" tabindex="-1" class="relative min-h-screen overflow-x-clip">
    <slot />
  </main>
  <LayoutFooter />
</template>
