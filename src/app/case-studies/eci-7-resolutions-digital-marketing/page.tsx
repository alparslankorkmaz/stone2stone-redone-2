import ClientMarquee from "@/components/ClientMarquee";
import Eci7Res from "@/components/case-studies/Eci7Res";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECI 7 Resolutions",
  description:
    "A series of videos and corresponding ‘resolutions’ informing viewers about how ECI’s services can transform their business in a visually stimulating environment. New Year, better security!",
};

export default function page() {
  return (
    <>
      <Eci7Res />
      <ClientMarquee />
    </>
  );
}
