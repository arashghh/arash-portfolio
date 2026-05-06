import { createFileRoute } from "@tanstack/react-router";
import { Orb } from "@/components/Orb";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arash Ghafouri — Frontend Developer & Creative UI Engineer" },
      {
        name: "description",
        content:
          "Arash Ghafouri crafts immersive, performant, product-grade web experiences. Frontend developer & creative UI engineer.",
      },
      { property: "og:title", content: "Arash Ghafouri — Creative UI Engineer" },
      {
        property: "og:description",
        content: "Immersive, performant, product-grade web experiences.",
      },
    ],
  }),
  component: Hero,
});

function Hero() {
  return (
    <main
      className="relative h-screen w-screen overflow-hidden"
      style={{ background: "var(--gradient-void)" }}
    >
      {/* Subtle noise texture */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-[1] opacity-[0.05] mix-blend-overlay" />

      {/* Volumetric light cone behind orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2]"
        style={{
          width: "70vmin",
          height: "120vmin",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, color-mix(in oklab, var(--plasma) 18%, transparent) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "light-cone-fade 3s ease-out 0.4s both",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <Particles />
      <Orb />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-between px-6 py-10 sm:py-14">
        {/* Top mark */}
        <div
          className="flex w-full max-w-6xl items-center justify-between text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          style={{ animation: "cinematic-fade 1.2s ease-out 1.6s both" }}
        >
          <span className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--plasma)",
                boxShadow: "0 0 10px var(--plasma)",
              }}
            />
            AG · Portfolio
          </span>
          <span className="hidden sm:inline">MMXXVI</span>
        </div>

        {/* Center spacer (orb lives behind it) */}
        <div className="flex-1" />

        {/* Text + CTAs */}
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.5em] text-muted-foreground sm:text-xs"
            style={{ animation: "cinematic-fade 1.4s ease-out 2.4s both" }}
          >
            Frontend Developer · Creative UI Engineer
          </p>

          <h1
            className="text-cinematic text-5xl font-extralight leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animation: "cinematic-fade 1.6s ease-out 2.7s both" }}
          >
            Arash{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 60%, white) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ghafouri
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
            style={{ animation: "cinematic-fade 1.6s ease-out 3.1s both" }}
          >
            I craft immersive, performant, product-grade web experiences.
          </p>

          <div
            className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animation: "cinematic-fade 1.6s ease-out 3.6s both" }}
          >
            <GlassButton primary>Selected Work</GlassButton>
            <GlassButton>Resume</GlassButton>
            <GlassButton>Contact</GlassButton>
          </div>
        </div>

        {/* Bottom whisper */}
        <div
          className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60"
          style={{ animation: "cinematic-fade 1.2s ease-out 4s both" }}
        >
          ⌁  An interactive portrait
        </div>
      </div>

      {/* Intro veil — pure black fade */}
      <div
        className="pointer-events-none absolute inset-0 z-[60] bg-black"
        style={{ animation: "intro-veil 2.2s ease-out forwards" }}
      />
    </main>
  );
}

function GlassButton({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className="glass-panel group relative inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90 transition-colors"
      style={
        primary
          ? {
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 14%, transparent), color-mix(in oklab, var(--plasma) 4%, transparent))",
            }
          : undefined
      }
    >
      <span className="relative z-10">{children}</span>
      {/* Hover ripple */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, color-mix(in oklab, var(--plasma-glow) 50%, transparent) 0%, transparent 60%)",
        }}
      />
    </button>
  );
}
