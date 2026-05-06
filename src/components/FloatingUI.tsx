import { useEffect, useRef, useState } from "react";
import { Check, Bell, TrendingUp, Sparkles } from "lucide-react";

/* ---------- shared float wrapper with cursor parallax ---------- */
function Float({
  children,
  className,
  depth = 1,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number; // 0.4 - 1.6
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tx = nx * 14 * depth;
      ty = ny * 10 * depth;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--px", `${cx.toFixed(2)}px`);
      el.style.setProperty("--py", `${cy.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [depth]);

  return (
    <div
      ref={ref}
      className={`floating-card ${className ?? ""}`}
      style={{
        animationDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- 1. Glass profile card ---------- */
export function GlassCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <Float className={className} depth={1.2} delay={delay}>
      <div className="glass-panel w-[230px] rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full"
            style={{
              background:
                "conic-gradient(from 180deg, var(--plasma-glow), var(--plasma), var(--plasma-deep), var(--plasma-glow))",
              boxShadow: "0 0 20px color-mix(in oklab, var(--plasma) 50%, transparent)",
            }}
          />
          <div className="flex-1">
            <div className="text-[11px] font-medium text-foreground">Arash G.</div>
            <div className="text-[10px] text-muted-foreground">Online · Crafting</div>
          </div>
          <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--plasma)" }} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["UI", "FX", "3D"].map((t) => (
            <div
              key={t}
              className="rounded-md py-1.5 text-center text-[9px] uppercase tracking-widest text-muted-foreground"
              style={{
                background: "color-mix(in oklab, white 3%, transparent)",
                border: "1px solid color-mix(in oklab, white 6%, transparent)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </Float>
  );
}

/* ---------- 2. Gradient button ---------- */
export function GradientPill({ className, delay }: { className?: string; delay?: number }) {
  return (
    <Float className={className} depth={1.4} delay={delay}>
      <button
        className="group relative inline-flex h-11 items-center gap-2 rounded-full px-5 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground transition-transform hover:-translate-y-0.5"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 35%, transparent), color-mix(in oklab, var(--plasma-deep) 25%, transparent))",
          border: "1px solid color-mix(in oklab, var(--plasma) 50%, transparent)",
          boxShadow:
            "0 10px 30px -10px color-mix(in oklab, var(--plasma) 50%, transparent), inset 0 1px 0 color-mix(in oklab, white 20%, transparent)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--plasma-glow)", boxShadow: "0 0 8px var(--plasma-glow)" }}
        />
        Launch
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--plasma-glow) 60%, transparent), transparent 70%)",
          }}
        />
      </button>
    </Float>
  );
}

/* ---------- 3. Toggle ---------- */
export function ToggleCard({ className, delay }: { className?: string; delay?: number }) {
  const [on, setOn] = useState(true);
  return (
    <Float className={className} depth={1.1} delay={delay}>
      <div className="glass-panel flex w-[180px] items-center justify-between rounded-2xl px-4 py-3">
        <div>
          <div className="text-[11px] font-medium text-foreground">Motion</div>
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
            {on ? "Enabled" : "Off"}
          </div>
        </div>
        <button
          onClick={() => setOn((v) => !v)}
          className="relative h-6 w-11 rounded-full transition-colors"
          style={{
            background: on
              ? "linear-gradient(135deg, var(--plasma), var(--plasma-deep))"
              : "color-mix(in oklab, white 8%, transparent)",
            boxShadow: on
              ? "0 0 16px color-mix(in oklab, var(--plasma) 60%, transparent), inset 0 1px 0 color-mix(in oklab, white 20%, transparent)"
              : "inset 0 1px 0 color-mix(in oklab, white 6%, transparent)",
          }}
        >
          <span
            className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all"
            style={{ left: on ? "calc(100% - 22px)" : "2px" }}
          />
        </button>
      </div>
    </Float>
  );
}

/* ---------- 4. Progress ---------- */
export function ProgressCard({ className, delay }: { className?: string; delay?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setV(72), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <Float className={className} depth={1} delay={delay}>
      <div className="glass-panel w-[220px] rounded-2xl p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Build
          </span>
          <span className="text-[11px] font-medium text-foreground">{v}%</span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full"
          style={{ background: "color-mix(in oklab, white 6%, transparent)" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-[2200ms] ease-out"
            style={{
              width: `${v}%`,
              background: "linear-gradient(90deg, var(--plasma-deep), var(--plasma-glow))",
              boxShadow: "0 0 12px color-mix(in oklab, var(--plasma) 70%, transparent)",
            }}
          />
        </div>
      </div>
    </Float>
  );
}

/* ---------- 5. Mini chart ---------- */
export function ChartCard({ className, delay }: { className?: string; delay?: number }) {
  const points = [10, 22, 16, 30, 24, 38, 32, 46, 40, 58, 50, 66];
  const max = 70;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${100 - (p / max) * 100}`)
    .join(" ");
  return (
    <Float className={className} depth={0.8} delay={delay}>
      <div className="glass-panel w-[230px] rounded-2xl p-4">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Performance
            </div>
            <div className="text-base font-light text-foreground">98.4</div>
          </div>
          <div
            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px]"
            style={{
              background: "color-mix(in oklab, var(--plasma) 12%, transparent)",
              color: "var(--plasma-glow)",
            }}
          >
            <TrendingUp className="h-2.5 w-2.5" /> +12.4%
          </div>
        </div>
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-14 w-full">
          <defs>
            <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--plasma)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="var(--plasma)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${path} L 100 50 L 0 50 Z`}
            fill="url(#chart-fill)"
          />
          <path
            d={path}
            fill="none"
            stroke="var(--plasma-glow)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 3px var(--plasma))" }}
          />
        </svg>
      </div>
    </Float>
  );
}

/* ---------- 6. Toast ---------- */
export function ToastCard({ className, delay }: { className?: string; delay?: number }) {
  return (
    <Float className={className} depth={1.5} delay={delay}>
      <div className="glass-panel flex w-[240px] items-center gap-3 rounded-2xl px-4 py-3">
        <div
          className="grid h-8 w-8 place-items-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, var(--plasma), var(--plasma-deep))",
            boxShadow: "0 0 14px color-mix(in oklab, var(--plasma) 60%, transparent)",
          }}
        >
          <Check className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-medium text-foreground">Deploy successful</div>
          <div className="text-[10px] text-muted-foreground">Edge · 84ms TTFB</div>
        </div>
        <Bell className="h-3 w-3 text-muted-foreground" />
      </div>
    </Float>
  );
}

/* ---------- 7. Color palette swatch ---------- */
export function PaletteCard({ className, delay }: { className?: string; delay?: number }) {
  const swatches = [
    "var(--plasma-glow)",
    "var(--plasma)",
    "var(--plasma-deep)",
    "oklch(0.45 0.18 270)",
    "oklch(0.3 0.12 250)",
  ];
  return (
    <Float className={className} depth={0.9} delay={delay}>
      <div className="glass-panel w-[200px] rounded-2xl p-4">
        <div className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          Palette · 026
        </div>
        <div className="flex gap-1.5">
          {swatches.map((s, i) => (
            <div
              key={i}
              className="h-9 flex-1 rounded-md transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: s,
                boxShadow: `0 0 14px color-mix(in oklab, ${s} 40%, transparent)`,
              }}
            />
          ))}
        </div>
      </div>
    </Float>
  );
}
