import ClientMarquee from "@/components/ClientMarquee";
import Abacus from "@/components/case-studies/Abacus";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abacus Forged Coins",
  description:
    "Stone2Stone worked with Abacus to create messaging highlighting how working in partnership with newly acquired cyber security business Gotham Security, in-house penetration testing can provide businesses with a comprehensive understanding of their cybersecurity strengths and weaknesses.",
};

export default function page() {
  return (
    <>
      <Abacus />
      <ClientMarquee />
    </>
  );
}
