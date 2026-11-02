import { useState } from "react";
import cardSoftware from "@/assets/card-software.jpg";
import cardMobile from "@/assets/card-mobile.jpg";
import cardAi from "@/assets/card-ai.jpg";
import featWeb from "@/assets/feat-web.jpg";
import featMobile from "@/assets/feat-mobile.jpg";
import featAi from "@/assets/feat-ai.jpg";
import featCloud from "@/assets/feat-cloud.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter, Reveal, WordReveal } from "@/components/reveal";
import { Logo } from "@/components/site-header";

/* ------------------------------------------------------------------ */
/* Services — three image cards                                        */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    img: cardSoftware,
    title: "Custom Software & Web Platforms",
    desc: "Scalable web applications, dashboards and internal tools built around how your business actually works.",
    tags: ["Web Apps", "SaaS"],
    darkText: true,
  },
  {
    img: cardMobile,
    title: "Mobile Apps That Users Love",
    desc: "Beautiful iOS and Android apps with smooth performance, offline support and clean design.",
    tags: ["iOS", "Android"],
    darkText: false,
  },
  {
    img: cardAi,
    title: "AI Agents & Automation",
    desc: "Intelligent agents that answer, sell, book and automate — working 24x7 across chat, email and voice.",
    tags: ["AI Agents", "Automation"],
    darkText: false,
  },
];

