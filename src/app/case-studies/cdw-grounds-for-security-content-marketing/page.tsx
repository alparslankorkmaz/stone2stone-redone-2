import ClientMarquee from "@/components/ClientMarquee";
import CdwGrounds from "@/components/case-studies/CdwGrounds";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDW Grounds for security",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <CdwGrounds />
      <ClientMarquee />
    </>
  );
}
