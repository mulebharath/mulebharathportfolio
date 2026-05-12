import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const linkBase =
  "text-xs uppercase tracking-[0.25em] transition-colors hover:text-[var(--brand)] cursor-pointer";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur-sm bg-background/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md border-2 border-[var(--ink)] text-base font-black tracking-tight">
            MB
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--ink)]/60">Mule Bharath</p>
            <p className="text-sm font-semibold">Designer · Developer · Visual Storyteller</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 md:gap-8">
          {sections.map((s) =>
            onHome ? (
              <a key={s.id} href={`#${s.id}`} className={linkBase}>
                {s.label}
              </a>
            ) : (
              <Link key={s.id} to="/" hash={s.id} className={linkBase}>
                {s.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-[var(--ink)]/20 text-[var(--ink)]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-background border-t border-[var(--ink)]/10 shadow-lg">
          <nav className="flex flex-col px-4 py-4">
            {sections.map((s) =>
              onHome ? (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm uppercase tracking-[0.25em] border-b border-[var(--ink)]/10 last:border-b-0 hover:text-[var(--brand)]"
                >
                  {s.label}
                </a>
              ) : (
                <Link
                  key={s.id}
                  to="/"
                  hash={s.id}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm uppercase tracking-[0.25em] border-b border-[var(--ink)]/10 last:border-b-0 hover:text-[var(--brand)]"
                >
                  {s.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
