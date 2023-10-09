import ClientMarquee from "@/components/ClientMarquee";
import TrendmicroAws from "@/components/case-studies/TrendmicroAws";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Micro AWS Event Video",
  description:
    "Stone2Stone collaborated with Trend Micro to develop engaging social media content highlighting, using crafted video, their active participation, as a platinum partner, in the AWS London summit held at Excel.",
};

export default function page() {
  return (
    <>
      <TrendmicroAws />
      <ClientMarquee />
    </>
  );
}
