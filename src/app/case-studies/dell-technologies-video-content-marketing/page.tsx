import ClientMarquee from "@/components/ClientMarquee";
import DellVideo from "@/components/case-studies/DellVideo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dell Technologies Video",
  description:
    "An educational, long form promotional video explaining the support CDW and Dell Technologies can offer customers evolving into a hybrid working environment.",
};

export default function page() {
  return (
    <>
      <DellVideo />
      <ClientMarquee />
    </>
  );
}
