<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue'
import { PROFILE, WHATSAPP_NUMBER } from '~/utils/content'

type ContactMethod = 'whatsapp' | 'email'
type RequiredField = 'name' | 'email' | 'message' | 'terms'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const acceptedTerms = ref(false)
const method = ref<ContactMethod>('whatsapp')

const errors = reactive<Record<RequiredField, string>>({
  name: '',
  email: '',
  message: '',
  terms: '',
})

const fieldIds: Record<RequiredField, string> = {
  name: 'contact-name',
  email: 'contact-email',
  message: 'contact-message',
  terms: 'contact-terms',
}

function validateField(field: RequiredField): boolean {
  switch (field) {
    case 'name':
      errors.name = name.value.trim() ? '' : 'Indique o seu nome.'
      break
    case 'email': {
      const value = email.value.trim()
      errors.email = !value
        ? 'Indique o seu email.'
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Indique um endereço de email válido.'
      break
    }
    case 'message':
      errors.message = message.value.trim() ? '' : 'Descreva brevemente o seu projeto.'
      break
    case 'terms':
      errors.terms = acceptedTerms.value ? '' : 'É necessário aceitar a Política de Privacidade.'
      break
  }
  return !errors[field]
}

// Revalida apenas os campos que já apresentavam um erro, evitando avisos prematuros.
function refreshError(field: RequiredField) {
  if (errors[field]) validateField(field)
}

