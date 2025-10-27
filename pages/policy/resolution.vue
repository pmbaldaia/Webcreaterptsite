<script setup lang="ts">
import { ref } from "vue";

const entities = [
  {
    name: "1. CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo",
    tel: "213 847 484",
    email: "cniacc@unl.pt",
    site: "www.cniacc.pt",
  },
  {
    name: "2. CIMAAL – Centro de Informação, Mediação e Arbitragem de Conflitos de Consumo do Algarve",
    tel: "289 823 135",
    email: "cimaal@mail.telepac.pt",
  },
  {
    name: "3. Centro de Arbitragem de Conflitos de Consumo do Distrito de Coimbra",
    tel: "239 821 690",
    email: "geral@centrodearbitragemdecoimbra.com",
  },
  {
    name: "4. Centro de Arbitragem de Conflitos de Consumo de Lisboa",
    tel: "218 807 000",
    email: "juridico@centroarbitragemlisboa.pt",
  },
  {
    name: "5. CICAP – Centro de Informação de Consumo e Arbitragem do Porto",
    tel: "225 508 349",
    email: "cicap@mail.telepac.pt",
  },
  {
    name: "6. Centro de Arbitragem de Conflitos de Consumo do Vale do Ave / Tribunal Arbitral",
    tel: "253 422 410",
    email: "triave@gmail.com",
  },
  {
    name: "7. CIAB – Centro de Informação, Mediação e Arbitragem de Consumo",
    tel: "253 617 604",
    email: "geral@ciab.pt",
  },
  {
    name: "8. Centro de Arbitragem de Conflitos de Consumo da Região Autónoma da Madeira",
    tel: "291 750 330",
    email: "centroarbitragem.sras@gov-madeira.pt",
  },
  {
    name: "9. CIMPAS – Centro de Informação, Mediação e Provedoria de Seguros",
    site: "www.cimpas.pt",
  },
];

const openIndexes = ref<number[]>([]);

const toggle = (index: number) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index);
  } else {
    openIndexes.value.push(index);
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-24 sm:pt-[200px] pb-16 bg-[#0a0a17]"
  >
    <h1 class="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
      Resolução de Litígios
    </h1>
    <p class="text-white/70 mb-12 max-w-3xl text-center">
      Em conformidade com a Lei n.º 144/2015, de 8 de setembro, o consumidor
      pode recorrer às seguintes entidades de Resolução Alternativa de Litígios.
      Mais informação em
      <a
        href="https://www.consumidor.gov.pt"
        target="_blank"
        class="text-blue-500 underline"
        >www.consumidor.gov.pt</a
      >.
    </p>

    <div class="w-full max-w-3xl flex flex-col gap-4">
      <div
        v-for="(entity, index) in entities"
        :key="index"
        class="bg-[#0b061a]/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
      >
        <button
          @click="toggle(index)"
          class="w-full text-left px-6 py-6 flex justify-between items-center text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{{ entity.name }}</span>
          <svg
            class="w-5 h-5 transition-transform duration-300"
            :class="{ 'rotate-180': openIndexes.includes(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          v-show="openIndexes.includes(index)"
          class="px-6 pb-6 pt-6 text-white/70 transition-all duration-300"
        >
          <p v-if="entity.tel">
            <span class="font-medium">Tel.:</span> {{ entity.tel }}
          </p>
          <p v-if="entity.email">
            <span class="font-medium">Email:</span>
            <a
              :href="'mailto:' + entity.email"
              class="text-blue-500 hover:underline"
              >{{ entity.email }}</a
            >
          </p>
          <p v-if="entity.site">
            <span class="font-medium">Site: </span>
            <a
              :href="'https://' + entity.site"
              target="_blank"
              class="text-blue-500 hover:underline"
              >{{ entity.site }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
