import Link from "next/link";

export default function PushingTheBoundries() {
  return (
    <>
      {" "}
      {/* PUSHING THE BOUNDARIES */}
      <div className="p-5 lg:px-20 my-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold my-14">
          <h4 className="text-s2s-gray w-3/4">
            {" "}
            Why you should{" "}
            <span className="text-black">
              continuously push the boundaries of B2B Technology Marketing to
              create leads
            </span>
          </h4>
          <Link
            href="/"
            className="w-fit h-fit mt-5 lg:mt-0 whitespace-nowrap text-white text-base lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
          >
            Work with us
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5 lg:gap-16 items-start">
          <div className="col-span-2 lg:col-span-1">
            <div className="relative rounded-full border-8 text-s2s-orange border-s2s-orange w-fit p-10 lg:p-16 ">
              <span className="text-3xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                1
              </span>
            </div>
            <p className="font-medium mt-5 text-xl lg:text-2xl whitespace-nowrap">
              Competitive <span className="block">Advantage</span>
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative rounded-full border-8 text-black border-black w-fit p-10 lg:p-16 ">
              <span className="text-3xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                2
              </span>
            </div>
            <p className="font-medium mt-5 text-xl lg:text-2xl whitespace-nowrap">
              Enhance your <span className="block">Brand Perception</span>
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative rounded-full border-8 text-s2s-gray border-s2s-gray w-fit p-10 lg:p-16 ">
              <span className="text-3xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                3
              </span>
            </div>
            <p className="font-medium mt-5 text-xl lg:text-2xl whitespace-nowrap">
              Increased <span className="block">Engagement</span>
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative rounded-full border-8 text-s2s-purple border-s2s-purple w-fit p-10 lg:p-16 ">
              <span className="text-3xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                4
              </span>
            </div>
            <p className="font-medium mt-5 text-xl lg:text-2xl whitespace-nowrap">
              Ready to Evolve <span className="block">with the Market</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
