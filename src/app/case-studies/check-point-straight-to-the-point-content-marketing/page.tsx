import ClientMarquee from "@/components/ClientMarquee";
import CheckpointStraight from "@/components/case-studies/CheckpointStraight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Straight to the Point",
  description:
    "A series of informative social media campaign videos highlighting the benefits of Check Point’s security solutions.",
};

export default function page() {
  return (
    <>
      <CheckpointStraight />
      <ClientMarquee />
    </>
  );
}
