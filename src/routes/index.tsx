import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { LiveCodeStream } from "@/components/LiveCodeStream";
import { useLang } from "@/lib/i18n";

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
  const { t, isRtl } = useLang();

  return (
    <main
      className="relative z-10 h-screen w-screen overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <SiteNav />
      <LiveCodeStream />

      <section className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground sm:text-xs"
          style={{ animation: "cinematic-fade 1.4s ease-out 1.6s both" }}
        >
          {t.hero.eyebrow}
        </p>

        <h1
          className="text-cinematic text-5xl font-extralight leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animation: "cinematic-fade 1.6s ease-out 1.9s both" }}
        >
          {t.hero.firstName}{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.hero.lastName}
          </span>
        </h1>

        <p
          className="mt-6 max-w-md text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.2s both" }}
        >
          {t.hero.tagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.6s both" }}
        >
          <CTA to="/work" primary>{t.hero.work}</CTA>
          <CTA to="/about">{t.hero.about}</CTA>
          <CTA to="/contact">{t.hero.contact}</CTA>
        </div>
      </section>

      <div
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60"
        style={{ animation: "cinematic-fade 1.2s ease-out 3.2s both" }}
      >
        {t.hero.whisper}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[60] bg-black"
        style={{ animation: "intro-veil 2s ease-out forwards" }}
      />
    </main>
  );
}

function CTA({
  children,
  primary,
  to,
}: {
  children: React.ReactNode;
  primary?: boolean;
  to: "/work" | "/about" | "/contact";
}) {
  return (
    <Link
      to={to}
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
    </Link>
  );
}
