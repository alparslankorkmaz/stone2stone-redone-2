import ClientMarquee from "@/components/ClientMarquee";
import NetallyWifi from "@/components/case-studies/NetallyWifi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netally Wifi Wonder Person",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      <NetallyWifi />
      <ClientMarquee />
    </>
  );
}
