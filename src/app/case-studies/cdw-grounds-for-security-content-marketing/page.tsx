import ClientMarquee from "@/components/ClientMarquee";
import CdwGrounds from "@/components/case-studies/CdwGrounds";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDW Grounds for security",
  description:
    "A 7 week coffee break series on cyber security for CDW. Comprised of a dedicated portal filled with white papers, videos and Q&As.",
};

export default function page() {
  return (
    <>
      <CdwGrounds />
      <ClientMarquee />
    </>
  );
}
