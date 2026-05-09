import { V as jsxRuntimeExports } from "./server-e_EJJApn.js";
import { u as useLang, P as PageShell } from "./router-DA7qO2dL.js";
import { c as createLucideIcon, A as ArrowUpRight } from "./arrow-up-right-0DW0SCQk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const channels = [{
  icon: Mail,
  label: "Email",
  value: "hello@arashghafouri.dev",
  href: "mailto:hello@arashghafouri.dev"
}, {
  icon: Github,
  label: "GitHub",
  value: "@arashghafouri",
  href: "#"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "in/arashghafouri",
  href: "#"
}];
function ContactPage() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: t.contact.eyebrow, title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    t.contact.titleA,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      background: "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text"
    }, children: t.contact.titleB })
  ] }), intro: t.contact.intro, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[1.1fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "glass-panel space-y-5 rounded-2xl p-7", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t.contact.name, placeholder: t.contact.namePh }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t.contact.email, type: "email", placeholder: t.contact.emailPh }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t.contact.project, placeholder: t.contact.projectPh, textarea: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group relative inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground transition-transform hover:-translate-y-0.5", style: {
        background: "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 35%, transparent), color-mix(in oklab, var(--plasma-deep) 25%, transparent))",
        border: "1px solid color-mix(in oklab, var(--plasma) 50%, transparent)",
        boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--plasma) 50%, transparent), inset 0 1px 0 color-mix(in oklab, white 20%, transparent)"
      }, children: [
        t.contact.send,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      channels.map(({
        icon: Icon,
        label,
        value,
        href
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: "glass-panel group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full", style: {
          background: "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 25%, transparent), transparent)",
          border: "1px solid color-mix(in oklab, var(--plasma) 30%, transparent)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", style: {
          color: "var(--plasma-glow)"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-light text-foreground/90", dir: "ltr", children: value })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5", style: {
          color: "var(--plasma)"
        } })
      ] }, label)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-muted-foreground", children: t.contact.studio }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-sm font-light text-foreground/80", children: t.contact.studioText })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  placeholder,
  type = "text",
  textarea
}) {
  const cls = "w-full rounded-xl bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-[color:color-mix(in_oklab,var(--plasma)_5%,transparent)]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-[10px] uppercase tracking-[0.35em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl", style: {
      background: "color-mix(in oklab, white 3%, transparent)",
      border: "1px solid color-mix(in oklab, white 8%, transparent)"
    }, children: textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder, className: cls }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: cls }) })
  ] });
}
export {
  ContactPage as component
};
