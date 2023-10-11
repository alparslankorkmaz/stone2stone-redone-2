import ClientMarquee from "@/components/ClientMarquee";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "We specialise in providing tailored solutions for B2B technology marketing. With a deep understanding of the industry, we engage in meticulous strategy development to help our clients achieve their marketing goals.",
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
              Tailored solutions for B2B Technology Marketing{" "}
            </h1>
            <p className="lg:text-2xl">
              With a combination of meticulous strategy development, tailored
              solutions, and a deep understanding of your industry landscape,
              you can ensure every effort is dedicated to delivering measurable
              and substantial ROI.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/what-we-do/what-we-do.webp"
                alt="people working"
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
          Solutions that create lead generation for B2B businesses by
          strategically{" "}
          <span className="text-black">
            positioning your brand to capture the attention of your target
            audience.
          </span>
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20 mt-20">
          {/* STRATEGY */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/strategy.svg" alt="strategy" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Strategy, Branding and Proposition
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Brand Identity Revamp
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Market Segmentation Strategy{" "}
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                New Product Proposition
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Competitior Analysis
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Brand Communication Strategy
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Brand Extension Strategy
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* DIGITAL */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/digital.svg" alt="digital" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Digital Marketing
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Search Engine Optimisation
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Pay-Per-Click
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Content Marketing Strategy
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Social Media Marketing
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Email Marketing Automation
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Conversion Rate Optimisation
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* ABM */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/abm.svg" alt="abm" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">ABM</h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                1:1 campaigns
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                1:many campaign
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Multi-Touch Campaigns
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Sales and Marketing Alignment
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Personalised Outreach
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Measurement and Reporting
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/abm"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* CONTENT */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/content.svg" alt="content" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Content Marketing
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Informative blog posts
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Video content
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Visually appealing infographics
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Tailored content
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Drive brand awareness
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* GAMIFICATION */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/gamification.svg" alt="gamification" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Gamification{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Loyalty programs
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Interactive quizzes
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Customisable experiences
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Foster deeper connections
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Long-lasting brand loyalty
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/gamification"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* MORE */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/what-we-do/dots.svg" alt="dots" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              And much more...{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-9"
            />
            <ul>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Event support
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Stand design
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Print design
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Data research
              </li>
              <li className="my-3 flex text-s2s-gray text-xl lg:text-2xl font-medium">
                <img
                  src="/img/what-we-do/tick.svg"
                  alt="tick"
                  className="me-5"
                />
                Virtual and Physical events
              </li>
            </ul>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/contact-us"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ClientMarquee />
    </>
  );
}
