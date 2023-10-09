import ClientMarquee from "@/components/ClientMarquee";
import Csi12Days from "@/components/case-studies/Csi12Days";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSI 12 Days of Christmas",
  description:
    "An easy-to-use interactive Christmas calendar informing customers about CSI and IBM’s solutions through the magic of Santa’s Workshop.",
};

export default function page() {
  return (
    <>
      <Csi12Days />
      <ClientMarquee />
    </>
  );
}
