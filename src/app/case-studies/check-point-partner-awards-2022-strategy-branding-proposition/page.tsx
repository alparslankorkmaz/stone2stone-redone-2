import ClientMarquee from "@/components/ClientMarquee";
import CheckpointPa22 from "@/components/case-studies/CheckpointPa22";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Partner Awards 2022",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <CheckpointPa22 />
      <ClientMarquee />
    </>
  );
}
