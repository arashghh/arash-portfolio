import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteNav";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arash Ghafouri" },
      {
        name: "description",
        content:
          "Arash Ghafouri is a frontend developer and creative UI engineer building immersive, performant interfaces.",
      },
      { property: "og:title", content: "About — Arash Ghafouri" },
      {
        property: "og:description",
        content: "Frontend developer and creative UI engineer.",
      },
    ],
  }),
  component: AboutPage,
});

const stack = [
  "TypeScript", "React", "TanStack", "WebGL", "Three.js", "GSAP",
  "Framer Motion", "Tailwind", "CSS Houdini", "Node", "Edge", "Figma",
];

function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell
      eyebrow={t.about.eyebrow}
      title={
        <>
          {t.about.titleA}{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.about.titleB}
          </span>
        </>
      }
      intro={t.about.intro}
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="glass-panel rounded-2xl p-5 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:tracking-[0.4em]">
            {t.about.practice}
          </p>
          <p className="mt-4 text-pretty text-sm font-light leading-relaxed text-foreground/85 sm:text-[15px]">
            {t.about.practiceText}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5" dir="ltr">
            {stack.map((s) => (
              <span
                key={s}
                className="latin rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                style={{
                  background: "color-mix(in oklab, white 4%, transparent)",
                  border: "1px solid color-mix(in oklab, white 6%, transparent)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute start-2 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, color-mix(in oklab, var(--plasma) 50%, transparent), transparent)",
            }}
          />
          {t.about.timeline.map((item, i) => (
            <li
              key={item.year}
              className="relative ps-10 pb-7 last:pb-0"
              style={{ animation: `cinematic-fade 1s ease-out ${1.2 + i * 0.15}s both` }}
            >
              <span
                className="absolute start-[2px] top-1.5 h-2 w-2 rounded-full"
                style={{
                  background: "var(--plasma)",
                  boxShadow: "0 0 12px var(--plasma)",
                }}
              />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {item.year}
              </p>
              <p className="mt-1.5 text-pretty text-[15px] font-light leading-relaxed text-foreground/90 sm:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
