import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.enfoque;

export const Route = createFileRoute("/enfoque")({
  head: () => ({
    meta: [
      { title: "Mi enfoque — Tao Axuni" },
      { name: "description", content: "Taoísmo, alquimia interna, sexualidad sagrada y relaciones conscientes como caminos de gozo, presencia y energía." },
      { property: "og:title", content: "Mi enfoque — Tao Axuni" },
      { property: "og:description", content: "Una práctica integral para transformar el conocimiento en experiencia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return <ContentPage content={content} />;
}
