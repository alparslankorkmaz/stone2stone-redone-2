import Link from "next/link";
import ClientMarquee from "@/components/ClientMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing",
  description:
    "Content marketing is essential for B2B technology companies to establish thought leadership and attract potential customers. Discover how to leverage talented content creators to produce high-quality and relevant content that resonates with your target audience.",
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
              Content Marketing for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-2xl">
              By using Stone2stone you have access to talented content creators
              and strategists who craft high-quality, relevant, and shareable
              content that resonates with your target audience.{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/accordion/content.webp"
                alt="content marketing"
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
          Tailor your content to
          <span className="text-black">
            {" "}
            align seamlessly with your brand's message and values.{" "}
          </span>
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20 mt-20">
          {/* Content Strategy Development */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/content-marketing/contentstrategy.svg"
                alt="content strategy"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Content Strategy Development
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Create a comprehensive content strategy that aligns with your
              business goals, target audience, and brand identity. This involves
              <span className="text-black">
                {" "}
                defining content pillars, formats, and distribution channels to
                guide your content creation efforts.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Editorial Calendar Creation */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/content-marketing/editorial.svg" alt="editorial" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Editorial Calendar Creation
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Develop an editorial calendar outlining the topics, themes, and
              publication schedule for your content. This helps ensure
              consistent and timely content creation while
              <span className="text-black">
                {" "}
                addressing the needs and interests of your audience.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Blogging and Article Series */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/content-marketing/blogging.svg" alt="blogging" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Blogging and Article Series
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Launch a series of blog posts or articles that .{" "}
              <span className="text-black">
                {" "}
                provide valuable insights, information, and solutions related to
                your industry or niche.
              </span>
              This involves research, writing, editing, and optimisation for
              search engines
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Visual Content Creation */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/content-marketing/visual.svg" alt="visual" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Visual Content Creation
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Produce visually appealing content such as infographics, videos,
              slideshows, and interactive content. Visual content
              <span className="text-black">
                {" "}
                can help explain complex concepts, engage your audience, and
                increase share-ability.
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Thought Leadership Campaign  */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/content-marketing/thoughtleadership.svg"
                alt="thoughtleadership"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Thought Leadership Campaign
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Position your brand or key individuals within your company as
              industry thought leaders. Create and promote
              <span className="text-black">
                {" "}
                in-depth, authoritative content that showcases your expertise
                and insights on relevant topics.{" "}
              </span>{" "}
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* User-Generated Content (UGC) */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/content-marketing/ugc.svg" alt="ugc" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              User-Generated Content (UGC)
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Engage your audience by encouraging them to create and share their
              own content related to your brand or products.
              <span className="text-black">
                {" "}
                This involves running contests, soliciting testimonials, and
                curating user-generated content for distribution.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/content-marketing/what-is-involved"
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
