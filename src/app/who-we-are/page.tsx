import ClientMarquee from "@/components/ClientMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "We are a dedicated team specialised in B2B technology marketing, helping businesses unleash their potential and achieve their marketing goals.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Unleash potential through lead generation
            </h1>
            <p className="lg:text-2xl">
              Stone2Stone has already developed a vast catalogue of treasured
              clients, some old, many new. As a result, we too have had to
              expand. With a dedicated team of 9, we continue to grow as
              creatives and as a business, increasing in office size four times.
              We are showing no signs of slowing down.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/about-us/team.webp"
                alt="team photo"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* TEAM */}
      <div className="justify-center grid grid-cols-5 my-16 p-5 lg:px-0 lg:py-20 gap-5 lg:gap-16 lg:max-w-7xl mx-auto">
        <h2 className="col-span-5 lg:col-span-2 text-3xl lg:text-5xl font-semibold text-s2s-gray lg:leading-tight">
          The team behind our{" "}
          <span className="text-black">exceptional results.</span>{" "}
        </h2>
        <div className="col-span-5  lg:col-span-3 lg:text-2xl">
          <p className="text-s2s-gray mb-5">
            A great workplace isn't defined by its location or size. It's the
            people who make the real difference. We believe that exceptional
            individuals drive exceptional results, leading to even greater
            success.
            <span className="text-black">
              {" "}
              That's why we're committed to working only with the best.{" "}
            </span>
          </p>
        </div>
      </div>
      {/* TEAM GRID */}
      <div className="p-5 lg:px-0 lg:py-16 grid grid-cols-6 gap-5 lg:gap-20 justify-center items-center lg:max-w-7xl mx-auto">
        {/* DAVID */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/david.webp"
              alt="david"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  David <span className="block">Nossiter</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">Director</p>
              </div>
            </div>
          </div>
        </div>
        {/* SAM */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/sam.webp"
              alt="sam"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Sam <span className="block">Graham</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">
                  {" "}
                  Creative Director
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* DAVID H */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/david-h.webp"
              alt="david h"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  David <span className="block">Hartley</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">
                  Concept and Copywriting
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* DONNA */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/donna.webp"
              alt="donna"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Donna <span className="block">Smith</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">Account Manager</p>
              </div>
            </div>
          </div>
        </div>
        {/* ASLAN */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/aslan.webp"
              alt="aslan"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Aslan <span className="block">Korkmaz</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        {/* GRAINNE */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/grainne.webp"
              alt="grainne"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Grainne <span className="block">Devine-Gill</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">
                  SEO and Social Media
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* JOHN */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/john.webp"
              alt="john"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  John <span className="block">Holden</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">
                  Video and Content Creation
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ALISTAIR */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/alistair.webp"
              alt="alistair"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Alistair <span className="block">Shrimpling</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* LIESKE */}
        <div className="col-span-3 lg:col-span-2 ">
          <div className="relative group ">
            <img
              src="/img/who-we-are/lieske.webp"
              alt="lieske"
              className="w-full rounded-xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
              <div className="text-white flex flex-col lg:h-full text-center justify-center items-center">
                <p className="my-5 font-semibold text-xl lg:text-5xl">
                  Lieske <span className="block">Tombokan</span>
                </p>
                <p className="lg:my-5 text-sm lg:text-2xl">Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientMarquee />
    </>
  );
}
