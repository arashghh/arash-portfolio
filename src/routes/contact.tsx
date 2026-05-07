import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteNav";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arash Ghafouri" },
      {
        name: "description",
        content:
          "Get in touch with Arash Ghafouri for frontend, motion and interface engineering work.",
      },
      { property: "og:title", content: "Contact — Arash Ghafouri" },
      {
        property: "og:description",
        content: "Available for selective frontend and interface engineering work.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@arashghafouri.dev", href: "mailto:hello@arashghafouri.dev" },
  { icon: Github, label: "GitHub", value: "@arashghafouri", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "in/arashghafouri", href: "#" },
];

function ContactPage() {
  const { t } = useLang();
  return (
    <PageShell
      eyebrow={t.contact.eyebrow}
      title={
        <>
          {t.contact.titleA}{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklab, var(--plasma) 70%, white) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.contact.titleB}
          </span>
        </>
      }
      intro={t.contact.intro}
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
        <form
          className="glass-panel space-y-5 rounded-2xl p-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label={t.contact.name} placeholder={t.contact.namePh} />
          <Field label={t.contact.email} type="email" placeholder={t.contact.emailPh} />
          <Field label={t.contact.project} placeholder={t.contact.projectPh} textarea />
          <button
            type="submit"
            className="group relative inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-7 text-xs font-medium uppercase tracking-[0.25em] text-foreground transition-transform hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 35%, transparent), color-mix(in oklab, var(--plasma-deep) 25%, transparent))",
              border: "1px solid color-mix(in oklab, var(--plasma) 50%, transparent)",
              boxShadow:
                "0 10px 30px -10px color-mix(in oklab, var(--plasma) 50%, transparent), inset 0 1px 0 color-mix(in oklab, white 20%, transparent)",
            }}
          >
            {t.contact.send}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </form>

        <div className="space-y-3">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass-panel group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--plasma) 25%, transparent), transparent)",
                  border: "1px solid color-mix(in oklab, var(--plasma) 30%, transparent)",
                }}
              >
                <Icon className="h-4 w-4" style={{ color: "var(--plasma-glow)" }} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  {label}
                </div>
                <div className="mt-0.5 text-sm font-light text-foreground/90" dir="ltr">{value}</div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: "var(--plasma)" }}
              />
            </a>
          ))}
          <div className="glass-panel rounded-2xl p-5">
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              {t.contact.studio}
            </div>
            <div className="mt-1.5 text-sm font-light text-foreground/80">
              {t.contact.studioText}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  textarea,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-[color:color-mix(in_oklab,var(--plasma)_5%,transparent)]";
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        {label}
      </span>
      <div
        className="rounded-xl"
        style={{
          background: "color-mix(in oklab, white 3%, transparent)",
          border: "1px solid color-mix(in oklab, white 8%, transparent)",
        }}
      >
        {textarea ? (
          <textarea rows={4} placeholder={placeholder} className={cls} />
        ) : (
          <input type={type} placeholder={placeholder} className={cls} />
        )}
      </div>
    </label>
  );
}
