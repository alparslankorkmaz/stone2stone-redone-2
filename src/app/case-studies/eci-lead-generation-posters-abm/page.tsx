import ClientMarquee from "@/components/ClientMarquee";
import EciPosters from "@/components/case-studies/EciPosters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECI Lead Generation posters",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <EciPosters />
      <ClientMarquee />
    </>
  );
}
