import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { LiveCodeStream } from "@/components/LiveCodeStream";

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

type Lang = "en" | "fa";

const COPY: Record<Lang, {
  eyebrow: string;
  firstName: string;
  lastName: string;
  tagline: string;
  cta: { work: string; about: string; contact: string };
  whisper: string;
}> = {
  en: {
    eyebrow: "Frontend Developer · Creative UI Engineer",
    firstName: "Arash",
    lastName: "Ghafouri",
    tagline: "I design and engineer beautiful digital interfaces.",
    cta: { work: "Selected Work", about: "About", contact: "Contact" },
    whisper: "⌁  A living interface",
  },
  fa: {
    eyebrow: "توسعه‌دهنده فرانت‌اند · مهندس رابط کاربری",
    firstName: "آرش",
    lastName: "غفوری",
    tagline: "رابط‌های دیجیتال زیبا را طراحی و مهندسی می‌کنم.",
    cta: { work: "نمونه‌کارها", about: "درباره من", contact: "تماس" },
    whisper: "⌁  یک رابط زنده",
  },
};

function Hero() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];
  const isRtl = lang === "fa";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isRtl ? "rtl" : "ltr";
  }, [lang, isRtl]);

  return (
    <main
      className="relative z-10 h-screen w-screen overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <SiteNav />

      {/* Live code background */}
      <LiveCodeStream />

      {/* Language switcher */}
      <div
        className="absolute bottom-5 right-5 z-30 flex items-center gap-1 rounded-full glass-panel p-1 text-[10px] uppercase tracking-[0.25em] sm:right-6"
        style={{ animation: "cinematic-fade 1s ease-out 2.6s both" }}
      >
        {(["en", "fa"] as const).map((l) => {
          const active = lang === l;
          return (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="rounded-full px-3 py-1.5 transition-colors"
              style={
                active
                  ? {
                      color: "var(--foreground)",
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 24%, transparent), color-mix(in oklab, var(--plasma) 6%, transparent))",
                      boxShadow:
                        "inset 0 1px 0 color-mix(in oklab, white 16%, transparent), 0 0 18px -6px color-mix(in oklab, var(--plasma) 70%, transparent)",
                    }
                  : { color: "color-mix(in oklab, var(--foreground) 55%, transparent)" }
              }
            >
              {l === "en" ? "EN" : "فا"}
            </button>
          );
        })}
      </div>

      {/* Center identity */}
      <section className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground sm:text-xs"
          style={{ animation: "cinematic-fade 1.4s ease-out 1.6s both" }}
        >
          {t.eyebrow}
        </p>

        <h1
          className="text-cinematic text-5xl font-extralight leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animation: "cinematic-fade 1.6s ease-out 1.9s both" }}
        >
          {t.firstName}{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.lastName}
          </span>
        </h1>

        <p
          className="mt-6 max-w-md text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.2s both" }}
        >
          {t.tagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animation: "cinematic-fade 1.6s ease-out 2.6s both" }}
        >
          <CTA to="/work" primary>{t.cta.work}</CTA>
          <CTA to="/about">{t.cta.about}</CTA>
          <CTA to="/contact">{t.cta.contact}</CTA>
        </div>

      </section>

      {/* Bottom whisper */}
      <div
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60"
        style={{ animation: "cinematic-fade 1.2s ease-out 3.2s both" }}
      >
        {t.whisper}
      </div>

      {/* Intro veil */}
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