function ArrowButton({ darkText }: { darkText: boolean }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
        darkText ? "bg-ink text-foreground" : "bg-foreground text-background"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <a
              href="#contact"
              className={`group relative block h-[440px] overflow-hidden rounded-4xl ${
                s.darkText ? "text-ink" : "text-foreground"
              }`}
            >
              <img
                src={s.img}
                alt=""
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  s.darkText
                    ? "from-[oklch(0.4_0.1_190/0.55)] via-transparent to-transparent"
                    : "from-[oklch(0.1_0.02_290/0.6)] via-transparent to-transparent"
                }`}
              />
              <div className="absolute right-5 top-5 flex gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md ${
                      s.darkText ? "bg-ink/10 text-ink" : "bg-white/20 text-foreground"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-bold leading-snug sm:text-[1.7rem]">{s.title}</h3>
                <p className={`mt-3 max-h-0 overflow-hidden text-sm leading-relaxed opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 ${s.darkText ? "text-ink/80" : "text-foreground/85"}`}>
                  {s.desc}
                </p>
                <div className="mt-4">
                  <ArrowButton darkText={s.darkText} />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquees                                                            */
/* ------------------------------------------------------------------ */

const BIG_WORDS = ["Software Apps", "AI Agents", "Cloud Solutions", "Mobile Apps", "Automation", "Web Platforms"];

export function BigMarquee() {
  const items = [...BIG_WORDS, ...BIG_WORDS];
  return (
    <section className="overflow-hidden border-y border-border py-8" aria-hidden="true">
      <div className="marquee-track items-center gap-10">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={`whitespace-nowrap font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${
                i % 2 === 0 ? "text-foreground" : "text-stroke-soft"
              }`}
            >
              {w}
            </span>
            <span className="text-flame text-2xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

const CHIPS = [
  "Web Development", "Mobile Apps", "AI Agents", "Chatbots", "Cloud & DevOps",
  "API Integrations", "Dashboards", "E-commerce", "Automation", "Data & Analytics",
];

export function ChipMarquee() {
  const items = [...CHIPS, ...CHIPS];
  return (
    <div className="overflow-hidden py-2" aria-hidden="true">
      <div className="marquee-track-fast gap-3">
        {items.map((c, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About + counters                                                    */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "AI Agents Deployed" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-flame">About Us</span>
            <WordReveal
              as="h2"
              step={60}
              text="Explore limitless possibilities with our intelligent solutions"
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Sharma Cloud Technologies builds software apps, AI agents and cloud solutions
              for businesses of every size. From your first landing page to a full AI-powered
              platform, we turn ideas into reliable, production-grade products.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you need a customer mobile app, an internal dashboard or an AI agent
              that works around the clock, our team designs, builds and supports it end to end —
              so you can focus on growing your business.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 font-display text-base font-semibold text-accent-foreground transition-all hover:bg-flame/90"
            >
              Explore More
              <span className="transition-transform group-hover:translate-x-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <img
              src={featAi}
              alt="AI agent technology built by Sharma Cloud Technologies"
              width={1280}
              height={1024}
              loading="lazy"
              className="w-full rounded-4xl object-cover"
            />
            <div className="float-slow absolute -bottom-6 -left-4 rounded-2xl bg-card p-5 shadow-2xl sm:-left-8">
              <div className="font-display text-3xl font-extrabold text-mint">
                <Counter value={24} suffix="x7" />
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground/80">AI agents working for you</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="rounded-3xl border border-border bg-card/60 p-7 text-center lift">
              <div className="font-display text-4xl font-extrabold text-flame sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Numbered capability list                                            */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  { n: "01", title: "AI Agents & Chatbots", desc: "Custom agents that handle support, sales and operations around the clock." },
  { n: "02", title: "Custom Software", desc: "Web platforms, portals and internal tools tailored to your exact workflow." },
  { n: "03", title: "Mobile Apps", desc: "Native and cross-platform apps your customers carry everywhere." },
  { n: "04", title: "Cloud & DevOps", desc: "Reliable cloud architecture, deployments and monitoring that scale with you." },
  { n: "05", title: "Automation & Integrations", desc: "Connect your tools, automate repetitive work and eliminate manual errors." },
  { n: "06", title: "Data & Analytics", desc: "Dashboards and reports that turn raw data into confident decisions." },
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-flame">What We Do</span>
          <WordReveal
            as="h2"
            step={50}
            text="Embrace the power of AI today with Sharma Cloud"
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
        </div>
      </Reveal>
      <div className="mt-14">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.n} delay={i * 60}>
            <div className="group grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-border px-2 py-7 transition-colors hover:bg-white/5 sm:grid-cols-[auto_1fr_1.2fr] sm:items-center sm:gap-10 sm:px-6">
              <span className="font-display text-xl font-bold text-flame/70 transition-colors group-hover:text-flame sm:text-2xl">
                {c.n}
              </span>
              <h3 className="font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1 sm:text-base">
                {c.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Work gallery                                                        */
/* ------------------------------------------------------------------ */

const WORK = [
  { img: featWeb, title: "Web Platforms", desc: "Dashboards, portals and SaaS products" },
  { img: featMobile, title: "Mobile Apps", desc: "iOS & Android experiences" },
  { img: featAi, title: "AI Agents", desc: "Chat, voice and workflow agents" },
  { img: featCloud, title: "Cloud Infrastructure", desc: "Scalable, secure, monitored" },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-flame">Features</span>
          <WordReveal
            as="h2"
            step={50}
            text="Everything a modern business needs in one partner"
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {WORK.map((w, i) => (
          <Reveal key={w.title} delay={i * 100}>
            <div className="group relative h-80 overflow-hidden rounded-4xl lift">
              <img
                src={w.img}
                alt={w.title}
                width={1280}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_290/0.85)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-foreground/75">{w.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "What services does Sharma Cloud Technologies provide?",
    a: "We build custom software, web platforms, mobile apps, AI agents and cloud solutions — from design and development to launch, hosting and ongoing support.",
  },
  {
    q: "Do you build custom AI agents?",
    a: "Yes. We design AI agents for customer support, sales, bookings, internal automation and data analysis, integrated with your website, WhatsApp, email or internal tools.",
  },
  {
    q: "How long does a typical project take?",
    a: "A simple website or app usually ships in 2–4 weeks. Larger platforms and AI products typically take 6–12 weeks depending on scope. You get a clear timeline before we start.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes post-launch support, and we offer ongoing maintenance, monitoring and improvement plans.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Absolutely. We integrate with your current tools, databases and third-party services through APIs so nothing has to be replaced overnight.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24 lg:px-8">
      <Reveal>
        <div className="text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-flame">FAQ</span>
          <WordReveal
            as="h2"
            step={50}
            text="Everything you need to know about Sharma Cloud"
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          />
        </div>
      </Reveal>
      <div className="mt-12 space-y-4">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-input transition-transform duration-300 ${
            open ? "rotate-45 bg-flame text-accent-foreground" : ""
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA + footer                                                        */
/* ------------------------------------------------------------------ */

export function CtaFooter() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl px-6 py-20 text-center sm:px-16">
            <img
              src={heroBg}
              alt=""
              width={1920}
              height={1080}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[oklch(0.12_0.03_290/0.62)]" />
            <div className="relative">
              <WordReveal
                as="h2"
                step={60}
                text="Elevate your business with our AI-powered solutions"
                className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
              />
              <a
                href="mailto:info@sharmacloud.in"
                className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-accent px-10 py-4 font-display text-base font-semibold text-accent-foreground transition-all hover:bg-flame/90 hover:shadow-[0_16px_40px_-12px_var(--color-flame)]"
              >
                Get in Touch
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-foreground/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-12 sm:flex-row lg:px-8">
          <Logo />
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer">
            {["Services", "About", "Work", "FAQ"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sharma Cloud Technologies
          </p>
        </div>
      </footer>
    </>
  );
}
