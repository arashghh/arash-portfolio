import { V as jsxRuntimeExports } from "./server-e_EJJApn.js";
import { u as useLang, P as PageShell, L as Link } from "./router-DA7qO2dL.js";
import { A as ArrowUpRight } from "./arrow-up-right-0DW0SCQk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function WorkPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: t.work.eyebrow, title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    t.work.titleA,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      background: "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text"
    }, children: t.work.titleB })
  ] }), intro: t.work.intro, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y", style: {
    borderColor: "color-mix(in oklab, white 6%, transparent)"
  }, children: t.work.projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group flex flex-col gap-3 py-7 transition-colors hover:bg-[color:color-mix(in_oklab,var(--plasma)_4%,transparent)] sm:flex-row sm:items-baseline sm:gap-8 sm:px-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: p.year }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-light text-foreground sm:text-3xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 text-[9px] uppercase tracking-widest", style: {
          background: "color-mix(in oklab, var(--plasma) 12%, transparent)",
          color: "var(--plasma-glow)",
          border: "1px solid color-mix(in oklab, var(--plasma) 25%, transparent)"
        }, children: p.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-sm font-light text-muted-foreground", children: p.blurb })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:w-56 sm:justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", style: {
        color: "var(--plasma)"
      } })
    ] })
  ] }) }, p.title)) }) });
}
export {
  WorkPage as component
};
