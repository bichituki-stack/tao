import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import cave from "@/assets/cave-candle.jpg";
import dawn from "@/assets/hero-dawn.jpg";
import portrait from "@/assets/tao-portrait.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import type { PageContent } from "@/data/site";

const images = {
  cave: { src: cave, width: 1920, height: 1088 },
  dawn: { src: dawn, width: 1920, height: 1088 },
  portrait: { src: portrait, width: 896, height: 1152 },
};

export function ContentPage({ content }: { content: PageContent }) {
  const image = content.image ? images[content.image] : null;
  const cta = content.cta ?? { label: "Agenda una conversación", to: "/agenda" } as const;

  return (
    <div className="bg-background text-foreground">
      <Header tone="dark" />
      <main>
        <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-night pb-20 pt-40 text-pearl md:pb-28">
          {image ? (
            <>
              <img src={image.src} alt={content.imageAlt ?? ""} width={image.width} height={image.height} className={`absolute inset-0 h-full w-full object-cover opacity-50 ${content.image === "portrait" ? "object-[center_30%]" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-night via-night/75 to-night/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40" />
            </>
          ) : (
            <div className="absolute -right-40 top-10 h-[42rem] w-[42rem] rounded-full border border-gold/15 shadow-glow" aria-hidden />
          )}
          <div className="relative mx-auto w-full max-w-7xl px-6">
            <p className="eyebrow animate-rise text-gold">{content.eyebrow}</p>
            <h1 className="animate-rise mt-6 max-w-5xl text-5xl leading-[0.98] md:text-7xl lg:text-8xl" style={{ animationDelay: ".15s" }}>
              {content.title}{content.italic && <> <em className="text-gold-gradient">{content.italic}</em></>}
            </h1>
            <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-pearl/75" style={{ animationDelay: ".35s" }}>
              {content.description}
            </p>
            {content.facts && (
              <div className="animate-rise mt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ animationDelay: ".5s" }}>
                {content.facts.map((fact) => (
                  <span key={fact} className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-pearl/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />{fact}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.65fr_1.35fr] md:py-32">
          <Reveal>
            <p className="eyebrow text-gold">La experiencia</p>
            <span className="mt-6 block h-px w-20 bg-gold" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-6xl">{content.statement}</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{content.introduction}</p>
          </Reveal>
        </section>

        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-7xl gap-px px-6 md:grid-cols-2 lg:grid-cols-3">
            {content.details.map((detail, index) => (
              <Reveal key={detail.title} delay={(index % 3) * 100} className="h-full">
                <article className="flex h-full min-h-64 flex-col border-b border-border bg-cream p-8 md:border-r md:p-10">
                  <span className="font-display text-2xl italic text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-3xl leading-tight">{detail.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-gold">Continúa tu camino</p>
            <h2 className="mt-4 text-4xl md:text-5xl">También puede <em>interesarte</em></h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.related.map((item, index) => (
              <Reveal key={item.to} delay={index * 100} className="h-full">
                <Link to={item.to} className="group flex h-full min-h-40 items-end justify-between gap-6 border border-border p-7 transition duration-500 hover:border-gold hover:bg-secondary/60">
                  <span className="font-display text-2xl leading-tight">{item.label}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-night py-28 text-center text-pearl">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          <Reveal className="relative mx-auto max-w-3xl px-6">
            <p className="eyebrow text-gold">Tu siguiente paso</p>
            <h2 className="mt-5 text-4xl md:text-6xl">¿Sientes que este camino <em className="text-gold-gradient">te llama?</em></h2>
            <Link to={cta.to} className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink shadow-glow transition hover:scale-[1.03]">
              {cta.label}<ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
