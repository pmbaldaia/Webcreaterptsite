import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'ipx';
import 'vue-router';
import 'vue-iconsax';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] pb-16" }, _attrs))}><h1 class="text-4xl font-bold text-white mb-8">Pol\xEDtica de Privacidade</h1><div class="space-y-6 text-white/80 leading-relaxed"><p> A sua privacidade \xE9 importante para n\xF3s. Esta pol\xEDtica explica como recolhemos, utilizamos e protegemos os seus dados pessoais ao visitar o nosso site. </p><h2 class="text-2xl font-semibold mt-4">1. Informa\xE7\xF5es que recolhemos</h2><p> Podemos recolher informa\xE7\xF5es como nome, email, telem\xF3vel e mensagens enviadas atrav\xE9s do nosso formul\xE1rio de contacto. Estes dados s\xE3o fornecidos voluntariamente pelo utilizador. </p><h2 class="text-2xl font-semibold mt-4">2. Uso das informa\xE7\xF5es</h2><p> Os dados recolhidos s\xE3o utilizados exclusivamente para responder \xE0s suas mensagens, melhorar a nossa comunica\xE7\xE3o e prestar os nossos servi\xE7os. N\xE3o partilhamos os seus dados com terceiros para fins de marketing. </p><h2 class="text-2xl font-semibold mt-4"> 3. Cookies e tecnologias semelhantes </h2><p> O nosso site pode utilizar cookies para melhorar a experi\xEAncia do utilizador, manter sess\xF5es ativas e analisar tr\xE1fego. Pode configurar o seu navegador para recusar cookies. </p><h2 class="text-2xl font-semibold mt-4">4. Direitos do utilizador</h2><p> Pode solicitar a qualquer momento a consulta, altera\xE7\xE3o ou elimina\xE7\xE3o dos seus dados pessoais, enviando um email para <a href="mailto:teuemail@dominio.com" class="underline hover:text-white">teuemail@dominio.com</a>. </p><h2 class="text-2xl font-semibold mt-4">5. Seguran\xE7a dos dados</h2><p> Implementamos medidas t\xE9cnicas e organizacionais para proteger os seus dados contra acessos n\xE3o autorizados, perda ou altera\xE7\xE3o. </p><h2 class="text-2xl font-semibold mt-4">6. Altera\xE7\xF5es \xE0 pol\xEDtica</h2><p> Esta pol\xEDtica pode ser atualizada ocasionalmente. Recomendamos que consulte esta p\xE1gina periodicamente para se manter informado. </p><p class="mt-4">\xDAltima atualiza\xE7\xE3o: 27 de Outubro de 2025</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policy/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { privacy as default };
//# sourceMappingURL=privacy-CY6VSN3e.mjs.map
