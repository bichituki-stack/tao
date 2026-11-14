import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Heart, Moon, Sparkles } from "lucide-react";
import hero from "@/assets/hero-dawn.jpg";
import portrait from "@/assets/tao-portrait.jpg";
import cave from "@/assets/cave-candle.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useEnterDarkness } from "@/components/site/Eclipse";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tao Axuni — Recuerda el Gozo Absoluto" },
      { name: "description", content: "Trascendencia espiritual, sexualidad sagrada, relaciones conscientes y retiros taoístas con Tao Axuni." },
      { property: "og:title", content: "Tao Axuni — Recuerda el Gozo Absoluto" },
      { property: "og:description", content: "Experiencias y enseñanzas taoístas para vivir con dicha y plenitud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const paths = [
  { icon: Flame, title: "Quiero transformar mi sexualidad", items: ["Sexualidad Sagrada", "Gozo del Corazón", "Prevención de Violencia en la Pareja"] },
  { icon: Heart, title: "Quiero sanar mis relaciones", items: ["Separaciones Amorosas", "Retiro Para Renacer", "Relaciones Conscientes"] },
  { icon: Sparkles, title: "Quiero profundizar espiritualmente", items: ["Diplomado de Trascendencia", "Prácticas Elevadas del Tao", "Oscuridad a la Luz"] },
  { icon: Moon, title: "Quiero vivir una experiencia iniciática", items: ["Retiro de Oscuridad a la Luz", "Retiro Para Renacer", "Retiro de Sexualidad Sagrada"] },
];

const events = [
  { date: "28 Ago — 11 Sep", year: "2027", title: "Retiro de Oscuridad a la Luz", note: "Quince días de inmersión total", dark: true },
  { date: "3er fin de semana", year: "Mensual", title: "Diplomado de Trascendencia Espiritual", note: "Sesiones grabadas · Puertas abiertas" },
  { date: "Puertas abiertas", year: "Online", title: "Diplomado de Sexualidad Sagrada y Plenitud", note: "Inicia cuando estés listo" },
  { date: "29 — 31 Ene", year: "Oaxaca", title: "Retiro de Sexualidad Sagrada", note: "Experiencia presencial" },
  { date: "Febrero", year: "2027", title: "Convivencia Íntima · Los Misterios de Asia", note: "Grupo reducido" },
  { date: "18 Abr", year: "Colombia", title: "Taller El Gozo del Corazón", note: "Presencial" },
];

function Index() {
  const enter = useEnterDarkness();
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Meditación al amanecer entre montañas" width={1920} height={1088} className="animate-slowzoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 text-cream">
          <p className="eyebrow animate-rise text-gold-soft">Taoísmo · Alquimia interna · Sexualidad sagrada</p>
          <h1 className="animate-rise mt-6 max-w-5xl text-5xl leading-[1.02] md:text-7xl lg:text-8xl" style={{ animationDelay: ".2s" }}>
            Recuerda el <em className="text-gold-gradient">Gozo Absoluto.</em>
            <br />Despierta tu energía vital.
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-cream/85" style={{ animationDelay: ".45s" }}>
            Experiencias y enseñanzas de Trascendencia Espiritual, Sexualidad Sagrada y Relaciones Conscientes para vivir con dicha y plenitud.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".65s" }}>
            <a href="#experiencias" className="rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink shadow-glow transition hover:scale-[1.03]">Explorar programas</a>
            <a href="#tao" className="rounded-full border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-ink">Conocer a Tao</a>
          </div>
        </div>
      </section>

      {/* PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Cuatro caminos</p>
          <h2 className="mt-4 text-5xl md:text-6xl">¿Qué estás <em>buscando?</em></h2>
        </Reveal>
        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <a href="#" className="group flex h-full flex-col bg-card p-10 transition duration-500 hover:bg-primary hover:text-primary-foreground">
                <p.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <span className="mt-6 font-display text-sm text-muted-foreground group-hover:text-gold-soft">0{i + 1}</span>
                <h3 className="mt-2 text-3xl leading-tight">{p.title}</h3>
                <ul className="mt-8 space-y-2 text-sm text-muted-foreground group-hover:text-primary-foreground/75">
                  {p.items.map((it) => <li key={it}>— {it}</li>)}
                </ul>
                <ArrowRight className="mt-auto h-5 w-5 translate-y-8 pt-0 opacity-0 transition group-hover:translate-y-6 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DARK RETREAT TEASER */}
      <section className="relative overflow-hidden bg-night text-pearl">
        <img src={cave} alt="Vela en la oscuridad de una cueva" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-40">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">El retiro insignia</p>
            <h2 className="mt-5 text-6xl leading-none md:text-7xl">De la Oscuridad <em className="text-gold-gradient">a la Luz</em></h2>
            <p className="mt-8 text-lg text-pearl/75">El primer Retiro Taoísta de Oscuridad en español. Un descenso a tu propio interior para renacer con una claridad que no conocías.</p>
            <button onClick={enter} className="group mt-12 inline-flex items-center gap-4 rounded-full border border-gold/60 px-8 py-4 text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-night">
              <span className="animate-breathe h-2 w-2 rounded-full bg-gold" />
              Entrar en la oscuridad
            </button>
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section id="experiencias" className="mx-auto max-w-7xl px-6 py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Calendario</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Próximas <em>experiencias</em></h2>
          </div>
          <a href="#" className="eyebrow inline-flex items-center gap-2 border-b border-ink pb-1 transition hover:text-gold">Ver todos los eventos <ArrowRight className="h-3 w-3" /></a>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <button onClick={e.dark ? enter : undefined} className="group grid w-full grid-cols-12 items-center gap-4 py-8 text-left transition hover:bg-secondary/60 md:px-4">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-display text-2xl">{e.date}</p>
                  <p className="eyebrow text-muted-foreground">{e.year}</p>
                </div>
                <h3 className="col-span-12 text-3xl md:col-span-6 md:text-4xl">{e.title}</h3>
                <p className="col-span-10 text-sm text-muted-foreground md:col-span-2">{e.note}</p>
                <ArrowRight className="col-span-2 h-5 w-5 justify-self-end text-gold transition group-hover:translate-x-2" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TAO */}
      <section id="tao" className="bg-secondary/50 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold" />
            <img src={portrait} alt="Retrato de Tao Axuni" loading="lazy" width={896} height={1152} className="relative w-full object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-gold">Conoce a Tao</p>
            <h2 className="mt-4 text-6xl">Soy <em>Tao Axuni</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Creador del primer Retiro Taoísta de Oscuridad en español y el único en el habla hispana certificado para enseñar los niveles más elevados del Universal Healing Tao System del Grand Master Mantak Chia.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Mi camino integra Taoísmo, alquimia interna, sexualidad sagrada y relaciones conscientes.</p>
            <blockquote className="mt-10 border-l border-gold pl-6 font-display text-2xl italic">“La energía que buscas afuera ya habita en ti.”</blockquote>
            <a href="#" className="eyebrow mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 transition hover:text-gold">Mi formación y linaje <ArrowRight className="h-3 w-3" /></a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="agenda" className="relative overflow-hidden py-40 text-center">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/40 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl px-6">
          <p className="eyebrow text-gold">¿Por dónde empezar?</p>
          <h2 className="mt-5 text-5xl md:text-7xl">Conversemos sobre <em>tu camino</em></h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-muted-foreground">Una llamada para descubrir qué experiencia resuena contigo en este momento de tu vida.</p>
          <a href="#" className="mt-12 inline-block rounded-full bg-gold-gradient px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-ink shadow-glow transition hover:scale-[1.03]">Agenda una llamada</a>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
