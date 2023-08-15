import ClientMarquee from "@/components/ClientMarquee";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <WhatWeDo />
    </>
  );
}
