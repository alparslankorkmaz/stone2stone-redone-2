import ClientMarquee from "@/components/ClientMarquee";
import ForescoutHoodie from "@/components/case-studies/ForescoutHoodie";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forescout Graphic Event Hoodie",
  description:
    "Stone2Stone worked with Forescout to create some striking event apparel that would be recognisable whilst displaying visual information on Forescout’s services.",
};

export default function page() {
  return (
    <>
      <ForescoutHoodie />
      <ClientMarquee />
    </>
  );
}
