<script setup lang="ts">
import { ref } from 'vue'
import { PROFILE, WHATSAPP_NUMBER } from '~/utils/content'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const acceptedTerms = ref(false)
const method = ref<'whatsapp' | 'email'>('whatsapp')

function sendMessage() {
  if (!acceptedTerms.value) return
  const details = [
    'Olá! Gostaria de pedir um orçamento à WebCreaterPT.',
    `Nome: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    ...(phone.value.trim() ? [`Telemóvel: ${phone.value.trim()}`] : []),
    `Projeto / mensagem: ${message.value.trim()}`,
  ].join('\n')

  if (method.value === 'whatsapp') {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Pedido de orçamento — ${name.value.trim()}`)}&body=${encodeURIComponent(details)}`
  }
}
</script>

<template>
  <section id="contactus" class="container relative py-12 sm:py-16" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-3xl text-center">
      <p class="badge">Vamos conversar?</p>
      <h2 id="contact-heading" class="section-title mx-auto">Vamos falar do seu projeto?</h2>
      <p class="paragraph mt-4">Conte-nos o que tem em mente. Entraremos em contacto através do canal que escolher.</p>
    </div>

    <form @submit.prevent="sendMessage" class="mx-auto mt-8 flex max-w-3xl flex-col gap-5 rounded-2xl border border-white/15 bg-[#111528] p-4 shadow-lg sm:p-8">
      <div class="grid gap-5 sm:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label for="contact-name" class="text-sm font-medium text-white">Nome <span aria-hidden="true">*</span></label>
          <input id="contact-name" v-model="name" type="text" name="name" required maxlength="120" autocomplete="name" placeholder="O seu nome"
                 class="contact-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="contact-email" class="text-sm font-medium text-white">Email <span aria-hidden="true">*</span></label>
          <input id="contact-email" v-model="email" type="email" name="email" required maxlength="254" autocomplete="email" placeholder="O seu email"
                 class="contact-input" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="contact-phone" class="text-sm font-medium text-white">Telemóvel <span class="font-normal text-white/70">(opcional)</span></label>
        <input id="contact-phone" v-model="phone" type="tel" name="phone" autocomplete="tel" maxlength="35" placeholder="O seu telemóvel"
               class="contact-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="contact-message" class="text-sm font-medium text-white">Mensagem <span aria-hidden="true">*</span></label>
        <textarea id="contact-message" v-model="message" name="message" required maxlength="3000" rows="5" placeholder="Descreva o seu projeto ou o que pretende melhorar..."
                  class="contact-input min-h-32 resize-y"></textarea>
      </div>
      <div class="flex items-start gap-3">
        <input id="contact-terms" v-model="acceptedTerms" name="terms" type="checkbox" required class="mt-1 h-5 w-5 shrink-0 accent-blue-500" />
        <label for="contact-terms" class="text-sm leading-relaxed text-white/85">Li e aceito a <NuxtLink to="/policy/privacy" class="underline underline-offset-4 hover:text-white">Política de Privacidade</NuxtLink>. <span aria-hidden="true">*</span></label>
      </div>
      <p class="text-xs leading-relaxed text-white/70">Os dados são preparados no seu dispositivo e abertos no WhatsApp ou na sua aplicação de email. A mensagem só é enviada após a sua confirmação nesse serviço.</p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <button type="submit" @click="method = 'whatsapp'" class="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#167d43] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#116437] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <img src="/svg/whatsapp.svg" alt="" width="22" height="22" class="h-5 w-5 brightness-0 invert" />
          Enviar pelo WhatsApp
        </button>
        <button type="submit" @click="method = 'email'" class="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
          Enviar por email
        </button>
      </div>
    </form>
  </section>
</template>
