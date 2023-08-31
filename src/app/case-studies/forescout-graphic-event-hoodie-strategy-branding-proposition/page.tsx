import ClientMarquee from "@/components/ClientMarquee";
import ForescoutHoodie from "@/components/case-studies/ForescoutHoodie";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forescout Graphic Event Hoodie",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <ForescoutHoodie />
      <ClientMarquee />
    </>
  );
}
