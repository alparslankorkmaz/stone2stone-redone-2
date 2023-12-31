import ClientMarquee from "@/components/ClientMarquee";
import CMSlider1 from "@/components/what-is-involved/content-marketing/CMSlider1";
import CMSlider2 from "@/components/what-is-involved/content-marketing/CMSlider2";
import CMSlider3 from "@/components/what-is-involved/content-marketing/CMSlider3";
import CMSlider4 from "@/components/what-is-involved/content-marketing/CMSlider4";
import CMSlider5 from "@/components/what-is-involved/content-marketing/CMSlider5";
import OurWorkCM from "@/components/what-is-involved/content-marketing/OurWorkCM";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is involved?",
  description:
    "A Content Marketing project involves various elements such as content creation, strategy development, distribution, and analysis. Here, we address these challenges and provide effective solutions to ensure successful content marketing campaigns.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:h-[45rem]">
        <div className="text-center text-white p-4 lg:px-0 lg:py-16 top-16 lg:top-34 lg:max-w-7xl mx-auto flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-6xl leading-none font-semibold mt-16 lg:mt-24">
            What is involved in a Content Marketing project?{" "}
          </h1>
          <p className="mt-3 lg:mt-10 px-8 lg:px-72 text-sm font-medium lg:text-xl leading-none ">
            Here are some common challenges that may arise during a CM project
            along with how Stone2Stone address them{" "}
          </p>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto">
        {/* CONTENT */}
        <CMSlider1 />
        <CMSlider2 />
        <CMSlider3 />
        <CMSlider4 />
        <CMSlider5 />
      </div>
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl my-10 p-3 lg:p-7 lg:max-w-7xl mx-auto">
        <div className="col-span-10 lg:col-span-3">
          <img
            src="/img/accordion/content.webp"
            className="object-cover rounded-lg  w-full h-44 lg:h-[28rem]"
            alt="content"
          />
        </div>
        <div className="col-span-10 lg:col-span-7 flex flex-col justify-center gap-5">
          <h6 className="font-semibold text-s2s-gray text-3xl lg:text-5xl">
            In <span className="text-black">summary</span>
          </h6>
          <p className="font-medium text-lg lg:text-2xl text-s2s-gray">
            Enhancing your Content Marketing strategy involves addressing
            challenges through
            <span className="text-black">
              {" "}
              audience understanding, consistent content creation, SEO
              optimisation, engagement strategies, measurement, and effective
              distribution.
            </span>{" "}
            By focusing on audience needs, creating valuable content, optimising
            for search visibility, fostering engagement, measuring impact, and
            strategically promoting your content, you can drive meaningful
            results and build a strong brand presence.{" "}
          </p>
          <Link
            href="/contact-us"
            className="text-white font-medium text-lg lg:text-2xl w-fit lg:mt-5 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange duration-200"
          >
            Book a meeting with our Content team
          </Link>
        </div>
      </div>
      <OurWorkCM />
      <ClientMarquee />
    </>
  );
}
