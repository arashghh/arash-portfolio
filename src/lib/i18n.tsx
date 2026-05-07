import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fa";

type Dict = {
  nav: { home: string; work: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    firstName: string;
    lastName: string;
    tagline: string;
    work: string;
    about: string;
    contact: string;
    whisper: string;
  };
  work: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    projects: { year: string; title: string; role: string; blurb: string; tag: string }[];
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    practice: string;
    practiceText: string;
    timeline: { year: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    name: string;
    email: string;
    project: string;
    namePh: string;
    emailPh: string;
    projectPh: string;
    send: string;
    studio: string;
    studioText: string;
  };
  notFound: { tag: string; title: string; text: string; cta: string };
  error: { tag: string; title: string; text: string; retry: string; home: string };
};

const en: Dict = {
  nav: { home: "Home", work: "Work", about: "About", contact: "Contact" },
  hero: {
    eyebrow: "Frontend Developer · Creative UI Engineer",
    firstName: "Arash",
    lastName: "Ghafouri",
    tagline: "I design and engineer beautiful digital interfaces.",
    work: "Selected Work",
    about: "About",
    contact: "Contact",
    whisper: "⌁  A living interface",
  },
  work: {
    eyebrow: "Selected · 2024 — 2026",
    titleA: "A small body of",
    titleB: "quiet, exacting work.",
    intro: "Each project is engineered to feel inevitable — a calm surface over careful systems.",
    projects: [
      { year: "2026", title: "Helix OS", role: "Design system · Motion", blurb: "An OS-grade component system built on plasma-glass primitives and adaptive motion.", tag: "System" },
      { year: "2025", title: "Northwind Pay", role: "Frontend · Checkout", blurb: "Fintech checkout reimagined — sub-second flows, biometric confirmations, zero rage clicks.", tag: "Product" },
      { year: "2025", title: "Aether Studio", role: "WebGL · Interaction", blurb: "A volumetric portfolio template for visual artists. Real-time light, custom shaders.", tag: "Creative" },
      { year: "2024", title: "Lumen Health", role: "Dashboard · Data viz", blurb: "Clinician dashboard with calm typography, dense charts and zero cognitive overload.", tag: "Enterprise" },
    ],
  },
  about: {
    eyebrow: "About · the maker",
    titleA: "A frontend engineer who treats",
    titleB: "interface as instrument.",
    intro: "I build calm, considered software. The kind of product that feels obvious in use and was anything but obvious to make.",
    practice: "Practice",
    practiceText: "I work across product, motion and design systems — translating ambitious ideas into shipping software. My focus is taste, performance and the thousand quiet details that separate a good interface from one people love.",
    timeline: [
      { year: "2026", text: "Independent — interfaces for ambitious products." },
      { year: "2024", text: "Senior Frontend, design-system lead at a fintech." },
      { year: "2022", text: "Motion engineer for an award-winning agency." },
      { year: "2020", text: "Started shipping production interfaces." },
    ],
  },
  contact: {
    eyebrow: "Contact · open for 2026",
    titleA: "Let's build something",
    titleB: "quietly remarkable.",
    intro: "Currently accepting two engagements per quarter. Tell me about the product, the team and the deadline — I read everything.",
    name: "Your name",
    email: "Email",
    project: "Project",
    namePh: "Ada Lovelace",
    emailPh: "ada@studio.com",
    projectPh: "A few sentences is plenty.",
    send: "Send transmission",
    studio: "Studio · Berlin",
    studioText: "52.5200° N, 13.4050° E — replies within 24h on weekdays.",
  },
  notFound: { tag: "Error · 404", title: "Signal lost.", text: "The page you're looking for has drifted out of frame.", cta: "Return home" },
  error: { tag: "Interruption", title: "This page didn't load.", text: "Something went wrong on our end. You can try again or head home.", retry: "Try again", home: "Go home" },
};

