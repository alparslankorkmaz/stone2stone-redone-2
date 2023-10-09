import ClientMarquee from "@/components/ClientMarquee";
import InnovationIsland from "@/components/case-studies/InnovationIsland";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Hat Innovation Island",
  description:
    "Stone2Stone worked with SCC and Red Hat to create Innovation Island. An interactive platform that allows SCC and Red Hat to educate, inform and market their products and partnership in an innovative way.",
};

export default function page() {
  return (
    <>
      <InnovationIsland />
      <ClientMarquee />
    </>
  );
}
