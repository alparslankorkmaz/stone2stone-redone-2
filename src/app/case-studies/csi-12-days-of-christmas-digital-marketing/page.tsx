import ClientMarquee from "@/components/ClientMarquee";
import Csi12Days from "@/components/case-studies/Csi12Days";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSI 12 Days of Christmas",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <Csi12Days />
      <ClientMarquee />
    </>
  );
}
