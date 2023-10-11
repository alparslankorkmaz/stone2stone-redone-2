import Link from "next/link";
import ClientMarquee from "@/components/ClientMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "In the ever-evolving world of digital marketing, it is crucial for B2B technology companies to leverage current trends, set specific objectives, and implement comprehensive strategies.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center items-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
              Digital Marketing for B2B Companies{" "}
            </h1>
            <p className="lg:text-2xl">
              You need a team of skilled digital marketers that leverage the
              latest trends, tools, and technologies to create a comprehensive
              strategy tailored to your specific objectives.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/accordion/digital.webp"
                alt="digital marketing"
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
          {/* Search Engine Optimisation (SEO) */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/digital-marketing/seo.svg" alt="seo" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Search Engine Optimisation (SEO){" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Conduct a thorough audit of your website's SEO performance,
              including on-page and off-page factors. Develop a
              <span className="text-black">
                {" "}
                comprehensive optimization strategy to improve your website's
                search engine rankings and organic visibility.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Pay-Per-Click (PPC) */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/digital-marketing/ppc.svg" alt="ppc" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Pay-Per-Click (PPC){" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Create and manage a targeted PPC campaign on platforms like Google
              Ads or social media to drive traffic and conversions. This
              includes
              <span className="text-black">
                {" "}
                keyword research, ad copywriting, bid management, and continuous
                performance analysis.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Content Marketing Strategy */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/digital-marketing/contentmarketing.svg"
                alt="content marketing"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Content Marketing Strategy
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Develop a content plan that includes blog posts, articles, videos,
              infographics, and other valuable content to
              <span className="text-black">
                {" "}
                engage your target audience and drive organic traffic.{" "}
              </span>
              Ensure the content is optimised for SEO and shareable on social
              media.{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Social Media Marketing */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/digital-marketing/socialmedia.svg"
                alt="social media"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Social Media Marketing{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Design and execute a social media strategy across your chosen
              platforms. This can include content creation, community
              engagement, influencer partnerships, and performance tracking to
              <span className="text-black">
                {" "}
                gain visibility across all your channels.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Email Marketing Automation  */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/digital-marketing/emailmarketing.svg"
                alt="email marketing"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Email Marketing Automation{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Implement an email marketing automation campaign to{" "}
              <span className="text-black">
                {" "}
                nurture leads, retain customers, and drive conversions.{" "}
              </span>{" "}
              Develop personalised email sequences, segment your audience, and
              track key metrics like open rates and click-through rates.
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Conversion Rate Opitimisation */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/digital-marketing/conversionrate.svg"
                alt="conversion rate"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Conversion Rate Opitimisation{" "}
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Analyse your website's user experience and design to identify
              areas for improvement. Implement A/B testing, user behaviour
              analysis, and site optimisation techniques to{" "}
              <span className="text-black">
                {" "}
                increase the percentage of website visitors who convert into
                customers.
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/digital-marketing/what-is-involved"
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
