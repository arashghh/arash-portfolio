import { createFileRoute } from "@tanstack/react-router";
import { Particles } from "@/components/Particles";
import {
  GlassCard,
  GradientPill,
  ToggleCard,
  ProgressCard,
  ChartCard,
  ToastCard,
  PaletteCard,
} from "@/components/FloatingUI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arash Ghafouri — Frontend Developer & Creative UI Engineer" },
      {
        name: "description",
        content:
          "Arash Ghafouri designs and engineers beautiful digital interfaces. A living UI showcase by a creative frontend developer.",
      },
      { property: "og:title", content: "Arash Ghafouri — Creative UI Engineer" },
      {
        property: "og:description",
        content: "I design and engineer beautiful digital interfaces.",
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
      {/* Atmosphere */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-[1] opacity-[0.05] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--plasma) 14%, transparent) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <Particles />

      {/* Top bar */}
      <header
        className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:px-10"
        style={{ animation: "cinematic-fade 1s ease-out 1.4s both" }}
      >
        <span className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--plasma)", boxShadow: "0 0 10px var(--plasma)" }}
          />
          AG · Studio
        </span>
        <span className="hidden sm:inline">MMXXVI · v2.6</span>
      </header>

      {/* Floating UI components — desktop composition */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <GlassCard className="pointer-events-auto absolute left-[6%] top-[18%]" delay={1800} />
        <ProgressCard className="pointer-events-auto absolute left-[4%] top-[58%]" delay={2400} />
        <ToggleCard className="pointer-events-auto absolute left-[14%] bottom-[10%]" delay={2700} />

        <ChartCard className="pointer-events-auto absolute right-[5%] top-[16%]" delay={2000} />
        <ToastCard className="pointer-events-auto absolute right-[3%] top-[52%]" delay={2300} />
        <PaletteCard className="pointer-events-auto absolute right-[10%] bottom-[12%]" delay={2900} />
        <GradientPill className="pointer-events-auto absolute right-[18%] top-[40%]" delay={2600} />
      </div>

      {/* Center identity */}
      <section className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground sm:text-xs"
          style={{ animation: "cinematic-fade 1.4s ease-out 1.6s both" }}
        >
          Frontend Developer · Creative UI Engineer
        </p>

        <h1
          className="text-cinematic text-5xl font-extralight leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animation: "cinematic-fade 1.6s ease-out 1.9s both" }}
        >
          Arash{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ghafouri
          </span>
        </h1>

        <p
          className="mt-6 max-w-md text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.2s both" }}
        >
          I design and engineer beautiful digital interfaces.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.6s both" }}
        >
          <CTA primary>Selected Work</CTA>
          <CTA>Resume</CTA>
          <CTA>Contact</CTA>
        </div>

        {/* Mobile floating components — stacked */}
        <div className="mt-12 grid w-full max-w-sm grid-cols-1 gap-3 md:hidden">
          <ChartCard delay={2200} />
          <ProgressCard delay={2400} />
          <ToggleCard delay={2600} />
        </div>
      </section>

      {/* Bottom whisper */}
      <div
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60"
        style={{ animation: "cinematic-fade 1.2s ease-out 3.2s both" }}
      >
        ⌁  A living interface
      </div>

      {/* Intro veil */}
      <div
        className="pointer-events-none absolute inset-0 z-[60] bg-black"
        style={{ animation: "intro-veil 2s ease-out forwards" }}
      />
    </main>
  );
}

function CTA({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button
      className="glass-panel group relative inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90"
      style={
        primary
          ? {
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 22%, transparent), color-mix(in oklab, var(--plasma) 6%, transparent))",
            }
          : undefined
      }
    >
      <span className="relative z-10">{children}</span>
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
