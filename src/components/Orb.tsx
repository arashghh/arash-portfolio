import { useEffect, useRef } from "react";

export function Orb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      tx = (e.clientX / w - 0.5) * 24;
      ty = (e.clientY / h - 0.5) * 24;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--px", `${cx}px`);
      el.style.setProperty("--py", `${cy}px`);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-1/2 z-10"
      style={{
        transform: "translate(calc(-50% + var(--px, 0px)), calc(-50% + var(--py, 0px)))",
        transition: "transform 200ms linear",
      }}
    >
      {/* Outer atmospheric glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 rounded-full"
        style={{
          width: "min(90vmin, 780px)",
          height: "min(90vmin, 780px)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--plasma) 28%, transparent) 0%, transparent 60%)",
          filter: "blur(60px)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      {/* The orb itself */}
      <div
        className="relative rounded-full"
        style={{
          width: "min(46vmin, 420px)",
          height: "min(46vmin, 420px)",
          animation: "orb-emerge 2400ms cubic-bezier(0.22, 1, 0.36, 1) both, orb-breathe 7s ease-in-out 2400ms infinite",
        }}
      >
        {/* Slow rotation container */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ animation: "orb-rotate 40s linear infinite" }}
        >
          {/* Plasma stream 1 */}
          <div
            className="absolute inset-[-20%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 30% 35%, color-mix(in oklab, var(--plasma-glow) 95%, transparent) 0%, transparent 55%)",
              filter: "blur(18px)",
              animation: "plasma-flow 9s ease-in-out infinite",
              mixBlendMode: "screen",
            }}
          />
          {/* Plasma stream 2 */}
          <div
            className="absolute inset-[-20%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 70% 65%, color-mix(in oklab, var(--plasma-deep) 90%, transparent) 0%, transparent 60%)",
              filter: "blur(22px)",
              animation: "plasma-flow-2 11s ease-in-out infinite",
              mixBlendMode: "screen",
            }}
          />
          {/* Plasma stream 3 (highlight wisp) */}
          <div
            className="absolute inset-[-10%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 30% 20% at 50% 30%, white 0%, transparent 60%)",
              opacity: 0.35,
              filter: "blur(12px)",
              animation: "plasma-flow 13s ease-in-out infinite reverse",
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Glass shell — refractive layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 28%, color-mix(in oklab, white 30%, transparent) 0%, transparent 28%), radial-gradient(circle at 65% 75%, color-mix(in oklab, var(--plasma) 18%, transparent) 0%, transparent 50%)",
            boxShadow:
              "inset 0 0 60px color-mix(in oklab, var(--plasma) 30%, transparent), inset 0 0 120px color-mix(in oklab, black 40%, transparent), 0 0 80px color-mix(in oklab, var(--plasma) 35%, transparent), 0 0 200px color-mix(in oklab, var(--plasma) 22%, transparent)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Inner glass ring */}
        <div
          className="absolute inset-[6%] rounded-full"
          style={{
            border: "1px solid color-mix(in oklab, var(--plasma) 35%, transparent)",
            boxShadow:
              "inset 0 0 40px color-mix(in oklab, var(--plasma-glow) 25%, transparent)",
          }}
        />
        <div
          className="absolute inset-[14%] rounded-full"
          style={{
            border: "1px solid color-mix(in oklab, white 8%, transparent)",
          }}
        />

        {/* Specular highlight */}
        <div
          className="absolute rounded-full"
          style={{
            top: "10%",
            left: "20%",
            width: "30%",
            height: "18%",
            background:
              "radial-gradient(ellipse, color-mix(in oklab, white 70%, transparent) 0%, transparent 70%)",
            filter: "blur(6px)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Bottom rim refraction */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 30% at 50% 100%, color-mix(in oklab, var(--plasma-glow) 35%, transparent) 0%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}
