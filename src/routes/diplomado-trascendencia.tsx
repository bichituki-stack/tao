import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.trascendencia;

export const Route = createFileRoute("/diplomado-trascendencia")({
  head: () => ({
    meta: [
      { title: "Diplomado de Trascendencia Espiritual — Tao Axuni" },
      { name: "description", content: "Formación cada tercer fin de semana del mes, con sesiones grabadas y puertas abiertas a las prácticas elevadas del Tao." },
      { property: "og:title", content: "Diplomado de Trascendencia Espiritual — Tao Axuni" },
      { property: "og:description", content: "Una práctica mensual para profundizar en el taoísmo y la alquimia interna." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TranscendenceDiplomaPage,
});

function TranscendenceDiplomaPage() {
  return <ContentPage content={content} />;
}
