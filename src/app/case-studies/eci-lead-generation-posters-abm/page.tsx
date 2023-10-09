import ClientMarquee from "@/components/ClientMarquee";
import EciPosters from "@/components/case-studies/EciPosters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECI Lead Generation posters",
  description:
    "2 separate Highly engaging, bold campaigns made up of niche posters sent to targeted personnel on behalf of ForcePoint and ECI.",
};

export default function page() {
  return (
    <>
      <EciPosters />
      <ClientMarquee />
    </>
  );
}
