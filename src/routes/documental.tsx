import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.documental;

export const Route = createFileRoute("/documental")({
  head: () => ({
    meta: [
      { title: "Documental Oscuridad a la Luz — Tao Axuni" },
      { name: "description", content: "Una mirada al primer Retiro Taoísta de Oscuridad en español y a su viaje iniciático de la oscuridad a la luz." },
      { property: "og:title", content: "Documental Oscuridad a la Luz — Tao Axuni" },
      { property: "og:description", content: "En la ausencia de luz, nace la verdadera claridad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocumentaryPage,
});

function DocumentaryPage() {
  return <ContentPage content={content} />;
}
