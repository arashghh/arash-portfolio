import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import { Atmosphere } from "@/components/Atmosphere";
import { SiteNav } from "@/components/SiteNav";
import { LanguageProvider, useLang } from "@/lib/i18n";

function NotFoundComponent() {
  const { t } = useLang();
  return (
    <>
      <Atmosphere />
      <SiteNav />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            {t.notFound.tag}
          </p>
          <h1 className="text-cinematic text-6xl font-extralight tracking-tight text-foreground sm:text-7xl">
            {t.notFound.title}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm font-light text-muted-foreground">
            {t.notFound.text}
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="glass-panel inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90"
            >
              {t.notFound.cta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useLang();

  return (
    <>
      <Atmosphere />
      <SiteNav />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            {t.error.tag}
          </p>
          <h1 className="text-cinematic text-5xl font-extralight tracking-tight text-foreground sm:text-6xl">
            {t.error.title}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm font-light text-muted-foreground">
            {t.error.text}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="glass-panel inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 22%, transparent), color-mix(in oklab, var(--plasma) 6%, transparent))",
              }}
            >
              {t.error.retry}
            </button>
            <Link
              to="/"
              className="glass-panel inline-flex h-11 items-center justify-center rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90"
            >
              {t.error.home}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Atmosphere />
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
