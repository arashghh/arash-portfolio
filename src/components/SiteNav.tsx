import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const { pathname } = useLocation();
  return (
    <header
      className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:px-10"
      style={{ animation: "cinematic-fade 1s ease-out 0.2s both" }}
    >
      <Link to="/" className="flex items-center gap-2 text-foreground">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--plasma)", boxShadow: "0 0 10px var(--plasma)" }}
        />
        AG · Studio
      </Link>
      <nav className="flex items-center gap-1 rounded-full glass-panel px-1.5 py-1.5">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-3 py-1.5 text-[10px] tracking-[0.3em] transition-colors"
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
      <span className="hidden sm:inline">MMXXVI</span>
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
  return (
    <main className="relative z-10 min-h-screen w-full px-6 pb-24 pt-32 sm:px-10 sm:pt-36">
      <SiteNav />
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
          style={{ animation: "cinematic-fade 1.2s ease-out 0.4s both" }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-cinematic max-w-3xl text-4xl font-extralight leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ animation: "cinematic-fade 1.4s ease-out 0.6s both" }}
        >
          {title}
        </h1>
        {intro ? (
          <p
            className="mt-6 max-w-xl text-balance text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
            style={{ animation: "cinematic-fade 1.4s ease-out 0.9s both" }}
          >
            {intro}
          </p>
        ) : null}
        <div
          className="mt-14"
          style={{ animation: "cinematic-fade 1.4s ease-out 1.1s both" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
