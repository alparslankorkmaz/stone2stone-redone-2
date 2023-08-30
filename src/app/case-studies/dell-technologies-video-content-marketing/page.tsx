import ClientMarquee from "@/components/ClientMarquee";
import DellVideo from "@/components/case-studies/DellVideo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dell Technologies Video",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <DellVideo />
      <ClientMarquee />
    </>
  );
}
