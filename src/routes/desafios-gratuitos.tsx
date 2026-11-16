import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.desafios;

export const Route = createFileRoute("/desafios-gratuitos")({
  head: () => ({
    meta: [
      { title: "Desafíos y recursos gratuitos — Tao Axuni" },
      { name: "description", content: "Desafíos, cursos y contenido gratuito para conocer el trabajo de Tao Axuni: gozo, presencia, energía y relaciones conscientes." },
      { property: "og:title", content: "Desafíos y recursos gratuitos — Tao Axuni" },
      { property: "og:description", content: "Conoce este trabajo antes de dar el siguiente paso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FreeChallengesPage,
});

function FreeChallengesPage() {
  return <ContentPage content={content} />;
}
