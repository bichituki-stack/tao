import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.podcast;

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast del Gozo — Tao Axuni" },
      { name: "description", content: "Conversaciones sobre taoísmo, alquimia interna, sexualidad sagrada, relaciones conscientes, gozo y presencia." },
      { property: "og:title", content: "Podcast del Gozo — Tao Axuni" },
      { property: "og:description", content: "Una conversación para volver a lo esencial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return <ContentPage content={content} />;
}
