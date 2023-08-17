export default function page() {
  return (
    <>
      <div className="top-16 lg:top-34 flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Lay a new path in B2B Technology Marketing
            </h1>
            <p className="lg:text-xl lg:w-10/12">
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
          <div className="col-span-2 grid grid-cols-3 gap-2 lg:gap-10 ">
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              50+{" "}
              <span className="text-xs lg:text-xl font-normal">
                Clients worldwide
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              100+{" "}
              <span className="text-xs lg:text-xl font-normal lg:whitespace-nowrap">
                Years combined experience
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              1:53{" "}
              <span className="text-xs lg:text-xl font-normal">
                Average ROI
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
