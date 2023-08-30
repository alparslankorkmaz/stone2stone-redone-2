import ClientMarquee from "@/components/ClientMarquee";
import CradlepointPinpoint from "@/components/case-studies/CradlepointPinpoint";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cradlepoint Pinpoint",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <CradlepointPinpoint />
      <ClientMarquee />
    </>
  );
}
