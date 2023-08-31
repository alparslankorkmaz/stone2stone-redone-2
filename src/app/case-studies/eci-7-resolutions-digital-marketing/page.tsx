import ClientMarquee from "@/components/ClientMarquee";
import Eci7Res from "@/components/case-studies/Eci7Res";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECI 7 Resolutions",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <Eci7Res />
      <ClientMarquee />
    </>
  );
}
