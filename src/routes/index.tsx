import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHero } from "@/components/PortfolioHero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mule Bharath — Developer & Designer" },
      { name: "description", content: "Final-year CS student, full-stack developer and Creative Director at Compendium Club. Hyderabad, India." },
    ],
  }),
});

function Index() {
  return <PortfolioHero />;
}

