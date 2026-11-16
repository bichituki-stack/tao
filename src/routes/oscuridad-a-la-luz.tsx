import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import cave from "@/assets/cave-candle.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/oscuridad-a-la-luz")({
  head: () => ({
    meta: [
      { title: "Retiro de Oscuridad a la Luz — Tao Axuni" },
      { name: "description", content: "El primer Retiro Taoísta de Oscuridad en español. Desciende a tu interior y renace a la luz." },
      { property: "og:title", content: "Retiro de Oscuridad a la Luz — Tao Axuni" },
      { property: "og:description", content: "En la ausencia de luz, nace la verdadera claridad." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Darkness,
});

const stages = [
  { n: "I", t: "El Umbral", d: "Dejas atrás el ruido del mundo exterior y cruzas hacia el silencio." },
  { n: "II", t: "El Vacío", d: "En la oscuridad total, los sentidos se aquietan y la mente se ilumina." },
  { n: "III", t: "La Chispa", d: "Prácticas taoístas de alquimia interna despiertan tu luz original." },
  { n: "IV", t: "El Amanecer", d: "Regresas renacido, con una claridad que transforma tu vida." },
];

function Darkness() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${event.clientX - 250}px, ${event.clientY - 250}px)`;
      if (dot.current) dot.current.style.transform = `translate(${event.clientX - 3}px, ${event.clientY - 3}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-night text-pearl">
      <Header tone="dark" />
      <div className="dark-zone">
        <div ref={glow} className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[500px] w-[500px] rounded-full mix-blend-screen md:block" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold-soft) 22%, transparent) 0%, transparent 65%)" }} />
        <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 rounded-full bg-gold shadow-glow md:block" />

        <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="eyebrow animate-rise text-gold">Retiro Taoísta</p>
          <h1 className="animate-rise mt-6 text-6xl leading-none md:text-8xl lg:text-9xl" style={{ animationDelay: ".3s" }}>
            De la Oscuridad<br /><em className="text-gold-gradient">a la Luz</em>
          </h1>
          <p className="animate-rise mt-10 text-sm uppercase tracking-[0.3em] text-pearl/60" style={{ animationDelay: ".6s" }}>28 Agosto — 11 Septiembre · 2027</p>
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-pearl/70" style={{ animationDelay: ".75s" }}>El primer Retiro Taoísta de Oscuridad en español.</p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-32">
          <Reveal>
            <Link to="/documental" className="group relative block aspect-video overflow-hidden border border-pearl/10">
              <img src={cave} alt="Documental Oscuridad a la Luz" loading="lazy" width={1920} height={1088} className="h-full w-full object-cover opacity-50 transition duration-[2000ms] group-hover:scale-105 group-hover:opacity-75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-night/20">
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 text-gold shadow-glow transition group-hover:scale-110 group-hover:bg-gold group-hover:text-night">
                  <ArrowRight className="h-8 w-8" strokeWidth={1.2} />
                </span>
                <span className="eyebrow text-pearl">Explorar el documental</span>
              </div>
            </Link>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <p className="font-display text-3xl italic leading-snug text-pearl/85 md:text-5xl">
              “Quince días en oscuridad total. Un viaje iniciático hacia la luz que siempre ha habitado en ti.”
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow text-gold">El recorrido simbólico</p>
          </Reveal>
          <div className="grid gap-px bg-pearl/10 md:grid-cols-4">
            {stages.map((stage, index) => (
              <Reveal key={stage.n} delay={index * 150}>
                <div className="h-full bg-night p-10 transition duration-700 hover:bg-pearl/[0.03]">
                  <span className="font-display text-5xl text-gold">{stage.n}</span>
                  <h3 className="mt-6 text-3xl">{stage.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-pearl/60">{stage.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-dawn h-[120vh]" aria-hidden />
      <section className="bg-cream py-32 text-center text-ink">
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-gold">Renace a la luz</p>
          <h2 className="mt-5 text-5xl md:text-7xl">¿Por dónde <em>empezar?</em></h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-muted-foreground">Descubre los distintos caminos y encuentra la experiencia que resuena contigo.</p>
          <Link to="/agenda" className="mt-12 inline-block rounded-full bg-gold-gradient px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-ink shadow-glow transition hover:scale-[1.03]">Agenda una llamada</Link>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
