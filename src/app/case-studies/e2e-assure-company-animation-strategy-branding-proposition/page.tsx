import ClientMarquee from "@/components/ClientMarquee";
import E2eAnim from "@/components/case-studies/E2eAnim";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "e2e Assure Animation",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <E2eAnim />
      <ClientMarquee />
    </>
  );
}
