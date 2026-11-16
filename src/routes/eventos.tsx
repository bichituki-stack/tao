import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.eventos;

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Próximos eventos y experiencias — Tao Axuni" },
      { name: "description", content: "Calendario de retiros, diplomados, talleres y convivencias con Tao Axuni: Oscuridad a la Luz, Trascendencia, Sexualidad Sagrada y Gozo." },
      { property: "og:title", content: "Próximos eventos y experiencias — Tao Axuni" },
      { property: "og:description", content: "Elige el retiro, diplomado o taller que resuena contigo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return <ContentPage content={content} />;
}
