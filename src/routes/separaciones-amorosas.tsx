import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.separaciones;

export const Route = createFileRoute("/separaciones-amorosas")({
  head: () => ({
    meta: [
      { title: "Separaciones Amorosas — Tao Axuni" },
      { name: "description", content: "Un programa de relaciones conscientes para atravesar el final de un vínculo con presencia y volver al propio centro." },
      { property: "og:title", content: "Separaciones Amorosas — Tao Axuni" },
      { property: "og:description", content: "El final de un vínculo también puede abrir un camino interior." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BreakupsPage,
});

function BreakupsPage() {
  return <ContentPage content={content} />;
}
