import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteNav";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Arash Ghafouri" },
      {
        name: "description",
        content:
          "A curated selection of frontend, motion and interface engineering work by Arash Ghafouri.",
      },
      { property: "og:title", content: "Selected Work — Arash Ghafouri" },
      {
        property: "og:description",
        content: "A curated selection of interface engineering work.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { t } = useLang();
  return (
    <PageShell
      eyebrow={t.work.eyebrow}
      title={
        <>
          {t.work.titleA}{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.work.titleB}
          </span>
        </>
      }
      intro={t.work.intro}
    >
      <ul className="divide-y" style={{ borderColor: "color-mix(in oklab, white 6%, transparent)" }}>
        {t.work.projects.map((p) => (
          <li key={p.title}>
            <Link
              to="/contact"
              className="group flex flex-col gap-3 py-7 transition-colors hover:bg-[color:color-mix(in_oklab,var(--plasma)_4%,transparent)] sm:flex-row sm:items-baseline sm:gap-8 sm:px-2"
            >
              <span className="w-16 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.year}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-light text-foreground sm:text-3xl">
                    {p.title}
                  </h2>
                  <span
                    className="rounded-full px-2 py-0.5 text-[9px] uppercase tracking-widest"
                    style={{
                      background: "color-mix(in oklab, var(--plasma) 12%, transparent)",
                      color: "var(--plasma-glow)",
                      border: "1px solid color-mix(in oklab, var(--plasma) 25%, transparent)",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm font-light text-muted-foreground">
                  {p.blurb}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:w-56 sm:justify-end">
                <span>{p.role}</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: "var(--plasma)" }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
