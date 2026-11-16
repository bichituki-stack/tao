import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.sexualidadDiplomado;

export const Route = createFileRoute("/diplomado-sexualidad-sagrada")({
  head: () => ({
    meta: [
      { title: "Diplomado de Sexualidad Sagrada y Plenitud — Tao Axuni" },
      { name: "description", content: "Diplomado con puertas abiertas para explorar la energía vital desde la Sexualidad Sagrada y la alquimia interna taoísta." },
      { property: "og:title", content: "Diplomado de Sexualidad Sagrada y Plenitud — Tao Axuni" },
      { property: "og:description", content: "Despierta tu energía vital y expresa tu pleno potencial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SexualityDiplomaPage,
});

function SexualityDiplomaPage() {
  return <ContentPage content={content} />;
}
