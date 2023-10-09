import ClientMarquee from "@/components/ClientMarquee";
import Hero from "@/components/home/Hero";
import OurBlog from "@/components/home/OurBlog";
import OurWork from "@/components/home/OurWork";
import ProjectHub from "@/components/home/ProjectHub";
import PushingTheBoundaries from "@/components/home/PushingTheBoundaries";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Stone2stone",
  description:
    "Looking for a B2B digital marketing agency that truly understands your business and specializes in technology? Look no further. Our expert team is here to help you achieve your marketing goals and drive measurable results.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <WhatWeDo />
      <PushingTheBoundaries />
      <OurWork />
      <ProjectHub />
      <OurBlog />
    </>
  );
}
