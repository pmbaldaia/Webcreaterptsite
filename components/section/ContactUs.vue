<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const acceptedTerms = ref(false);

const whatsappNumber = "351915970882";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

function sendEmail() {
  if (!name.value || !email.value || !message.value || !acceptedTerms.value) {
    alert(
      "Por favor, preencha todos os campos obrigatórios e aceite os termos de privacidade."
    );
    return;
  }

  const subject = encodeURIComponent(`Mensagem de ${name.value}`);
  const body = encodeURIComponent(
    `Nome: ${name.value}\nEmail: ${email.value}\n${
      phone.value ? `Telemóvel: ${phone.value}\n` : ""
    }\nMensagem:\n${message.value}`
  );

  window.location.href = `mailto:seuemail@dominio.com?subject=${subject}&body=${body}`;
}
</script>

<template>
  <section id="contactus" class="container py-16 px-4 sm:px-6 lg:px-8 relative">
    <h2 class="section-title text-center mb-8">Contacte-nos</h2>

    <div
      class="max-w-3xl mx-auto bg-[#0b061a]/40 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg flex flex-col gap-6"
    >
      <div class="flex flex-col gap-2">
        <label for="name" class="text-white/80"
          >Nome <span class="text-red-500">*</span></label
        >
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="O seu nome"
          class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
          tabindex="0"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-white/80"
          >Email <span class="text-red-500">*</span></label
        >
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="O seu email"
          class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
          tabindex="0"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="phone" class="text-white/80">Telemóvel</label>
        <input
          id="phone"
          type="tel"
          v-model="phone"
          placeholder="O seu telemóvel"
          class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
          tabindex="0"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="text-white/80"
          >Mensagem <span class="text-red-500">*</span></label
        >
        <textarea
          id="message"
          v-model="message"
          placeholder="Escreve a tua mensagem..."
          class="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
          rows="5"
          tabindex="0"
        ></textarea>
      </div>

      <div class="flex items-center gap-2">
        <input
          id="terms"
          type="checkbox"
          v-model="acceptedTerms"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-white focus:outline-none"
          tabindex="0"
        />
        <label for="terms" class="text-white/80 text-sm">
          Aceito os
          <NuxtLink to="/privacy" class="underline hover:text-white"
            >Termos de Privacidade</NuxtLink
          >
          <span class="text-red-500">*</span>
        </label>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="sendEmail"
          class="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          tabindex="0"
        >
          Enviar Email
        </button>

        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          tabindex="0"
        >
          <img src="/svg/whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
