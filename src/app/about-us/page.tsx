"use client";
import Script from "next/script";
export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="col-span-2 lg:col-span-1 text-white">
            <h1 className="text-4xl lg:text-7xl my-5 font-semibold">
              Lay a new path in B2B Technology Marketing
            </h1>
            <p className="text-xl w-10/12">
              Move away from the repetitive cycle that limits your creativity
              and reduces your core strenghts. Commit to pushing the boundaries
              of B2B marketing and unleash your potential.
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className=" lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/about-us/about-us.webp"
                alt="bird's eye view of a curvy road"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
