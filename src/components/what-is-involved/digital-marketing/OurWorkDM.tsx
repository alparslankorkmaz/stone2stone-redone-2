import Link from "next/link";

export default function OurWorkDM() {
  return (
    <>
      {" "}
      <div className="p-5 lg:px-20 my-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center text-2xl lg:text-5xl font-semibold my-14 lg:leading-tight">
          <h4 className="text-black w-1/2">
            {" "}
            Our work <span className="text-s2s-gray">in Digital Marketing</span>
          </h4>
          <Link
            href="/"
            className="w-fit h-fit mt-5 lg:mt-0 whitespace-nowrap text-white text-base lg:text-xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-4 rounded-xl"
          >
            See more
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {/* LINK 1 */}
          <Link href="/" className="col-span-3 lg:col-span-1 ">
            <div className="relative group ">
              <img
                src="/img/our-work/forescout.webp"
                alt="Forescout event"
                className="w-full rounded-xl"
              />
              <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
                <div className="text-white flex flex-col h-full text-center justify-center items-center">
                  <img
                    src="/img/our-work/forescoutlogo.webp"
                    alt="forescout logo"
                    className="my-5 w-2/3"
                  />
                  <p className="my-5 font-semibold text-5xl">
                    Infosecurity <span className="block">Video Content</span>
                  </p>
                  <p className="my-5 text-2xl">Content Marketing</p>
                </div>
              </div>
            </div>
          </Link>
          {/* LINK 2 */}
          <Link href="/" className="col-span-3 lg:col-span-1 ">
            <div className="relative group ">
              <img
                src="/img/our-work/2.webp"
                alt="Forescout event"
                className="w-full rounded-xl"
              />
              <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
                <div className="text-white flex flex-col h-full text-center justify-center items-center">
                  <img
                    src="/img/our-work/forescoutlogo.webp"
                    alt="forescout logo"
                    className="my-5 w-2/3"
                  />
                  <p className="my-5 font-semibold text-5xl">
                    Infosecurity <span className="block">Video Content</span>
                  </p>
                  <p className="my-5 text-2xl">Content Marketing</p>
                </div>
              </div>
            </div>
          </Link>
          {/* LINK 3 */}
          <Link href="/" className="col-span-3 lg:col-span-1 ">
            <div className="relative group ">
              <img
                src="/img/our-work/3.webp"
                alt="Forescout event"
                className="w-full rounded-xl"
              />
              <div className="flex justify-center items-center opacity-0 bg-[url('/img/our-work/hover.webp')] rounded-xl bg-center bg-cover ease-in-out duration-300 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300">
                <div className="text-white flex flex-col h-full text-center justify-center items-center">
                  <img
                    src="/img/our-work/forescoutlogo.webp"
                    alt="forescout logo"
                    className="my-5 w-2/3"
                  />
                  <p className="my-5 font-semibold text-5xl">
                    Infosecurity <span className="block">Video Content</span>
                  </p>
                  <p className="my-5 text-2xl">Content Marketing</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
