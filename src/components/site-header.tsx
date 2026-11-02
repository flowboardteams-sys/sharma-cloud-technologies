import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Sharma Cloud Technologies — home">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="12" height="12" rx="3.5" fill="var(--color-flame)" />
        <rect x="17" y="1" width="12" height="12" rx="3.5" fill="var(--color-foreground)" />
        <rect x="1" y="17" width="12" height="12" rx="3.5" fill="var(--color-foreground)" />
        <rect x="17" y="17" width="12" height="12" rx="3.5" fill="var(--color-violet)" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold italic tracking-tight">
          <span className="text-flame">Sharma</span> <span className="text-foreground">Cloud</span>
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Technologies
        </span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold tracking-wide transition-colors ${
                i === 0
                  ? "bg-foreground text-background"
                  : "text-foreground/75 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-input px-6 py-2.5 font-display text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-input lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-display text-base font-semibold text-foreground/85 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-flame px-4 py-3 text-center font-display text-base font-semibold text-accent-foreground"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}
