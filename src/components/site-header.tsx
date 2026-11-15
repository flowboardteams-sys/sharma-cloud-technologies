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
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedMode = window.localStorage.getItem("sct-color-mode");
    const shouldUseLight = savedMode === "light";
    setLightMode(shouldUseLight);
    document.documentElement.classList.toggle("light", shouldUseLight);
    document.documentElement.classList.toggle("dark", !shouldUseLight);
  }, []);

  const toggleColorMode = () => {
    const nextLightMode = !lightMode;
    setLightMode(nextLightMode);
    document.documentElement.classList.toggle("light", nextLightMode);
    document.documentElement.classList.toggle("dark", !nextLightMode);
    window.localStorage.setItem("sct-color-mode", nextLightMode ? "light" : "dark");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : "bg-background/80 backdrop-blur-xl"
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
                  : "text-foreground/75 hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleColorMode}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-input text-foreground transition-colors hover:bg-muted"
            aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
          >
            {lightMode ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
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
              className="block rounded-xl px-4 py-3 font-display text-base font-semibold text-foreground/85 hover:bg-muted/70"
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