const fa: Dict = {
  nav: { home: "خانه", work: "نمونه‌کارها", about: "درباره من", contact: "تماس" },
  hero: {
    eyebrow: "توسعه‌دهنده فرانت‌اند · مهندس رابط کاربری",
    firstName: "آرش",
    lastName: "غفوری",
    tagline: "رابط‌های دیجیتال زیبا را طراحی و مهندسی می‌کنم.",
    work: "نمونه‌کارها",
    about: "درباره من",
    contact: "تماس",
    whisper: "⌁  یک رابط زنده",
  },
  work: {
    eyebrow: "منتخب · ۱۴۰۳ — ۱۴۰۵",
    titleA: "مجموعه‌ای کوچک از",
    titleB: "کار آرام و دقیق.",
    intro: "هر پروژه به‌گونه‌ای مهندسی شده که بدیهی به‌نظر برسد — سطحی آرام بر فراز سیستم‌هایی دقیق.",
    projects: [
      { year: "۱۴۰۵", title: "هلیکس او‌اس", role: "سیستم طراحی · موشن", blurb: "سیستم کامپوننتی در سطح سیستم‌عامل، بر پایهٔ شیشه‌پلاسما و حرکت تطبیقی.", tag: "سیستم" },
      { year: "۱۴۰۴", title: "نورت‌ویند پی", role: "فرانت‌اند · پرداخت", blurb: "بازآفرینی پرداخت فین‌تک — جریان‌های زیر یک ثانیه، تأیید بایومتریک، بدون کلیک‌های خشمگین.", tag: "محصول" },
      { year: "۱۴۰۴", title: "ایتر استودیو", role: "WebGL · تعامل", blurb: "قالب نمونه‌کار حجمی برای هنرمندان بصری. نور بلادرنگ و شیدرهای اختصاصی.", tag: "خلاقانه" },
      { year: "۱۴۰۳", title: "لومن هلث", role: "داشبورد · بصری‌سازی داده", blurb: "داشبورد پزشکی با تایپوگرافی آرام، نمودارهای متراکم و بدون بار شناختی.", tag: "سازمانی" },
    ],
  },
  about: {
    eyebrow: "درباره · سازنده",
    titleA: "یک مهندس فرانت‌اند که با",
    titleB: "رابط مانند یک ساز رفتار می‌کند.",
    intro: "من نرم‌افزارهای آرام و سنجیده می‌سازم. محصولی که در استفاده بدیهی به‌نظر می‌رسد و ساختش هرگز بدیهی نبود.",
    practice: "تمرین",
    practiceText: "در محصول، موشن و سیستم‌های طراحی کار می‌کنم — ایده‌های جاه‌طلبانه را به نرم‌افزارِ قابلِ ارسال تبدیل می‌کنم. تمرکزم بر سلیقه، کارایی و هزاران جزئیات آرامی است که یک رابط خوب را از رابطی که مردم دوستش دارند جدا می‌کند.",
    timeline: [
      { year: "۱۴۰۵", text: "مستقل — طراحی رابط برای محصولات جاه‌طلبانه." },
      { year: "۱۴۰۳", text: "فرانت‌اند ارشد و سرپرست سیستم طراحی در یک فین‌تک." },
      { year: "۱۴۰۱", text: "مهندس موشن در یک آژانس برندهٔ جوایز." },
      { year: "۱۳۹۹", text: "آغاز ارسال رابط‌های پروداکشن." },
    ],
  },
  contact: {
    eyebrow: "تماس · پذیرای ۱۴۰۵",
    titleA: "بیایید چیزی بسازیم که",
    titleB: "به‌آرامی شگفت‌انگیز باشد.",
    intro: "در حال حاضر هر فصل دو پروژه می‌پذیرم. از محصول، تیم و مهلت بگویید — همه را می‌خوانم.",
    name: "نام شما",
    email: "ایمیل",
    project: "پروژه",
    namePh: "آدا لاولیس",
    emailPh: "ada@studio.com",
    projectPh: "چند جمله کافی است.",
    send: "ارسال پیام",
    studio: "استودیو · برلین",
    studioText: "۵۲.۵۲۰۰° شمالی، ۱۳.۴۰۵۰° شرقی — پاسخ در روزهای کاری ظرف ۲۴ ساعت.",
  },
  notFound: { tag: "خطا · ۴۰۴", title: "سیگنال گم شد.", text: "صفحه‌ای که دنبالش هستید از قاب خارج شده است.", cta: "بازگشت به خانه" },
  error: { tag: "وقفه", title: "این صفحه بارگذاری نشد.", text: "چیزی در سمت ما اشتباه پیش رفت. می‌توانید دوباره تلاش کنید یا به خانه بروید.", retry: "تلاش دوباره", home: "خانه" },
};

const DICTS: Record<Lang, Dict> = { en, fa };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; isRtl: boolean };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof localStorage !== "undefined"
      ? (localStorage.getItem("lang") as Lang | null)
      : null);
    if (stored === "en" || stored === "fa") setLangState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    t: DICTS[lang],
    isRtl: lang === "fa",
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // fallback during SSR or if provider missing
    return { lang: "en", setLang: () => {}, t: DICTS.en, isRtl: false };
  }
  return ctx;
}
