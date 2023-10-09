import ClientMarquee from "@/components/ClientMarquee";
import NetallyWifi from "@/components/case-studies/NetallyWifi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netally Wifi Wonder Person",
  description:
    "Personalised comic book strips were created using the likeness of senior Telco targets to promote the netAlly handheld device, including bespoke posters and landing pages.",
};

export default function page() {
  return (
    <>
      <NetallyWifi />
      <ClientMarquee />
    </>
  );
}
