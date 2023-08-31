import ClientMarquee from "@/components/ClientMarquee";
import E92PlusCalc from "@/components/case-studies/E92PlusCalc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "e92Plus MDR calculator",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <E92PlusCalc />
      <ClientMarquee />
    </>
  );
}
