import ClientMarquee from "@/components/ClientMarquee";
import Link from "next/link";
import type { Metadata } from "next";
import { CgInfinity } from "react-icons/cg";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Stone2Stone is a Lead Generation company that believes in unleashing the creativity and potential of individuals to pave new paths. Learn more about our innovative solutions and how we are pushing the boundaries of what is possible.",
};

export default function page() {
  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">
              Lay a new path in B2B lead generation
            </h1>
            <p className="lg:text-2xl">
              Move away from the repetitive cycle that restricts your creativity
              and reduces your core strengths. Commit to pushing the limits of
              lead generation and unleash your potential.
            </p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className=" lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/about-us/about-us.webp"
                alt="bird's eye view of a curvy road"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
          {/* STATS */}
          <div className="col-span-2 grid grid-cols-3 gap-2 lg:gap-10">
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              50+{" "}
              <span className="text-xs lg:text-xl font-normal">
                Clients worldwide
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              100+{" "}
              <span className="text-xs lg:text-xl font-normal lg:whitespace-nowrap">
                Years combined experience
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl lg:text-8xl p-3 lg:py-10 lg:px-20 text-center text-white font-semibold bg-black bg-opacity-50 rounded-xl">
              <CgInfinity />
              <span className="text-xs lg:text-xl font-normal">
                Leads Generated
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* FORGING */}
      <div className="bg-white rounded-lg justify-center grid grid-cols-5 p-5 lg:p-20 my-5 lg:my-20 lg:max-w-7xl mx-auto gap-5 lg:gap-16">
        <h2 className="col-span-5 lg:col-span-2 text-3xl lg:text-5xl font-semibold text-s2s-gray lg:leading-tight">
          Forging meaningful connections that{" "}
          <span className="text-black">
            elevate your brand above the competition.
          </span>{" "}
        </h2>
        <div className="col-span-5 lg:col-span-3 lg:text-2xl">
          <p className="text-black mb-5">
            Do you want to deliver cutting edge lead generation solutions that
            propel your business to new heights? Are you struggling to get the
            results?{" "}
            <span className="text-s2s-gray">
              {" "}
              You need a team of skilled marketers that leverage the latest
              trends, tools, and technologies to create a comprehensive strategy
              tailored to your specific objectives.
            </span>
          </p>
          <p className="text-black">
            Stone2Stone lays a new path forward,{" "}
            <span className="text-s2s-gray">
              {" "}
              moving away from the repetitive cycle that limits your creativity
              and reduces your core strengths.
            </span>
          </p>
        </div>
      </div>
      {/* TEAM */}
      <div className="bg-hub_bg bg-center bg-cover py-8 px-5 lg:p-12 my-5 lg:my-20 lg:max-w-7xl mx-auto rounded-xl">
        <div className="grid grid-cols-5 justify-center items-center gap-5">
          <div className="text-white col-span-5 lg:col-span-3 ">
            <h3 className="text-3xl lg:text-5xl font-semibold mb-10">
              Who are our team
            </h3>
            <p className="mb-5 lg:text-2xl">
              We are a dynamic hub where innovation meets strategy to power your
              companies growth. With a relentless passion for the intricate
              world of technology, we are your dedicated partners in carving a
              niche for your brand.
            </p>
            <p className="mb-5 lg:text-2xl">
              With over 100 years combined experience, we're poised to guide
              your brand through the digital maze, ensuring your solutions not
              only reach the right eyes and ears but also strike the perfect
              chord.
            </p>
            <div className="mt-10 mb-5 lg:mb-0">
              <Link
                href="/who-we-are"
                className="w-fit text-white lg:text-2xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-7 rounded-xl"
              >
                Meet the team
              </Link>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[38rem] lg:w-[25rem]">
              <img
                src="/img/about-us/team.webp"
                alt="bird's eye view of a curvy road"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CLIENTS */}
      <div className="bg-white rounded-lg justify-center grid grid-cols-5 p-5 lg:p-20 my-5 lg:my-20 lg:max-w-7xl mx-auto gap-5 lg:gap-16">
        <h4 className="col-span-5 lg:col-span-2 text-3xl lg:text-5xl font-semibold text-s2s-gray lg:leading-tight">
          Clients we <span className="text-black">generate leads for.</span>{" "}
        </h4>
        <div className="col-span-5 lg:col-span-3 lg:text-2xl">
          <p className="text-s2s-gray mb-5">
            Take a look through our clients to see how we are
            <span className="text-black">
              {" "}
              helping B2B technology businesses and more generate leads, push
              limits, unleash dynamic potential, and forge meaningful
              connections.{" "}
            </span>
          </p>
          <p className="text-s2s-gray">
            Our promise is to elevate your brand above the competition.{" "}
          </p>
          <div className="mt-10 mb-5 lg:mb-0">
            <Link
              href="/our-clients"
              className="w-fit text-white lg:text-2xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-7 rounded-xl"
            >
              See our clients
            </Link>
          </div>
        </div>
      </div>
      {/* ROI */}
      <div className="bg-white rounded-lg justify-center grid grid-cols-2 p-5 lg:p-16 my-5 lg:my-20 lg:max-w-7xl mx-auto gap-5 lg:gap-16">
        <div className="col-span-2 lg:col-span-1">
          <h5 className="text-3xl lg:text-5xl font-semibold text-s2s-gray mb-5 lg:mb-10 lg:leading-tight">
            How we work with clients to{" "}
            <span className="text-black">boost ROI and visibility</span>{" "}
          </h5>
          <div className="lg:text-2xl">
            <p className="text-s2s-gray mb-10">
              Through{" "}
              <span className="text-black">
                meticulous strategy development, tailored solutions, and a deep
                understanding of your industry landscape,{" "}
              </span>
              we ensure every effort is dedicated to delivering measurable and
              substantial ROI.
            </p>
            <p className="text-s2s-gray">
              Simultaneously, our focus on elevating brand visibility involves{" "}
              <span className="text-black">
                leveraging innovative marketing channels, crafting compelling
                narratives, and strategically positioning your brand to capture
                the attention of your target audience.{" "}
              </span>
              By seamlessly integrating these two facets, we drive impactful
              outcomes that resonate across the business spectrum, fostering
              sustained growth and heightened brand recognition.{" "}
            </p>
            <div className="mt-16 mb-5">
              <Link
                href="/case-studies"
                className="w-fit text-white lg:text-2xl font-semibold bg-s2s-purple hover:bg-s2s-orange duration-200 py-2 px-7 rounded-xl"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <img src="/img/about-us/work-graph.webp" alt="work graph" />
        </div>
      </div>
      <ClientMarquee />
    </>
  );
}
