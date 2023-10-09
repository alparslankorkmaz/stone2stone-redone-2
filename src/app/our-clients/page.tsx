import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our clients",
  description:
    "Our list of clients includes a diverse range of brands that we have collaborated with to elevate their business and engage their target audience. Discover the success stories behind our partnerships.",
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
              Elevating brands across the B2B Marketing world{" "}
            </h1>
            <p className="lg:text-2xl">
              Although our journey began in the technology sector, our path has
              evolved far beyond those origins. Today, we proudly collaborate
              with diverse B2B companies, helping them connect with their target
              audience and engage in impactful conversations.{" "}
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
      <div className="justify-center grid grid-cols-5 my-10 p-5 lg:px-0 lg:py-16 gap-5 lg:gap-16 lg:max-w-7xl mx-auto">
        <h2 className="col-span-5 lg:col-span-3 text-3xl lg:text-5xl font-semibold text-black lg:leading-tight">
          Technology companies{" "}
          <span className="text-s2s-gray block">we have worked with</span>{" "}
        </h2>
      </div>
      {/* TECH LOGOS */}
      <div className="grid grid-cols-9 lg:grid-cols-10 gap-10 lg:gap-5 justify-center items-center p-5 lg:px-0 lg:max-w-7xl mx-auto">
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/abacus.svg"
            alt="abacus"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/armis.svg"
            alt="armis"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/avanan.svg"
            alt="avanan"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/cradlepoint.svg"
            alt="cradlepoint"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/cdw.svg"
            alt="cdw"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/checkpoint.svg"
            alt="checkpoint"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/csi.svg"
            alt="csi"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/cynet.svg"
            alt="cynet"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/e2eassure.svg"
            alt="e2eassure"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/e92plus.svg"
            alt="e92plus"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/eci.svg"
            alt="eci"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/forcepoint.svg"
            alt="forcepoint"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/philips.svg"
            alt="philips"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/redhat.svg"
            alt="redhat"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/scc.svg"
            alt="scc"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/softwareone.svg"
            alt="softwareone"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/stackoverflow.svg"
            alt="stackoverflow"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/trendmicro.svg"
            alt="trendmicro"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/tech/turbonomic.svg"
            alt="turbonomic"
          />
        </div>
      </div>
      <div className="justify-center grid grid-cols-5 my-10 p-5 lg:px-0 lg:py-16 gap-5 lg:gap-16 lg:max-w-7xl mx-auto">
        <h2 className="col-span-5 lg:col-span-3 text-3xl lg:text-5xl font-semibold text-black">
          Other B2B Businesses{" "}
          <span className="text-s2s-gray block">we have worked with</span>{" "}
        </h2>
      </div>
      {/* LOGOS */}
      <div className="grid grid-cols-9 lg:grid-cols-10 gap-10 lg:gap-5 justify-center items-center p-5 lg:px-0 lg:max-w-7xl mx-auto">
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/feedfactors.svg"
            alt="feedfactors"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/genesiscapital.svg"
            alt="genesiscapital"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/iep.svg"
            alt="iep"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/mactolife.svg"
            alt="mactolife"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/marcol.svg"
            alt="marcol"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/pdxhealth.svg"
            alt="pdxhealth"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/prx.svg"
            alt="prx"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/red14plastics.svg"
            alt="red14plastics"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/reglex.svg"
            alt="reglex"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
          <img
            className="aspect-3/2 object-contain"
            src="/img/our-clients/other/vetdx.svg"
            alt="vetdx"
          />
        </div>
      </div>
    </>
  );
}
