import ClientMarquee from "@/components/ClientMarquee";
import ABMSlider1 from "@/components/what-is-involved/abm/ABMSlider1";
import ABMSlider2 from "@/components/what-is-involved/abm/ABMSlider2";
import ABMSlider3 from "@/components/what-is-involved/abm/ABMSlider3";
import ABMSlider4 from "@/components/what-is-involved/abm/ABMSlider4";
import ABMSlider5 from "@/components/what-is-involved/abm/ABMSlider5";
import OurWorkABM from "@/components/what-is-involved/abm/OurWorkABM";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:min-h-screen">
        <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24 lg:w-3/5">
            What is involved in an ABM project?{" "}
          </h1>
          <p className="mt-3 lg:mt-10 px-8 lg:px-72 text-sm leading-none font-medium lg:text-xl">
            Here are some common challenges that may arise during a ABM project
            along with how Stone2stone address them{" "}
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <ABMSlider1 />
      <ABMSlider2 />
      <ABMSlider3 />
      <ABMSlider4 />
      <ABMSlider5 />
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl m-5 lg:m-16 p-3 lg:p-5">
        <div className="col-span-10 lg:col-span-3">
          <img
            src="/img/accordion/abm.webp"
            className="object-cover rounded-lg  w-full h-44 lg:h-[28rem]"
            alt="abm"
          />
        </div>
        <div className="col-span-10 lg:col-span-7 flex flex-col justify-center gap-5">
          <h6 className="font-semibold text-s2s-gray text-3xl lg:text-5xl">
            In <span className="text-black">summary</span>
          </h6>
          <p className="font-medium text-lg lg:text-2xl text-s2s-gray">
            Optimising an Account-Based Marketing campaign involves{" "}
            <span className="text-black">
              {" "}
              overcoming challenges through strategic collaboration,
              personalised content creation, multi-touchpoint engagement,
              alignment between sales and marketing, and data-driven
              measurement.
            </span>{" "}
            By focusing on the right target accounts, delivering personalised
            experiences, coordinating interactions, fostering alignment, and
            demonstrating measurable ROI, you can enhance your ABM strategy and
            drive meaningful results.
          </p>
          <Link
            href="/"
            className="text-white font-medium text-lg lg:text-2xl w-fit lg:mt-5 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange duration-200"
          >
            Book a meeting with our ABM team
          </Link>
        </div>
      </div>
      <OurWorkABM />
      <ClientMarquee />
    </>
  );
}
