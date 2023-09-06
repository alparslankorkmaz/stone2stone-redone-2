import FilterWork from "@/components/case-studies/FilterWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Our work for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-2xl">
              More than 50 leading technology companies have trusted Stone2Stone
              so far. Learn how our clients, small and large, have grown their
              marketing results and rapidly hit and exceeded their targets.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/case-studies/case-studies.webp"
                alt="people working"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto">
        <FilterWork />
      </div>
    </>
  );
}
