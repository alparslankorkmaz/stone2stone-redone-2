import CheckpointPa21 from "@/components/case-studies/CheckpointPa21";
import ClientMarquee from "@/components/ClientMarquee";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Partner Awards 2021",
  description:
    "A completely virtual awards ceremony, carefully curated with presenters including special guest Ollie Ollerton, complete with live feed style acceptance speeches and physical awards design, production and delivery.",
};

export default function page() {
  return (
    <>
      <CheckpointPa21 />
      <ClientMarquee />
    </>
  );
}
