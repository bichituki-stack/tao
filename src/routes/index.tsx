import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Flame, Headphones, Heart, Moon, Sparkles } from "lucide-react";
import hero from "@/assets/hero-dawn.jpg";
import portrait from "@/assets/tao-portrait.jpg";
import cave from "@/assets/cave-candle.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useEnterDarkness } from "@/components/site/Eclipse";
import { upcomingEvents, type SitePath } from "@/data/site";

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

const paths: { icon: typeof Flame; title: string; items: string[]; to: SitePath; dark?: boolean }[] = [
  { icon: Flame, title: "Quiero transformar mi sexualidad", items: ["Sexualidad Sagrada", "Gozo del Corazón", "Prevención de Violencia en la Pareja"], to: "/diplomado-sexualidad-sagrada" },
  { icon: Heart, title: "Quiero sanar mis relaciones", items: ["Separaciones Amorosas", "Retiro Para Renacer", "Prevención de Violencia en la Pareja"], to: "/separaciones-amorosas" },
  { icon: Sparkles, title: "Quiero profundizar espiritualmente", items: ["Diplomado de Trascendencia", "Prácticas Elevadas del Tao", "Oscuridad a la Luz"], to: "/diplomado-trascendencia" },
  { icon: Moon, title: "Quiero vivir una experiencia iniciática", items: ["Retiro de Oscuridad a la Luz", "Retiro Para Renacer", "Retiro de Sexualidad Sagrada"], to: "/oscuridad-a-la-luz", dark: true },
];

const resources = [
  { icon: Headphones, title: "Podcast del Gozo", text: "Conversaciones sobre gozo, presencia, taoísmo y vida consciente.", to: "/podcast" },
  { icon: BookOpen, title: "Desafíos gratuitos", text: "Cursos y recursos para conocer este trabajo antes de dar el siguiente paso.", to: "/desafios-gratuitos" },
  { icon: Moon, title: "Recuerda tus Sueños", text: "Un camino de abundancia para expresar tu pleno potencial.", to: "/abundancia-recuerda-tus-suenos" },
] satisfies { icon: typeof Headphones; title: string; text: string; to: SitePath }[];

