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
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:min-h-screen">
        <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24 lg:w-4/5">
            What is involved in a Content Marketing project?{" "}
          </h1>
          <p className="mt-3 lg:mt-10 px-8 lg:px-72 text-sm font-medium lg:text-xl leading-none ">
            Here are some common challenges that may arise during a CM project
            along with how Stone2stone address them{" "}
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <CMSlider1 />
      <CMSlider2 />
      <CMSlider3 />
      <CMSlider4 />
      <CMSlider5 />
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl m-5 lg:m-16 p-3 lg:p-5">
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
            href="/"
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
