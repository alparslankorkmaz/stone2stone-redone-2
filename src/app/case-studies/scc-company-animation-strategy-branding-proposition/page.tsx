import ClientMarquee from "@/components/ClientMarquee";
import SccAnimation from "@/components/case-studies/SccAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCC Company Animation",
  description:
    "A short, engaging and informative animation showcasing the benefits of SCC’s services and solutions.",
};

export default function page() {
  return (
    <>
      <SccAnimation />
      <ClientMarquee />
    </>
  );
}
