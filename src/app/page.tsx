import ClientMarquee from "@/components/ClientMarquee";
import Hero from "@/components/home/Hero";
import OurBlog from "@/components/home/OurBlog";
import OurWork from "@/components/home/OurWork";
import ProjectHub from "@/components/home/ProjectHub";
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
      <OurWork />
      <ProjectHub />
      <OurBlog />
    </>
  );
}
