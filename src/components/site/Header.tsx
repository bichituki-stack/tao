import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEnterDarkness } from "./Eclipse";

type Item = { label: string; dark?: boolean };
const nav: { label: string; items?: Item[] }[] = [
  { label: "Inicio" },
  { label: "Sobre Tao", items: [{ label: "Mi formación y linaje" }, { label: "Mi enfoque" }] },
  { label: "Sexualidad Sagrada", items: [{ label: "Diplomado de Sexualidad Sagrada y Plenitud" }, { label: "Gozo del Corazón" }, { label: "Prevención de Violencia en la Pareja" }] },
  { label: "Retiros", items: [{ label: "Oscuridad a la Luz", dark: true }, { label: "Para Renacer" }, { label: "Sexualidad Sagrada" }] },
  { label: "Programas", items: [{ label: "Diplomado de Trascendencia Espiritual" }, { label: "Separaciones Amorosas" }, { label: "Gozo del Corazón" }, { label: "Abundancia · Recuerda tus Sueños" }] },
  { label: "Eventos", items: [{ label: "Próximos eventos" }, { label: "Desafíos gratuitos" }] },
  { label: "Recursos", items: [{ label: "Podcast" }, { label: "Documental Oscuridad a la Luz", dark: true }, { label: "Desafíos gratuitos" }] },
];

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const enter = useEnterDarkness();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const dark = tone === "dark";
  const base = dark ? "text-pearl" : scrolled ? "text-ink" : "text-cream";
  const bg = scrolled ? (dark ? "bg-night/80 backdrop-blur-md border-b border-pearl/10" : "bg-cream/85 backdrop-blur-md border-b border-border") : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bg} ${base}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display whitespace-nowrap text-2xl tracking-wide">
          Tao <span className="italic text-gold">Axuni</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((n) => (
            <div key={n.label} className="group relative">
              <button className="eyebrow flex items-center gap-1 whitespace-nowrap py-6 !tracking-[0.2em] opacity-90 transition hover:text-gold hover:opacity-100">
                {n.label} {n.items && <ChevronDown className="h-3 w-3" />}
              </button>
              {n.items && (
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border border-border bg-card p-2 text-ink shadow-xl">
                    {n.items.map((i) => (
                      <button
                        key={i.label}
                        onClick={i.dark ? enter : undefined}
                        className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-secondary ${i.dark ? "font-display text-base italic" : ""}`}
                      >
                        {i.label}
                        {i.dark && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="#agenda" className="hidden whitespace-nowrap rounded-full bg-gold-gradient px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink shadow-glow transition hover:scale-[1.03] lg:inline-block">
          Agenda una llamada
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-cream px-6 py-6 text-ink lg:hidden">
          {nav.map((n) => (
            <div key={n.label} className="border-b border-border py-3">
              <p className="eyebrow">{n.label}</p>
              {n.items?.map((i) => (
                <button key={i.label} onClick={i.dark ? enter : undefined} className="block py-1.5 pl-3 text-left text-sm text-muted-foreground">{i.label}</button>
              ))}
            </div>
          ))}
          <a href="#agenda" className="mt-5 block rounded-full bg-gold-gradient py-3 text-center text-xs uppercase tracking-[0.2em]">Agenda una llamada</a>
        </div>
      )}
    </header>
  );
}
