import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
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
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const m = (e: MouseEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  return (
    <div className="bg-night text-pearl">
      <Header tone="dark" />
      <div className="dark-zone cursor-none">
        <div ref={glow} className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[500px] w-[500px] rounded-full mix-blend-screen md:block" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold-soft) 22%, transparent) 0%, transparent 65%)" }} />

        <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="eyebrow animate-rise text-gold">Retiro Taoísta</p>
          <h1 className="animate-rise mt-6 text-6xl leading-none md:text-8xl lg:text-9xl" style={{ animationDelay: ".3s" }}>
            De la Oscuridad<br /><em className="text-gold-gradient">a la Luz</em>
          </h1>
          <p className="animate-rise mt-10 text-sm uppercase tracking-[0.3em] text-pearl/60" style={{ animationDelay: ".6s" }}>28 Agosto — 11 Septiembre · 2027</p>
        </section>

        {/* DOCUMENTARY */}
        <section className="mx-auto max-w-6xl px-6 pb-32">
          <Reveal>
            <div className="relative aspect-video overflow-hidden border border-pearl/10">
              <img src={cave} alt="Documental Oscuridad a la Luz" loading="lazy" width={1920} height={1088} className={`h-full w-full object-cover transition duration-[2000ms] ${playing ? "scale-105 opacity-90" : "opacity-40"}`} />
              {!playing ? (
                <button onClick={() => setPlaying(true)} className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 text-gold shadow-glow transition hover:scale-110 hover:bg-gold hover:text-night">
                    <Play className="ml-1 h-8 w-8" strokeWidth={1.2} />
                  </span>
                  <span className="eyebrow text-pearl">Enciende la luz · Ver el documental</span>
                </button>
              ) : (
                <button onClick={() => setMuted(!muted)} className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/30 bg-night/60 text-pearl" aria-label="Sonido">
                  {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              )}
            </div>
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
          <div className="grid gap-px bg-pearl/10 md:grid-cols-4">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="h-full bg-night p-10 transition duration-700 hover:bg-pearl/[0.03]">
                  <span className="font-display text-5xl text-gold">{s.n}</span>
                  <h3 className="mt-6 text-3xl">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-pearl/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* DAWN */}
      <section className="bg-dawn h-[120vh]" aria-hidden />
      <section id="agenda" className="bg-cream py-32 text-center text-ink">
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-gold">Renace a la luz</p>
          <h2 className="mt-5 text-5xl md:text-7xl">¿Por dónde <em>empezar?</em></h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-muted-foreground">Agenda una llamada y descubre si este retiro es para ti.</p>
          <a href="#" className="mt-12 inline-block rounded-full bg-gold-gradient px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] shadow-glow transition hover:scale-[1.03]">Agenda una llamada</a>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
