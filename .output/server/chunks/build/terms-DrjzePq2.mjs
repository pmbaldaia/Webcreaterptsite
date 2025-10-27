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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container py-16 px-4 sm:px-6 lg:px-8" }, _attrs))}><h1 class="text-4xl font-bold text-white mb-8">Termos de Uso</h1><div class="space-y-6 text-white/80 leading-relaxed"><p> Ao aceder ou utilizar este site, concorda com os seguintes termos e condi\xE7\xF5es. Caso n\xE3o concorde, por favor n\xE3o utilize os nossos servi\xE7os. </p><h2 class="text-2xl font-semibold mt-4">1. Propriedade intelectual</h2><p> Todo o conte\xFAdo do site, incluindo textos, imagens, design e log\xF3tipos, \xE9 protegido por direitos de autor e pertence \xE0 WebcreaterPT ou aos respetivos autores. \xC9 proibida a c\xF3pia ou utiliza\xE7\xE3o sem autoriza\xE7\xE3o. </p><h2 class="text-2xl font-semibold mt-4">2. Uso do site</h2><p> Pode utilizar o site apenas para fins l\xEDcitos e n\xE3o comerciais. \xC9 proibido interferir com a funcionalidade do site ou aceder a conte\xFAdos de forma n\xE3o autorizada. </p><h2 class="text-2xl font-semibold mt-4"> 3. Conte\xFAdo fornecido pelo utilizador </h2><p> Qualquer mensagem ou conte\xFAdo enviado atrav\xE9s do formul\xE1rio de contacto deve respeitar as leis e n\xE3o conter informa\xE7\xF5es falsas, ofensivas ou ilegais. O utilizador \xE9 respons\xE1vel pelo conte\xFAdo enviado. </p><h2 class="text-2xl font-semibold mt-4"> 4. Limita\xE7\xE3o de responsabilidade </h2><p> Embora fa\xE7amos todos os esfor\xE7os para garantir a precis\xE3o e disponibilidade do site, n\xE3o nos responsabilizamos por danos diretos ou indiretos resultantes do seu uso. </p><h2 class="text-2xl font-semibold mt-4">5. Altera\xE7\xF5es aos termos</h2><p> Estes termos podem ser atualizados a qualquer momento. Recomendamos que consulte esta p\xE1gina regularmente. </p><p class="mt-4">\xDAltima atualiza\xE7\xE3o: 27 de Outubro de 2025</p></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policy/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { terms as default };
//# sourceMappingURL=terms-DrjzePq2.mjs.map
