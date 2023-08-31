import ClientMarquee from "@/components/ClientMarquee";
import SoftwareoneDuet from "@/components/case-studies/SoftwareoneDuet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftwareONE Duet",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <SoftwareoneDuet />
      <ClientMarquee />
    </>
  );
}
