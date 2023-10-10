import ClientMarquee from "@/components/ClientMarquee";
import CyCoffee from "@/components/case-studies/CyCoffee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CyCoffee",
  description:
    "A series of 6 virtual coffee morning-inspired videos, which promote Cynet’s solutions and position them as thought leaders on cybersecurity.",
};

export default function page() {
  return (
    <>
      <CyCoffee />
      <ClientMarquee />
    </>
  );
}
