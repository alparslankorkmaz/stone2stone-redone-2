import ClientMarquee from "@/components/ClientMarquee";
import CheckpointPa22 from "@/components/case-studies/CheckpointPa22";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Point Partner Awards 2022",
  description:
    "An action packed in-person awards gala celebrating Check Point’s partners, complete with special guest star Ollie Ollerton, three course meal and physical awards.",
};

export default function page() {
  return (
    <>
      <CheckpointPa22 />
      <ClientMarquee />
    </>
  );
}
