import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.gozo;

export const Route = createFileRoute("/gozo-del-corazon")({
  head: () => ({
    meta: [
      { title: "Gozo del Corazón — Tao Axuni" },
      { name: "description", content: "Una experiencia dedicada al corazón, la presencia y el gozo. Taller presencial en Colombia el 18 de abril de 2027." },
      { property: "og:title", content: "Gozo del Corazón — Tao Axuni" },
      { property: "og:description", content: "Recuerda el gozo que ya habita en ti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HeartJoyPage,
});

function HeartJoyPage() {
  return <ContentPage content={content} />;
}
