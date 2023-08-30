import ClientMarquee from "@/components/ClientMarquee";
import CheckpointStraight from "@/components/case-studies/CheckpointStraight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Straight to the Point",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <CheckpointStraight />
      <ClientMarquee />
    </>
  );
}
