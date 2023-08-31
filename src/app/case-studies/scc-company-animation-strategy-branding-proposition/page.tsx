import ClientMarquee from "@/components/ClientMarquee";
import SccAnimation from "@/components/case-studies/SccAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCC Company Animation",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <SccAnimation />
      <ClientMarquee />
    </>
  );
}
