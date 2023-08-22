import ClientMarquee from "@/components/ClientMarquee";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Strategy, Branding and Proposition for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-xl ">
              Your strategic approach must combine meticulous market analysis,
              customer insights, and competitor research to craft a tailored
              plan for your brand's growth. It's about creating a distinct
              identity that resonates with your target audience.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/accordion/strategy.webp"
                alt="man in a meeting"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="my-16 p-5 lg:py-20 lg:px-16">
        {/* TITLE */}
        <h2 className="text-s2s-gray text-3xl lg:text-5xl font-semibold lg:w-10/12 lg:leading-tight">
          Collaborate with Stone2stone to develop a
          <span className="text-black">
            {" "}
            compelling brand story and visuals that capture the essence of your
            business.
          </span>
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20 mt-20">
          {/* BRAND IDENTITY REVAMP */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/brandidentity.svg"
                alt="brandidentity"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Brand Identity Revamp
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Reevaluating and updating the visual elements of your brand, such
              as logo, colours, typography, and imagery. This aims to{" "}
              <span className="text-black">
                {" "}
                give your brand a fresh, modern look that aligns with your
                company's values and resonates with your target audience.
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* MARKET SEG */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/market.svg"
                alt="digital"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Market Segmentation Strategy{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              This involves identifying distinct customer segments and tailoring
              your branding and value proposition to each group. This project
              helps you{" "}
              <span className="text-black">
                {" "}
                better understand your customers' needs and preferences, leading
                to more effective marketing and communication.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* NEW PRODUCT PROPOSITION */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/product.svg"
                alt="product"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              New Product Proposition
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              This focuses on creating a{" "}
              <span className="text-black">
                {" "}
                compelling value proposition that clearly articulates the unique
                benefits and advantages products offer{" "}
              </span>
              compared to competitors. This includes messaging, positioning, and
              identifying the target market.
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* COMPETITOR ANALYSIS */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/competitoranalysis.svg"
                alt="competitoranalysis"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Competitor Analysis{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Analysing your competitors' branding and propositions to identify
              gaps and opportunities for differentiation. You can then develop a
              strategy to
              <span className="text-black">
                {" "}
                highlight your brand's unique strengths and advantages, setting
                you apart in the market.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* BRAND COMMUNICATION STRATEGY  */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/brandcommunication.svg"
                alt="brandcommunication"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Brand Communication Strategy{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Crafting a comprehensive plan for how your brand will{" "}
              <span className="text-black">
                {" "}
                communicate its values, messaging, and offerings to the target
                audience across various channels.{" "}
              </span>
              It encompasses content strategy, social media planning, PR
              initiatives, and more.{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* BRAND EXTENSION STRATEGY */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/strategy-branding-proposition/brandextension.svg"
                alt="brandextension"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Brand Extension Strategy{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Considering expanding your brand into new markets or product
              categories involves{" "}
              <span className="text-black">
                {" "}
                developing a strategy to ensure a seamless extension of your
                brand's identity and proposition.{" "}
              </span>
              It addresses the specific needs and preferences of the new
              audience.{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/strategy-branding-proposition/what-is-involved"
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
