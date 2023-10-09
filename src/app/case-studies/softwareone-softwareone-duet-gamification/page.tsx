import ClientMarquee from "@/components/ClientMarquee";
import SoftwareoneDuet from "@/components/case-studies/SoftwareoneDuet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftwareONE Duet",
  description:
    "A dating app style platform with a variety of questions, designed to match users with the cyber security vendor best suited to solve their individual issues.",
};

export default function page() {
  return (
    <>
      <SoftwareoneDuet />
      <ClientMarquee />
    </>
  );
}
