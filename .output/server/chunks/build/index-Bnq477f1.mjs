import { H as HERO, W as WORK, A as ABOUT, P as PROFILE, S as SERVICE } from './content-FFe-puz6.mjs';
import { defineComponent, mergeProps, unref, ref, withCtx, createTextVNode, createVNode, createBlock, toDisplayString, openBlock, Fragment, renderList, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DmUtxfw1.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'vue-router';
import 'vue-iconsax';
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

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "container relative pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16"
      }, _attrs))}><div class="z-10 relative flex flex-col items-center"><div class="badge flex items-center gap-2"><div class="animate-pulse w-2 h-2 rounded-full bg-green-500"></div><p class="text-center">${ssrInterpolate(("HERO" in _ctx ? _ctx.HERO : unref(HERO)).badge)}</p></div><h1 class="max-w-4xl mx-auto text-center text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 !leading-snug">${ssrInterpolate(("HERO" in _ctx ? _ctx.HERO : unref(HERO)).headline)}</h1><p class="paragraph mt-4 text-center max-w-xl mx-auto">${ssrInterpolate(("HERO" in _ctx ? _ctx.HERO : unref(HERO)).subline)}</p><div class="flex gap-4 items-center mt-8 flex-wrap justify-center"><button class="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"> Ver Trabalhos </button></div></div><div class="w-full inline-flex flex-nowrap relative overflow-hidden mt-16"><div class="h-full w-24 bg-gradient-to-r from-dark to-transparent left-0 inset-y-0 absolute z-10"></div><div class="h-full w-24 bg-gradient-to-l from-dark to-transparent right-0 inset-y-0 absolute z-10"></div><ul class="flex items-center justify-center md:justify-start [&amp;_li]:mx-2 [&amp;_img]:max-w-none animate-infinite-scroll hover:animate-pause"><!--[-->`);
      ssrRenderList(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).works, (item) => {
        _push(`<li class="overflow-hidden group"><img class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"${ssrRenderAttr("src", "/images/work/" + item.thumbnails)}${ssrRenderAttr("alt", item.name)}></li>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).works, (item) => {
        _push(`<li class="overflow-hidden group" aria-hidden="true"><img class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"${ssrRenderAttr("src", "/images/work/" + item.thumbnails)}${ssrRenderAttr("alt", item.name)}></li>`);
      });
      _push(`<!--]--></ul></div><div class="absolute -top-40 right-40 rotate-45 w-14 h-[800px] bg-blue-700 blur-[100px]"></div><div class="absolute top-0 left-0 w-screen h-screen index-bg"><div class="h-0"><div class="star"></div><div class="star" style="${ssrRenderStyle({ "top": "80px", "left": "800px", "animation-delay": "3s" })}"></div><div class="star" style="${ssrRenderStyle({ "top": "40px", "left": "646px", "animation-delay": "2s" })}"></div><div class="star" style="${ssrRenderStyle({ "top": "120px", "left": "395px", "animation-delay": "4s" })}"></div><div class="star" style="${ssrRenderStyle({ "top": "160px", "left": "765px", "animation-delay": "1s" })}"></div><div class="star" style="${ssrRenderStyle({ "top": "170px", "left": "1200px", "animation-delay": "2s" })}"></div><div class="star" style="${ssrRenderStyle({ "top": "200px", "left": "1000px", "animation-delay": "1s" })}"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Hero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><div class="my-8 w-4/5 h-[1px] bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Line.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
function useInView(targetRef) {
  const isVisible = ref(false);
  return { isVisible };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ScrollSmooth",
  __ssrInlineRender: true,
  setup(__props) {
    const el = ref(null);
    const { isVisible } = useInView();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: { "animate-fade": unref(isVisible) }
      }, _attrs))} data-v-b7263d55>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/ScrollSmooth.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b7263d55"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: {},
    to: {},
    variant: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: ["group relative overflow-hidden inline-flex", __props.variant ? "btn-dark" : "btn-primary"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 group-hover:h-1/2 transition-all duration-500"${_scopeId}></div><div class="relative overflow-hidden"${_scopeId}><p class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"${_scopeId}>${ssrInterpolate(__props.label)}</p><p class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"${_scopeId}>${ssrInterpolate(__props.label)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 group-hover:h-1/2 transition-all duration-500" }),
              createVNode("div", { class: "relative overflow-hidden" }, [
                createVNode("p", { class: "group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" }, toDisplayString(__props.label), 1),
                createVNode("p", { class: "absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" }, toDisplayString(__props.label), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_LayoutScrollSmooth = __nuxt_component_0;
  const _component_Button = _sfc_main$7;
  _push(ssrRenderComponent(_component_LayoutScrollSmooth, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="about" class="container py-12 sm:py-16"${_scopeId}><div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8"${_scopeId}><div${_scopeId}><p class="badge"${_scopeId}>${ssrInterpolate(("ABOUT" in _ctx ? _ctx.ABOUT : unref(ABOUT)).label)}</p><h2 class="section-title"${_scopeId}>${ssrInterpolate(("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).fullname)}</h2><!--[-->`);
        ssrRenderList(("ABOUT" in _ctx ? _ctx.ABOUT : unref(ABOUT)).introduce, (intro) => {
          _push2(`<p class="paragraph mt-4"${_scopeId}>${ssrInterpolate(intro)}</p>`);
        });
        _push2(`<!--]-->`);
        _push2(ssrRenderComponent(_component_Button, {
          class: "mt-8",
          label: "Connect Me",
          to: "#contact",
          variant: "btn-dark"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="p-3 border bg-[#0b061a]/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"${_scopeId}><p class="absolute top-4 text-white/20 font-medium p-2"${_scopeId}> Logo da Webcreaterpt </p><div${_scopeId}><div${_scopeId}><img class="rounded-lg"${ssrRenderAttr("src", ("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).avatar)}${ssrRenderAttr("alt", `${("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).fullname} - ${("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).role}`)}${_scopeId}></div></div><div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"${_scopeId}></div><div class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] blur-2xl h-40 animate-pulse"${_scopeId}></div></div></div></section>`);
      } else {
        return [
          createVNode("section", {
            id: "about",
            class: "container py-12 sm:py-16"
          }, [
            createVNode("div", { class: "grid items-center grid-cols-1 lg:grid-cols-2 gap-8" }, [
              createVNode("div", null, [
                createVNode("p", { class: "badge" }, toDisplayString(("ABOUT" in _ctx ? _ctx.ABOUT : unref(ABOUT)).label), 1),
                createVNode("h2", { class: "section-title" }, toDisplayString(("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).fullname), 1),
                (openBlock(true), createBlock(Fragment, null, renderList(("ABOUT" in _ctx ? _ctx.ABOUT : unref(ABOUT)).introduce, (intro) => {
                  return openBlock(), createBlock("p", { class: "paragraph mt-4" }, toDisplayString(intro), 1);
                }), 256)),
                createVNode(_component_Button, {
                  class: "mt-8",
                  label: "Connect Me",
                  to: "#contact",
                  variant: "btn-dark"
                })
              ]),
              createVNode("div", { class: "p-3 border bg-[#0b061a]/40 justify-center backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group" }, [
                createVNode("p", { class: "absolute top-4 text-white/20 font-medium p-2" }, " Logo da Webcreaterpt "),
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("img", {
                      class: "rounded-lg",
                      src: ("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).avatar,
                      alt: `${("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).fullname} - ${("PROFILE" in _ctx ? _ctx.PROFILE : unref(PROFILE)).role}`
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode("div", { class: "absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0" }),
                createVNode("div", { class: "-z-10 absolute bottom-4 w-96 bg-[#0b50e5] blur-2xl h-40 animate-pulse" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_LayoutScrollSmooth = __nuxt_component_0;
  const _component_VsxIcon = resolveComponent("VsxIcon");
  _push(ssrRenderComponent(_component_LayoutScrollSmooth, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="service" class="container py-12 sm:py-16"${_scopeId}><p class="badge"${_scopeId}>${ssrInterpolate(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).label)}</p><h2 class="section-title"${_scopeId}>${ssrInterpolate(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).headline)}</h2><p class="paragraph mt-4 max-w-xl"${_scopeId}>${ssrInterpolate(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).subline)}</p><div class="grid md:grid-cols-3 gap-6 mt-12 sm:mt-16"${_scopeId}><!--[-->`);
        ssrRenderList(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).services, (item) => {
          _push2(`<div class="card relative flex items-center p-10"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="inline-flex p-2 rounded-lg border border-primary shadow-[0px_0px_15px_-3px_rgba(85,_132,_255,_0.5)]"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_VsxIcon, {
            iconName: item.icon,
            size: 24,
            color: "#5584FF",
            type: "linear"
          }, null, _parent2, _scopeId));
          _push2(`</div></div><div class="mt-5"${_scopeId}><h4 class="text-xl font-semibold tracking-wide text-white"${_scopeId}>${ssrInterpolate(item.name)}</h4><p class="text-white/50 mt-2"${_scopeId}>${ssrInterpolate(item.description)}</p></div></div><div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"${_scopeId}></div><div class="-z-10 absolute bottom-0 w-40 bg-[#0b50e5] blur-2xl h-40 animate-pulse"${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div></section>`);
      } else {
        return [
          createVNode("section", {
            id: "service",
            class: "container py-12 sm:py-16"
          }, [
            createVNode("p", { class: "badge" }, toDisplayString(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).label), 1),
            createVNode("h2", { class: "section-title" }, toDisplayString(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).headline), 1),
            createVNode("p", { class: "paragraph mt-4 max-w-xl" }, toDisplayString(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).subline), 1),
            createVNode("div", { class: "grid md:grid-cols-3 gap-6 mt-12 sm:mt-16" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(("SERVICE" in _ctx ? _ctx.SERVICE : unref(SERVICE)).services, (item) => {
                return openBlock(), createBlock("div", { class: "card relative flex items-center p-10" }, [
                  createVNode("div", null, [
                    createVNode("div", null, [
                      createVNode("div", { class: "inline-flex p-2 rounded-lg border border-primary shadow-[0px_0px_15px_-3px_rgba(85,_132,_255,_0.5)]" }, [
                        createVNode(_component_VsxIcon, {
                          iconName: item.icon,
                          size: 24,
                          color: "#5584FF",
                          type: "linear"
                        }, null, 8, ["iconName"])
                      ])
                    ]),
                    createVNode("div", { class: "mt-5" }, [
                      createVNode("h4", { class: "text-xl font-semibold tracking-wide text-white" }, toDisplayString(item.name), 1),
                      createVNode("p", { class: "text-white/50 mt-2" }, toDisplayString(item.description), 1)
                    ])
                  ]),
                  createVNode("div", { class: "absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0" }),
                  createVNode("div", { class: "-z-10 absolute bottom-0 w-40 bg-[#0b50e5] blur-2xl h-40 animate-pulse" })
                ]);
              }), 256))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Service.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LayoutScrollSmooth = __nuxt_component_0;
  const _component_VsxIcon = resolveComponent("VsxIcon");
  _push(ssrRenderComponent(_component_LayoutScrollSmooth, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="work" class="container py-12 sm:py-16" aria-labelledby="work-heading"${_scopeId}><p class="badge"${_scopeId}>${ssrInterpolate(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).label)}</p><h2 id="work-heading" class="section-title"${_scopeId}>${ssrInterpolate(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).headline)}</h2><p class="paragraph mt-4 max-w-xl"${_scopeId}>${ssrInterpolate(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).subline)}</p><div class="grid md:grid-cols-2 gap-6 mt-12 sm:mt-16"${_scopeId}><!--[-->`);
        ssrRenderList(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).works, (item) => {
          _push2(`<article class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group" tabindex="0"${_scopeId}><div class="overflow-hidden aspect-[4/3] rounded-lg"${_scopeId}><img class="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover"${ssrRenderAttr("src", "/images/work/" + item.thumbnails)}${ssrRenderAttr("alt", "Imagem do projeto " + item.name)}${_scopeId}></div><div class="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t from-black/90 to-black/30 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4" aria-hidden="false"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h3 class="text-white text-lg lg:text-xl tracking-wide font-bold"${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="font-medium uppercase tracking-wide text-gray-400"${_scopeId}>${ssrInterpolate(item.type)}</p></div><a${ssrRenderAttr("href", item.live_demo)} target="_blank" rel="noopener noreferrer" aria-label="Ver projeto {{ item.name }} ao vivo" class="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_VsxIcon, {
            class: "text-gray-400",
            iconName: "ExportSquare",
            size: 24,
            type: "linear"
          }, null, _parent2, _scopeId));
          _push2(`</a></div><div class="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"${_scopeId}></div><p class="paragraph text-gray-400"${_scopeId}>${ssrInterpolate(item.description)}</p></div></div><div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0" aria-hidden="true"${_scopeId}></div></article>`);
        });
        _push2(`<!--]--></div></section>`);
      } else {
        return [
          createVNode("section", {
            id: "work",
            class: "container py-12 sm:py-16",
            "aria-labelledby": "work-heading"
          }, [
            createVNode("p", { class: "badge" }, toDisplayString(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).label), 1),
            createVNode("h2", {
              id: "work-heading",
              class: "section-title"
            }, toDisplayString(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).headline), 1),
            createVNode("p", { class: "paragraph mt-4 max-w-xl" }, toDisplayString(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).subline), 1),
            createVNode("div", { class: "grid md:grid-cols-2 gap-6 mt-12 sm:mt-16" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(("WORK" in _ctx ? _ctx.WORK : unref(WORK)).works, (item) => {
                return openBlock(), createBlock("article", {
                  key: item.name,
                  class: "p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group",
                  tabindex: "0"
                }, [
                  createVNode("div", { class: "overflow-hidden aspect-[4/3] rounded-lg" }, [
                    createVNode("img", {
                      class: "group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover",
                      src: "/images/work/" + item.thumbnails,
                      alt: "Imagem do projeto " + item.name
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", {
                    class: "absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t from-black/90 to-black/30 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4",
                    "aria-hidden": "false"
                  }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-white text-lg lg:text-xl tracking-wide font-bold" }, toDisplayString(item.name), 1),
                          createVNode("p", { class: "font-medium uppercase tracking-wide text-gray-400" }, toDisplayString(item.type), 1)
                        ]),
                        createVNode("a", {
                          href: item.live_demo,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": "Ver projeto {{ item.name }} ao vivo",
                          class: "focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        }, [
                          createVNode(_component_VsxIcon, {
                            class: "text-gray-400",
                            iconName: "ExportSquare",
                            size: 24,
                            type: "linear"
                          })
                        ], 8, ["href"])
                      ]),
                      createVNode("div", { class: "bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2" }),
                      createVNode("p", { class: "paragraph text-gray-400" }, toDisplayString(item.description), 1)
                    ])
                  ]),
                  createVNode("div", {
                    class: "absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0",
                    "aria-hidden": "true"
                  })
                ]);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Work.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/svg/whatsapp.svg");
const whatsappNumber$1 = "351915970882";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const acceptedTerms = ref(false);
    const whatsappLink = `https://wa.me/${whatsappNumber$1}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contactus",
        class: "container py-16 px-4 sm:px-6 lg:px-8 relative"
      }, _attrs))}><h2 class="section-title text-center mb-8">Contacte-nos</h2><div class="max-w-3xl mx-auto bg-[#0b061a]/40 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg flex flex-col gap-6"><div class="flex flex-col gap-2"><label for="name" class="text-white/80">Nome <span class="text-red-500">*</span></label><input id="name" type="text"${ssrRenderAttr("value", name.value)} placeholder="O seu nome" class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white" tabindex="0"></div><div class="flex flex-col gap-2"><label for="email" class="text-white/80">Email <span class="text-red-500">*</span></label><input id="email" type="email"${ssrRenderAttr("value", email.value)} placeholder="O seu email" class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white" tabindex="0"></div><div class="flex flex-col gap-2"><label for="phone" class="text-white/80">Telem\xF3vel</label><input id="phone" type="tel"${ssrRenderAttr("value", phone.value)} placeholder="O seu telem\xF3vel" class="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white" tabindex="0"></div><div class="flex flex-col gap-2"><label for="message" class="text-white/80">Mensagem <span class="text-red-500">*</span></label><textarea id="message" placeholder="Escreve a tua mensagem..." class="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white resize-none" rows="5" tabindex="0">${ssrInterpolate(message.value)}</textarea></div><div class="flex items-center gap-2"><input id="terms" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(acceptedTerms.value) ? ssrLooseContain(acceptedTerms.value, null) : acceptedTerms.value) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-white focus:outline-none" tabindex="0"><label for="terms" class="text-white/80 text-sm"> Aceito os `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "underline hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Termos de Privacidade`);
          } else {
            return [
              createTextVNode("Termos de Privacidade")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-red-500">*</span></label></div><div class="flex flex-col sm:flex-row gap-4 justify-center"><button class="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-white" tabindex="0"> Enviar Email </button><a${ssrRenderAttr("href", whatsappLink)} target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-white" tabindex="0"><img${ssrRenderAttr("src", _imports_0)} alt="WhatsApp" class="w-6 h-6"> WhatsApp </a></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/ContactUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const whatsappNumber = "351915970882";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhatsAppIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: whatsappLink,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300 animate-pulse cursor-pointer",
        "aria-label": "Contactar pelo WhatsApp"
      }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="WhatsApp" class="w-7 h-7"></a>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhatsAppIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "fixed bottom-4 right-4 z-[9999] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white",
          "aria-label": "Scroll to top",
          tabindex: "0"
        }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionHero = _sfc_main$a;
  const _component_LayoutLine = __nuxt_component_1;
  const _component_SectionAbout = __nuxt_component_2;
  const _component_SectionService = __nuxt_component_3;
  const _component_SectionWork = __nuxt_component_4;
  const _component_SectionContactUs = _sfc_main$3;
  const _component_WhatsAppIcon = _sfc_main$2;
  const _component_ScrollToTop = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutLine, null, null, _parent));
  _push(`<div class="relative"><div class="bg-blue-700 top-0 -right-52 w-80 h-[40rem] absolute blur-[200px]"></div>`);
  _push(ssrRenderComponent(_component_SectionAbout, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutLine, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionService, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutLine, null, null, _parent));
  _push(`<div class="relative"><div class="bg-blue-700 top-0 -left-52 w-80 h-[40rem] absolute blur-[200px]"></div>`);
  _push(ssrRenderComponent(_component_SectionWork, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutLine, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_WhatsAppIcon, { class: "fixed z-[9999]" }, null, _parent));
  _push(ssrRenderComponent(_component_ScrollToTop, { class: "fixed z-[9999]" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Bnq477f1.mjs.map
