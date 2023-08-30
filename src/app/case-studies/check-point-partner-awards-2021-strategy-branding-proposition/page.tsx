import CheckpointPa21 from "@/components/case-studies/CheckpointPa21";
import ClientMarquee from "@/components/ClientMarquee";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Partner Awards 2021",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <CheckpointPa21 />
      <ClientMarquee />
    </>
  );
}
