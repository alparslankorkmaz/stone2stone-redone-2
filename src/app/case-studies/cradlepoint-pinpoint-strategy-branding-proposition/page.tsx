import ClientMarquee from "@/components/ClientMarquee";
import CradlepointPinpoint from "@/components/case-studies/CradlepointPinpoint";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cradlepoint Pinpoint",
  description:
    "An aesthetically and educationally fulfilling interactive map highlighting Cradlepoint’s successful wireless solutions across Europe.",
};

export default function page() {
  return (
    <>
      <CradlepointPinpoint />
      <ClientMarquee />
    </>
  );
}
