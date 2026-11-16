import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.prevencion;

export const Route = createFileRoute("/prevencion-violencia-pareja")({
  head: () => ({
    meta: [
      { title: "Prevención de Violencia en la Pareja — Tao Axuni" },
      { name: "description", content: "Un programa formativo de relaciones conscientes sobre cuidado, límites, respeto y prevención de la violencia en la pareja." },
      { property: "og:title", content: "Prevención de Violencia en la Pareja — Tao Axuni" },
      { property: "og:description", content: "La conciencia también transforma nuestra forma de vincularnos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreventionPage,
});

function PreventionPage() {
  return <ContentPage content={content} />;
}
