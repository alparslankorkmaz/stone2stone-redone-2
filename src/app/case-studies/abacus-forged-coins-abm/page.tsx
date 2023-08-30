import ClientMarquee from "@/components/ClientMarquee";
import Abacus from "@/components/case-studies/Abacus";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abacus Forged Coins",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <Abacus />
      <ClientMarquee />
    </>
  );
}
