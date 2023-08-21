import Link from "next/link";
import ClientMarquee from "@/components/ClientMarquee";

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat min-h-screen">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 justify-center items-center p-5 lg:p-16">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-7xl mb-5 font-semibold">
              Gamification for B2B Technology Companies{" "}
            </h1>
            <p className="lg:text-xl ">
              Leverage the inherent human desire for competition, achievement,
              and rewards, a gamification service can unlock new avenues for
              your customer interaction{" "}
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/accordion/gamification.webp"
                alt="gamification"
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
          Create memorable experiences that{" "}
          <span className="text-black">
            inspire and retain customers, and ultimately, driving business
            growth.
          </span>
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20 mt-20">
          {/* Training and Onboarding */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/gamification/training.svg" alt="training" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Training and Onboarding
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              A gamified training program to onboard new employees or enhance
              the skills of existing ones.
              <span className="text-black">
                {" "}
                Create interactive modules, quizzes, and challenges that make
                the learning process engaging and enjoyable.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Customer Loyalty and Rewards */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img
                src="/img/gamification/customerloyalty.svg"
                alt="customerloyalty"
              />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Customer Loyalty and Rewards
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              A gamified customer loyalty program that rewards customers for
              engaging with your brand, making purchases, and referring others.
              <span className="text-black">
                {" "}
                Incorporate points, badges, levels, and special offers to
                encourage repeat business.{" "}
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Sales Incentive Game */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/gamification/sales.svg" alt="sales" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Sales Incentive Game
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              Implement a gamified system to motivate and incentivise your sales
              team.
              <span className="text-black">
                {" "}
                Set up friendly competitions, leaderboards, and rewards to
                encourage higher performance and drive sales targets.
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/"
              >
                Our process
              </Link>
            </div>
          </div>
          {/* Brand Education */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-lg p-7 flex flex-col justify-evenly gap-5">
            {/* ICON & TITLE */}
            <div className="rounded-full p-4 lg:p-7 bg-s2s-purple my-8 w-fit">
              <img src="/img/gamification/brand.svg" alt="brand" />
            </div>
            <h3 className="font-semibold text-2xl lg:text-3xl">
              Brand Education
            </h3>
            {/* DIVIDER */}
            <img
              src="/img/misc/divider.webp"
              alt="divider"
              className="w-full h-[2px] my-6"
            />
            <p className="font-medium text-xl lg:text-2xl text-s2s-gray lg:leading-snug">
              A gamified education game to educate new targets or enhance the
              knowledge of existing ones.
              <span className="text-black">
                {" "}
                Create interactive modules, quizzes, and challenges that make
                the learning process engaging and enjoyable.
              </span>
            </p>
            <div className="my-10">
              <Link
                className="rounded-lg py-3 px-8 text-white bg-s2s-purple w-fit hover:bg-s2s-orange duration-200 text-xl lg:text-2xl"
                href="/"
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
