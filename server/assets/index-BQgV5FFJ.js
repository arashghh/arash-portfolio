import { r as reactExports, V as jsxRuntimeExports } from "./server-e_EJJApn.js";
import { u as useLang, S as SiteNav, L as Link } from "./router-DA7qO2dL.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const KEYWORDS = /\b(const|let|var|function|return|if|else|import|from|export|default|async|await|new|class|extends|for|while|=>|true|false|null|undefined|interface|type)\b/g;
const STRINGS = /(["'`])(?:\\.|(?!\1).)*\1/g;
const NUMBERS = /\b(\d+\.?\d*)\b/g;
const COMMENTS = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
const TAGS = /(&lt;\/?[A-Za-z][A-Za-z0-9]*)/g;
const PROPS = /\b([a-zA-Z_$][\w$]*)(?==)/g;
const FN = /\b([A-Za-z_$][\w$]*)(?=\()/g;
function highlight(line) {
  let s = line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(COMMENTS, '<span class="tk-c">$1</span>');
  s = s.replace(STRINGS, '<span class="tk-s">$&</span>');
  s = s.replace(TAGS, '<span class="tk-t">$1</span>');
  s = s.replace(KEYWORDS, '<span class="tk-k">$1</span>');
  s = s.replace(NUMBERS, '<span class="tk-n">$1</span>');
  s = s.replace(PROPS, '<span class="tk-p">$1</span>');
  s = s.replace(FN, '<span class="tk-f">$1</span>');
  return s;
}
const SNIPPETS = [
  `import { useState } from "react";`,
  `export function Button({ label }) {`,
  `  return <button className="btn">{label}</button>;`,
  `}`,
  ``,
  `const [open, setOpen] = useState(false);`,
  `useEffect(() => { fetchUser(id); }, [id]);`,
  ``,
  `// fetch from API`,
  `async function fetchUser(id) {`,
  `  const res = await fetch(\`/api/users/\${id}\`);`,
  `  return res.json();`,
  `}`,
  ``,
  `<div className="flex items-center gap-3 rounded-2xl">`,
  `  <Avatar src={user.avatar} />`,
  `  <span className="text-sm">{user.name}</span>`,
  `</div>`,
  ``,
  `> pnpm install`,
  `+ react 19.0.0`,
  `+ @tanstack/react-router 1.x`,
  `Done in 2.41s`,
  ``,
  `> vite build`,
  `vite v7.0.0 building for production...`,
  `✓ 1284 modules transformed.`,
  `dist/assets/index-9f2a.js   142.31 kB │ gzip: 45.12 kB`,
  `✓ built in 2.14s`,
  ``,
  `git commit -m "feat(hero): live code background"`,
  `[main 8a3f1d2] feat(hero): live code background`,
  ``,
  `console.log("hydrated", performance.now());`,
  `// TODO: extract motion primitives`,
  ``,
  `:root { --plasma: oklch(0.85 0.17 185); }`,
  `.glass { backdrop-filter: blur(14px) saturate(140%); }`,
  ``,
  `type User = { id: string; name: string; email: string };`,
  `interface Props { user: User; onSelect?: (id: string) => void }`,
  ``,
  `const router = createRouter({ routeTree });`,
  `<RouterProvider router={router} />`
];
function pickLines(start, n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(SNIPPETS[(start + i) % SNIPPETS.length]);
  return out;
}
function CodeColumn({
  startIndex,
  duration,
  delay,
  width,
  left,
  opacity,
  blur
}) {
  const lines = reactExports.useMemo(() => pickLines(startIndex, 60), [startIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute top-0 h-[200%] font-mono text-[10.5px] leading-[1.7] sm:text-[11.5px] tk-col",
      style: {
        left,
        width,
        opacity,
        filter: `blur(${blur}px)`,
        animation: `code-scroll ${duration}s linear ${delay}s infinite`,
        willChange: "transform"
      },
      children: [...lines, ...lines].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "tk-line whitespace-pre px-3",
          dangerouslySetInnerHTML: { __html: l === "" ? "&nbsp;" : highlight(l) }
        },
        i
      ))
    }
  );
}
const TYPING_PROGRAM = [
  `const hero = await render({`,
  `  voice: "calm",`,
  `  craft: "elite",`,
  `  motion: "cinematic",`,
  `});`,
  ``,
  `// shipping…`
];
function TypingBlock() {
  const [text, setText] = reactExports.useState([""]);
  const [done, setDone] = reactExports.useState(false);
  const [fading, setFading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (lineIdx >= TYPING_PROGRAM.length) {
        setDone(true);
        setTimeout(() => setFading(true), 1800);
        setTimeout(() => {
          if (cancelled) return;
          lineIdx = 0;
          charIdx = 0;
          setText([""]);
          setDone(false);
          setFading(false);
          setTimeout(tick, 600);
        }, 3600);
        return;
      }
      const cur = TYPING_PROGRAM[lineIdx];
      charIdx++;
      setText((prev) => {
        const copy = [...prev];
        copy[lineIdx] = cur.slice(0, charIdx);
        return copy;
      });
      if (charIdx >= cur.length) {
        lineIdx++;
        charIdx = 0;
        setText((prev) => [...prev, ""]);
        setTimeout(tick, 220);
      } else {
        setTimeout(tick, 28 + Math.random() * 60);
      }
    };
    const t = setTimeout(tick, 2200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "pointer-events-none absolute bottom-6 left-6 z-[6] hidden max-w-[320px] rounded-xl border border-white/5 bg-black/30 p-3 font-mono text-[10.5px] leading-[1.7] backdrop-blur-md sm:block",
      style: {
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 30px -12px rgba(0,0,0,0.6), 0 0 30px -10px color-mix(in oklab, var(--plasma) 50%, transparent)",
        opacity: fading ? 0 : 1,
        transition: "opacity 1.2s ease"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "~/portfolio · hero.tsx" })
        ] }),
        text.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "whitespace-pre", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: highlight(l) } }),
          i === text.length - 1 && !done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tk-caret", children: "▍" })
        ] }, i))
      ]
    }
  );
}
const EVENTS = [
  "✓ build successful",
  "✓ compiled in 214ms",
  "✓ commit: feat(hero): improve interaction",
  "✓ deployment complete",
  "✓ vite ready in 320ms",
  "✓ HMR update applied",
  "✓ 0 errors · 0 warnings"
];
function BuildEvents() {
  const [items, setItems] = reactExports.useState(
    []
  );
  const idRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    let cancelled = false;
    const push = () => {
      if (cancelled) return;
      const id = ++idRef.current;
      const text = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      const top = 18 + Math.random() * 56;
      const side = Math.random() > 0.5 ? "l" : "r";
      setItems((p) => [...p, { id, text, top, side }]);
      setTimeout(() => setItems((p) => p.filter((i) => i.id !== id)), 4200);
      setTimeout(push, 2600 + Math.random() * 3200);
    };
    const t = setTimeout(push, 3500);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-[7] hidden sm:block", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "absolute rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10.5px] text-foreground/90 backdrop-blur-md",
      style: {
        top: `${i.top}%`,
        [i.side === "l" ? "left" : "right"]: "4%",
        boxShadow: "0 0 24px -6px color-mix(in oklab, var(--plasma) 70%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)",
        animation: "event-pop 4.2s cubic-bezier(0.22,1,0.36,1) both"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1 text-[var(--plasma)]", children: "●" }),
        i.text
      ]
    },
    i.id
  )) });
}
function LiveCodeStream() {
  const wrapRef = reactExports.useRef(null);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const u = () => setIsMobile(mq.matches);
    u();
    mq.addEventListener("change", u);
    return () => mq.removeEventListener("change", u);
  }, []);
  reactExports.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0, mx = 50, my = 50;
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      tx = nx * 14;
      ty = ny * 10;
      mx = e.clientX / window.innerWidth * 100;
      my = e.clientY / window.innerHeight * 100;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--cpx", `${cx.toFixed(2)}px`);
      el.style.setProperty("--cpy", `${cy.toFixed(2)}px`);
      el.style.setProperty("--mx", `${mx.toFixed(1)}%`);
      el.style.setProperty("--my", `${my.toFixed(1)}%`);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  const cols = isMobile ? [
    { left: "2%", width: "46%", dur: 90, delay: 0, op: 0.22, blur: 0.6, start: 0 },
    { left: "52%", width: "46%", dur: 110, delay: -30, op: 0.18, blur: 0.8, start: 12 }
  ] : [
    { left: "1%", width: "22%", dur: 80, delay: 0, op: 0.28, blur: 0.4, start: 0 },
    { left: "26%", width: "22%", dur: 110, delay: -20, op: 0.2, blur: 0.7, start: 14 },
    { left: "52%", width: "22%", dur: 95, delay: -45, op: 0.22, blur: 0.5, start: 28 },
    { left: "77%", width: "22%", dur: 125, delay: -10, op: 0.18, blur: 0.8, start: 6 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: wrapRef,
      className: "pointer-events-none absolute inset-0 z-[6] overflow-hidden",
      style: {
        transform: "translate3d(var(--cpx,0), var(--cpy,0), 0)",
        transition: "transform 200ms linear"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: cols.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeColumn,
          {
            startIndex: c.start,
            duration: c.dur,
            delay: c.delay,
            width: c.width,
            left: c.left,
            opacity: c.op,
            blur: c.blur
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--plasma) 14%, transparent) 0%, transparent 60%)",
              mixBlendMode: "screen"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 30%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TypingBlock, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BuildEvents, {})
      ]
    }
  );
}
function Hero() {
  const {
    t,
    isRtl
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 h-screen w-screen overflow-hidden", dir: isRtl ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveCodeStream, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-20 flex h-full flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground sm:text-xs", style: {
        animation: "cinematic-fade 1.4s ease-out 1.6s both"
      }, children: t.hero.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-cinematic text-5xl font-extralight leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl", style: {
        animation: "cinematic-fade 1.6s ease-out 1.9s both"
      }, children: [
        t.hero.firstName,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          background: "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }, children: t.hero.lastName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base", style: {
        animation: "cinematic-fade 1.6s ease-out 2.2s both"
      }, children: t.hero.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4", style: {
        animation: "cinematic-fade 1.6s ease-out 2.6s both"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, { to: "/work", primary: true, children: t.hero.work }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, { to: "/about", children: t.hero.about }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, { to: "/contact", children: t.hero.contact })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60", style: {
      animation: "cinematic-fade 1.2s ease-out 3.2s both"
    }, children: t.hero.whisper }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-[60] bg-black", style: {
      animation: "intro-veil 2s ease-out forwards"
    } })
  ] });
}
function CTA({
  children,
  primary,
  to
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "glass-panel group relative inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90", style: primary ? {
    background: "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 22%, transparent), color-mix(in oklab, var(--plasma) 6%, transparent))"
  } : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100", style: {
      background: "radial-gradient(circle at 50% 120%, color-mix(in oklab, var(--plasma-glow) 50%, transparent) 0%, transparent 60%)"
    } })
  ] });
}
export {
  Hero as component
};
