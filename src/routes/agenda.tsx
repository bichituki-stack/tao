import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.agenda;

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda una conversación con Tao Axuni" },
      { name: "description", content: "Descubre qué camino resuena contigo: Gozo del Corazón, diplomados de profundización o retiros de transformación." },
      { property: "og:title", content: "Conversemos sobre tu camino — Tao Axuni" },
      { property: "og:description", content: "Encuentra el punto desde el que te gustaría comenzar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CallPage,
});

function CallPage() {
  return <ContentPage content={content} />;
}
