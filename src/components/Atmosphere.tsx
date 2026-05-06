import { Particles } from "@/components/Particles";

export function Atmosphere() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[0]"
        style={{ background: "var(--gradient-void)" }}
      />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1] opacity-[0.05] mix-blend-overlay" />
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 z-[2] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--plasma) 12%, transparent) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-[4]">
        <Particles />
      </div>
    </>
  );
}
