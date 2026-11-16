import { Link } from "@tanstack/react-router";

const links = [
  { label: "Formación y linaje", to: "/formacion-y-linaje" },
  { label: "Próximos eventos", to: "/eventos" },
  { label: "Podcast del Gozo", to: "/podcast" },
  { label: "Recursos gratuitos", to: "/desafios-gratuitos" },
  { label: "Agenda una llamada", to: "/agenda" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-16 text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1.4fr] md:items-end">
        <div>
          <Link to="/" className="font-display text-3xl">Tao <span className="italic text-gold">Axuni</span></Link>
          <p className="eyebrow mt-4 max-w-md leading-relaxed text-muted-foreground">Trascendencia · Sexualidad Sagrada · Relaciones Conscientes</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end" aria-label="Enlaces del pie de página">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6">
        <p className="text-xs text-muted-foreground">© 2026 Tao Axuni</p>
      </div>
    </footer>
  );
}
