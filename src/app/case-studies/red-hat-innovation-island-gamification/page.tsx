import ClientMarquee from "@/components/ClientMarquee";
import InnovationIsland from "@/components/case-studies/InnovationIsland";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Hat Innovation Island",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <InnovationIsland />
      <ClientMarquee />
    </>
  );
}