function Index() {
  const enter = useEnterDarkness();

  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Meditación al amanecer entre montañas" width={1920} height={1088} className="animate-slowzoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 text-cream">
          <p className="eyebrow animate-rise text-gold-soft">Taoísmo · Alquimia interna · Sexualidad sagrada</p>
          <h1 className="animate-rise mt-6 max-w-6xl text-4xl leading-[1.04] sm:text-5xl md:text-7xl lg:text-8xl" style={{ animationDelay: ".2s" }}>
            Recuerda el <em className="block text-gold-gradient drop-shadow-[0_1px_12px_var(--night)] sm:inline sm:drop-shadow-none">Gozo Absoluto.</em>
            <br />Despierta tu energía vital.
            <br /><span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Transforma tu vida profundamente.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-cream/85" style={{ animationDelay: ".45s" }}>
            Experiencias y enseñanzas de Trascendencia Espiritual, Sexualidad Sagrada y Relaciones Conscientes para quienes desean vivir con mayor dicha y plenitud expresando su pleno potencial.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".65s" }}>
            <a href="#experiencias" className="rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink shadow-glow transition hover:scale-[1.03]">Explorar programas</a>
            <a href="#tao" className="rounded-full border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-ink">Conocer a Tao</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Cuatro caminos</p>
          <h2 className="mt-4 text-5xl md:text-6xl">¿Qué estás <em>buscando?</em></h2>
        </Reveal>
        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => {
            const inner = (
              <>
                <path.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <span className="mt-6 font-display text-sm text-muted-foreground group-hover:text-gold-soft">0{index + 1}</span>
                <h3 className="mt-2 text-3xl leading-tight">{path.title}</h3>
                <ul className="mt-8 space-y-2 text-sm text-muted-foreground group-hover:text-primary-foreground/75">
                  {path.items.map((item) => <li key={item}>— {item}</li>)}
                </ul>
                <ArrowRight className="mt-auto h-5 w-5 translate-y-8 pt-0 opacity-0 transition group-hover:translate-y-6 group-hover:opacity-100" />
              </>
            );
            const className = "group flex h-full w-full flex-col bg-card p-10 text-left transition duration-500 hover:bg-primary hover:text-primary-foreground";
            return (
              <Reveal key={path.title} delay={index * 120} className="h-full">
                {path.dark ? <button onClick={enter} className={className}>{inner}</button> : <Link to={path.to} className={className}>{inner}</Link>}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-night text-pearl">
        <img src={cave} alt="Vela en la oscuridad de una cueva" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-40">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">El retiro insignia</p>
            <h2 className="mt-5 text-6xl leading-none md:text-7xl">De la Oscuridad <em className="text-gold-gradient">a la Luz</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-pearl/75">El primer Retiro Taoísta de Oscuridad en español. Un descenso a tu propio interior para renacer con una claridad que no conocías.</p>
            <button onClick={enter} className="group mt-12 inline-flex items-center gap-4 rounded-full border border-gold/60 px-8 py-4 text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-night">
              <span className="animate-breathe h-2 w-2 rounded-full bg-gold" />
              Entrar en la oscuridad
            </button>
          </Reveal>
        </div>
      </section>

      <section id="experiencias" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Calendario</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Próximas <em>experiencias</em></h2>
          </div>
          <Link to="/eventos" className="eyebrow inline-flex items-center gap-2 border-b border-ink pb-1 transition hover:text-gold">Ver todos los eventos <ArrowRight className="h-3 w-3" /></Link>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {upcomingEvents.map((event, index) => {
            const inner = (
              <>
                <div className="col-span-12 md:col-span-3">
                  <p className="font-display text-2xl">{event.date}</p>
                  <p className="eyebrow mt-1 text-muted-foreground">{event.meta}</p>
                </div>
                <h3 className="col-span-12 text-3xl md:col-span-6 md:text-4xl">{event.title}</h3>
                <p className="col-span-10 text-sm leading-relaxed text-muted-foreground md:col-span-2">{event.note}</p>
                <ArrowRight className="col-span-2 h-5 w-5 justify-self-end text-gold transition group-hover:translate-x-2" />
              </>
            );
            const className = "group grid w-full grid-cols-12 items-center gap-4 py-8 text-left transition hover:bg-secondary/60 md:px-4";
            return (
              <Reveal key={event.title} delay={index * 60}>
                {event.dark ? <button onClick={enter} className={className}>{inner}</button> : <Link to={event.to} className={className}>{inner}</Link>}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="tao" className="scroll-mt-20 bg-secondary/50 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold" />
            <img src={portrait} alt="Retrato de Tao Axuni" loading="lazy" width={896} height={1152} className="relative w-full object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-gold">Conoce a Tao</p>
            <h2 className="mt-4 text-6xl">Soy <em>Tao Axuni</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Creador del primer Retiro Taoísta de Oscuridad en español y el único en el habla hispana certificado para enseñar los niveles más elevados del linaje del Universal Healing Tao System del Grand Master Mantak Chia de Tailandia.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Editor de los nuevos libros de Mantak Chia y Andrew Jan, aún no publicados: <em>Ecstatic Spirit Flight</em> y <em>Grand Completion</em>.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Durante años he estudiado y practicado estas enseñanzas en México, Tailandia y otros lugares del mundo; hoy las comparto a través de cursos, retiros, formaciones y transmisiones.</p>
            <Link to="/formacion-y-linaje" className="eyebrow mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 transition hover:text-gold">Conoce mi historia y linaje <ArrowRight className="h-3 w-3" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-night py-28 text-pearl">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Una tradición viva</p>
            <h2 className="mt-4 text-5xl md:text-6xl">El linaje <em className="text-gold-gradient">importa</em></h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-pearl/10 md:grid-cols-4">
            {["Tao Axuni", "Universal Healing Tao", "Mantak Chia · Andrew Jan", "Prácticas y transmisiones avanzadas"].map((step, index) => (
              <Reveal key={step} delay={index * 100} className="h-full">
                <div className="h-full bg-night p-8">
                  <span className="font-display text-2xl italic text-gold">0{index + 1}</span>
                  <p className="mt-8 font-display text-2xl leading-tight">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/formacion-y-linaje" className="eyebrow mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-gold">Conocer mi formación <ArrowRight className="h-3 w-3" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">Contenido gratuito</p>
          <h2 className="mt-4 text-5xl md:text-6xl">Conoce mi trabajo antes de dar el <em>siguiente paso</em></h2>
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 100} className="h-full">
              <Link to={resource.to} className="group flex h-full min-h-72 flex-col border border-border p-8 transition hover:border-gold hover:bg-secondary/50">
                <resource.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <h3 className="mt-10 text-3xl">{resource.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{resource.text}</p>
                <ArrowRight className="mt-auto h-5 w-5 self-end text-gold transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="agenda" className="relative overflow-hidden py-40 text-center">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/40 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl px-6">
          <p className="eyebrow text-gold">¿Por dónde empezar?</p>
          <h2 className="mt-5 text-5xl md:text-7xl">Conversemos sobre <em>tu camino</em></h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-muted-foreground">Si no sabes por dónde empezar, explora los caminos y descubre qué experiencia resuena contigo en este momento de tu vida.</p>
          <Link to="/agenda" className="mt-12 inline-block rounded-full bg-gold-gradient px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-ink shadow-glow transition hover:scale-[1.03]">Agenda una llamada</Link>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
