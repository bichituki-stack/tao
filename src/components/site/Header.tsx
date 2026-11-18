import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEnterDarkness } from "./Eclipse";
import { navigation, type SiteLink } from "@/data/site";

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const enter = useEnterDarkness();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const dark = tone === "dark";
  const base = dark ? "text-pearl" : scrolled ? "text-ink" : "text-cream";
  const bg = scrolled || open
    ? dark
      ? "border-b border-pearl/10 bg-night/90 backdrop-blur-md"
      : "border-b border-border bg-cream/95 backdrop-blur-md"
    : "bg-transparent";

  const renderLink = (item: SiteLink, mobile = false) => {
    const className = mobile
      ? `block py-2 pl-3 text-left text-sm text-muted-foreground transition hover:text-gold ${item.dark ? "font-display text-base italic text-ink" : ""}`
      : `block w-full px-4 py-3 text-left text-sm transition hover:bg-secondary hover:text-gold ${item.dark ? "font-display text-base italic" : ""}`;

    if (item.dark) {
      return (
        <button
          key={item.label}
          onClick={() => {
            setOpen(false);
            enter();
          }}
          className={className}
        >
          {item.label}
          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
        </button>
      );
    }

    return (
      <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bg} ${base}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0 font-display text-2xl tracking-wide" aria-label="Tao Axuni, inicio">
          Tao <span className="italic text-gold">Axuni</span>
        </Link>
        <nav className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6" aria-label="Navegación principal">
          {navigation.map((group) => (
            <div key={group.label} className="group relative shrink-0">
              {group.to ? (
                <Link to={group.to} className="eyebrow block py-6 !tracking-[0.18em] opacity-90 transition hover:text-gold hover:opacity-100">
                  {group.label}
                </Link>
              ) : (
                <button className="eyebrow flex items-center gap-1 whitespace-nowrap py-6 !tracking-[0.18em] opacity-90 transition hover:text-gold hover:opacity-100" aria-haspopup="true">
                  {group.label} <ChevronDown className="h-3 w-3 transition group-hover:rotate-180" />
                </button>
              )}
              {group.items && (
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border border-border bg-card p-2 text-ink shadow-xl">
                    {group.items.map((item) => renderLink(item))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link to="/agenda" className="hidden shrink-0 whitespace-nowrap rounded-full bg-gold-gradient px-4 py-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink shadow-glow transition hover:scale-[1.03] xl:inline-block 2xl:px-5 2xl:text-xs 2xl:tracking-[0.2em]">
          Agenda una llamada
        </Link>
        <button className="shrink-0 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-cream px-6 py-5 text-ink xl:hidden">
          {navigation.map((group) => (
            <div key={group.label} className="border-b border-border py-3">
              {group.to ? (
                <Link to={group.to} onClick={() => setOpen(false)} className="eyebrow block py-1 text-ink">
                  {group.label}
                </Link>
              ) : (
                <p className="eyebrow">{group.label}</p>
              )}
              {group.items?.map((item) => renderLink(item, true))}
            </div>
          ))}
          <Link to="/agenda" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-gold-gradient py-4 text-center text-xs uppercase tracking-[0.2em] text-ink">
            Agenda una llamada
          </Link>
        </div>
      )}
    </header>
  );
}
