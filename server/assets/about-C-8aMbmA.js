import { V as jsxRuntimeExports } from "./server-e_EJJApn.js";
import { u as useLang, P as PageShell } from "./router-DA7qO2dL.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const stack = ["TypeScript", "React", "TanStack", "WebGL", "Three.js", "GSAP", "Framer Motion", "Tailwind", "CSS Houdini", "Node", "Edge", "Figma"];
function AboutPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: t.about.eyebrow, title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    t.about.titleA,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      background: "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text"
    }, children: t.about.titleB })
  ] }), intro: t.about.intro, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.4em] text-muted-foreground", children: t.about.practice }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-light leading-relaxed text-foreground/85", children: t.about.practiceText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-1.5", dir: "ltr", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground", style: {
        background: "color-mix(in oklab, white 4%, transparent)",
        border: "1px solid color-mix(in oklab, white 6%, transparent)"
      }, children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-2 top-2 bottom-2 w-px", style: {
        background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--plasma) 50%, transparent), transparent)"
      } }),
      t.about.timeline.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-10 pb-8 last:pb-0", style: {
        animation: `cinematic-fade 1s ease-out ${1.2 + i * 0.15}s both`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-[2px] top-1.5 h-2 w-2 rounded-full", style: {
          background: "var(--plasma)",
          boxShadow: "0 0 12px var(--plasma)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.35em] text-muted-foreground", children: item.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-base font-light text-foreground/90", children: item.text })
      ] }, item.year))
    ] })
  ] }) });
}
export {
  AboutPage as component
};
