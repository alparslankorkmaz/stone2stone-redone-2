import ClientMarquee from "@/components/ClientMarquee";
import ForescoutVid from "@/components/case-studies/ForescoutVid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forescout Infosecurity Event Video",
  description:
    "Stone2Stone worked with Forescout to develop engaging social media content highlighting their participation in the UK’s leading cyber security exhibition Infosecurity held at the ExCel in London.",
};

export default function page() {
  return (
    <>
      <ForescoutVid />
      <ClientMarquee />
    </>
  );
}
