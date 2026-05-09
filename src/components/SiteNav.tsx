import { Link, useLocation } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function SiteNav() {
  const { pathname } = useLocation();
  const { t, lang, setLang } = useLang();

  const links = [
    { to: "/" as const, label: t.nav.home },
    { to: "/work" as const, label: t.nav.work },
    { to: "/about" as const, label: t.nav.about },
    { to: "/contact" as const, label: t.nav.contact },
  ];

  return (
    <header
      dir="ltr"
      className="nav-chrome absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-2 px-4 pt-[max(env(safe-area-inset-top),1rem)] pb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:px-8 sm:pt-6 sm:pb-6 sm:text-[11px]"
      style={{ animation: "cinematic-fade 1s ease-out 0.2s both" }}
    >
      <Link to="/" className="flex shrink-0 items-center gap-2 text-foreground">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--plasma)", boxShadow: "0 0 10px var(--plasma)" }}
        />
        <span className="hidden sm:inline">AG · Studio</span>
      </Link>

      <nav className="glass-panel flex min-w-0 items-center gap-0.5 rounded-full p-1 sm:gap-1 sm:p-1.5">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              lang={lang}
              className="relative truncate rounded-full px-2.5 py-1.5 text-[9px] tracking-[0.2em] transition-colors sm:px-3 sm:text-[10px] sm:tracking-[0.3em]"
              style={
                active
                  ? {
                      color: "var(--foreground)",
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 22%, transparent), color-mix(in oklab, var(--plasma) 6%, transparent))",
                      boxShadow:
                        "inset 0 1px 0 color-mix(in oklab, white 16%, transparent), 0 0 18px -6px color-mix(in oklab, var(--plasma) 70%, transparent)",
                    }
                  : { color: "color-mix(in oklab, var(--foreground) 55%, transparent)" }
              }
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="glass-panel flex shrink-0 items-center gap-0.5 rounded-full p-1 text-[10px] uppercase tracking-[0.25em]">
        {(["en", "fa"] as const).map((l) => {
          const active = lang === l;
          return (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-label={l === "en" ? "English" : "فارسی"}
              aria-pressed={active}
              className="rounded-full px-2 py-1 text-[10px] leading-none transition-colors sm:px-2.5"
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
              {l === "en" ? "EN" : "FA"}
            </button>
          );
        })}
      </div>
    </header>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  const { isRtl } = useLang();
  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="relative z-10 min-h-[100svh] w-full px-5 pb-20 pt-24 sm:px-10 sm:pt-32 sm:pb-24"
    >
      <SiteNav />
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground sm:mb-5 sm:tracking-[0.5em]"
          style={{ animation: "cinematic-fade 1.2s ease-out 0.4s both" }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-cinematic max-w-3xl text-balance text-3xl font-extralight leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ animation: "cinematic-fade 1.4s ease-out 0.6s both" }}
        >
          {title}
        </h1>
        {intro ? (
          <p
            className="mt-5 max-w-xl text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:mt-6 sm:text-base"
            style={{ animation: "cinematic-fade 1.4s ease-out 0.9s both" }}
          >
            {intro}
          </p>
        ) : null}
        <div
          className="mt-10 sm:mt-14"
          style={{ animation: "cinematic-fade 1.4s ease-out 1.1s both" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
