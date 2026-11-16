import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.formacion;

export const Route = createFileRoute("/formacion-y-linaje")({
  head: () => ({
    meta: [
      { title: "Mi formación y linaje — Tao Axuni" },
      { name: "description", content: "Formación de Tao Axuni en el Universal Healing Tao System, su linaje con Mantak Chia y Andrew Jan y sus prácticas avanzadas." },
      { property: "og:title", content: "Mi formación y linaje — Tao Axuni" },
      { property: "og:description", content: "El linaje importa: Universal Healing Tao, Mantak Chia, Andrew Jan y prácticas elevadas del Tao." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormationPage,
});

function FormationPage() {
  return <ContentPage content={content} />;
}
