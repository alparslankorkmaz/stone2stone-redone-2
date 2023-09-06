import ClientMarquee from "@/components/ClientMarquee";
import DMSlider1 from "@/components/what-is-involved/digital-marketing/DMSlider1";
import DMSlider2 from "@/components/what-is-involved/digital-marketing/DMSlider2";
import DMSlider3 from "@/components/what-is-involved/digital-marketing/DMSlider3";
import DMSlider4 from "@/components/what-is-involved/digital-marketing/DMSlider4";
import DMSlider5 from "@/components/what-is-involved/digital-marketing/DMSlider5";
import OurWorkDM from "@/components/what-is-involved/digital-marketing/OurWorkDM";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is involved",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:h-[45rem]">
        <div className="text-center text-white p-4 lg:px-0 lg:py-16 top-16 lg:top-34 lg:max-w-7xl mx-auto flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24">
            What is involved in a Digital Marketing project?{" "}
          </h1>
          <p className="mt-3 lg:mt-5 px-8 lg:px-60 text-sm leading-none font-medium lg:text-2xl">
            Here are some common challenges that may arise during a Digital
            Marketing project along with how Stone2stone address them{" "}
          </p>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto">
        {/* CONTENT */}
        <DMSlider1 />
        <DMSlider2 />
        <DMSlider3 />
        <DMSlider4 />
        <DMSlider5 />
      </div>
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl my-10 p-3 lg:p-7 lg:max-w-7xl mx-auto">
        <div className="col-span-10 lg:col-span-3">
          <img
            src="/img/accordion/digital.webp"
            className="object-cover rounded-lg  w-full h-44 lg:h-[28rem]"
            alt="digital"
          />
        </div>
        <div className="col-span-10 lg:col-span-7 flex flex-col justify-center gap-5">
          <h6 className="font-semibold text-s2s-gray text-3xl lg:text-5xl">
            In <span className="text-black">summary</span>
          </h6>
          <p className="font-medium text-lg lg:text-2xl text-s2s-gray">
            A successful Digital Marketing project involves addressing
            challenges through
            <span className="text-black">
              {" "}
              strategic planning, data-driven decision-making, and continuous
              adaptation.
            </span>{" "}
            By{" "}
            <span className="text-black">
              understanding your audience, creating compelling content,
              coordinating across channels, measuring performance, adapting to
              changes, and ensuring data privacy
            </span>
            , you can enhance your digital marketing strategy to effectively
            engage and convert your target audience.{" "}
          </p>
          <Link
            href="/contact-us"
            className="text-white font-medium text-lg lg:text-2xl w-fit lg:mt-5 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange duration-200"
          >
            Book a meeting with our Digital team
          </Link>
        </div>
      </div>
      <OurWorkDM />
      <ClientMarquee />
    </>
  );
}
