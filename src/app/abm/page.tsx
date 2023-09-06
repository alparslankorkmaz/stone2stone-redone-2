import Link from "next/link";
import ClientMarquee from "@/components/ClientMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABM",
  description: "Digital Marketing Agency",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
              ABM for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-2xl">
              Focus on personalised and tailored marketing efforts that are
              directed at specific key accounts or a few target companies.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/accordion/abm.webp"
                alt="abm"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="my-16 p-5 lg:py-20 lg:px-0 lg:max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-s2s-gray text-3xl lg:text-5xl font-semibold lg:w-10/12 lg:leading-tight">
          Ensure that your brand will gain{" "}
          <span className="text-black">
            {" "}
            maximum visibility and engagement across all your digital platforms.{" "}
          </span>
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20 mt-20">
          {/* 1:1 ABM */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/abm/1-1abm.svg" alt="1-1abm" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">1:1 ABM</h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Identify and prioritise high-value target accounts based on{" "}
              <span className="text-black">
                {" "}
                factors such as revenue potential, fit with your ideal customer
                profile, and strategic importance.{" "}
              </span>
              This involves data analysis and market research.
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* 1:Many ABM */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/abm/1-manyabm.svg" alt="1-manyabm" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">1:Many ABM</h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Develop
              <span className="text-black">
                {" "}
                tailored content and messaging that speaks to the needs and
                challenges of specific targets.{" "}
              </span>
              This may include creating industry-specific case studies,
              white-papers, videos, and more that resonate with each account's
              decision-makers.{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Multi-Touch Campaigns */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/abm/multitouch.svg" alt="multi touch" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Multi-Touch Campaigns
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Design and execute multi-touch ABM campaigns that span various
              channels, such as email, social media, targeted advertising, and
              direct mail.
              <span className="text-black">
                {" "}
                Ensure consistent messaging and coordinated touch-points to
                engage accounts.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Sales and Marketing Alignment */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/abm/salesandmarketing.svg"
                alt="sails and marketing"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Sales and Marketing Alignment
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Facilitate better collaboration between sales and marketing teams
              by establishing clear communication channels, shared goals, and
              lead handoff processes.
              <span className="text-black">
                {" "}
                This aims to ensure seamless coordination between both teams to
                maximise ABM effectiveness.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Personalised Outreach  */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/abm/personalised.svg" alt="personalised" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Personalised Outreach
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Craft outreach strategies for each target account, involving
              direct engagement with key stakeholders through emails, social
              interactions, and relevant content.
              <span className="text-black">
                {" "}
                This approach helps build meaningful relationships and drive
                account engagement.{" "}
              </span>{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Measurement and Reporting */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/abm/measurement.svg" alt="measurement" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Measurement and Reporting{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Develop a comprehensive system to measure the effectiveness of
              your ABM efforts.
              <span className="text-black">
                {" "}
                Track metrics such as engagement rates, pipeline contribution,
                deal velocity, and revenue generated from target accounts.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ClientMarquee />
    </>
  );
}
