import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageContent } from "@/data/site";

const content = pageContent.abundancia;

export const Route = createFileRoute("/abundancia-recuerda-tus-suenos")({
  head: () => ({
    meta: [
      { title: "Abundancia · Recuerda tus Sueños — Tao Axuni" },
      { name: "description", content: "Un recurso para reconocer tu energía, tu gozo y tu potencial, y volver a aquello que deseas expresar." },
      { property: "og:title", content: "Abundancia · Recuerda tus Sueños — Tao Axuni" },
      { property: "og:description", content: "Recuerda tus sueños y expresa tu pleno potencial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DreamsPage,
});

function DreamsPage() {
  return <ContentPage content={content} />;
}
