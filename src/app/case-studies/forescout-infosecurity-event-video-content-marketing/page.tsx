import ClientMarquee from "@/components/ClientMarquee";
import ForescoutVid from "@/components/case-studies/ForescoutVid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forescout Infosecurity Event Video",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <ForescoutVid />
      <ClientMarquee />
    </>
  );
}
