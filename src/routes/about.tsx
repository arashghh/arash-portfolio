import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteNav";

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

const timeline = [
  { year: "2026", text: "Independent — interfaces for ambitious products." },
  { year: "2024", text: "Senior Frontend, design-system lead at a fintech." },
  { year: "2022", text: "Motion engineer for an award-winning agency." },
  { year: "2020", text: "Started shipping production interfaces." },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About · the maker"
      title={
        <>
          A frontend engineer who treats{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            interface as instrument.
          </span>
        </>
      }
      intro="I build calm, considered software. The kind of product that feels obvious in use and was anything but obvious to make."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="glass-panel rounded-2xl p-7">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Practice
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-foreground/85">
            I work across product, motion and design systems — translating ambitious
            ideas into shipping software. My focus is taste, performance and the
            thousand quiet details that separate a good interface from one people love.
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
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
            className="absolute left-2 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, color-mix(in oklab, var(--plasma) 50%, transparent), transparent)",
            }}
          />
          {timeline.map((t, i) => (
            <li
              key={t.year}
              className="relative pl-10 pb-8 last:pb-0"
              style={{ animation: `cinematic-fade 1s ease-out ${1.2 + i * 0.15}s both` }}
            >
              <span
                className="absolute left-[2px] top-1.5 h-2 w-2 rounded-full"
                style={{
                  background: "var(--plasma)",
                  boxShadow: "0 0 12px var(--plasma)",
                }}
              />
              <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                {t.year}
              </p>
              <p className="mt-1.5 text-base font-light text-foreground/90">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
