import ClientMarquee from "@/components/ClientMarquee";
import GSlider1 from "@/components/what-is-involved/gamification/GSlider1";
import GSlider2 from "@/components/what-is-involved/gamification/GSlider2";
import GSlider3 from "@/components/what-is-involved/gamification/GSlider3";
import GSlider4 from "@/components/what-is-involved/gamification/GSlider4";
import GSlider5 from "@/components/what-is-involved/gamification/GSlider5";
import OurWorkG from "@/components/what-is-involved/gamification/OurWorkG";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="relative bg-hero_bg bg-cover bg-bottom bg-no-repeat pb-10 lg:min-h-screen">
        <div className="text-center text-white p-4 lg:p-16 top-16 lg:top-34 flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-7xl leading-none font-semibold mt-16 lg:mt-24 lg:w-4/5">
            What is involved in a Gamification project?{" "}
          </h1>
          <p className="mt-3 lg:mt-10 px-8 lg:px-72 text-sm font-medium lg:text-xl leading-none ">
            Here are some common challenges that may arise during a Gamification
            project along with how Stone2stone address them{" "}
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <GSlider1 />
      <GSlider2 />
      <GSlider3 />
      <GSlider4 />
      <GSlider5 />
      {/* SUMMARY */}
      <div className="grid grid-cols-10 gap-5 lg:gap-10 bg-white rounded-xl m-5 lg:m-16 p-3 lg:p-5">
        <div className="col-span-10 lg:col-span-3">
          <img
            src="/img/accordion/gamification.webp"
            className="object-cover rounded-lg  w-full h-44 lg:h-[28rem]"
            alt="gamification"
          />
        </div>
        <div className="col-span-10 lg:col-span-7 flex flex-col justify-center gap-5">
          <h6 className="font-semibold text-s2s-gray text-3xl lg:text-5xl">
            In <span className="text-black">summary</span>
          </h6>
          <p className="font-medium text-lg lg:text-2xl text-s2s-gray">
            Implementing a successful Gamification strategy involves addressing
            challenges through
            <span className="text-black">
              {" "}
              user-centred design, clear alignment with objectives, effective
              communication, sustained engagement strategies, and a commitment
              to inclusivity and accessibility.
            </span>{" "}
            By creating engaging and meaningful gamified experiences that
            resonate with users, tracking performance metrics, and continuously
            refining your approach, you can enhance user engagement and drive
            positive outcomes for your business.
          </p>
          <Link
            href="/"
            className="text-white font-medium text-lg lg:text-2xl w-fit lg:mt-5 p-3 bg-s2s-purple rounded-lg hover:bg-s2s-orange duration-200"
          >
            Book a meeting with our Gamification team
          </Link>
        </div>
      </div>
      <OurWorkG />
      <ClientMarquee />
    </>
  );
}
