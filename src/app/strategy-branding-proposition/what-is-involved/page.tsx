import ClientMarquee from "@/components/ClientMarquee";
import OurWorkSBP from "@/components/what-is-involved/sbp/OurWorkSBP";
import SBPSlider1 from "@/components/what-is-involved/sbp/SBPSlider1";
import SBPSlider2 from "@/components/what-is-involved/sbp/SBPSlider2";
import SBPSlider3 from "@/components/what-is-involved/sbp/SBPSlider3";
import SBPSlider4 from "@/components/what-is-involved/sbp/SBPSlider4";
import SBPSlider5 from "@/components/what-is-involved/sbp/SBPSlider5";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:min-h-screen">
        <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24 lg:w-3/5">
            What is involved in a Brand, Strategy and Proposition project?{" "}
          </h1>
          <p className="mt-3 lg:mt-5 px-8 lg:px-60 text-sm leading-none font-medium lg:text-xl">
            Here are some common challenges that may arise during a Strategy,
            Branding and Proposition project along with how Stone2stone address
            them{" "}
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <SBPSlider1 />
      <SBPSlider2 />
      <SBPSlider3 />
      <SBPSlider4 />
      <SBPSlider5 />
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl m-5 lg:m-16 p-3 lg:p-5">
        <div className="col-span-10 lg:col-span-3">
          <img
            src="/img/accordion/strategy.webp"
            className="object-cover rounded-lg  w-full h-44 object-top lg:object-left lg:h-[28rem]"
            alt="strategy"
          />
        </div>
        <div className="col-span-10 lg:col-span-7 flex flex-col justify-center gap-5">
          <h6 className="font-semibold text-s2s-gray text-3xl lg:text-5xl">
            In <span className="text-black">summary</span>
          </h6>
          <p className="font-medium text-lg lg:text-2xl text-s2s-gray">
            A successful Strategy, Branding, and Proposition project involves
            <span className="text-black">
              {" "}
              aligning the company's strategic direction, brand identity, and
              value proposition to create a compelling and coherent market
              presence.{" "}
            </span>
            By addressing challenges through thorough analysis, collaboration,
            and strategic implementation, you can develop a strong brand that
            resonates with the target audience and helps the company achieve its
            business goals.
          </p>
          <Link
            href="/"
            className="text-white font-medium text-lg lg:text-2xl w-fit lg:mt-5 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange duration-200"
          >
            Book a meeting with our Branding team
          </Link>
        </div>
      </div>
      <OurWorkSBP />
      <ClientMarquee />
    </>
  );
}
