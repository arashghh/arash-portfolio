import { useMemo } from "react";

export function Particles({ count = 38 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 2.5 + 0.6;
        const left = Math.random() * 100;
        const top = 50 + (Math.random() - 0.5) * 70;
        const dx = (Math.random() - 0.5) * 60;
        const dy = -(Math.random() * 180 + 60);
        const duration = Math.random() * 14 + 10;
        const delay = Math.random() * 12;
        const opacity = Math.random() * 0.6 + 0.2;
        return { i, size, left, top, dx, dy, duration, delay, opacity };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--plasma-glow) 90%, transparent) 0%, transparent 70%)",
            boxShadow: "0 0 6px color-mix(in oklab, var(--plasma) 80%, transparent)",
            opacity: p.opacity,
            // @ts-expect-error css vars
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
