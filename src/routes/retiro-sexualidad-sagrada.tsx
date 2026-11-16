import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.retiroSexualidad;

export const Route = createFileRoute("/retiro-sexualidad-sagrada")({
  head: () => ({
    meta: [
      { title: "Retiro de Sexualidad Sagrada en Oaxaca — Tao Axuni" },
      { name: "description", content: "Retiro presencial de Sexualidad Sagrada en Oaxaca: 29, 30 y 31 de enero. Energía vital, presencia y plenitud." },
      { property: "og:title", content: "Retiro de Sexualidad Sagrada en Oaxaca — Tao Axuni" },
      { property: "og:description", content: "Una inmersión presencial en tu energía vital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SexualityRetreatPage,
});

function SexualityRetreatPage() {
  return <ContentPage content={content} />;
}
