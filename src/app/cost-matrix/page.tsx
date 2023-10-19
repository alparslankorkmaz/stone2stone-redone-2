import Link from "next/link";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
              Our cost of matrix
            </h1>
            <p className="lg:text-2xl">
              Below is a list of types of projects and their costs. If there is
              anything you want to request please contact us to discuss your
              requirements.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/our-clients/our-clients.webp"
                alt="meeting table"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="grid grid-cols-3 gap-10 container max-w-7xl mx-auto my-16">
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-10 text-center items-center justify-center rounded-xl bg-white p-16 h-fit">
          <h3 className="font-bold text-4xl">Print</h3>
          <Link
            href="/cost-matrix/print"
            className="w-fit whitespace-nowrap font-bold text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
          >
            See cost of matrix
          </Link>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-10 text-center items-center justify-center rounded-xl bg-white p-16 h-fit">
          <h3 className="font-bold text-4xl whitespace-nowrap">
            Content & Branding
          </h3>
          <Link
            href="/cost-matrix/content-and-branding"
            className="w-fit whitespace-nowrap font-bold text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
          >
            See cost of matrix
          </Link>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-10 text-center items-center justify-center rounded-xl bg-white p-16 h-fit">
          <h3 className="font-bold text-4xl">Digital</h3>
          <Link
            href="/cost-matrix/digital"
            className="w-fit whitespace-nowrap font-bold text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
          >
            See cost of matrix
          </Link>
        </div>
      </div>
    </>
  );
}
