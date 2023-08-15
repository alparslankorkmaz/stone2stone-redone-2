import ClientMarquee from "@/components/ClientMarquee";
import Hero from "@/components/home/Hero";
import PushingTheBoundries from "@/components/home/PushingTheBoundries";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <WhatWeDo />
      <PushingTheBoundries />
    </>
  );
}
