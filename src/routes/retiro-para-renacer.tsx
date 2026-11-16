import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.renacer;

export const Route = createFileRoute("/retiro-para-renacer")({
  head: () => ({
    meta: [
      { title: "Retiro Para Renacer — Tao Axuni" },
      { name: "description", content: "Un retiro de relaciones conscientes para procesos de separación, presencia y transformación personal." },
      { property: "og:title", content: "Retiro Para Renacer — Tao Axuni" },
      { property: "og:description", content: "Volver a ti puede ser el comienzo de una nueva etapa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RebirthRetreatPage,
});

function RebirthRetreatPage() {
  return <ContentPage content={content} />;
}