function sendMessage() {
  const fields: RequiredField[] = ['name', 'email', 'message', 'terms']
  let firstInvalid: RequiredField | undefined
  for (const field of fields) {
    if (!validateField(field) && !firstInvalid) firstInvalid = field
  }

  if (firstInvalid) {
    // O foco segue o primeiro campo inválido depois de o Vue renderizar o respetivo erro.
    void nextTick(() => document.getElementById(fieldIds[firstInvalid])?.focus())
    return
  }

  const details = [
    'Olá! Gostaria de pedir um orçamento à WebCreaterPT.',
    `Nome: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    ...(phone.value.trim() ? [`Telemóvel: ${phone.value.trim()}`] : []),
    `Projeto / mensagem: ${message.value.trim()}`,
  ].join('\n')

  // Apenas abre a aplicação escolhida; o envio exige confirmação do utilizador.
  if (method.value === 'whatsapp') {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Pedido de orçamento — ${name.value.trim()}`)}&body=${encodeURIComponent(details)}`
  }
}
</script>

<template>
  <section
    id="contactus"
    class="container py-12 sm:py-16"
    aria-labelledby="contact-heading"
  >
    <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
      <div class="min-w-0 lg:pt-5">
        <p class="badge">Contacto</p>
        <h2 id="contact-heading" class="section-title">Vamos falar do seu projeto?</h2>
        <p class="paragraph mt-4 max-w-lg">
          Conte-nos o que pretende criar ou melhorar. Pode enviar os detalhes por WhatsApp
          ou pela sua aplicação de email.
        </p>

        <div class="mt-8 border-t border-white/15 pt-6">
          <p class="text-sm font-semibold text-white">Contactos diretos</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm sm:text-base">
            <a
              :href="`mailto:${PROFILE.email}`"
              class="break-all text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >{{ PROFILE.email }}</a>
            <a
              :href="`tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`"
              class="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >{{ PROFILE.phone }}</a>
          </div>
        </div>
      </div>

      <form
        novalidate
        aria-describedby="contact-sending-info"
        class="min-w-0 rounded-2xl border border-white/15 bg-[#111528] p-5 shadow-lg shadow-black/10 sm:p-7 lg:p-8"
        @submit.prevent="sendMessage"
      >
        <div class="mb-6">
          <h3 class="text-xl font-semibold leading-snug text-white">Descreva-nos o seu projeto</h3>
          <p class="mt-2 text-sm text-white/70">Os campos assinalados com * são obrigatórios.</p>
        </div>

        <div class="grid items-start gap-x-4 gap-y-3 sm:grid-cols-2">
          <div class="flex min-w-0 flex-col">
            <label for="contact-name" class="mb-2 text-sm font-medium text-white">
              Nome <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              v-model="name"
              type="text"
              name="name"
              required
              maxlength="120"
              autocomplete="name"
              placeholder="O seu nome"
              class="contact-input"
              :aria-invalid="!!errors.name"
              aria-describedby="contact-name-error"
              @blur="validateField('name')"
              @input="refreshError('name')"
            />
            <p id="contact-name-error" class="mt-1.5 min-h-5 text-xs leading-5 text-rose-200" aria-live="polite">{{ errors.name || ' ' }}</p>
          </div>

          <div class="flex min-w-0 flex-col">
            <label for="contact-email" class="mb-2 text-sm font-medium text-white">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              v-model="email"
              type="email"
              name="email"
              required
              maxlength="254"
              autocomplete="email"
              autocapitalize="off"
              spellcheck="false"
              placeholder="O seu email"
              class="contact-input"
              :aria-invalid="!!errors.email"
              aria-describedby="contact-email-error"
              @blur="validateField('email')"
              @input="refreshError('email')"
            />
            <p id="contact-email-error" class="mt-1.5 min-h-5 text-xs leading-5 text-rose-200" aria-live="polite">{{ errors.email || ' ' }}</p>
          </div>

          <div class="flex min-w-0 flex-col sm:col-span-2">
            <label for="contact-phone" class="mb-2 text-sm font-medium text-white">
              Telemóvel <span class="font-normal text-white/65">(opcional)</span>
            </label>
            <input
              id="contact-phone"
              v-model="phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              maxlength="35"
              placeholder="O seu telemóvel"
              class="contact-input"
            />
          </div>

          <div class="flex min-w-0 flex-col sm:col-span-2">
            <label for="contact-message" class="mb-2 text-sm font-medium text-white">
              Mensagem <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              v-model="message"
              name="message"
              required
              maxlength="3000"
              rows="5"
              placeholder="Descreva o seu projeto ou o que pretende melhorar..."
              class="contact-input min-h-32 resize-y"
              :aria-invalid="!!errors.message"
              aria-describedby="contact-message-error"
              @blur="validateField('message')"
              @input="refreshError('message')"
            ></textarea>
            <p id="contact-message-error" class="mt-1.5 min-h-5 text-xs leading-5 text-rose-200" aria-live="polite">{{ errors.message || ' ' }}</p>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex items-start gap-3">
            <input
              id="contact-terms"
              v-model="acceptedTerms"
              name="terms"
              type="checkbox"
              required
              class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              :aria-invalid="!!errors.terms"
              aria-describedby="contact-terms-error"
              @change="refreshError('terms')"
            />
            <label for="contact-terms" class="min-w-0 text-sm leading-relaxed text-white/85">
              Li e aceito a
              <NuxtLink to="/policy/privacy" class="underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">Política de Privacidade</NuxtLink>.
              <span aria-hidden="true">*</span>
            </label>
          </div>
          <p id="contact-terms-error" class="mt-1.5 min-h-5 pl-8 text-xs leading-5 text-rose-200" aria-live="polite">{{ errors.terms || ' ' }}</p>
        </div>

        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#167d43] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#116437] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            @click="method = 'whatsapp'"
          >
            <img src="/svg/whatsapp.svg" alt="" width="20" height="20" class="h-5 w-5 shrink-0 brightness-0 invert" />
            Enviar pelo WhatsApp
          </button>
          <button
            type="submit"
            class="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            @click="method = 'email'"
          >
            Enviar por email
          </button>
        </div>

        <p id="contact-sending-info" class="mt-4 text-xs leading-relaxed text-white/65">
          A mensagem é preparada no seu dispositivo e aberta na aplicação escolhida.
          Só é enviada depois de confirmar o envio no WhatsApp ou no email.
        </p>
      </form>
    </div>
  </section>
</template>
