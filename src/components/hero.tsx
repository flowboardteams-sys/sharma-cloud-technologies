import heroBg from "@/assets/hero-bg.jpg";
import featMobile from "@/assets/feat-mobile.jpg";
import { WordReveal } from "@/components/reveal";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="hero-bg absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.03_290/0.72)] via-[oklch(0.12_0.03_290/0.28)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-28 pt-36 lg:px-8">
        <WordReveal
          text="Software, Apps & AI Agents Built for Modern Businesses"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        />

        <p className="fade-in-late mt-8 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          Sharma Cloud Technologies designs and builds custom software, mobile apps and
          intelligent AI agents that automate your business and accelerate growth.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 font-display text-base font-semibold text-accent-foreground transition-all hover:bg-flame/90 hover:shadow-[0_16px_40px_-12px_var(--color-flame)]"
          >
            Discover
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-foreground/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="float-slow mt-16 flex w-full max-w-md items-center gap-4 self-start rounded-3xl bg-white p-4 shadow-2xl lg:absolute lg:bottom-16 lg:right-8 lg:mt-0 lg:w-auto">
          <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl">
            <img src={featMobile} alt="Mobile app built by Sharma Cloud Technologies" width={1280} height={1024} className="h-full w-full object-cover" />
          </div>
          <div className="pr-2">
            <div className="font-display text-4xl font-extrabold text-mint">120+</div>
            <div className="mt-1 font-display text-sm font-semibold leading-snug text-ink">
              Businesses Rely
              <br />
              on Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
