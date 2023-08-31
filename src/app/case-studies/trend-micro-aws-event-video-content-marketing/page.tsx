import ClientMarquee from "@/components/ClientMarquee";
import TrendmicroAws from "@/components/case-studies/TrendmicroAws";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Micro AWS Event Video",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <TrendmicroAws />
      <ClientMarquee />
    </>
  );
}
